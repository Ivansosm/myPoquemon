let ataqueXiuamon
let pcAttack 
let psPC = 3
let psPlyr = 3
let elegido = ""
let elegidoPC = ""


//esta funcion escucha cuando el usaurio confirma su eleccion mediante el boton elegir, y utilizando el metodo click llama a la funcion Yoteelijo 
function iniciarJuego(){

    let attackSection = document.getElementById('seleccionar-ataque')
    attackSection.style.display = 'none'
    
    let replaySection = document.getElementById('replay')
    replaySection.style.display = 'none'

    let xiuamonButton = document.getElementById('button_yotelijo')
    xiuamonButton.addEventListener('click',yoTeElijo)
    xiuamonButton.addEventListener('click',pokeball)
    xiuamonButton.addEventListener('click',pokeballPC)
    
               

    let btnGata = document.getElementById('btn_LanzaLlamas')
    btnGata.addEventListener('click',usaGata)
   
    
    let btnSien = document.getElementById('btn_ChorroDagua')
    btnSien.addEventListener('click',usaSien)
    let btnSu_quysca = document.getElementById('btn_HojasNavaja')
    btnSu_quysca.addEventListener('click',usaSu_quysca)

    let reiniciarBtn = document.getElementById('replay')
    reiniciarBtn.addEventListener('click',revancha)
     
}

//funcion para verificar eleccion de los radiobutton
function yoTeElijo(){
    let xiuamonSection = document.getElementById('seleccionar-xiuamon')
    xiuamonSection.style.display = 'none'

    let attackSection = document.getElementById('seleccionar-ataque')
    attackSection.style.display = 'flex'
   
    let elijoHelix = document.getElementById('helix_aspersa') 
    let elijoGuabina = document.getElementById('guabina')
    let eligoStenocercus = document.getElementById('stenocercus')
    let spanXiuamonElegido = document.getElementById('xiuamon_elegido')
    //let elegido = ""
       
    if (elijoHelix.checked){
        spanXiuamonElegido.innerHTML = 'Helix Aspersa🐌'
        elegido = 'Helix Aspersa🐌'
    }else if(elijoGuabina.checked){
        spanXiuamonElegido.innerHTML = 'Guabina 🐟'
        elegido = 'Guabina 🐟'
    }else if(eligoStenocercus.checked){
        spanXiuamonElegido.innerHTML = 'Stenocercus 🦎'
        elegido = 'Stenocercus 🦎'
    }else{
        alert("👨‍🔬 Elije tu Xiuamon para la esta Xiuabatalla 👨‍🔬")
       // xiuamonSection.style.display = 'block'
        //attackSection.style.display = 'none'
        location.reload()

    }
    maestroPc()
    //return elegido
}

//funcion para que la maquina eliga xiuamon
function maestroPc(){
    //let elegidoPC
    let pc = aleatorio(1,3)
    let spanXiuamonOtrMstro = document.getElementById('xiuamon_otrMstro')
       
    if(pc == 1){
        spanXiuamonOtrMstro.innerHTML ='Helix Aspersa 🐌'
        elegidoPC = 'Helix Aspersa🐌'
    }else if(pc == 2){
        spanXiuamonOtrMstro.innerHTML ='Guabina 🐟'
        elegidoPC = 'Guabina 🐟'
    }else{
        spanXiuamonOtrMstro.innerHTML = 'Stenocercus 🦎'
        elegidoPC = 'Stenocercus 🦎'
    }
    //return elegidoPC

}

//Esta funcion anuncia que Xiuamon eligio el Jugador
function pokeball(){
    if(elegido == 'Helix Aspersa🐌'){
        alert('🗣️ 🐌Helix Aspersa🐌 Yo te Eligo!!!')
    }else if(elegido == 'Guabina 🐟'){
        alert('🗣️ 🐟Guabina 🐟 Yo te Eligo!!!')
    }else if(elegido == 'Stenocercus 🦎'){
        alert('🗣️ 🦎Stenocercus 🦎 Yo te Eligo!!!')
    }

}

//Esta funcion anuncia que Xiuamon eligio el Pc
function pokeballPC(){
    if(elegidoPC == 'Helix Aspersa🐌'){
        alert('🤖 🐌Helix Aspersa🐌 Yo te Eligo!!!')
    }else if(elegidoPC == 'Guabina 🐟'){
        alert('🤖 🐟Guabina 🐟 Yo te Eligo!!!')
    }else if(elegidoPC == 'Stenocercus 🦎'){
        alert('🤖 🦎Stenocercus 🦎 Yo te Eligo!!!')
    }

}

