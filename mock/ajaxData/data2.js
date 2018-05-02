// 可以export一数组，或者直接一对象
module.exports = [{
  path: '/data21',
  method: 'get',
  response: function (req, res) {
    return {
      "code": 0,
      "data": {
        "sex": "女",
        "phone": "18888282828",
        "age": "21"
      }
    }
  }
},
{
  path: '/data22',
  method: 'get',
  response: function (req, res) {
    return {
      "code": 0,
      "data": {
        "sex": "女",
        "phone": "18888282828",
        "age": "22"
      }
    }
  }
}]