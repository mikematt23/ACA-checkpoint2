const mysql = require("mysql")

let pool = mysql.createPool({
  connectionLimit : 200,
  host : '104.197.72.217',
  user:'root',
  password:'Assassin55',
  database:'mikesMobileOil'
})

module.exports = pool