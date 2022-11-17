// 接收主线程的数据
onmessage = function(event) {
    for (var i = 0; i <= 1000000000; i ++) {
        var age = i + i + i * i / 1000 + 89;
    }
    var res = event.data.a + event.data.b;
    // 将结果传入主线程
    postMessage(res);
}