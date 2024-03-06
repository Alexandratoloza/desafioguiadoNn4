const ArrayTraumatologias = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
]

ArrayTraumatologias.unshift(
    { hora: '9:00', especialista: 'RENÉ POBLETE', paciente: 'JUANA PEREZ', rut: '25.921.108-5', prevision: 'FONASA' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' }
    
    );
    
    const pacientesFonasa = ArrayTraumatologias.filter(paciente => paciente.prevision === 'FONASA');
    //console.log("Pacientes con previsión FONASA:");
    //console.log(pacientesFonasa);
//console.log (ArrayTraumatologias);

const ArrayDentales = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },


]
const pacientesIsapre = ArrayDentales.filter(paciente => paciente.prevision === 'ISAPRE');

//console.log("Pacientes con previsión ISAPRE:");
//console.log(pacientesIsapre);


const arrayRadiologias = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },

]

arrayRadiologias.pop()
//console.log (arrayRadiologias);
arrayRadiologias.shift()
// console.log( arrayRadiologias);


const radiologia = document.querySelector('#radiologias')
const traumatologia = document.querySelector('#traumatologias')
const dental = document.querySelector('#dental')


radiologia.textContent = `Radiología: Primera atención ${arrayRadiologias[0].paciente} - ${arrayRadiologias[0].prevision} |  Última atención: ${arrayRadiologias[arrayRadiologias.length - 1].paciente} - ${arrayRadiologias[arrayRadiologias.length - 1].prevision}`
traumatologia.textContent = `Traumatologia: Primera Atención ${ArrayTraumatologias[0].paciente} - ${ArrayTraumatologias[0].prevision} | Última Atencion: ${ArrayTraumatologias[ArrayTraumatologias.length - 1].paciente} - ${ArrayTraumatologias[ArrayTraumatologias.length - 1].prevision}`
dental.textContent = `Dentales: Primera Atención $${ArrayDentales[0].paciente} - ${ArrayDentales[0].prevision} | última Atención: ${ArrayDentales[ArrayDentales.length - 1].paciente} - ${ArrayDentales[ArrayDentales.length - 1].prevision}`

//tabla del dom 

const tablaRadiologia = document.querySelector('#tablaRadiologia')
const tablaTraumatologias = document.querySelector('#tablaTraumatologia')
const tablaDental = document.querySelector('#tablaDentales')

//iterrar sobre el array 
for (const item of arrayRadiologias) {
  tablaRadiologia.innerHTML += `
    <tr>
        <td> ${item.hora}</td>
        <td>${item.especialista}</td>
        <td > ${item.paciente}</td>
        <td>${item.rut} </td>
        <td > ${item.prevision}</td>
    </tr> `
}
const tablaTraumatologia = document.querySelector('#tablaTraumatologia')
for (const item of ArrayTraumatologias) {
  tablaTraumatologia.innerHTML += `
    <tr>
        <td> ${item.hora}</td>
        <td>${item.especialista}</td>
        <td > ${item.paciente}</td>
        <td>${item.rut} </td>
        <td > ${item.prevision}</td>
    </tr> 
    `
}
const tablaDentales = document.querySelector('#tablaDentales')
for (const item of ArrayDentales) {
  tablaDentales.innerHTML += `
    <tr><td> ${item.hora}</td>
    <td>${item.especialista}</td>
    <td > ${item.paciente}</td>
    <td>${item.rut} </td>
        <td > ${item.prevision}</td>
    </tr> 
    `
}

tablaDentales

document.write(`<p>Cantidad de atenciones para Radiología: ${arrayRadiologias.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${ArrayTraumatologias.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${ArrayDentales.length}</p>`);


document.write(`<p>Primera atencion: ${arrayRadiologias[0].paciente} - ${arrayRadiologias[0].prevision} | Última atención: ${arrayRadiologias[arrayRadiologias.length - 1].paciente} - ${arrayRadiologias[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);



const PrevisionFonasa = document.querySelector('#PrevisionFonasa')
for( const item of ArrayTraumatologias){
    PrevisionFonasa.innerHTML += `
    <tr>
    <td> ${item.paciente}</td>
    <td>${item.rut} </td>
    <td > ${item.prevision}</td>
  </tr>`
}

const PrevisionIsapre = document.querySelector('#PrevisionIsapre')
for( const item of ArrayDentales){
    PrevisionIsapre.innerHTML += `
    <tr>
    <td> ${item.paciente}</td>
    <td>${item.rut} </td>
    <td > ${item.prevision}</td>
  </tr>`
}

