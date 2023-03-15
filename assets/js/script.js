
; (function () {
    'use strict'

    const button = document.querySelector("#calcular");

    button.addEventListener("click", () => {

        let num = document.getElementById("num");
        let end = document.getElementById("end");


        if (num.value == 0 || end.value == 0) {
            alert('Preencha todos os campos');
        } else {

            let nConvertido = parseInt(num.value);
            let eConvertido = parseInt(end.value);

            let x = 0;
            let resposta = '';
            let res = document.getElementById('resposta');
            res.innerHTML = `A tabuada do ${nConvertido} é: <br>`
            res.style.textAlign = 'center'

            do { // Faça isso
                resposta = nConvertido * x;
                res.innerHTML += `${x} * ${nConvertido} = ${resposta} <br>`
                x++
            } while (x <= eConvertido); // Enquanto isso for verdade
        }
    });




})();
