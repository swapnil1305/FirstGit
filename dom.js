var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
items[1].textContent='Hello 2';
items[0].style.fontWeight='bold';
items[1].style.fontWeight='bold';
items[2].style.fontWeight='bold';
items[3].style.fontWeight='bold';
items[2].style.backgroundColor='green';

var items=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent="Hello 2";
li[1].style.fontWeight="bold";
li[1].style.backgroundColor="yellow";
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}