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

async function steps(){
    const downloadData = await download("www.xyz.com");
    console.log("data downloaded is", downloadData);
    const fileWritten = await writeFile(downloadData);
    console.log("file written is", fileWritten);
    const uploadResponce = await uploadData(fileWritten, "www.drive.google.com");
    console.log("Upload responce is", uploadResponce);
    return uploadResponce;
}

// steps()

// here await is like yield doen't matter what is there you are going to throw yourself out of the function 
//immediately.    


// lets make it more complex
steps().then( (value) => console.log("we have completed steps with", value))
console.log("outside");
for(let i =0; i< 10000000000; i++){

}
setTimeout(function f(){console.log("timer done");}, 4000);
console.log("for loop done");

