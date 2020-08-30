const userApi = require('./api/userApi');
// const fs = require('fs');
// const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
/* 
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
      next();
});
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 后端api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3000, () => {
  console.log('success listen at port:3000......');
});
