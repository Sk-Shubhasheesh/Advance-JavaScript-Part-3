function fetchData(url) {
    return new Promise(function(resolve,reject){
        console.log("Started downloading from", url);
        setTimeout(function processingData(){
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data);
        }, 7000);
    });
}

console.log("Start");
let promiseObj = fetchData("skysexfycn");
promiseObj.then(function A(value){
    console.log("value is", value);
})
console.log("end");

