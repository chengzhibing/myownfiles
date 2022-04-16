let timer = null;
let count = 1;
const fn = function () {
    timer = setTimeout(() => {
        count++;
        console.log(count)
        fn()
    }, 500)
    if(count === 10) {
        clearTimeout(timer)
    }
}
fn()