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
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  document.getElementById("list").appendChild(li)
}


