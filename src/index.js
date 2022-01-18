document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      buildToDo(e.target.new_task_description.value)
      form.reset()
    })
});

const buildToDo = (todo) => {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  let check = document.createElement('input')
  let label = document.createElement('label')
  check.id = "check";
  check.type = "checkbox"
  label.setAttribute("for", "check")
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
  btn.textContent = 'x'
  label.textContent = `${todo} `
  li.appendChild(check)
  li.appendChild(label)
  li.appendChild(btn)
  document.getElementById("tasks").appendChild(li)
}

let tasks = document.getElementById("tasks")
let deleteBtn = document.getElementById("deleteAll")

deleteBtn.addEventListener('click', () => {
   while (tasks.firstChild) {
     tasks.removeChild(tasks.firstChild)
   }
})





