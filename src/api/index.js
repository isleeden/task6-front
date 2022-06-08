import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export class Service {
  static getData = ({ region, seed, limit, page }) => {
    return api.get(`/${region}`, { params: { seed, limit, page } });
  };

  static getCsv = ({region, seed, count}) => {
    return api.get(`/csv`, { params: { seed, count, region } });
  }
}
export default api;
