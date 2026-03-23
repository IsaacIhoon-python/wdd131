const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add Chapter button click
button.addEventListener('click', function () {

  // Validate input
  if (input.value.trim() !== '') {

    // Create elements
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Populate content
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Accessibility
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Append delete button to li
    li.append(deleteButton);

    // Append li to list
    list.append(li);

    // Delete functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Clear input
    input.value = '';

    // Focus input
    input.focus();

  } else {
    // Optional: just refocus if empty
    input.focus();
  }

});