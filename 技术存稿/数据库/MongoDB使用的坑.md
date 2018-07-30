1. 启动与关闭db服务
2. 客户端连接板服务
3. 启动服务时失败
4. 连接服务时失败
5. 将MongoDB配置成系统服务
mongod --bind_ip 0.0.0.0 --logpath C:\MongoDB\data\logs\mongo.log
 --logappend --dbpath C:\MongoDB\data\db --port 27017 --serviceName "MongoDB" --
serviceDisplayName "MongoDB" --install