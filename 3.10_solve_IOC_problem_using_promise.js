function download(url,cb) {
    setTimeout(function exec(){
        console.log("Completed downloading after 5 second");
        const content = "ABCDEF";
        cb(content); 
    }, 5000);
}

download("www.xyz.com", function processDownload(data){
    console.log("downloaded data is", data);
})


/* In this code the problem is what if someone calls callback twice because function download will not be
written by you. It will be returned by someone else and maybe they never call your callback so it is the biggest
problem. Here is the problem is Inversion of control so we solve using it promises.

*/


function download1(url) {
    return new Promise(function exec(resolve,reject){
        setTimeout(function exec(){
            console.log("Complete downloading after 5 second")
            const content = "ABCDE";
            resolve(content);

        },5000)
    })
}
download1("www.xyz.com")
.then(function fullfilment(value){
    console.log("download data is", value);
})

/* Here the output will be the same but the difference this time is you are not giving your access to callback 
to any third party function. You have the access to your callback with yourself and you are yourself responsible
for calling this callback. And if someone calls resolve(content); two types by default promise consider the 
first only. And if they never call resolve(content); you detect it because if not calling it your promise always
be in a pending state. So the control what should happen of your callback is now with you and your are not 
providing the control of fulfillHandler to the download function that's the beauty of Promises.     

*/