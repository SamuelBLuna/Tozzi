let container = document.querySelector('.container')
let dataHora = new Date

const dia = dataHora.getDay();

const hora = dataHora.getHours()

const minutos = dataHora.getMinutes()

let newMinutos;
if(minutos < 10) {
    newMinutos = '0' + minutos.toString()
} else {
    newMinutos = minutos
}

const horario = hora + ':'+ newMinutos


const turmas = [
    '1A', '1B', '1C', '1D', '1E', '1F', '2A', '2B', '2C', '2D', '3A', '3B', '3C'
]
let salas = ['Laboratorio', 'S. Leitura']
for(let i = 1; i <= 16; i++) {
    salas.push('sala ' + i)
}
salas.push('Maker')
let cronograma = {
    turmas: [],
    salas: []
}


switch(dia) {
    case 0: finalSemana() 
    case 1: segundaFeira() 
    // case 2: tercaFeira() 
    // case 3: quartaSemana() 
    case 4: quintaFeira() 
    // case 5: sextaFeira() 
    // case 6: finalSemana() 
}

function segundaFeira() {
    cronograma.turmas = turmas
    if(horario > '7:00' && horario < '8:45') {
            cronograma.salas.push(salas[14], salas[0], salas[5], salas[9], salas[4], salas[3], salas[17], salas[8], salas[15], salas[16], salas[10], salas[6], salas[11])        
    } else if(horario > '8:45' && horario < '9:30') {
            cronograma.salas.push(salas[4], salas[14], salas[9], salas[13], salas[8], salas[2], salas[17], salas[12], salas[7], salas[16], salas[1], salas[2], salas[6])        
    } else if(horario > '9:45' && horario < '10:30') {
            cronograma.salas.push(salas[5], salas[14], salas[9], salas[13], salas[8], salas[2], salas[17], salas[12], salas[7], salas[15], salas[11], salas[2], salas[6])        
    } else if(horario > '13:30' && horario < '14:15') {
        cronograma.salas.push(salas[8], salas[11], salas[12], salas[10], salas[3], salas[17], salas[2], salas[1], salas[18], salas[5], salas[4], salas[16], salas[13])        
    } else if(horario > '14:30' && horario < '16:00') {
        cronograma.salas.push(salas[2], salas[5], salas[0], salas[12], salas[17], salas[11], salas[7], salas[15], salas[6], salas[10], salas[4], salas[8], salas[16])        
    }

    screan()
}
function quintaFeira() {
    cronograma.turmas = turmas
    if(horario > '7:00' && horario < '8:45') {
            cronograma.salas.push(salas[5], salas[14], salas[2], salas[4], salas[11], salas[8], salas[15], salas[9], salas[10], salas[17], salas[3], salas[16], salas[13])        
    } else if(horario > '8:45' && horario < '9:30') {
            cronograma.salas.push(salas[7], salas[2], salas[10], salas[17], salas[6], salas[3], salas[15], salas[16], salas[4], salas[8], salas[14], salas[5], salas[9])        
    } else if(horario < '10:31' || horario > '9:45') {
            cronograma.salas.push(salas[7], salas[2], salas[10], salas[17], salas[6], salas[3], salas[15], salas[16], salas[4], salas[1], salas[14], salas[25], salas[9])        
    } else if(horario > '10:30' && horario < '11:15') {
            cronograma.salas.push(salas[13], salas[7], salas[5], salas[11], salas[4], salas[0], salas[6], salas[12], salas[3], salas[10], salas[17], salas[14], salas[16])        
    } else if(horario > '11:15' && horario < '12:00') {
        cronograma.salas.push(salas[13], salas[7], salas[5], salas[11], salas[9], salas[0], salas[6], salas[12], salas[3], salas[10], salas[17], salas[14], salas[16])        
    } else if(horario > '13:30' && horario < '14:15') {
        cronograma.salas.push(salas[14], salas[5], salas[9], salas[13], salas[3], salas[10], salas[2], salas[12], salas[1], salas[16], salas[4], salas[17], salas[6])        
    } else if(horario > '14:30' && horario < '16:00') {
        cronograma.salas.push(salas[2], salas[13], salas[7], salas[3], salas[0], salas[10], salas[5], salas[6], salas[11], salas[4], salas[16], salas[8], salas[17])        
    }

    screan()
}

function screan() {
    if(cronograma.salas.length != 0){
            for(let i = 0;i < turmas.length; i++ ){
                let div = document.createElement('div')
                div.classList.add('cards')
                div.innerHTML = `
                    <p>
                        ${turmas[i]} 
                    </p>
                    <p>
                        ${cronograma.salas[i]} 
                    </p>

                    <input class="hiden" type="number">
                `
                container.appendChild(div);
                container.appendChild(div);
        }
    }
}