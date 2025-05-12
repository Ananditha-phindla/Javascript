const addbutton = document.querySelector("#addtask");
const date = document.querySelector("#date");
const task = document.querySelector("#task");
const todo = document.querySelector(".todo-list");
addbutton.addEventListener("click",() => {
    const t = task.value;
    const d = date.value;
    let p1 = document.createElement("P");
    p1.innerHTML = t;
    let p2 = document.createElement("P");
    p2.innerHTML = d;
    let b = document.createElement("button");
    b.innerHTML = "DELETE";
    b.classList.add("deletebutton");
    b.addEventListener("click",() =>{
        p1.remove();
        p2.remove();
        b.remove();
    })
    todo.append(p1);
    todo.append(p2);
    todo.append(b);
    task.value = "";
    date.value = "";
})
