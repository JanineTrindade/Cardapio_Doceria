var contador = 1; //variável pública criada fora da function
        var img1="imagens/img1.jpg";
        var img2="imagens/img2.jpg";
        var img3="imagens/img3.jpg";
        var img4="imagens/img4.jpg";
        var tempo=1500; //1500(milessegundos) : 1000 (milessegundo) = 1,5s
        var exibir=setInterval("Exibindo()",tempo);
         // Inicia o looping trocando imagens de 1,5 em 1,5s
      
        function Exibindo() 
        {  
            document.images["slide"].src=eval("img"+contador); 
            // document.getElementById("v"+contador).checked=true;
                  
            if (contador<4)
                contador++; /*contador=contador+1;*/
            else
                contador=1;
        }
                
        function Muda(x)
        {
            clearInterval(exibir);//interrompe o que está rodando no setInterval
            contador=x;
            exibir=setInterval("Exibindo()",tempo); //recomeçar o looping
        }

        //////////////////////////

        

    function removerChecked() {
        var ele = document.getElementsByName("gender");
        for(var i=0;i<ele.length;i++){
           ele[i].checked = false;
        }
    }
