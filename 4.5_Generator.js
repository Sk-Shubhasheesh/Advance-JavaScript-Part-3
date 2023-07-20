function*fetchNExtElement(){
    console.log("I am indise the Generator Function");
    yield 1;
    yield 2;
    console.log("Somewhere in the middle");
    yield 3;
    yield 4;

}
const iter = fetchNExtElement();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());