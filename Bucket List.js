

function Task1Done(Boom)
{
var bulletstyle= document.getElementById(Boom).style.textDecoration;

if (bulletstyle=='line-through')
 document.getElementById(Boom).style.textDecoration='none';

else
 document.getElementById(Boom).style.textDecoration='line-through';
}

function clearAll()
{
  names=$('.task');
  names.css("text-decoration","none");
}

function Add(text)
{
var name = prompt("Add List");
addListItem(name);
}

function addListItem(text)

{
  list = document.querySelector('ol');
  item = document.createElement('li');
  item.innerText = text;
  list.appendChild(item);
}
