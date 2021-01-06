
function animotion(obj,tagert,callback) {
    //执行之前清除以前的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长 = （目标位置 - 现在位置）/ 10   达到非线性效果
        var step = (tagert - obj.offsetLeft) / 10;
        // if (step > 0) {
        //      step = Math.ceil(step); 
        // }
        // if (step < 0) {
        //      step = Math.floor(step); 
        // }
        //除法会有小数，所以要取整，往右走（+）往大取，往左走（-）往小取
        step = step > 0? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + 'px';
        if (obj.offsetLeft == tagert) {
            clearInterval(obj.timer);
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
     },15);
}