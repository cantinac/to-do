To-do app overview

This app was easy to make in terms of the javascript which only took about 25% of the build time the majority of the time was spent was fixing a few big css quirks in the bootstrap frame work.I decided to use simple screen width queries as they worked great and simplified the build process

Addtask function
----------------------------------------------------------------------
Step 1: Addtask function is called when the add task btn is clicked
Step 2:  grabs the user generated task txt
Step 3: If the user did not input txt the function ends
Step 4: blanks the user input txt box for next task
Step 5: dynamically creates a new li
Step 6: assigns the  li the  task class
Step 7: dynamically creates a new checkbox
Step 8: assigns the “checked” onchange function  to the checkbox
Step 9: adds the checkbox to the new task li 
Step 10: dynamically creates a new div for task txt
Step 11: assigns it the default not done class
Step 12: dynamically creates a new text node
Step 13: adds text node to the new not done div 
Step 14: adds tasktxt div to the new task
Step 15: adds task li to the existing tasks ul

Checked function
-----------------------------------------------------------------------------
Step 1: gets selected box's parent li
Step 2: gets the class name of the text div in the same li as the selected box
Step 3: if the class name is the default not done then it will change to done and vice versa 

