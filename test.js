var nodeQQBot = require('./index.js')

const conig = {
    group_uid: 534210089
}

var Player = []
var role = []
var willDied = []
var Died = []




nodeQQBot.run("http://127.0.0.1:2333", 3000, function (bot) {
    bot.get_user_info(function (data) {
        console.log(data)
    })

    bot.on("receive_message", function (message) {
        // Do Something...
        if (message.type == "group_message" && message.group_uid == conig.group_uid) {
            if (message.content == "开始游戏") {
                console.log("[Bot]收到开始游戏请求。")
                if (Player.indexOf(message.sender_uid) != -1) {
                    console.log("OK")
                } else {
                    Player.push(message.sender_uid)
                    bot.send_group_message(conig.group_uid,"@"+message.sender+" 加入游戏成功！！当前游戏人数"+Player.length.toString()+"/7")
                }
            }
        }
    })


})



