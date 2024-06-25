function login (){
    const USUARIO = document.getElementById('usuario').value;
    const PASSWORD = document.getElementById('password').value;

    if (USUARIO && PASSWORD) {
        localStorage.setItem('usuario', USUARIO);
        localStorage.setItem('password', PASSWORD);

        alert('BIEN')
        window.location.href = '../pages/contacto.html';
    }
    else {
        alert('ingrese nombre y contraseña');
    }
}

