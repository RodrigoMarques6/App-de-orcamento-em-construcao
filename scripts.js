document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM funcionando perfeitamente.')
})

const inputEconomico = document.getElementById('input-economico');
const inputAntecipado = document.getElementById('input-antecipado');
const btnEconomico = document.getElementById('btn-economico');
const btnAntecipado = document.getElementById('btn-antecipado');



btnEconomico.onclick = function createTableOfValues() {



    retiraDivEconomico()
}

function retiraDivEconomico () {
    const divEconomico = document.getElementById('div-economico')
    // divEconomico.style.display = 'none'
    divEconomico.innerHTML = `<table>
    <thead>
        <th>Modalidade</th>
        <th>Taxa</th>
        <th>Você recebe</th>
        <th>Para o cliente</th>

    </thead>
    <tbody>
        <td>Débito</td>
        <td>1,90%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tfoot></tfoot><table>
    <thead>
        <th>Modalidade</th>
        <th>Taxa</th>
        <th>Você recebe</th>
        <th>Para o cliente</th>

    </thead>
    <tbody>
        <td>Débito</td>
        <td>1,90%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tfoot></tfoot>`
}

