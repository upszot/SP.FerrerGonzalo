let selTransaccion;

// $(document).ready(function () {
//     $('input:radio[name=rango]:checked').change(function () {
//         if ($("input[name='bedStatus']:checked").val() == 'allot') {
//             alert("Allot Thai Gayo Bhai");
//         }
//         if ($("input[name='bedStatus']:checked").val() == 'transfer') {
//             alert("Transfer Thai Gayo");
//         }
//     });
// });

window.addEventListener('load', function() {
    selTransaccion = document.getElementById("selTransaccion");
    cargarSelect(selTransaccion, obtenerTransacciones(datos));
    selTransaccion.addEventListener('change', filtrarDatos);

    
    selRango = document.getElementById("radios");
    //console.log(selRango);

     //cargarSelect2(selRango, obtenerRango(datos));
    
    for(var i = radios.length; i--; ) {
        radios[i].onclick = filtrarDatos;
    }

//*********** no me funciona para actualizar la table con el filtro sin precionar el de transaccion */
     //selRango.addEventListener('change', filtrarDatos);

});
// window.addEventListener('load', function() {
//     selTransaccion = document.getElementById("selTransaccion");
//     cargarSelect(selTransaccion, obtenerTransacciones(datos));
//     selTransaccion.addEventListener('change', filtrarDatos);

// });

function obtenerTransacciones(arr) {
    return arr.map(obj => obj.transaccion)
        .unique()
        .sort();
}

function obtenerRango(arr) {
    return  $('input:radio[name=rango]:checked').val();
}

function cargarSelect(sel, arr) {
    limpiarSelect(sel);
    let option = document.createElement('option');
    option.value = "Todos";
    option.textContent = "Todos";
    sel.appendChild(option);
    arr.forEach(element => {
        let option = document.createElement('option');
        option.value = element;
        option.textContent = element;
        sel.appendChild(option);
    });
}
function cargarSelect2(sel, arr) {
    //limpiarSelect(sel);
    let option = document.createElement('option');
    option.value = "Todos";
    option.textContent = "Todos";
    sel.appendChild(option);
    arr.forEach(element => {
        let option = document.createElement('option');
        option.value = element;
        option.textContent = element;
        sel.appendChild(option);
    });
}

function limpiarSelect(sel) {
    //sel.options.length = 0;
    while (sel.hasChildNodes()) {
        sel.removeChild(sel.firstElementChild);
    }
}

Array.prototype.unique = function() {
    return [...new Set(this)];
}