function usaGata(){

   ataqueXiuamon = "🔥Gata🔥"
   alert("🗣️"+elegido+" usa lanza llamas!!! 🔥🔥🔥")
   ataquePc()
      
}

function usaSien(){
   
   ataqueXiuamon = "💧Sien💧"
   alert("🗣️"+elegido+" usa chorro de agua!!! 🌊🌊🌊")
   ataquePc()
    
}

function usaSu_quysca(){
   
    ataqueXiuamon = "🍃Su_quysca🍃"
    alert("🗣️"+elegido+" usa hojas navaja!!!  🍃🍃🍃")
    ataquePc()
    
}

//funcion para que la maquina eliga ataque
function ataquePc(){
    let pcatck = aleatorio(1,3)
    
    if(pcatck == 1){
       pcAttack = "🔥Gata🔥"
    }else if(pcatck == 2){
       pcAttack = "💧Sien💧"
    }else{
       pcAttack = "🍃Su_quysca🍃"
    }
    
    xiuaBatalla()
    
}

//Combate
function xiuaBatalla(){
    
    let spanpsPlyr = document.getElementById('psPlyr')
    let spanpsPC = document.getElementById('psPC')
                        
    if(ataqueXiuamon == pcAttack){
       mensajesBatalla(" Empate 🕊️🕊️🕊️")
    }else if(ataqueXiuamon == "🔥Gata🔥" && pcAttack == "🍃Su_quysca🍃"){
       mensajesBatalla("💠Tu ganas💠")
       psPC--
       spanpsPC.innerHTML = ('🩶'+psPC)
    }else if(ataqueXiuamon == "💧Sien💧" && pcAttack == "🔥Gata🔥"){
       mensajesBatalla("💠Tu ganas💠")
       psPC--
       spanpsPC.innerHTML = ('🩶'+psPC)
    }else if(ataqueXiuamon == "🍃Su_quysca🍃" && pcAttack == "💧Sien💧"){
       mensajesBatalla("💠Tu ganas💠")
       psPC--
       spanpsPC.innerHTML = ('🩶'+psPC)
    }else{
       mensajesBatalla("💠Gana Maestro Robert💠")
       psPlyr--
       spanpsPlyr.innerHTML = ('❤️'+psPlyr)
    }
    
    ps()
}

function ps(){
   
    if(psPC == 0){
        mensajesGanador("🏆TU GANAS!!!🏆")
        alert("🏆TU GANAS!!!🏆")
    }else if(psPlyr == 0){
        mensajesGanador("🏆🤖GANA MAESTRO ROBERTO!!!🤖🏆")
        alert("🏆🤖GANA MAESTRO ROBERTO!!!🤖🏆")

    }
    
}

function mensajesBatalla(resultado){
    let sectionMensajes =document.getElementById('resultado')
    let attackPlyr = document.getElementById('ataque_plyr')
    let attackPc =document.getElementById('ataque_pc')

    let newAttckPlyr = document.createElement('p')
    let newAttckPc = document.createElement('p')

    //let prrfo = document.createElement('p')
   // prrfo.innerHTML = 'Tu Ordenaste Usar: ' + ataqueXiuamon + ', Maestro 🤖 robert Ordeno Usar: ' + pcAttack + ' 🚩🔊🚩 ' + resultado

    sectionMensajes.innerHTML = resultado
    attackPlyr.innerHTML = ataqueXiuamon
    attackPc.innerHTML = pcAttack


    attackPlyr.appendChild(newAttckPlyr)
    attackPc.appendChild(newAttckPc)
}

function mensajesGanador(resultadoFinal){
    let sectionMensajes =document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal
    
   
    let btnGata = document.getElementById('btn_LanzaLlamas')
    btnGata.disabled = true
    let btnSien = document.getElementById('btn_ChorroDagua')
    btnSien.disabled = true
    let btnSu_quysca = document.getElementById('btn_HojasNavaja')
    btnSu_quysca.disabled = true

    let replaySection = document.getElementById('replay')
    replaySection.style.display = 'block'
}

function revancha(){
    location.reload()
}

//funcion para generar numero aleatorio
function aleatorio(minRand,maxRand){
    return Math.floor(Math.random()*(maxRand-minRand+1)+minRand)
}

//al cargar todos los archivos html verificando con el metodo load, se invoca la funcon iniciarJuego
window.addEventListener('load', iniciarJuego)