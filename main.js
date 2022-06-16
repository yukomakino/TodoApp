const addArea = document.getElementById('add-area');
const addBtn = document.getElementsByClassName('add-btn')[0];
const todo = document.getElementById('todo');

console.log(addBtn);
addBtn.addEventListener('click', function () {
    const todoText = addArea.value; 

    if (todoText.length === 0 ) {
        alert('空欄です！！');
    } else {
        const newItem = document.createElement('li');
        newItem.innerHTML = todoText;
        const todoBtn = document.createElement('button');
        todoBtn.innerHTML = '完了';
        todo.appendChild(newItem);
        newItem.appendChild(todoBtn);
        addArea.value = '';

        todoBtn.addEventListener('click', function () {
            addArea.value = '';
            newItem.remove();
        });
    };
        
  });
