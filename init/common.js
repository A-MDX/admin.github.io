
// 核心 url
// var API_URL = "http://madx.free.ngrok.cc/wechat/initMe/";
var API_URL = "http://39.108.79.64/wechat/initMe/";
// var API_URL = "http://localhost/wechat/initMe/";

/** 获取请求后面的参数，转换为 uuid */
var getUrlUUID = function () {
    var token = window.location.hash;
    console.log(token);
    if (token === null || token === ""){
        return null;
    }
    return token.replace("#", "");
};

var getUrlObj = function () {
    
    var url = location.search;
    var Request = new Object();
    if(url.indexOf("?")!=-1){
        var str = url.substr(1); //去掉?号
        var strs = str.split("&");
        for(var i=0;i<strs.length;i++){
            Request[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
        }
    }
    return Request;
};

// uuid?
var uuid = getUrlUUID();
var urlObj = getUrlObj();
if(uuid == null){
    uuid = urlObj['uuid'];
}
// console.log(urlObj);

