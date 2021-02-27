function verificar(){
    var data =new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[erro!] verifique os dados e tente novamente')
    }
    else{
        var fsex=document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var gênero= ''
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if(fsex[0].checked){
            gênero ='Homem'
            if(idade >=0 && idade< 10){
                img.setAttribute('src','homembebe.png')
            }
            else if(idade < 21){
                img.setAttribute('src','homemjovem.png')
            }
            else if(idade<50){
                img.setAttribute('src','homemjovem.png')
                
            }
            else{
                img.setAttribute('src','homemvelho.png')
            }
        }else{
             gênero="Mulher"
            if(idade >=0 && idade< 10){
                img.setAttribute('src','mulherbebe.png')
            }
            else if(idade < 21){
                img.setAttribute('src','mulherjovem.png')

            }
            else if(idade<50){
                img.setAttribute('src','mulherjovem.png')
                
            }
            else{
                img.setAttribute('src','mulheridosa.png')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}    
