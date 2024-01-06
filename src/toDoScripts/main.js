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
 
