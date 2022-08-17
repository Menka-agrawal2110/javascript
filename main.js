 document.queryselector('#push').onclick =
     function addtask() {

         if (document.queryselector('#newtask input').
             value.length == 0) {
             window.alert("please Enter a Task");
         }
         else {
             document.querySelector('#task').innerHTML
                 += `${<div class="task">
                     <span id="taskname">
                         {document.queryselector('#newtask input').
                             value}
                     </span>
                     <button class="delete">X</button>
                 </div>}
            `;

             var current_task = document.querySelectorAll('.delete');

             for (var i = 0; i < current_task.length; i++) {
                 current_task[i].onclick = function () {
                     this.parentnode.remove();
                 };
             }
             var task = document.querySelectorAll('#taskname');


             for (var i = 0; i < task.length; i++) {
                 task[i].onclick = function () {
                     this.classlist.toggle('completed');
                 };
             }
             documet.querySelector('#newtask input').
                 value = "";
         }
     }
