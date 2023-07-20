/* Task:
1. write a function to download data from a url
2. write a function to save that download data in a file and return the filename
3. write a function to upload the file written in prevoius steap to newurl
*/
function download_data(url, cb) {
    console.log("Start downloading data from the url", url);
    setTimeout(function download() {
        console.log("Download complete");
        const content = "ABCDEFG";
        cb(content);

    }, 4000)
}
function write_data(data, cb) {
    console.log("Start writing a file with", data);
    setTimeout(function write() {
        console.log("complete writing data in a file");
        const new_file = "file.txt";
        cb(new_file);
    }, 5000)

}
function upload(url, file, cb) {
    console.log("Started Uploading file", file, "on", url);
    setTimeout(function up() {
        console.log("Uploaded completed");
        const msg = "SUCCESS";
        cb(msg);
    }, 2000)

}
// download_data("www.xyz.com", function process(content){
//     console.log("Downloaded data is", content)
// })

// write_data("ABCDEFG", function write_complete(name){
//     console.log("file written with name", name);

// })
download_data("www.xyz.com", function process(content) {
    console.log("We are now  going to process your data");
    write_data(content, function processWrite(filename){
        console.log("We have download and written the file, now will upload");
        upload("www.upload.com", filename, function processupload(msg){
            console.log("We have upload with", msg);
        })
    })
})

