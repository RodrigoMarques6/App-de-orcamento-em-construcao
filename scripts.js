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
    <td>Crédito (11x)</td>
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
        addConteudoNaDiv1();
        addConteudoNaDiv2();
        addConteudoNaDiv3();
        addConteudoNaDiv4();
    });

    function showModal2() {
        const dialogModelo = document.getElementById('dialog-modelo')
        dialogModelo.showModal();
    };

    function addConteudoNaDiv1() {
        const div1DialogModelo = document.getElementById('div1-dialog-modelo');
        const inputEconomico = document.getElementById('input-economico');
        div1DialogModelo.innerHTML = `<p>Valor do projeto: R$ ${inputEconomico.value} Em até 10x no cartão de crédito</p>`;
    };

    function addConteudoNaDiv2() {
        const div2DialogModelo = document.getElementById('div2-dialog-modelo');
        div2DialogModelo.innerHTML = `<p>Ou VALOR à vista, com 10% de desconto já aplicado. Pago inteiro por boleto bancário ou transferência.</p>`;
    };

    function addConteudoNaDiv3() {
        const div3DialogModelo = document.getElementById('div3-dialog-modelo');
        div3DialogModelo.innerHTML = `<p>OU, se preferir, podemos optar pela realização do pagamento por boleto bancário realizado por iniciação de etapas. Nesse caso não há a opção de cartão de crédito, e o andamento do serviço só é continuado com a demonstração do comprovante de pagamento quando você puder realizá-lo. Enquanto isso, o projeto é pausado na última etapa que foi paga. A vantagem dessa modalidade é que você pode R$1800,00 (com 5% de controlar o seu tempo de pagamento. O valor nesse caso ficaria por desconto já aplicado), dividido em 3 etapas/parcelas. Conforme abaixo:</p>`;
    };

        function addConteudoNaDiv4() {
            const pegaDiv4DialogModelo = document.getElementById('div4-dialog-modelo');
            const div4OnDialogModelo = document.createElement('div');
            div4OnDialogModelo.textContent = '1º Parcela – 10% do valor total';
            div4OnDialogModelo.id = 'div4OnDialogModelo';
            pegaDiv4DialogModelo.appendChild(div4OnDialogModelo);
        }
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