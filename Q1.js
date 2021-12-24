// Question: How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };


var obj1 = { name: "Person 1", age:5};
var obj2 = { age:5, name: "Person 1" };

for (i in obj1){
    if(obj1[i]===obj2[i]) {
        console.log("True")
    }
    else {
        console.log("False")
    }
}
2.


