import { 
    addNewTask, 
    fillTasksList,
    handleTaskBehavior
} from "./function";

const myUL = document.getElementById("myUL");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener('click', addNewTask);
myUL.addEventListener('click', handleTaskBehavior);
window.addEventListener("DOMContentLoaded", fillTasksList);
 

const date = new Date();

setTimeout (() => {
    console.log(date.getFullYear());
}, 3000)
setTimeout (() => {
    console.log(date.getMinutes())
}, 5000);
setTimeout (() => {
    console.log(date.getHours());
}, 8000);