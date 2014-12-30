---
layout: post
title:  "Grocery Solution"
date:   2014-12-15 07:34:54.597111
categories:
published: true
---

The solution to the grocery list problem has three parts:  html, css, and javascript.


#### HTML

    <html>
    <head>
    	<link rel="stylesheet" href="grocery.css">
    </head>

    <body>
    	<h1>Grocery List</h1> 
        <main>
            <ul id="grocerylist">
            </ul>
        </main>
    
        <aside>
           <label for="grocerybox">Grocery Item</label>
           <input type="text" id="grocerybox" size=40 value="grocery">
           <select id="category">
               <option>Produce</option>
               <option>Snacks</option>
               <option>Canned</option>
               <option>Meat</option>
           </select>
           <button onclick="addItem()">New</button>
        </aside>
    
        <script src="grocery.js" type="text/javascript"></script>
        <script src="http://reputablejournal.com/CS130/listsaver.js" type="text/javascript"></script>        
        <script type="text/javascript">
        window.onload = function() { restoreList('grocerylist',doneTask) };
        </script>
    </body>

    </html>
    
#### CSS

    h1 {
        text-align: center;
    }

    body {
        background: #eeeeee;
    }

    main {
        width: 66%;
        margin-left: auto;
        margin-right: auto;
        min-height: 200px;
        background: #8AA8DA;
    }

    main ul {
        list-style: none;
        font-size: 16pt;
    }

    aside {
        width: 66%;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        background: #5886B7;
    }

    .Produce {
        color: green;
    }

    .Meat {
        color: red;
    }

    .Canned {
        color: black;
    }

    .Snacks {
        color: orange;
    }

    .done {
      text-decoration: line-through;
    }
    
    
    
#### Javascript

    var taskCount = 10;

    doneTask = function() {
        // this is the box that was clicked
        if (this.checked) {
            this.parentNode.classList.add("done");
        } else {
          this.parentNode.classList.remove("done");
        }

        localSave('grocerylist')
    }

    addItem = function() {
        var newli;
        task = document.querySelector("#grocerybox");
        taskList = document.querySelector("#grocerylist");
        categoryValue = document.querySelector("#category").value;
        taskText = task.value;
        //
        newli = document.createElement('li');
        newli.className = categoryValue;
        newcb = document.createElement('input');
        newcb.type = 'checkbox';
        newcb.onclick = doneTask;
        newli.appendChild(newcb);
        t = document.createTextNode(taskText);
        newli.appendChild(t);
        taskList.appendChild(newli);
        //
        task.value = "";
        localSave('grocerylist')
    }


