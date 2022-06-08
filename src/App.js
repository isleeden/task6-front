import { Box, Container } from "@mui/material";
import { useRef, useState } from "react";
import { Service } from "./api";
import "./App.css";
import Controls from "./components/Controls";
import DataTable from "./components/DataTable";
import { regions } from "./consts";
import useScroll from "./hooks/useScroll";

function App() {
  const [params, setParams] = useState({
    region: regions[0],
    seed: "",
    errors: 0,
  });
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const handleSubmit = async () => {
    const response = await getData({ limit: 20, page: 0 });
    setPage(2);
    setData(response?.data);
  };

  const getCsv = async () => {
    if (data.length === 0) {
      return;
    }
    const response = await Service.getCsv({
      region: params.region,
      seed: params.seed,
      count: page * 10,
    });
    downloadCsv(response.data);
  };

  const downloadCsv = (csv) => {
    const hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = "data.csv";
    hiddenElement.click();
  };

  const parentRef = useRef();
  const childRef = useRef();

  const getData = async ({ limit, page }) => {
    return await Service.getData({
      ...params,
      limit,
      page,
    });
  };

  const getDataOnScroll = async () => {
    if (data.length === 0) {
      return;
    }
    const response = await getData({ limit: 10, page });
    if (response.data) {
      setPage(page + 1);
      const responseData = response.data;
      setData([...data, ...responseData]);
    }
  };

  useScroll(childRef, getDataOnScroll);

  return (
    <div className="App" ref={parentRef}>
      <Container fixed>
        <Box sx={{ mx: "auto" }}>
          <Controls
            params={params}
            setParams={setParams}
            onSubmit={handleSubmit}
            onGetCsv={getCsv}
          />
          <DataTable data={data} />
          <div ref={childRef} style={{ height: "100px" }}></div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
