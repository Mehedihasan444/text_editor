// font weight
document.getElementById('bold').addEventListener('click',function () {
    const textField = document.getElementById('text-field');
    textField.style.fontWeight='bold';
});

// font style 
document.getElementById('underline').addEventListener('click',function () {
    const textField = document.getElementById('text-field');
    textField.style.textDecoration = 'underline';
});

// font style 
document.getElementById('italic').addEventListener('click',function () {
    const textField = document.getElementById('text-field');
    textField.style.fontStyle = 'italic';
});