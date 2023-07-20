function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, 6000);
    });
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data);
        setTimeout(function wrtie() {
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

function doAfterReceiving(value) {
    // iter.next(value);
    let future = iter.next(value);
    if(future.done) return;
    future.value.then(doAfterReceiving);

}

function* steps(){
    const downloadData = yield download("www.xyz.com");
    console.log("data downloaded is", downloadData);
    const fileWritten = yield writeFile(downloadData);
    console.log("file written is", fileWritten);
    const uploadResponce = yield uploadData(fileWritten, "www.drive.google.com");
    console.log("Upload responce is", uploadResponce);
    return uploadResponce;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);
