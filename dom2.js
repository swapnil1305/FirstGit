var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#ccc';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='why not';
console.log(itemList.lastChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='you should';
console.log(itemList.firstChild);

console.log(itemList.nextElementSibling);
itemList.nextElementSibling.textContent='NOT OKAY';
console.log(itemList.nextSibling);

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';
console.log(itemList.previousSibling);

var newDiv=document.createElement('div');

newDiv.classNmae='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');

var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv, h1);

