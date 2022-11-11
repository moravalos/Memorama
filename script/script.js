let iconos = []
        let selecciones = []
        var cont = 0
        var contador = 0
        generarTablero()

        function cargarIconos() {
            iconos = [
                '<i class="fas fa-star"></i>',
                '<i class="far fa-star"></i>',
                '<i class="fas fa-star-of-life"></i>',
                '<i class="fas fa-star-and-crescent"></i>',
                '<i class="fab fa-old-republic"></i>',
                '<i class="fab fa-galactic-republic"></i>',
                '<i class="fas fa-sun"></i>',
                '<i class="fas fa-stroopwafel"></i>',
                '<i class="fas fa-dice"></i>',
                '<i class="fas fa-chess-knight"></i>',
                '<i class="fas fa-chess"></i>',
                '<i class="fas fa-dice-d20"></i>',
                '<i class="fa fa-car"></i>',
                '<i class="fa fa-check-square"></i>',
                '<i class="fa fa-square"></i>',
                '<i class="fa fa-cog fa-fw"></i>',
                '<i class="fas fa-yin-yang"></i>',
                '<i class="fas fa-yen-sign"></i>',
                '<i class="fas fa-x-ray"></i>',
                '<i class="fas fa-wrench"></i>',
                '<i class="fas fa-won-sign"></i>',
                '<i class="fas fa-wine-glass-alt"></i>',
                '<i class="fas fa-wine-bottle"></i>',
                '<i class="fas fa-wind"></i>',
                '<i class="fas fa-window-close"></i>',
                '<i class="fas fa-window-minimize"></i>',
                '<i class="fas fa-wine-glass"></i>',
                '<i class="fas fa-virus"></i>',
                '<i class="fas fa-virus-slash"></i>',
                '<i class="fas fa-viruses"></i>',
                '<i class="fas fa-voicemail"></i>',
                '<i class="fas fa-venus-mars"></i>'
            ]
            
            
        }

        function getRandomInt(min, max) {
            min = Math.ceil(1);
            max = Math.floor(24);
            return Math.floor(Math.random() * (max - min) + min);
          }

        function generarTablero() {
            cargarIconos()
            var aleatorio = getRandomInt();
            selecciones = []
            let tablero = document.getElementById("tablero")
            let tarjetas = []
            for (let i = 0; i < 16; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">${iconos[aleatorio]}</div>
                        <div class="cara superior">
                            <i class="far fa-question-circle"></i>
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    iconos.splice(0, 1)
                }
            }
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
        }

        function seleccionarTarjeta(i) {
            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                selecciones.push(i)
            }
            if (selecciones.length == 2) {
                deseleccionar(selecciones)
                selecciones = []
            }
        }  

        function deseleccionar(selecciones) {
            setTimeout(() => {
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                    contador = cont + 1 
                    '<div class="cara trasera">${contador}</div>'
                }else{
                    trasera1.style.background = "plum"
                    trasera2.style.background = "plum"
                    contador = cont + 1 
                }
                `<div>${contador}</div>`
            }, 1000);
        }