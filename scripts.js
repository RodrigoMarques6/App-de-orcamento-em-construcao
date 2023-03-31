document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM funcionando perfeitamente.");
});

const inputAntecipado = document.getElementById("input-antecipado");
const btnEconomico = document.getElementById("btn-economico");
const btnAntecipado = document.getElementById("btn-antecipado");
const divEconomico = document.getElementById("div-economico");
const dialog = document.querySelector('dialog');
const ativar = document.getElementById('ativar');
const dialogEconomico = document.getElementById('dialog-economico')

function createTableOfValues () {
    btnEconomico.addEventListener('click', function() {
        showModal();
        animation();
        addTableOnDialog();
        addButtonOnDialog();
        calculaDebitoEconomico();
        calculaCredito1x();
    })
};


setTimeout(() => {
    createTableOfValues();

}, 3000);



function animation () {
    dialogEconomico.classList.toggle('animar')
}

function showModal () {
    dialog.showModal();
}

function addTableOnDialog() {
  const onDialog = document.getElementById('table-dialog-economico');
  onDialog.innerHTML = `
    <thead>
        <th>Modalidade</th>
        <th>Taxa</th>
        <th>Desconto</th>
        <th>Receba no total</th>
        <th>Receba por mês</th>
        <th>Seu cliente paga</th>
    </thead>
    <tbody>
        <td>Débito</td>
        <td>1,9%</td>
        <th>${calculaDebitoEconomico.innerHTML = `R$ ` + calculaDebitoEconomico()}</th>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (1x)</td>
        <td>3,7%</td>
        <th>${calculaCredito1x.innerHTML = `R$ ` + calculaCredito1x()}</th>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (2x)</td>
        <td>4,3%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (3x)</td>
        <td>4,3%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (4x)</td>
        <td>4,3%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (5x)</td>
        <td>4,3%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (6x)</td>
        <td>4,3%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (7x)</td>
        <td>4,3%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (8x)</td>
        <td>4,3%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (9x)</td>
        <td>4,3%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (10x)</td>
        <td>4,3%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>`;
};

function addButtonOnDialog () {
    const addButtonOnDialog = document.getElementById('div-dialog-economico');
    addButtonOnDialog.innerHTML = `<button>Voltar</button>`
}

// Parte dos cálculos:

function calculaDebitoEconomico () {
    const inputEconomico = document.getElementById('input-economico');
    // const valueDebito = document.getElementById('value-debito');
    // const valueOfInput = parseInt(inputEconomico.value);
    // const valueOfDebito = parseInt(valueDebito);
    // console.log(valueOfInput * valueOfDebito)
    const retorna = inputEconomico.value * (1.9 / 100);
    return retorna.toFixed(2);
}

function calculaCredito1x () {
    const inputEconomico = document.getElementById('input-economico');
    const retorna = inputEconomico.value * (3.7 / 100);
    return retorna.toFixed(2);
}

function calculaCredito2xA12x () {
    // Pensar aqui em utilizar uma estrutura de repetição
}



