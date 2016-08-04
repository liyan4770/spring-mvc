/**
 * Created by wangqiang on 2015/5/15.
 */
//获取cookie值
function readCookie(name) {
    var cookieValue = "";
    var search = name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) end = document.cookie.length;
            cookieValue = unescape(document.cookie.substring(offset, end))
        }
    }

    return cookieValue;
}

//保存cookie值
function writeCookie(name, value, hours, escp) {
    var expire = "";
    if (hours != null) {
        expire = new Date((new Date()).getTime() + hours * 3600000);
        expire = "; expires=" + expire.toGMTString();
    }
    if (escp == "True") {
        document.cookie = name + "=" + value + expire;
    } else {
        document.cookie = name + "=" + escape(value) + expire;
    }
}

