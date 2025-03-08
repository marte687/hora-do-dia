
function carregar(){
    var foto = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var aviso = document.querySelector('div#aviso')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h`
    
    if (hora <= 12 && hora >= 6){
        foto.src = 'dia.jpg'
        aviso.innerHTML += 'Bom Dia!'
    }

   else if(hora>=13 && hora <18){
         foto.src = 'tarde.jpg'
         document.body.style.background = 'orange'
         aviso.innerHTML += 'Boa Tarde!'
    }

    else{
        foto.src = 'noite2.png'
        document.body.style.background = '#272727'
        aviso.innerHTML += 'Boa Noite!'
    }
}
