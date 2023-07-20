// Create Promise with TimeOut

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function createPromiseWithTimeOut() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function exec() {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                // if the random number is even we fulfill
                resolve(num);
            } else {
                // if the random number is odd we reject
                reject(num);
            }

        }, 10000);


    });
}
y = createPromiseWithTimeOut()
console.log(y);
/* In this time its immediately give you promise because you return new promise and there is a callback function
 this function is immediately called and this function say SetTimeOut and the moment JS see setTimeOut it will
go to the runtime and say hey runtime plzz start a timer for 10 Second and that set thats why it imeediately
return becase there is no blocking piese of code.


*/
