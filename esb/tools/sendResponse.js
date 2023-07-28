const sendResponse = (res, status, msg, data) => {
  return res.status( status ).send({
    status,
    msg,
    data,
  })
}

module.exports = {
  sendResponse,
}
