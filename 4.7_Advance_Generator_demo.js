function*fetchNExtElement(){
    const x = 10;
    yield 11;
    console.log("entering after yield");
    const y = x + (yield 30);
    console.log("Value of y is", y);

}
const iter = fetchNExtElement();
console.log("First",iter.next());
/* In first iter.next() we just print 11 */

console.log("Second",iter.next());
/*  In line no. 6 you can see that (yield 30) is not a normal yield that is return a new line, it is a part of 
expression.The yield keyword is extremely powerful it's going to maintain here power also, the moment you see 
the yield keyword it's going to leave the function on the particular line no. 6 means the value of const y not 
been yet computed means const y is still undefined because (yield 30) not be computed and you will return 
immediate line no. 13 and print Second { value: 30, done: false } */
console.log("third", iter.next(13));
/* In this iter.next, you are going back to the same position where you actually left the previous yield in line 
no. 6 where (yield 30) and in iter.next you pass value 13 so at the position where you last yielded it is going 
to pass 13 here means(yield 30) is replace with 13 and x + 13 = 23 so we print - Value of y is 23
third { value: undefined, done: true } */




