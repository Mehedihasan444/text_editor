// font size
document.getElementById('font-size-field').addEventListener('input', function () {
    const fontField = document.getElementById('font-size-field').value;
    const textField = document.getElementById('text-field');
    textField.style.fontSize = fontField + 'px'; 
});
// font color
document.getElementById('color-field').addEventListener('input', function () {
    const colorField = document.getElementById('color-field').value;
    const textField = document.getElementById('text-field');
    textField.style.color = colorField; 
});
