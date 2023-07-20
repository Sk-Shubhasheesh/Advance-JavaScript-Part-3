function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function createPromiseWithTimeOut() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor ");
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
        console.log("Exiting the executor callback in the promise constructor");


    });
}
console.log("Starting.......");
const p = createPromiseWithTimeOut();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like...", p)
console.log("Going to Register my 1st set of handlers");
// now consuming promise
p.then(function fulfillHandler1(value){
    console.log("Inside fullfillHandeler 1 with value", value);
    console.log("Promise after fulfillment is", p);

}, function rejectionHandler1(value){
    console.log("Inside rejectionHandler 1 with value", value);
    console.log("Promise after rejection is", p);

});
console.log("Going to Register my 2st set of handlers ")
p.then(function fulfillHandler2(value){
    console.log("Inside fullfillHandeler 2 with value", value);
    console.log("Promise after fulfillment is", p);

}, function rejectionHandler2(value){
    console.log("Inside rejectionHandler 2 with value", value);
    console.log("Promise after rejection is", p);

});
console.log("Ending")