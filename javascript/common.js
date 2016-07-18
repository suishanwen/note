function getQueryString(queryString, name) {
    var reg = new RegExp("(^|&?)" + name + "=([^&]*)(&|$)", "i");
    var r = queryString.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2])
    }
    return null;
}

function notify(title, body) {
    if (Notification.permission === "granted") {
        return new Notification(title, {
            body: body,
            icon: "http://42.96.207.122/note/assets/img/icon.png"
        });
    }
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}