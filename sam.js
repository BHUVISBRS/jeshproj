



var items = document.getElementsByClassName('list-group-item');

// Var or Let works in the for loop

for(var i=0;i< items.length;i++) {
    items[i].style.backgroundColor = "yellow";
}




//var lists = document.getElementsByTagName("li");

// Var or Let works in the for loop

var lists = document.getElementsByTagName("li");

// Var or Let works in the for loop

for(let list in lists) {
    lists[list].style.backgroundColor = "red";
}