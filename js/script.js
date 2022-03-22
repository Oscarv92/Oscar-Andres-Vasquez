function calculo() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = (parseInt(num1) / (parseInt(num2) * parseInt(num2))) * 10000;

    document.getElementById('resultado').value = resultado;

    num1 = document.getElementById('num1').value = "";
    num2 = document.getElementById('num2').value = "";

    if (parseInt(resultado) < 18.5) {
        alert("Se encuentra bajo de peso");
    } else if (parseInt(resultado) < 25) {
        alert("Se encuentra bien de peso");
    } else if (parseInt(resultado) < 30) {
        alert("Tiene sobre peso");
    } else if (parseInt(resultado) >= 30) {
        alert("Presenta obesidad, consulte su medico");
    }
}

function convertir() {
    let peso = document.getElementById('peso').value;
    let cantidad = parseInt(peso) * 0.031228099;

    document.getElementById('cantidad').value = cantidad;
}

function tabla() {
    const tabla = document.getElementById('tabla');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let dosis = document.getElementById('dosis').value;

    tabla.innerHTML += `<tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>${dosis}</td>
    </tr>`

    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('edad').value = "";
    document.getElementById('dosis').value = "";
}

function basicosinhd() {
    let cantidadtv = document.getElementById('tv1').value;
    let plan = 45000;
    let total = cantidadtv * plan;

    Swal.fire({
        title: 'El valor a pagar es de ' + total,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

function basicoconhd() {
    let cantidadtv = document.getElementById('tv2').value;
    let plan = 60000;
    let total = cantidadtv * plan;

    Swal.fire({
        title: 'El valor a pagar es de ' + total,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

function plussinhd() {
    let cantidadtv = document.getElementById('tv3').value;
    let plan = 75000;
    let total = cantidadtv * plan;

    Swal.fire({
        title: 'El valor a pagar es de ' + total,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

function plusconhd() {
    let cantidadtv = document.getElementById('tv4').value;
    let plan = 90000;
    let total = cantidadtv * plan;

    Swal.fire({
        title: 'El valor a pagar es de ' + total,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}