"use strict";
{
angular.module('app')
.controller("TodoController", function(){

    const $ctrl = this;
    $ctrl.toDoTasks = [
    {list:"Walk the Dog" ,done: false},
    {list:"Go to the store", done: true},
    {list: "Get gas" , done: false},
    {list: "Go Grocery Shopping", done: true},
   {list: "Wash the Car.", done: false}
  ];

  $ctrl.add = function(list) {
   console.log($ctrl.toDoTasks)
    $ctrl.toDoTasks.push({list:$ctrl.addTodo, done: false});
    // $ctrl.newTasks= '';
    console.log($ctrl.toDoTasks)
 }
 $ctrl.removeTask=function(index){ 
    $ctrl.toDoTasks.splice(index,1);     
  }
  $ctrl.completeTask = (index) => {
    $ctrl.toDoTasks[index].done = true;
  };

  
});

}

