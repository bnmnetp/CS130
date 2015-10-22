localSave = function(saveList) {
    res = []
    var i;
    allEntries = document.querySelectorAll('#'+saveList+' li')
    for(i=0; i < allEntries.length; i++) {
        // if the task is not checked off
        if (! allEntries[i].classList.contains("done") ) {
            res.push({text: allEntries[i].innerText, priority: allEntries[i].classList });
        }
    }

    localStorage.setItem("todoDatabase",JSON.stringify(res))
}

restoreList = function(savelist,donefunc) {
  allTasks = JSON.parse(localStorage.getItem('todoDatabase'))
  taskList = document.querySelector("#"+savelist);
  for(i = 0; i < allTasks.length; i++) {
      taskText = allTasks[i].text;
      priorityValue = allTasks[i].priority;
      newli = document.createElement('li');
      console.log(priorityValue)
      if (priorityValue.length !== undefined) {
          for(j = 0; j < priorityValue.length; j++) {
              newli.classList.add(priorityValue[j]);
          }
      } else {
          for (var key in priorityValue) {
              if (priorityValue.hasOwnProperty(key)) {
                  newli.classList.add(priorityValue[key]);
              }
          }
      }
      newcb = document.createElement('input');
      newcb.type = 'checkbox';
      newcb.onclick = donefunc;
      newli.appendChild(newcb);
      t = document.createTextNode(taskText);
      newli.appendChild(t);
      taskList.appendChild(newli);
  }
}
