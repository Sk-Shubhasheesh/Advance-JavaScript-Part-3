                  // create Promise with loop
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function createPromiseWithLoop() {
    return new Promise(function executor(resolve, reject){
        for(let i =0; i < 10000000000; i++){}
        let num = getRandomInt(10);
        if(num % 2 == 0){
            // if the random number is even we fulfill
            resolve(num);
        } else {
            // if the random number is odd we reject
            reject(num);
        }

    });
}
x = createPromiseWithLoop()
console.log(x)