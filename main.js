// valor inicial
let count = 0;

// valor
const value = document.querySelector("#counter-value");

// botones
const buttons = document.querySelectorAll(".counter-controls__btn");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // lista de clases del boton presionado
        const clases = e.target.classList;

        // valor de html
        const valor = document.getElementById('counter-value');

        if (clases.contains("disminuir")) {
            count--;
        } else if (clases.contains("reiniciar")) {
            count = 0;
        } else if (clases.contains("aumentar")) {
            count++;
        }

        if(count < 0){
            valor.style.color = 'red';
        }else{
            valor.style.color = 'rgb(73, 221, 73)';
        }
        
        // asignar valor
        valor.innerText = count;
    });
});
