var po = po || {};


//回调实现ajax请求的例子
po.get = function(url, data, success, error_cb) {
    $.ajax({
        url: url,
        type: 'get',
        data: data,
        success: function(res) {
            success(res);
        },
        error: function(error) {
            error_cb(error);
        }

    })
}
po.get('url', {}, function(res) {

}, function(error) {

})



//用pomise封装ajax请求的例子
po.post = function(url, data) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: url,
            type: 'post',
            data: data,
            success: function(res) {
                resolve(res);
            },
            error: function(error) {
                reject(error);
            }
        })
    })
}
po.post('url', {}).then(function(res) {

}).catch(function(error) {

})