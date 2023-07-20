function fetchNextElement(array){
    let idx = 0;
    function next(){
        if(idx == array.length){
            return {value: undefined, done:true};
        }
        const nextElement = array[idx];
        idx++;
        return {value: nextElement, done:false};
    }
    return {next}; // returning object
}



//somewhere we consume it

const automaticFetcher = fetchNextElement([99,11,12,12,0,1,2,3,4]); 
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());

