function download(url) {
    console.log("started downloading content from ", url)
    return new Promise(function exec(resolve,reject){
        setTimeout(function exec(){
            console.log("Complete downloading after 5 second")
            const content = "ABCDE";
            resolve(content);

        },5000)
    })
}
x = download("www.xyz.com")
x.then(function fulfillHandler1(value){
    console.log("Content downloaded is1", value);
    return "New promise string";
}, 
function rejectHandler1(value){
    console.log("rejected with", value);

})
// chaining of .then
.then(function newfullfilHandler(value){
    console.log("Value from chained then promise", value);
});
/*           Output
started downloading content from  www.xyz.com
Complete downloading after 5 second
Content downloaded is1 ABCDE
Value from chained then promise New promise string



*/