document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM funcionando perfeitamente.");
});

const inputEconomico = document.getElementById("input-economico");
const inputAntecipado = document.getElementById("input-antecipado");
const btnEconomico = document.getElementById("btn-economico");
const btnAntecipado = document.getElementById("btn-antecipado");
const divEconomico = document.getElementById("div-economico");
const dialog = document.querySelector('dialog');
const ativar = document.getElementById('ativar');
const dialogEconomico = document.getElementById('dialog-economico')

function createTableOfValues () {
    btnEconomico.addEventListener('click', function () {
        addOnDialog();
        showModal();
        animation();
    })
};

function animation () {
    dialogEconomico.classList.toggle('animar')
}

function showModal () {
    dialog.showModal();
}

function addOnDialog() {
  const onDialog = document.getElementById('table-dialog-economico');
  onDialog.innerHTML = `
    <thead>
        <th>Modalidade</th>
        <th>Taxa</th>
        <th>Receba no total</th>
        <th>Receba por mês</th>
        <th>Seu cliente paga</th>
    </thead>
    <tbody>
        <td>Débito</td>
        <td>1,9%</td>
        <td value=""></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (1x)</td>
        <td>3,0%</td>
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

setInterval(function () {
    createTableOfValues();
}, 2000)

