let timer1, timer2;
/**
 * 滚动条横向和纵向复位
 */
export default function resetScroll() {
    clearInterval(timer1);
    clearInterval(timer2);
    const html = document.documentElement;
    timer1 = animate(html.scrollTop, 0, val => {
        html.scrollTop = val;
    })
    timer2 = animate(html.scrollLeft, 0, val => {
        html.scrollLeft = val;
    })
}

/**
 * 在1s内，从指定的初始值变化到结束值
 * @param {*} start 
 * @param {*} end 
 */
function animate(start, end, callback) {
    const tick = 16; // 每隔16毫秒变化一次
    const total = 1000; // 变化的总时间
    const times = Math.ceil(total / tick); // 变化的次数
    let curTimes = 0; // 当前变化的次数
    const dis = (end - start) / times; // 每次运动的距离
    const timer = setInterval(() => {
        curTimes++;
        start += dis;
        if (curTimes === times) {
            start = end;
            clearInterval(timer);
        }
        callback(start);
    }, tick)
    return timer;
}

/**
 * 在不定时间内，从指定的初始值变化到结束值
 * @param {*} start 
 * @param {*} end 
 * @param {*} callback 
 */
// function newAnimate(start, end, callback) {
//     const tick = 16;
//     const dis = 100; // 每次运动100px
//     let timer = setInterval(() => {
//         start -= dis;
//         if (start <= end) {
//             clearInterval(timer)
//             start = end;
//         }
//         callback(start);
//     }, tick)
// }