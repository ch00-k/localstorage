document.getElementById('buttonText').addEventListener('click', function() {
    let texto = document.getElementById('inputText').value;
    localStorage.setItem('text', texto);
});