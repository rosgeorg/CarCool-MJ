(function(){
    var boton_1 = document.getElementById('option1');
    var boton_2 = document.getElementById('option2');
    var boton_3 = document.getElementById('option3');

/*     var boton_value; */

    const btn = document.querySelector('#btn');
    // handle click button
    btn.onclick = function () {
        var boton_value = document.querySelector('input[name="options"]:checked').value;
        console.log(boton_value);
        }

    
/*     
    console.log(boton_value);
 */
 /*    function getCheckedRadio(radio_group) {
        for (var i = 0; i < radio_group.length; i++) {
            var button = radio_group[i];
            if (button.checked) {
                return button;
            }
        }
        return undefined;
    }
    var checkedButton = getCheckedRadio(document.forms.botones.elements.options);
    if (checkedButton) {
        console.log("The value is " + checkedButton.value);
    }
     */


 /*    if(document.getElementById('option1').checked){
        boton_value = document.getElementById('option1').value;
        console.log(boton_value);
    }else if(boton_2.checked){
        boton_value = boton_2.value;
        console.log(boton_value);
    }else{
        boton_value = boton_3.value;
        console.log(boton_value);
    }
     */
    
})()