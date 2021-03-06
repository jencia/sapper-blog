const axios = require('axios')
const log4js = require('log4js')
const logger = log4js.getLogger();

log4js.configure({
  appenders: { cheese: { type: "file", filename: `${process.env.HOME}/article-access.log` } },
  categories: { default: { appenders: ["cheese"], level: "info" } }
});

function getClientIp (req) {
  return req.headers['x-forwarded-for'] ||  // 判断是否有反向代理 IP
  req.connection.remoteAddress ||           // 判断 connection 的远程 IP
  req.socket.remoteAddress ||               // 判断后端的 socket 的 IP
  req.connection.socket.remoteAddress;
}

export async function get(req, res) {
  const { title } = req.query
  const ip = getClientIp(req)

  logger.info((ip ? `【${ip}】` : '') + title)
  res.end();
}
