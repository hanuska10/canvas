window.addEventListener('load', () => {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    let btnCreate = document.querySelector('#createLines');
    btnCreate.addEventListener('click', () => {
        ctx.beginPath();
        ctx.moveTo(10,10);
        ctx.lineTo(180, 20);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'green';
        ctx.stroke()
    })

    let face = document.querySelector('#face');
    let content = face.getContext('2d');
    let btnArco = document.querySelector('#createArco');
    btnArco.addEventListener('click', () => {
        content.clearRect(0,0,200,200);
        content.beginPath();
        content.arc(75,75,50,0, Math.PI*2, true);
        content.moveTo(110, 75);
        content.arc(75,75,35, 0, Math.PI, false);
        content.moveTo(65,65);
        content.arc(60, 65, 5, 0, Math.PI*2, true);
        content.moveTo(95,65);
        content.arc(90, 65, 5, 0, Math.PI*2, true);
        content.stroke()
        content.closePath()        
    })

    let square = document.querySelector('#square');
    let cuadrado = square.getContext('2d')
    let btnCuadrado = document.querySelector('#createcuadrado');
    btnCuadrado.addEventListener('click', () => {
        cuadrado.clearRect(0,0,200,200);
        cuadrado.moveTo(100, 100);
        cuadrado.quadraticCurveTo(180, 20, 200, 200);
        cuadrado.stroke();
        cuadrado.closePath()
    });

    let cur = document.querySelector('#curvas');
    let curvas = cur.getContext('2d');
    let btnCurvas = document.querySelector('#createCurvas');

    btnCurvas.addEventListener('click', () => {
        curvas.clearRect(0,0,200,200);
        // curvas.beginPath();
        // curvas.moveTo(10, 200);
        // curvas.bezierCurveTo(40,10,160,190, 180,20)
        curvas.moveTo(100,100)
        curvas.bezierCurveTo(150,200,250,0,300,120)

        curvas.moveTo(100,200);
        curvas.bezierCurveTo(150,300,250,100,300,220);

        curvas.moveTo(100,200)
        curvas.lineTo(100, 100)
        
        curvas.moveTo(300,220)
        curvas.lineTo(300,120)
        
        curvas.stroke();
        curvas.closePath();
    })


})