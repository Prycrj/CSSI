<script>

    <ol>
      <li id="todo1">Graduate with honors
      <button onclick="Task1Done('todo1')">PUSH ME</button>
      </li>
      <li id="todo2">Travel the World
      <button onclick="Task1Done('todo2')">PUSH ME</button>
      </li>
      <li id="todo3"> Visit Google NYC
      <button onclick="Task1Done('todo3')">PUSH ME</button>
      </li>
      <li id="todo4"> Sky Dive
      <button onclick="Task1Done('todo4')">PUSH ME</button>
      </li>
      <li id="todo5"> Sling-Shot Ride
      <button onclick="Task1Done('todo5')">PUSH ME</button>
      </li>
     </ol>

function Task1Done(Boom)
{
var bulletstyle= document.getElementById(Boom).style.textDecoration;

if (bulletstyle=='line-through')
 document.getElementById(Boom).style.textDecoration='none';

else
 document.getElementById(Boom).style.textDecoration='line-through';

}
</script>
