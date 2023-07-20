function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            reject(content);
        }, 1000);
    });
}
// inside asyns await based syntes we can usde try and catch for handeling error
async function steps(){
    try {
        const downloadData = await download("www.xyz.com");
        console.log("data downloaded is", downloadData);
        return downloadData;
    } catch (error) {
        console.log("We have handel the error", error);
    }
    
}
steps();
