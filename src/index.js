document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      buildToDo(e.target.new_task_description.value, e.target.due_date.value)
      form.reset()
    })
});


const buildToDo = (todo, due) => {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  let check = document.createElement('input')
  let label = document.createElement('label')
  let label2 = document.createElement('label')
  let i = document.createElement('i')
  let timesclicked = 1;
  check.id = "check";
  check.type = "checkbox";
  btn.id ="x"
  i.id = "edit";
  label.setAttribute("for", "check")
  i.setAttribute("class", "fas fa-edit")
  i.addEventListener('click',() => {
    timesclicked++;
    if (timesclicked%2==0) {
    label.contentEditable = true;
    label.style.backgroundColor = "#dddbdb"
    } else {
      label.contentEditable = false;
      label.style.backgroundColor = "#fff"
    }
  })
  //html.addEventListener('click', ()=> {
   // label.contentEditable = true;
   // label.style.backgroundColor = "#fff";
  //})
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
  btn.textContent = 'x'
  label.textContent = `${todo} — Due: ${due}`
  li.appendChild(check)
  li.appendChild(label)
  li.appendChild(btn)
  li.appendChild(label2)
  label2.appendChild(i)
  document.getElementById("tasks").appendChild(li)
}

let tasks = document.getElementById("tasks")
let deleteBtn = document.getElementById("deleteAll")

deleteBtn.addEventListener('click', () => {
   while (tasks.firstChild) {
     tasks.removeChild(tasks.firstChild)
   }
})




