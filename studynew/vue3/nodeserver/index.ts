
import express,{Express,Router,Request, Response, NextFunction} from "express";
import axios, { AxiosResponse } from "axios";
const app:Express = express()
const router:Router = express.Router()
app.all("*", (req:Request,res:Response, next:NextFunction) => {
 res.header("Access-Control-Allow-Origin", "*")
 next()
})
app.use("/api", router)
router.get("/list", async(req:Request,res:Response) => {
  const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,cityStatis,provinceCompare')
  res.json({
    data: result.data
  })
})
app.listen(9000, () => {
  console.log("Server is running on localhost:9000")
})