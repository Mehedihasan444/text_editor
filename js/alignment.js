// left alignment
document.getElementById('align-left').addEventListener('click',function () {
    const textField = document.getElementById('text-field');
    textField.style.textAlign='left';
});
// right alignment
document.getElementById('align-right').addEventListener('click',function () {
    const textField = document.getElementById('text-field');
    textField.style.textAlign='right';
});
// center alignment
document.getElementById('align-center').addEventListener('click',function () {
    const textField = document.getElementById('text-field');
    textField.style.textAlign='center';
});
// justify alignment
document.getElementById('align-justify').addEventListener('click',function () {
    const textField = document.getElementById('text-field');
    textField.style.textAlign='justify';
});