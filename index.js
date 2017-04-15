var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/', function (req, res) {
    console.log(req.body)
    if (req.body.post_type == "receive_message" && config.event.receive_message != null) {
        config.event.receive_message(req.body)
    } else if (req.body.post_type == "login" && config.event.login != null) {
        config.event.login(req.body)
    } else if (req.body.post_type == "stop" && config.event.stop != null) {
        config.event.stop(req.body)
    }  else if (req.body.post_type == "sate_change" && config.event.sate_change != null) {
        config.event.sate_change(req.body)
    }  else if (req.body.post_type == "input_qrcode" && config.event.input_qrcode != null) {
        config.event.input_qrcode(req.body)
    } else if (req.body.post_type == "new_group" && config.event.new_group != null) {
        config.event.new_group(req.body)
    } else if (req.body.post_type == "new_discuss" && config.event.new_discuss != null) {
        config.event.new_discuss(req.body)
    } else if (req.body.post_type == "new_friend" && config.event.new_friend != null) {
        config.event.new_friend(req.body)
    } else if (req.body.post_type == "new_group_member" && config.event.new_group_member != null) {
        config.event.new_group_member(req.body)
    } else if (req.body.post_type == "new_discuss_member" && config.event.new_discuss_member != null) {
        config.event.new_discuss_member(req.body)
    } else if (req.body.post_type == "group_property_change" && config.event.group_property_change != null) {
        config.event.group_property_change(req.body)
    } else if (req.body.post_type == "group_member_property_change" && config.event.group_member_property_change != null) {
        config.event.group_member_property_change(req.body)
    } else if (req.body.post_type == "friend_property_change" && config.event.friend_property_change != null) {
        config.event.friend_property_change(req.body)
    } else if (req.body.post_type == "user_property_change" && config.event.user_property_change != null) {
        config.event.user_property_change(req.body)
    } 
})
var request = require('request')

var config = {
    send_url: '',
    post_port: 0,
    message_callback: undefined,
    event: {
        receive_message: null,
        login: null,
        stop: null,
        sate_change: null,
        input_qrcode: null,
        new_group: null,
        new_discuss: null,
        new_friend: null,
        new_group_member: null,
        new_discuss_member: null,
        lose_group: null,
        lose_disuss: null,
        lose_firend: null,
        new_group_member: null,
        new_discuss_member: null,
        group_property_change: null,
        group_member_property_change: null,
        friend_property_change: null,
        user_property_change: null

    }
}

var mainObj = {
    get_user_info: function (callback) {
        request(config.send_url + "/openqq/get_user_info", function (e, s, b) {
            if (e == null) {
                callback(JSON.parse(b))
            } else {
                throw new Error("与服务器通讯失败 " + e)
            }
        })
    },
    get_friend_info: function (callback) {
        request(config.send_url + "/openqq/get_friend_info", function (e, s, b) {
            if (e == null) {
                callback(JSON.parse(b))
            } else {
                throw new Error("与服务器通讯失败 " + e)
            }
        })
    },
    get_group_info: function (callback) {
        request(config.send_url + "/openqq/get_group_info", function (e, s, b) {
            if (e == null) {
                callback(JSON.parse(b))
            } else {
                throw new Error("与服务器通讯失败 " + e)
            }
        })
    },
    get_group_basic_info: function (callback) {
        request(config.send_url + "/openqq/get_group_basic_info", function (e, s, b) {
            if (e == null) {
                if (callback) {
                    callback(JSON.parse(b))
                }
            } else {
                throw new Error("与服务器通讯失败 " + e)
            }
        })
    },
    get_discuss_info: function (callback) {
        request(config.send_url + "/openqq/get_discuss_info", function (e, s, b) {
            if (e == null) {
                callback(JSON.parse(b))
            } else {
                throw new Error("与服务器通讯失败 " + e)
            }
        })
    },
    send_friend_message: function (uid, content, callback) {
        request(encodeURI(config.send_url + "/openqq/send_friend_message?uid=" + uid.toString() + "&content=" + content), function (e, s, b) {
            if (e == null) {
                if (callback) {
                    callback(JSON.parse(b))
                }
            } else {
                throw new Error("与服务器通讯失败 " + e)
            }
        })
    },
    send_group_message: function (uid, content, callback) {
        request(encodeURI(config.send_url + "/openqq/send_group_message?uid=" + uid.toString() + "&content=" + content), function (e, s, b) {
            if (e == null) {
                if (callback) {
                    callback(JSON.parse(b))
                }
            } else {
                throw new Error("与服务器通讯失败 " + e)
            }
        })
    },
    send_discuss_message: function (id, content, callback) {
        request(encodeURI(config.send_url + "/openqq/send_discuss_message?id=" + id.toString() + "&content=" + content), function (e, s, b) {
            if (e == null) {
                if (callback) {
                    callback(JSON.parse(b))
                }
            } else {
                throw new Error("与服务器通讯失败 " + e)
            }
        })
    },
    on: function (event, callback) {
        if (event == "receive_message") {
            config.event.receive_message = callback
        } else if (event == "login") {
            config.event.login = callback
        } else if (event == "stop") {
            config.event.stop = callback
        } else if (event == "sate_change") {
            config.event.sate_change = callback
        } else if (event == "input_qrcode") {
            config.event.input_qrcode = callback
        } else if (event == "new_group") {
            config.event.new_group = callback
        } else if (event == "new_discuss") {
            config.event.new_discuss = callback
        } else if (event == "new_friend") {
            config.event.new_friend = callback
        } else if (event == "new_group_member") {
            config.event.new_group_member = callback
        } else if (event == "new_discuss_member") {
            config.event.new_discuss_member = callback
        } else if (event == "group_property_change") {
            config.event.group_property_change = callback
        } else  if (event == "group_member_property_change") {
            config.event.group_member_property_change = callback
        } else if (event == "friend_property_change") {
            config.event.friend_property_change = callback
        } else if (event == "user_property_change") {
            config.event.user_property_change = callback
        }
    }
}



function start(send_url, post_port, callback) {
    config.send_url = send_url
    config.post_port = post_port
    

    try {




        app.listen(3000, function () {
            console.log("[NodeBot]机器人已经开始服务。")
            callback(mainObj)
        })



    } catch (err) {
        throw new Error(err)
    }

    return mainObj
}



module.exports.run = start