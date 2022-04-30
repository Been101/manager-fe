bin/  目录下
mongo // 客户端创建命令 创建数据库 创建集合

mongod // 服务端

mongod.cfg // 配置文件  window 下会自动生成配置文件， mac 下需要创建 mongod.conf 后缀是不一样的

net:
  bindIp: 127.0.0.1 // 部署到服务器上后， 需要绑定 ip 暴露出去供客户端访问



// 启动 mongod 服务
```shell
mongod --config 'xxx\bin\mongod.cfg'  // 但是这种情况一关 cmd 命令窗口， 服务就关掉了
```

// 注册 MongoDB 服务   在计算机管理、服务和应用程序 中可以看到这个服务
```shell
mongod --config "xxxbin\mongod.cfg" --serviceName "MongoDB" --install
```

mongo
  - 集合  collection          表 Table
  - 文档 document             行Row    
  - field                     列 Col
  - 对象 ID （ObjectId）      主键 Primary Key


shell 命令操作数据库
- 创建数据库  use demo
- 查看数据库   show dbs
- 删除数据库   db.dropDatabase()  // 需先切换到当前数字库，否则有可能删掉默认数据库