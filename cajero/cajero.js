let historialentregado = []
let caja = []
let resultado = document.getElementById("resultado")
let dinerodisponible = document.getElementById("platita")

const main = () => {
    caja.push(new Billete(100, 51, "Cien", "100.jpg"))
    caja.push(new Billete(50, 326, "Cincuenta", "fifty.jpg"))
    caja.push(new Billete(20, 5530, "Veinte", "veintepe.jpg"))
    caja.push(new Billete(10, 88556, "Diez", "diezpe.jpg"))
    caja.push(new Billete(5, 715850, "Cinco", "cincope.jpg"))
    caja.push(new Billete(2, 8701596, "Dos", "dospe.jpg"))
    let boton = document.getElementById("extraer")
    let texto = document.getElementById("dinero")
    texto.addEventListener("keyup", function (event) {
        if (event.code == "Enter") {
            event.preventDefault()
            boton.click()
        }
    })
    contarCaja()
    boton.addEventListener("click", entregarDinero)

}

class Billete {
    constructor(valor, cantidad, nombre, imagenarchivo) {
        this.imagen = new Image()
        this.valor = valor
        this.cantidad = cantidad
        this.nombre = nombre
        this.imagen.src = imagenarchivo
    }
    mostrar() {
        document.body.appendChild(this.imagen)
    }
}
const entregarDinero = () => {
    let dinero = 0
    let division = 0
    let papeles = 0
    let entregado = []
    resultado.innerHTML = ""
    let numero = document.getElementById("dinero")
    dinero = parseInt(numero.value)
    for (billete of caja) {
        if (dinero > 0) {
            division = Math.floor(dinero / billete.valor)
            if (division > billete.cantidad) {
                papeles = billete.cantidad
            }
            else {
                papeles = division
            }
            entregado.push(new Billete(billete.valor, papeles, billete.nombre, billete.imagen.src))
            historialentregado.push(new Billete(billete.valor, papeles, billete.nombre, billete.imagen.src))
            dinero = dinero - (billete.valor * papeles)
        }
    }
    if (dinero > 0) {
        resultado.innerHTML = "Soy un cajero pobre y no tengo suficiente dinero"
    }
    else {
        for (entrega of entregado) {
            if (entrega.cantidad > 0) {
                resultado.innerHTML += "<br />" + entrega.cantidad + " billetes de $" + entrega.valor + "<br />"
                for (let i = 0; i < entrega.cantidad; i++) {
                    resultado.innerHTML += "<img width=\"200\" height=\"100\" src=\"" + entrega.imagen.src + "\">"
                    // resultado.innerHTML += '<img src="' + entrega.imagen.src + '">'
                }
            }
        }
    }
    contarCaja()
}

const contarCaja = () => {
    let cajaRestante = 0
    for (fajo of caja) {
        cajaRestante += fajo.valor * fajo.cantidad
    }
    for (fajo of historialentregado) {
        cajaRestante -= fajo.valor * fajo.cantidad
    }
    dinerodisponible.innerHTML = cajaRestante
}

main()
