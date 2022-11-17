// 轮播图模块
(function() {
    var duration = 4000;
    var index = 0;

    function play() {
        console.log(duration,index);
        prev();
        next();
        setActive();
    }

    function prev() {}
    function next(){}
    function setActive() {}

    // 暴露接口
    window.play = play;
})();