document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM funcionando perfeitamente.");
});

const inputAntecipado = document.getElementById("input-antecipado");
const btnEconomico = document.getElementById("btn-economico");
const btnAntecipado = document.getElementById("btn-antecipado");
const divEconomico = document.getElementById("div-economico");
// const dialog = document.querySelector('dialog');
const ativar = document.getElementById('ativar');
const dialogEconomico = document.getElementById('dialog-economico')


function createTableOfValues() {
    btnEconomico.addEventListener('click', function () {
        showModal();
        animation();
        addTableOnDialog();
        addButtonBackOnDialog();
        addButtonModelOnDialogAndAddModel();
        calculaDebitoEconomico();
        calculaCredito1x();
        // addTextOnTable();
    })
};


setTimeout(() => {
    createTableOfValues();

}, 1000);



function animation() {
    dialogEconomico.classList.toggle('animar')
}

function showModal() {
    dialogEconomico.showModal();
}

function addTextOnTable() {
    const addAntesDaTable = document.getElementById('divAntesDaTable');
    const inputEconomico = document.getElementById('input-economico');
    addAntesDaTable.innerHTML = `<h2>Tabela válida para um projeto de R$ ${inputEconomico.value}</h2>`
}

function addTableOnDialog() {
    addTextOnTable()
    const onDialog = document.getElementById('table-dialog-economico');
    onDialog.innerHTML = `
    <tbody>
        <th>Modalidade</th>
        <th>Taxa</th>
        <th>Desconto</th>
        <th>Receba no total</th>
        <th>Receba por mês</th>
        <th>Seu cliente paga</th>
    </tbody>
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
        <td></td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (2x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (3x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (4x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (5x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (6x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (7x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (8x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (9x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (10x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
        <td>Crédito (11x)</td>
        <td>4,9%</td>
        <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
        <td value=""></td>
        <td value=""></td>
    </tbody>
    <tbody>
    <td>Crédito (12x)</td>
    <td>4,9%</td>
    <td>${calculaCredito2xA12x.innerHTML = `R$` + calculaCredito2xA12x()}</td>
    <td value=""></td>
    <td value=""></td>
    </tbody>`;
};


function addButtonBackOnDialog() {
    const pegaDiv1DialogEconomico = document.getElementById('div1-dialog-economico');
    const buttonBackOnDialog = document.createElement('button');
    buttonBackOnDialog.textContent = 'Voltar';
    buttonBackOnDialog.id = 'btn-voltar'
    pegaDiv1DialogEconomico.appendChild(buttonBackOnDialog);
}

