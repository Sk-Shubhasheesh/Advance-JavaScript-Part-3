function createPromise(){
    return new Promise(function executor(resolve,reject){
        let x = setTimeout(function givenValue(){
           return 2; 
        },3000);
        if(x%2===0){
            resolve("Successfull");
        } else{
            resolve("rejected");
        }

    })

}
y = createPromise();
console.log(y)
