function DO(task){ // local to DO is task
    setTimeout(function exec(){
        console.log(task);
    }, 2000);
}

DO("absk");
/*
You might feel that in line no. 7 we call the function the moment you call the function, in function there is a 
local variable which is task then we create a setTimeOut that's going to trigger the runtime there is a timer for
2 second after which we call the callback exec() and that set the DO function ends and you came the line no 7 
and Do function is out of memory but actually it's not. Because this function exec() during the scope resolution 
already realized the fact that this task is going to come from the local scope of DO so when we actually go 
outside of the function DO, this function exec() still remains in the memory because timer is going to completed 
its going to comeback in the callback queue it remembers that this  variable task was coming from the scope that
was outside of me and which I was enclosed in closure property.
Closures means the function remembering its lexical scope even when the function is executed outside  the lexical 
scope. So the lexical scope of exec() is function DO() and exec() is going to be executed outside of the 
function DO because DO is already completed and after 2 second we executed the exec() function.

*/

