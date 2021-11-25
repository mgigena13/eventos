const resultado = document.getElementById("resultado");
let contador = 0;       

const btnAgregar = document.querySelector(".btn-info");
        

        btnAgregar.addEventListener("click", () => {
            console.log("diste click");
            contador++;
            pintarContador();
        });

        pintarContador = () => {
            resultado.textContent = contador;
        };

const btnDisminuir = document.querySelector("#disminuir");
        
        btnDisminuir.addEventListener("click", () => {
            console.log("diste click resta");
            contador--;
            pintarContador();
        });

        pintarContador = () => {
            resultado.textContent = contador;
        };