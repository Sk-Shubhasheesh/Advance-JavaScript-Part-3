function*fetchNExtElement(){
    const x = 10;
    // console.log(yield 11);
    yield { name: "shubhasheesh"}
    console.log("entering after yield");
    const y = x + (yield 30);
    console.log("Value of y is", y);

}
const iter = fetchNExtElement();
console.log("First",iter.next());
console.log("Second",iter.next());
console.log("Third",iter.next());