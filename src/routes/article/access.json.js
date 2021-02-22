const axios = require('axios')
const log4js = require('log4js')
const logger = log4js.getLogger();

log4js.configure({
  appenders: { cheese: { type: "file", filename: `${process.env.HOME}/article-access.log` } },
  categories: { default: { appenders: ["cheese"], level: "info" } }
});

export async function get(req, res) {
  const { title } = req.query

  // 获取访问者 IP
  const { data } = await axios.get('https://pv.sohu.com/cityjson%3Fie=utf-8')
  let returnCitySN = {}

  try {
    const splitStr = data.split(/\s*=\s*/)[1]

    returnCitySN = JSON.parse(splitStr.replace(';', ''))
  } catch (e) {}

  if (returnCitySN.cip) {
    logger.info(`【${returnCitySN.cip}】${title}`)
  }

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(returnCitySN));
}
