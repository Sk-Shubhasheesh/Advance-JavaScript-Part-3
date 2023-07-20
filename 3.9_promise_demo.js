function blocking_for_loop(){
    for(let i = 0; i<1000000000; i++){
        // doing something
    }
}

console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
},0);

blocking_for_loop();

let x = Promise.resolve("Shubhasheesh's Promise1");
x.then(function processPromise1(value){
    console.log("Whose promise ? ", value);
    blocking_for_loop();
});

let y = Promise.resolve("Shubhasheesh's Promise2");
y.then(function processPromise2(value){
    console.log("Whose promise ? ", value);
    setTimeout(function(){console.log("ok done")},0)
});

let z = Promise.resolve("Shubhasheesh's Promise3");
z.then(function processPromise3(value){
    console.log("Whose promise ? ", value);
    blocking_for_loop();
});

setTimeout(function timer2(){
    console.log("Timer 2 done..")
},0);
console.log("End of the file");















