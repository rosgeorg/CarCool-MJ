(function(){

    var auto = autos;
    var logo = logos;

    var marca;
    var modelo;
    var presupuesto;
    var transmision;
    var row = document.getElementById('cards-container')

    var autosFiltrados = [];

    function mostrarAutos(lista){
        for (var i = 0; i < lista.length; i++) {
            //Creación de div contenedor de tarjeta
            var col = document.createElement('div');
            col.setAttribute('class', "col-md-4 mt-5")
            row.appendChild(col);
            //Creación de tarjeta con clases de bootstrap
            var card = document.createElement('div');
            card.setAttribute('class', "card auto-cards")
            col.appendChild(card);
            //Creación de imagen para tarjeta de bootstrap
            var bCardImg = document.createElement('img');
            bCardImg.setAttribute('class', "card-img-top");
            if(lista[i].make == "Chevrolet"){
                bCardImg.setAttribute('src', logo[0].Chevrolet)
            }else if(lista[i].make == "Ford"){
                bCardImg.setAttribute('src', logo[0].Ford)
            }else{
                bCardImg.setAttribute('src', logo[0].Nissan)
            }
            card.appendChild(bCardImg)
            //Creación de Cuerpo de tarjeta
            var cuerpo = document.createElement('div');
            cuerpo.setAttribute('class', "card-body");
            card.appendChild(cuerpo);
            //Creación de Párrafo para Nombre
            var nombre = document.createElement('p');
            nombre.setAttribute('class', "card-text");
            nombre.setAttribute('style', "font-weight: bold");
            nombre.innerHTML = lista[i].model;
            cuerpo.appendChild(nombre);
            //Creación de Párrafo para Marca
            var marca = document.createElement('p');
            marca.setAttribute('class', "card-text");
            marca.innerHTML = lista[i].make;
            cuerpo.appendChild(marca);
            //Creación de Párrafo para Modelo
            var modelo = document.createElement('p');
            modelo.setAttribute('class', "card-text");
            modelo.setAttribute('class', "type-font");
            modelo.innerHTML = "Modelo:" + lista[i].year;
            cuerpo.appendChild(modelo);
            //Creación de Párrafo para Colores
            var colores = document.createElement('p');
            colores.setAttribute('class', "card-text");
            colores.innerHTML = "Colores: " + lista[i].colors;
            cuerpo.appendChild(colores);
            //Creación de Párrafo para Precio
            var precio = document.createElement('p');
            precio.setAttribute('class', "card-text");
            precio.innerHTML = "Precio: $" + lista[i].price;
            cuerpo.appendChild(precio);
        }
    }

    const btn = document.querySelector('#cotizar-btn');
    // handle click button
    btn.onclick = function (){
        row.innerHTML='';
        autosFiltrados=[];
        marca = document.querySelector('input[name="marca"]:checked').value;
        //console.log(marca);
        modelo = document.querySelector('input[name="modelo"]:checked').value;
        //console.log(modelo);
        presupuesto = document.getElementById('presupuesto').value;
        //console.log(presupuesto);
        if(presupuesto < 15000 || presupuesto > 150000){
            alert("Por favor introduce un presupuesto de entre $15,000.00 y $150,000.00");
        }else{
            transmision = document.querySelector('input[name="transmision"]:checked').value;
            console.log(transmision);
            //Inicio de proceso de validación
            for(var i=0; i < auto.length; i++){
                if(auto[i].make == marca && auto[i].year == modelo && auto[i].transmision == transmision && presupuesto >= (auto[i].price * 0.2)){
                    autosFiltrados.push(auto[i])
                }
                //console.log(autosFiltrados.length);
            }
            mostrarAutos(autosFiltrados);
        }
    }
})()