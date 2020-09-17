// window.onload( function (){

// });

window.addEventListener('load', function () {

    // Desafío 1-1
    let colorPicker1 = document.getElementById('color-picker-1');
    
    colorPicker1.addEventListener('change', function () {
        let colorBox1 = document.getElementById(colorPicker1.dataset.target);
        setTimeout(() => {
            colorBox1.style.backgroundColor = colorPicker1.value;
        }, 3000);
    })

    // Desafío 1-2
    let colorPicker2 = document.getElementById('color-picker-2');
    let colorBox2 = document.getElementById('color-box-2');
    let btnStart = document.getElementById('btn-start');
    let btnStop = document.getElementById('btn-stop');

    let intervalColorToggleBox2 = null;

    colorPicker2.addEventListener('change', function () {
        colorBox2.style.backgroundColor = this.value;
    });

    btnStart.addEventListener('click', function () {
        intervalColorToggleBox2 = setInterval( () => {
            colorBox2.style.backgroundColor = colorBox2.style.backgroundColor == 'white' ? colorPicker2.value: 'white';
        }, 2000);
    });

    btnStop.addEventListener('click', function () {
        clearInterval(intervalColorToggleBox2);
    });

    // Desafío 1-3
    let colorPicker3 = document.getElementById('color-picker-3');
    let btnColorChanger = document.getElementById('color-changer');
    let colorBox3 = document.getElementById('color-box-3');

    colorPicker3.addEventListener('change', function () {
        btnColorChanger.dataset.color = this.value;
    });

    btnColorChanger.addEventListener('click', function () {
        setTimeout(() => {
            colorBox3.style.backgroundColor = this.dataset.color;
        }, 5000);
    });

});



