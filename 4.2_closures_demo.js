function process(){
    let i = 0;
    function innerprocess1(){
        i+=1;
        return i;
    }
    function innerprocess2(){
        i+=1;
        return i;
    }
    return {innerprocess1, innerprocess2};
}
let y = process();
console.log(y);