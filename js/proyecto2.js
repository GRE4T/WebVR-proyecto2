'use strict'

//Cero significa nada
//Uno significa  muro
//Dos significa jugador
//Tres Siginica premio
var mapa=[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 0, 0, 0, 0, 3, 1, 3, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 3, 1, 0, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 3, 0, 0, 0, 0, 1, 0, 1],
  [1, 3, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 3, 1, 0, 0, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var tamano_pared=5;
var alto_pared=3;
var muro;
var muros=document.getElementById('muros');
var premio;
var premios=document.getElementById('premios');
var score=document.querySelector('#score');

for(var i=0; i<mapa.length;i++){
	for(var x=0; x<mapa[i].length; x++){	
		var posicion=(i - mapa.length/2)*tamano_pared+' '+ 1.5 + ' '+(x- mapa[i].length/2)*tamano_pared;

		if(mapa[i][x]==0){
			continue;
		}else if(mapa[i][x]==1){
			muro=document.createElement('a-box');
			muros.appendChild(muro);
			muro.setAttribute('color','#fff');
			muro.setAttribute('material','src: #pared');
			muro.setAttribute('width',tamano_pared);
			muro.setAttribute('depth',tamano_pared);
			muro.setAttribute('height',alto_pared);
			muro.setAttribute('position',posicion);
			muro.setAttribute('static-body','');

			
		}else if(mapa[i][x]==2){
			//Jugador
			document.getElementById('jugador').setAttribute('position',posicion);
		}else if(mapa[i][x]==3){
			//Points
			premio=document.createElement('a-sphere');
			premios.appendChild(premio);
			premio.setAttribute('position',posicion);
			premio.setAttribute('class','premio');
			premio.setAttribute('color','skyblue');
			premio.setAttribute('radius',1);

		}
	}
}

var premios_recoger=Array.from(document.querySelectorAll('.premio'));//querySelectorAll agarra un array con todos los objetos que tenga la clase
var cantidadScore=premios_recoger.length;

score.setAttribute('value','Te faltan '+cantidadScore+' para ganar');

premios_recoger.forEach(elemento=>{
	elemento.addEventListener('click',function(){
		elemento.setAttribute('visible','false');
		cantidadScore= cantidadScore-1;
		if(cantidadScore<=0){
			score.setAttribute('value','!GANASTE!');

		}else{
			score.setAttribute('value','Te faltan '+cantidadScore+' para ganar');
		}	
	});
});