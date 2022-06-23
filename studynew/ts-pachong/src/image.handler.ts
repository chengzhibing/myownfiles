import superagent from 'superagent';
import cheerio from 'cheerio';
const path = require('path');
const fs = require('fs');
const word: string = '猫咪';
const imgUrlReg = /"objURL":"(.*?)",/g;
const titleReg = /"fromPageTitle":"(.*?)",/g;
//定义请求头参数
const headers = {
  Accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  Connection: 'keep-alive',
  'Cache-Control': 'max-age=0',
  'sec-ch-ua':
    '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36',
};
//定义爬虫类
class Clrowller {
  private neUrl =
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fthumb150%2F005MTxpcgy1fke4rdbpx7j306h0a875z.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655779268&t=ad706cfeaaa3438ddd50ee807d5d9b66"';
  private url = `http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=${encodeURIComponent(
    word
  )}`;

  //获取服务器返回的html数据
  async getRawHtml() {
    const result = await superagent
      .get(this.url)
      .set('Accept', headers['Accept'])
      .set('Cache-Control', headers['Cache-Control'])
      .set('Accept-Encoding', headers['Accept-Encoding'])
      .set('Accept-Language', headers['Accept-Language'])
      .set('Connection', headers['Connection'])
      .set('sec-ch-ua', headers['sec-ch-ua'])
      .set('User-Agent', headers['User-Agent']);
    // console.log(result.text);
    return result.text;
  }
  //创建目录
  makeAssetsDir(assetsDir: string) {
    const fullPath = path.resolve(__dirname, assetsDir);
    if (fs.existsSync(fullPath)) {
      return false;
    }
    fs.mkdirSync(fullPath);
  }
  //下载资源保存到本地
  downloadAsset(url: string, name: string, assetsDir: string) {
    return new Promise((resolve, reject) => {
      const fullPath = path.join(__dirname, assetsDir, name);
      console.log(fullPath);
      superagent.get(url).end((err, res) => {
        if (err) {
          return reject(err);
        }
        fs.writeFileSync(fullPath, res.body, 'binary', (err: any) => {
          if (err) {
            return reject(err);
          }
          return resolve(void 0);
        });
      });
    });
  }
  //根据正则匹配返回匹配到的字符串列表
  getImgAndTitleList(htmlText: string, imgOrTitleReg: RegExp) {
    const imgOrTitleMatches = htmlText.match(imgOrTitleReg) || [];
    const imgUrlsOrTitleList = imgOrTitleMatches.map((eachUrlUnFormat) => {
      const eachImgUrlFormated = eachUrlUnFormat.match(/:"(.*?)",/g);
      return RegExp.$1;
    });
    return imgUrlsOrTitleList;
  }
  //构造函数
  constructor() {}
}
////////////////////////
//实例化对象
const clrowller = new Clrowller();
//实例化的时候请求获取dom结构
clrowller.getRawHtml().then((htmlText) => {
  //获取到图片的路径和对应的title
  const imgUrlList = clrowller.getImgAndTitleList(htmlText, imgUrlReg);
  console.log(imgUrlList);
  const titleList = clrowller
    .getImgAndTitleList(htmlText, titleReg)
    .map((eachVal) => {
      return eachVal
        .replace('<strong>', '')
        .replace('<\\/strong>', '')
        .replace(/[\?\!\.\#\:]/g, '-');
    });
  //将图片路径和title组合到一块
  const imgUrlAndTitleList = imgUrlList.map((imgUrl, index) => {
    return {
      imgUrl: imgUrl,
      title: titleList[index],
    };
  });
  //创建文件夹
  clrowller.makeAssetsDir('images');
  //请求图片资源
  imgUrlAndTitleList.map((item, index) => {
    let houzui: string = 'png';
    if (/.jpg/.test(item.imgUrl)) {
      houzui = 'jpg';
    }
    if (/.jpeg/.test(item.imgUrl)) {
      houzui = 'jpeg';
    }
    if (/.png/.test(item.imgUrl)) {
      houzui = 'png';
    }
    clrowller.downloadAsset(
      item.imgUrl,
      `${index}-${item.title}.${houzui}`,
      'images'
    );
  });
  console.log(titleList);
});
