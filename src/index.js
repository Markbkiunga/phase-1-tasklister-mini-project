const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  buildToDo(e.target.new_task_description.value);
});
const listContainer = document.querySelector('#list');

function buildToDo(todo) {
  let toBeDone = document.createElement('p');
  toBeDone.textContent = `${todo} `;
  listContainer.appendChild(toBeDone);

  let button = document.createElement('button');
  button.textContent = 'X';
  toBeDone.appendChild(button);
  button.addEventListener('click', () => {
    toBeDone.remove();
  });
}