function addButtonModelOnDialogAndAddModel() {
    const pegaDiv2DialogEconomico = document.getElementById('div2-dialog-economico');
    const buttonModelOnDialog = document.createElement('button');
    buttonModelOnDialog.textContent = 'Abrir modelo';
    buttonModelOnDialog.id = 'btn-abrir-modelo';
    pegaDiv2DialogEconomico.appendChild(buttonModelOnDialog);

    buttonModelOnDialog.addEventListener('click', function () {
        showModal2();
        addConteudoNaDiv1Economico();
        addConteudoNaDiv2Economico();
        addConteudoNaDiv3Economico();
        addDiv1EconomicoNaDiv4Economico();
        addDiv2EconomicoNaDiv4Economico();
        addDiv3EconomicoNaDiv4Economico();
        addDiv1EconomicoNaDiv5Economico();
        addDiv2EconomicoNaDiv5Economico();
        addDiv3EconomicoNaDiv5Economico();
    });

    function showModal2() {
        const dialogModeloEconomico = document.getElementById('dialog-modelo-economico')
        dialogModeloEconomico.showModal();
    };

    function addConteudoNaDiv1Economico() {
        const div1DialogModeloEconomico = document.getElementById('div1-dialog-modelo-economico');
        const inputEconomico = document.getElementById('input-economico');
        div1DialogModeloEconomico.innerHTML = `<p>Valor do projeto: <span>R$ ${inputEconomico.value}</span> Em até 10x no cartão de crédito</p>`;
    };

    function addConteudoNaDiv2Economico() {
        const div2DialogModeloEconomico = document.getElementById('div2-dialog-modelo-economico');
        const inputEconomico = document.getElementById('input-economico');
        div2DialogModeloEconomico.innerHTML = `<p>Ou <span>R$ ${inputEconomico.value * 0.9}</span> à vista, com <span>10%</span> de desconto já aplicado. Pago inteiro por boleto bancário ou transferência/pix.</p>`;
    };

    function addConteudoNaDiv3Economico() {
        const div3DialogModeloEconomico = document.getElementById('div3-dialog-modelo-economico');
        const inputEconomico = document.getElementById('input-economico');
        div3DialogModeloEconomico.innerHTML = `<p><span>OU</span>, se preferir, podemos optar pela realização do pagamento por boleto bancário realizado por iniciação de etapas. Nesse caso não há a opção de cartão de crédito, e o andamento do serviço só é continuado com a demonstração do comprovante de pagamento quando você puder realizá-lo. Enquanto isso, o projeto é pausado na última etapa que foi paga. A vantagem dessa modalidade é que você pode controlar o seu tempo de pagamento. O valor nesse caso ficaria por <span>R$ ${inputEconomico.value * 0.95}</span>, (com <span>5%</span> de desconto já aplicado), dividido em 3 etapas/parcelas. Conforme abaixo:</p>`;
    };

    function addDiv1EconomicoNaDiv4Economico() {
        const pegaDiv4DialogModeloEconomico = document.getElementById('div4-dialog-modelo-economico');
        const div1EconomicoOnDiv4DialogModeloEconomico = document.createElement('div');
        div1EconomicoOnDiv4DialogModeloEconomico.textContent = '1º Parcela – 10% do valor total';
        div1EconomicoOnDiv4DialogModeloEconomico.id = 'div1EconomicoOnDiv4DialogModeloEconomico';
        pegaDiv4DialogModeloEconomico.appendChild(div1EconomicoOnDiv4DialogModeloEconomico);
    };

    function addDiv2EconomicoNaDiv4Economico() {
        const pegaDiv4DialogModeloEconomico = document.getElementById('div4-dialog-modelo-economico');
        const div2EconomicoOnDiv4DialogModeloEconomico = document.createElement('div');
        div2EconomicoOnDiv4DialogModeloEconomico.textContent = 'Aprovando este orçamento, o cliente deve efetuar o pagamento da primeira parcela para início da etapa 01: visita ao local para levantamento de medidas e reunião para assinaturas do contrato de prestação de serviço. Ressalta-se que o referido contrato será enviado ao cliente antes desta etapa 01, onde poderá fazer o reconhecimento das cláusulas constantes no mesmo.';
        div2EconomicoOnDiv4DialogModeloEconomico.id = 'div2EconomicoOnDiv4DialogModeloEconomico';
        pegaDiv4DialogModeloEconomico.appendChild(div2EconomicoOnDiv4DialogModeloEconomico);
    };

    function addDiv3EconomicoNaDiv4Economico() {
        const pegaDiv4DialogModeloEconomico = document.getElementById('div4-dialog-modelo-economico');
        const div3EconomicoOnDiv4DialogModeloEconomico = document.createElement('div');
        div3EconomicoOnDiv4DialogModeloEconomico.textContent = `R$ ${1800/2}`;
        div3EconomicoOnDiv4DialogModeloEconomico.id = 'div3EconomicoOnDiv4DialogModeloEconomico';
        pegaDiv4DialogModeloEconomico.appendChild(div3EconomicoOnDiv4DialogModeloEconomico);
    };

    function addDiv1EconomicoNaDiv5Economico() {
        const pegaDiv5DialogModeloEconomico = document.getElementById('div5-dialog-modelo-economico');
        const div1EconomicoOnDiv5DialogModeloEconomico = document.createElement('div');
        div1EconomicoOnDiv5DialogModeloEconomico.textContent = '2º Parcela – 50% do valor total';
        div1EconomicoOnDiv5DialogModeloEconomico.id = 'div1EconomicoOnDiv5DialogModeloEconomico';
        pegaDiv5DialogModeloEconomico.appendChild(div1EconomicoOnDiv5DialogModeloEconomico);
    };

    function addDiv2EconomicoNaDiv5Economico() {
        const pegaDiv5DialogModeloEconomico = document.getElementById('div5-dialog-modelo-economico');
        const div2EconomicoOnDiv5DialogModeloEconomico = document.createElement('div');
        div2EconomicoOnDiv5DialogModeloEconomico.textContent = 'Para início da segunda etapa';
        div2EconomicoOnDiv5DialogModeloEconomico.id = 'div2EconomicoOnDiv5DialogModeloEconomico';
        pegaDiv5DialogModeloEconomico.appendChild(div2EconomicoOnDiv5DialogModeloEconomico);
    };

    function addDiv3EconomicoNaDiv5Economico() {
        const pegaDiv5DialogModeloEconomico = document.getElementById('div5-dialog-modelo-economico');
        const div3EconomicoOnDiv5DialogModeloEconomico = document.createElement('div');
        div3EconomicoOnDiv5DialogModeloEconomico.textContent = `${1800/2}`;
        div3EconomicoOnDiv5DialogModeloEconomico.id = 'div3EconomicoOnDiv5DialogModeloEconomico';
        pegaDiv5DialogModeloEconomico.appendChild(div3EconomicoOnDiv5DialogModeloEconomico);
    };
}

// Parte dos cálculos:

function calculaDebitoEconomico() {
    const inputEconomico = document.getElementById('input-economico');
    // const valueDebito = document.getElementById('value-debito');
    // const valueOfInput = parseInt(inputEconomico.value);
    // const valueOfDebito = parseInt(valueDebito);
    // console.log(valueOfInput * valueOfDebito)
    const retorna = inputEconomico.value * (1.9 / 100);
    return retorna.toFixed(2);
}

function calculaCredito1x() {
    const inputEconomico = document.getElementById('input-economico');
    const retorna1x = inputEconomico.value * (3.7 / 100);
    return retorna1x.toFixed(2);
}

function calculaCredito2xA12x() {
    const inputEconomico = document.getElementById('input-economico');
    const retorna2x12x = inputEconomico.value * (4.9 / 100);
    return retorna2x12x.toFixed(2);
    // Pensar aqui em utilizar uma estrutura de repetição
}