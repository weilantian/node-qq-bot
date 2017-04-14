# NodeQQBot
用Node愉快的写QQ机器人

其实这是一个客户端框架，与[Mojo-Webqq](https://github.com/sjdy521/Mojo-Webqq)搭配使用（没听说过的话建议先去看看）

首先你需要写一个Perl脚本(https://github.com/sjdy521/Mojo-Webqq)

```
#!/usr/bin/env perl
 use Mojo::Webqq;
 my ($host,$port,$post_api);
 
 $host = "0.0.0.0"; #发送消息接口监听地址，没有特殊需要请不要修改
 $port = 2333;      #发送消息接口监听端口，修改为自己希望监听的端口
 $post_api = 'http://127.0.0.1:3000';  #接收到的消息上报接口，如果不需要接收消息上报，可以删除或注释此行
 
 my $client = Mojo::Webqq->new();
 $client->load("ShowMsg");
 $client->load("Openqq",data=>{listen=>[{host=>$host,port=>$port}], post_api=>$post_api, post_event_list => ['login','stop','state_change','input_qrcode','new_group','new_friend','new_group_member','lose_group','lose_friend','lose_group_member']});
 $client->run();
```
。。。不会也没关系，具体参照[Mojo-Webqq]

---

然后。。在你的js脚本中引入这个库

```
var nodeQQBot = require('NodeQQBot')
```

接着。。。
```


var post_api = ""
//Mojo-Webqq设置的事件端口
var post_port = 2333
//Mojo-Webqq设置的发送消息端口

index.start("http://127.0.0.1:2333", 3000, function (bot) {
    bot.get_user_info(function (data) {
        console.log(data)
    })

    bot.on("receive_message", function (res) {
        // Do Something...
        bot.send_friend_message(res.sender_uid, "你说了" + res.content, function (res) {
            console.log("发送结果：", res)
        })
    })


})


```

是不是非常的酷？

本项目正在建设。。。做好了就出来码文档。。。