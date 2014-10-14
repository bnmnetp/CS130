var taskCount = 10;


// This function will be called when a checkbox is checked or unchecked
doneTask = function() {
    // this is the box that was clicked
    if (this.checked) {
        this.parentNode.classList.add("done");
    } else {
      this.parentNode.classList.remove("done");
    }

    localSave()
}


// Call this function when a new task is added or whenever
// a task is checked or unchecked.  It makes sure that localstore
// is up to date.
localSave = function() {
    var res = []
    var i;
    // loop over all of the li's we have created and add them
    // to a list, unless they are checked (have done in their list of classes)
    allEntries = document.querySelectorAll('li')
    for(i=0; i < allEntries.length; i++) {
        // if the task is not checked off
        if (! allEntries[i].classList.contains("done") ) {
            res.push(allEntries[i].innerText);
        }
    }
    // Convert the array to a string and save it in localstore
    localStorage.setItem("todoDatabase",JSON.stringify(res))
}

// You need to finish writing this function
// Called from window.onload  -- see the end of the html file
//
restoreTasks = function() {
  allTasks = JSON.parse(localStorage.getItem('todoDatabase'))
  taskList = document.querySelector("#busylist");
  for(i = 0; i < allTasks.length; i++) {
      // Add your code here to recreate the task list
      // note that allTasks[i] will contain the text
      // for the next task you want to add to your HTML
      // list.  -- Note also that this is very similar to what
      // is done in the addTask function.
  }
}

// Called when the add button is added to create a new task.
addTask = function() {
    var newli;
    task = document.querySelector("#taskbox");
    taskList = document.querySelector("#busylist");
    priorityValue = document.querySelector("#priority").value;
    taskText = task.value;
    //
    newli = document.createElement('li');
    newli.className = priorityValue;
    newcb = document.createElement('input');
    newcb.type = 'checkbox';
    newcb.onclick = doneTask;
    newli.appendChild(newcb);
    t = document.createTextNode(taskText);
    newli.appendChild(t);
    taskList.appendChild(newli);
    //
    // erase the what we just typed in
    task.value = "";
    // save everything to local storage.
    localSave()
}
