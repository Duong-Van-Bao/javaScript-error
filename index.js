/**--------------VD:1----------------- */
// function add(a, b) {
//     if (typeof a !== 'string' || typeof b !== 'string') {
//         throw new Error('Wrong type');
//     }
//     return a + b;
// }

// try { //dùng hai hàm này mục đích nó lỗi nhưng nó vẫn chạy được hàm bên dưới 
//     add('a', 1);
// } catch (error) {
//     console.error(error); //có lỗi mình phải lóc nó ra 
// }//chúng ta biết lỗi sẩy lúc ấy chúng ta dùng try catch
// console.log('xxx')
/**-----------------Hết VD1-------------- */
/**-----------------VD:2cài gì sẩy ra khi mình error cái error trong một cái promise-----------------*/
function reject() {
    return new Promise(function(resolve, reject) {
        reject(new Error('Promise error'));
    })
};

reject().catch(function(error) { //đây là cách bắt lỗi bằng catch để promise nếu nó là Promise sẽ reject'lỗi'
    console.log('Has error', error.message);
});