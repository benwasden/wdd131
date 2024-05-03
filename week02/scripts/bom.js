const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {

        // Create li element and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li)
        input.value = "";
        input.focus();
        deleteButton.addEventListeniner('click', () => {
            list.removeChild(li);
            input.focus();
        });
    }
    else {
        input.focus();
    }
});