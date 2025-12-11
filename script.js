const convertButton = document.getElementById('convert-button');
const valorInput = document.getElementById('valor-input');
const valorReal = document.getElementById('valor-real');
const valorConvertido = document.getElementById('valor-convertido');
const textMoeda = document.getElementById('text-moeda');
const textMoedaDestino = document.getElementById('text-moeda-destino');
const imgMoeda = document.getElementById('img-moeda');
const imgMoedaCovertida = document.getElementById('img-moeda-covertida');
const selectOrigem = document.getElementById('currency-select-a');
const selectDestino = document.getElementById('currency-select-b');



const cotacao = {
    real: 1.00,
    dolar: 5.25,
    euro: 6.19,
    libra: 7.30,
    bitcon: 494175.56
}


function convertValues() {

    const valor = valorInput.value;
    const origem =  selectOrigem.value;
    const destino = selectDestino.value;


    const valorEmReal = valor * cotacao[origem]
    const valorConvertidoEmReal = valorEmReal / cotacao[destino];


    // Formatação do valor da origem.
    if(selectOrigem.value == "dolar") {
        valorReal.textContent = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valor); 
    }
    if(selectOrigem.value == "real") {
        valorReal.textContent = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor); 
    }
    if(selectOrigem.value == "euro") {
        valorReal.textContent = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valor); 
    }
    if(selectOrigem.value == "libra") {
        valorReal.textContent = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(valor); 
    }
    if(selectOrigem.value == "bitcon") {
        valorReal.textContent = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(valor); 
    }
    

    // Formatação do valor do destino.
    if (selectDestino.value == "dolar" ) {
        valorConvertido.textContent = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorConvertidoEmReal); 
    }

    if (selectDestino.value == "euro") { 
        valorConvertido.textContent = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
    }).format(valorConvertidoEmReal);    
    }

    if (selectDestino.value == "libra" ) {
        valorConvertido.textContent = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(valorConvertidoEmReal);
    }

    if (selectDestino.value == "real" ) {
        valorConvertido.textContent = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorConvertidoEmReal);
    }
    if(selectDestino.value == "bitcon") {
        valorConvertido.textContent = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(valorConvertidoEmReal); 
    }


};


// Evento para alterar a moeda de origem img.
selectOrigem.addEventListener('change', () => {

    if (selectOrigem.value == "dolar") {
        textMoeda.textContent = "Dólar";
        imgMoeda.src = "./assets/img/dolar.png";
    }
     if (selectOrigem.value == "euro") {
        textMoeda.textContent = "Euro";
        imgMoeda.src = "./assets/img/euro.png";
    }
     if (selectOrigem.value == "libra") {
        textMoeda.textContent = "Libra";
        imgMoeda.src = "./assets/img/libra 1.png";
    }
     if (selectOrigem.value == "real") {
        textMoeda.textContent = "Real";
        imgMoeda.src = "./assets/img/real.png";
    }
    if (selectOrigem.value == "bitcon") {
        textMoeda.textContent = "Bitcoin";
        imgMoeda.src = "./assets/img/bitcoin.png";
    }
    
    convertValues();
});

// Evento para alterar a moeda de destino img.
selectDestino.addEventListener('change', () => {

    if (selectDestino.value == "dolar") {
        textMoedaDestino.textContent = "Dólar";
        imgMoedaCovertida.src = "./assets/img/dolar.png";
    }
    if (selectDestino.value == "euro") { 
        textMoedaDestino.textContent = "Euro";
        imgMoedaCovertida.src = "./assets/img/euro.png";
    }
    if (selectDestino.value == "libra") {
        textMoedaDestino.textContent = "Libra";
        imgMoedaCovertida.src = "./assets/img/libra 1.png";
    }
    if (selectDestino.value == "real") {
        textMoedaDestino.textContent = "Real";
        imgMoedaCovertida.src = "./assets/img/real.png";
    }
    if (selectDestino.value == "bitcon") {
        textMoedaDestino.textContent = "Bitcoin";
        imgMoedaCovertida.src = "./assets/img/bitcoin.png";
    }

    convertValues();
});

// Evento para o botõa de converter.
convertButton.addEventListener('click', convertValues);

