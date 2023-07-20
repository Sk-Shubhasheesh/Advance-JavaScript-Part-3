function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            reject(content);
        }, 6000);
    });
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data);
        setTimeout(function write() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    })
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log("upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    })
}

download("www.xyz.com")
.then(function processDownload(value){
    console.log("downloading done with following value", value);
    return writeFile(value);
})
.then(function processWrite(value){
    console.log("data written in the file with name", value);
    return uploadData(value, "www.upload.com");
})
.then(function processUpload(value){
    console.log("we have uploaded with", value);
})
// use catch
.catch(function f(err){
    console.log("Catching error", err);

})
/* the moment downloading got completed and downloading actually rejected its not going to the .then chain. When
the promise is rejected its not going to below .then chain it directely come to .catch which is preety way to
handel this.
Apart from this you have one more function that is finally. In finally, it does not matter promise is rejected 
somewhere, finally function is alway executed even you catch it then also finally function will executed and 
if you never go insdie the catch then also it will executed.   
*/
.finally(function final(){
    console.log("executing finally");
})




