document.addEventListener('DOMContentLoaded', () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
  });
});

function buildToDo(todo) {
  let p = document.createElement('p');
  let button = document.createElement('button');
  button.addEventListener('click', handleDelete);
  button.textContent = 'X';
  p.textContent = `${todo} `;
  p.appendChild(button);
  console.log(p);
  document.querySelector('#list').appendChild('p');
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
