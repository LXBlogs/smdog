var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(account,password) values(?,?)'
  }
};

module.exports = sqlMap;
