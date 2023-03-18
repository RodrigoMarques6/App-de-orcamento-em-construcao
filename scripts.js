document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM funcionando perfeitamente.");
});

const inputEconomico = document.getElementById("input-economico");
const inputAntecipado = document.getElementById("input-antecipado");
const btnEconomico = document.getElementById("btn-economico");
const btnAntecipado = document.getElementById("btn-antecipado");
const divEconomico = document.getElementById("div-economico");
const dialog = document.querySelector('dialog');

btnEconomico.onclick = function createTableOfValues() {
  addOnDialog();
  showModal();
};

function showModal () {
    dialog.showModal();
}

function addOnDialog() {
  const onDialog = document.getElementById('dialog-economico');
  onDialog.innerHTML = `<table>
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
    <tfoot></tfoot>`;
}
