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
    var high = [];
    var med = [];
    var low = [];
    var i;
    // loop over all of the li's we have created and add them
    // to a list, unless they are checked (have done in their list of classes)
    allEntries = document.querySelectorAll('li')
    for(i=0; i < allEntries.length; i++) {
        // if the task is not checked off
        if (! allEntries[i].classList.contains("done") ) {
            if (allEntries[i].classList.contains("High")) {
                high.push(allEntries[i].innerText);
            } else {
                if (allEntries[i].classList.contains("Medium")) {
                    med.push(allEntries[i].innerText);
                } else {
                    low.push(allEntries[i].innerText);
                }
            }
        }
    }
    // Convert the array to a string and save it in localstore
    // 
    localStorage.setItem("todoDatabaseHigh",JSON.stringify(high))
    localStorage.setItem("todoDatabaseMed",JSON.stringify(med))
    localStorage.setItem("todoDatabaseLow",JSON.stringify(low))        
}


// Called from window.onload  -- see the end of the html file
//
restoreTasks = function() {
    // Get the three task lists
    highTasks = JSON.parse(localStorage.getItem('todoDatabaseHigh'))
    medTasks = JSON.parse(localStorage.getItem('todoDatabaseMed'))
    lowTasks = JSON.parse(localStorage.getItem('todoDatabaseLow'))    
    for(i = 0; i < highTasks.length; i++) {
        insertTaskInTree(highTasks[i],"High");
    }
    for(i = 0; i < medTasks.length; i++) {
        insertTaskInTree(medTasks[i],"Medium");
    }
    for(i = 0; i < lowTasks.length; i++) {
        insertTaskInTree(lowTasks[i],"Low");
    }
}


// Called from addTask AND restoreTasks
insertTaskInTree = function(taskText, priorityValue)  {
    // Get a reference to the list in the tree
    taskList = document.querySelector("#busylist");
    // Create the li element and set priority    
    newli = document.createElement('li');
    newli.className = priorityValue;
    // Create the checkbox
    newcb = document.createElement('input');
    newcb.type = 'checkbox';
    newcb.onclick = doneTask;
    // Create the text Node
    t = document.createTextNode(taskText);
    // Plug our new elements into  the tree.
    newli.appendChild(newcb);
    newli.appendChild(t);
    taskList.appendChild(newli);
    
}

// Called when the add button is added to create a new task.
addTask = function() {
    var newli;
    task = document.querySelector("#taskbox");
    taskList = document.querySelector("#busylist");
    priorityValue = document.querySelector("#priority").value;
    taskText = task.value;
    insertTaskInTree(taskText,priorityValue);
    task.value = "";
    // save everything to local storage.
    localSave()
}
