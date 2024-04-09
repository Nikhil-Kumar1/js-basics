var c = 300

if(true){
    let a = 10
    const b = 20
    c = 30
}
// console.log(c);

function one(){
    const username = "nikhil"

    function two(){
        const website = "abcd"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()


// ******** INTERESTING ********* //

addone(5)
function addone(num){
    return num +1
}

addTwo(5)
const addTwo = function(num){
    return num +2
}






