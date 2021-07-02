var carta = document.querySelectorAll('#vuelta img');
cuerpo = document.getElementById(".container");

for(var i=0; i<carta.length;i++){
    carta[i].addEventListener('click',girarCarta)
    function girarCarta(){
                            cuerpo.src=this.dataset.target;
                        }
}