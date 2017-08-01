

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
  names=document.getElementsByClassName('taskdone')
for (i=0; i<names.length; i++)
names[i].getElementById('taskdone').style.textDecoration='none';
}
