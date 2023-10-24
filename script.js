/* VARIABLES GLOBALES */
let usuario
let contrasena
let pregunta1
let usersave
let contrasave
let i
i = 0
usersave = "1"
contrasave = "1"
let registro
registro = false
let total
total = 0
/* REGISTRO E INICIO DE SESIÓN */
while (i < 1) {
    pregunta1 = prompt("-----FRANKENNET----- \n R: Registrarse \n A: Iniciar sesión \n S: Salir")
    switch (pregunta1) {
        case "R":
            usersave = prompt("Ingrese su usuario a utilizar:")
            contrasave = prompt("Ingese su contraseña a utilizar:")
            alert("Usted se a registrado con exito!")
            break
        case "A":
            usuario = prompt("Ingrese su usuario")
            contrasena = prompt("Ingese su contraseña")
            if ((usuario == usersave) && (contrasena == contrasave)) {
                alert("Usted a iniciado sesion!")
                registro = true
                i++
            } else {
                alert("El usuario y la contraseña son incorrectos o no se a registrado")
            }
            break
        case "S":
            alert("Gracias por su visita")
            i++
            break
        default:
            alert("Letra incorrecta o en minusculas")
            break
    }
}
/* MENU Y PAGO */
while (registro == true) {
    let pregunta2
    pregunta2 = prompt("-----FRANKENNET----- \n -----CATEGORIAS-----\n A - Monitores \n B - Notebooks \n C - Consolas \n D - Periféricos \n E - Pc Master Race \n  -----CARRO DE COMPRAS----- \n H - Mostrar Total Carro  \n G - Vaciar Carro \n F - Finalizar compra \n -----CERRAR SESIÓN----- \n S - Salir ")
    switch (pregunta2) {
        case "A":
            let i = 0
            let pregunta3
            alert("Usted ingreso a Monitores")
            while (i < 1) {
                pregunta3 = prompt("Seleccione un articulo para agregar al carro: \n A - Monitor Samsung $110000 \n B - Monitor Phillips $90000 \n C - Monitor Bgh $60000 \n D - Volver")
                switch (pregunta3) {
                    case "A":
                        alert("Usted agrego Monitor Samsung al carrito")
                        total = total + 110000
                        alert("Su total parcial es de $" + total)
                        break
                    case "B":
                        alert("Usted agrego Monitor Phillips al carrito")
                        total = total + 90000
                        alert("Su total parcial es de $" + total)
                        break
                    case "C":
                        alert("Usted agrego Monitor Bgh al carrito")
                        total = total + 60000
                        alert("Su total parcial es de $" + total)
                        break
                    default:
                        alert("Letra incorrecta o en minusculas")
                        break
                    case "D":
                        alert("Tu total parcial es de $" + total)
                        i++

                }
            }
            break
        case "B":
            let x = 0
            let pregunta4
            alert("Usted ingreso a Notebooks")
            while (x < 1) {
                pregunta4 = prompt("Seleccione un articulo para agregar al carro: \n A - Notebook Acer $350000 \n B - Notebook Lenovo $450000 \n C - Notebook Asus $550000 \n D - Volver")
                switch (pregunta4) {
                    case "A":
                        alert("Usted agrego Notebook Acer al carrito")
                        total = total + 350000
                        alert("Su total parcial es de $" + total)
                        break
                    case "B":
                        alert("Usted agrego Notebook Lenovo al carrito")
                        total = total + 450000
                        alert("Su total parcial es de $" + total)
                        break
                    case "C":
                        alert("Usted agrego Notebook Asus al carrito")
                        total = total + 550000
                        alert("Su total parcial es de $" + total)
                        break
                    default:
                        alert("Letra incorrecta o en minusculas")
                        break
                    case "D":
                        alert("Tu total parcial es de $" + total)
                        x++

                }
            }
            break
        case "C":
            let y = 0
            let pregunta5
            alert("Usted ingreso a Consolas")
            while (y < 1) {
                pregunta5 = prompt("Seleccione un articulo para agregar al carro: \n A - PlayStation 5 $550000 \n B - Xbox One $450000 \n C - Nintendo Switch $400000 \n D - Volver")
                switch (pregunta5) {
                    case "A":
                        alert("Usted agrego PlayStation 5 al carrito")
                        total = total + 550000
                        alert("Su total parcial es de $" + total)
                        break
                    case "B":
                        alert("Usted agrego Xbox One al carrito")
                        total = total + 450000
                        alert("Su total parcial es de $" + total)
                        break
                    case "C":
                        alert("Usted agrego Nintendo Switch al carrito")
                        total = total + 400000
                        alert("Su total parcial es de $" + total)
                        break
                    default:
                        alert("Letra incorrecta o en minusculas")
                        break
                    case "D":
                        alert("Tu total parcial es de $" + total)
                        y++

                }
            }
            break
        case "D":
            let w = 0
            let pregunta6
            alert("Usted ingreso a Periféricos")
            while (w < 1) {
                pregunta6 = prompt("Seleccione un articulo para agregar al carro: \n A - Auriculares Logitech $120000 \n B - Teclado Redragon $150000 \n C - Mouse Razer $60000 \n D - Volver")
                switch (pregunta6) {
                    case "A":
                        alert("Usted agrego Auriculares Logitech al carrito")
                        total = total + 120000
                        alert("Su total parcial es de $" + total)
                        break
                    case "B":
                        alert("Usted agrego Teclado Redragon al carrito")
                        total = total + 150000
                        alert("Su total parcial es de $" + total)
                        break
                    case "C":
                        alert("Usted agrego Mouse Razer al carrito")
                        total = total + 60000
                        alert("Su total parcial es de $" + total)
                        break
                    default:
                        alert("Letra incorrecta o en minusculas")
                        break
                    case "D":
                        alert("Tu total parcial es de $" + total)
                        w++

                }
            }
            break
        case "E":
            let z = 0
            let pregunta7
            alert("Usted ingreso a Pc Master Racer")
            while (z < 1) {
                pregunta7 = prompt("Seleccione un articulo para agregar al carro: \n A - Pc Master Intel $550000 \n B - Pc Master Ryzen $650000 \n C - Pc Master Apple $800000 \n D - Volver")
                switch (pregunta7) {
                    case "A":
                        alert("Usted agrego Pc Master Intel al carrito")
                        total = total + 550000
                        alert("Su total parcial es de $" + total)
                        break
                    case "B":
                        alert("Usted agrego Pc Master Ryzen al carrito")
                        total = total + 650000
                        alert("Su total parcial es de $" + total)
                        break
                    case "C":
                        alert("Usted agrego Pc Master Apple al carrito")
                        total = total + 800000
                        alert("Su total parcial es de $" + total)
                        break
                    default:
                        alert("Letra incorrecta o en minusculas")
                        break
                    case "D":
                        alert("Tu total parcial es de $" + total)
                        z++

                }
            }
            break
        case "F":
            let pregunta8
            let q
            q = 0
            while (q < 1) {
                pregunta8 = prompt("Ingrese la cantidad de cuotas: \n A - Efectivo (10% de descuento) \n B - 1 Cuota (Mismo valor) \n C - 3 Cuotas (30% de recargo) \n D - 6 Cuotas (60% de recargo) \n S - Volver")
                if (pregunta8 == "A") {
                    alert("Usted obtiene un 10% de descuento")
                    let totalFinal
                    let q1
                    q1 = 0
                    totalFinal = cuotas(total, pregunta8)
                    alert("Su total final es de: " + totalFinal)
                    while (q1 < 1) {
                        let tarjeta
                        let codigo
                        let ano
                        tarjeta = prompt("Ingrese su número de tarjeta:")
                        codigo = prompt("ingrese el código de seguridad")
                        ano = prompt("ingrese la año de vencimiento")
                        if ((isNaN(tarjeta) == false) && (isNaN(codigo) == false) && (isNaN(ano) == false) && (tarjeta, codigo, ano !== 0) && (tarjeta, codigo, ano !== " ")) {
                            alert("Felicitaciones su pago fue aceptado por un monto de: $" + totalFinal)
                            alert("Muchas gracias por su compra!")
                            q1++
                            q++
                            registro = false
                        } else {
                            alert("Alguno de los datos ingresados no es un numero")
                        }
                    }
                } else if (pregunta8 == "B") {
                    alert("El valor total no se modifica")
                    let totalFinal
                    let q1
                    q1 = 0
                    totalFinal = cuotas(total, pregunta8)
                    alert("Su total final es de: " + totalFinal)
                    while (q1 < 1) {
                        let tarjeta
                        let codigo
                        let ano
                        tarjeta = prompt("Ingrese su número de tarjeta:")
                        codigo = prompt("ingrese el código de seguridad")
                        ano = prompt("ingrese la año de vencimiento")
                        if ((isNaN(tarjeta) == false) && (isNaN(codigo) == false) && (isNaN(ano) == false) && (tarjeta, codigo, ano !== 0) && (tarjeta, codigo, ano !== " ")) {
                            alert("Felicitaciones su pago fue aceptado por un monto de: $" + totalFinal)
                            alert("Muchas gracias por su compra!")
                            q1++
                            q++
                            registro = false
                        } else {
                            alert("Alguno de los datos ingresados no es un numero")
                        }
                    }
                } else if (pregunta8 == "C") {
                    alert("El valor total en 3 cuotas tiene un 30% de recargo")
                    let totalFinal
                    let q1
                    q1 = 0
                    totalFinal = cuotas(total, pregunta8)
                    alert("Su total final es de: " + totalFinal)
                    while (q1 < 1) {
                        let tarjeta
                        let codigo
                        let ano
                        tarjeta = prompt("Ingrese su número de tarjeta:")
                        codigo = prompt("ingrese el código de seguridad")
                        ano = prompt("ingrese la año de vencimiento")
                        if ((isNaN(tarjeta) == false) && (isNaN(codigo) == false) && (isNaN(ano) == false) && (tarjeta, codigo, ano !== 0) && (tarjeta, codigo, ano !== " ")) {
                            alert("Felicitaciones su pago fue aceptado por un monto de: $" + totalFinal)
                            alert("Muchas gracias por su compra!")
                            q1++
                            q++
                            registro = false
                        } else {
                            alert("Alguno de los datos ingresados no es un numero")
                        }
                    }
                } else if (pregunta8 == "D") {
                    alert("El valor total en 6 cuotas tiene un 60% de recargo")
                    let totalFinal
                    let q1
                    q1 = 0
                    totalFinal = cuotas(total, pregunta8)
                    alert("Su total final es de: " + totalFinal)
                    while (q1 < 1) {
                        let tarjeta
                        let codigo
                        let ano
                        tarjeta = prompt("Ingrese su número de tarjeta:")
                        codigo = prompt("ingrese el código de seguridad")
                        ano = prompt("ingrese la año de vencimiento")
                        if ((isNaN(tarjeta) == false) && (isNaN(codigo) == false) && (isNaN(ano) == false) && (tarjeta, codigo, ano !== 0) && (tarjeta, codigo, ano !== " ")) {
                            alert("Felicitaciones su pago fue aceptado por un monto de: $" + totalFinal)
                            alert("Muchas gracias por su compra!")
                            q1++
                            q++
                            registro = false
                        } else {
                            alert("Alguno de los datos ingresados no es un numero")
                        }
                    }
                } else if (pregunta8 == "S"){
                    q++
                }
                else {
                    alert("Opción no valida ingrese una opción correcta.")
                }
            }
            break
        case "G":
            alert("Se vacío el carro de manera satisfactoria.")
            total = 0
            break
        case "H":
            alert("Su total es de $" + total)
            break
        case "S":
            registro = false
            break
        default:
            alert("Letra incorrecta o en minusculas")
            break
    }
}
/* INTERESES Y DESCUENTOS */
function cuotas(total, cuotas) {
    if (cuotas == "A") {
        total = total * 0.9
    } else if (cuotas == "B") {
        total = total
    } else if (cuotas == "C") {
        total = total * 1.3
    } else if (cuotas == "D") {
        total = total * 1.6
    }
    return total
}