import axios from "axios";
const service = axios.create({
  baseURL: "http://localhost:9000"
})
export const getApiList = () => {
  return service.get("/api/list").then((res) => {
    console.log(res)
    return res.data
  })
}