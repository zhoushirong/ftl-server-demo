// 可以export一数组，或者直接一对象
module.exports = [{
  path: '/data1',
  method: 'get',
  response: function (req, res) {
    return {
      "code": 0,
      "data": {
        "sex": "男",
        "phone": "18888282828",
        "age": "26"
      }
    }
  }
}]