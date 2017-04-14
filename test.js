var index = require('./index.js')

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

