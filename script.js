const meuInput = document.getElementById("amountInput")
const resultado = document.getElementById("convertido")
const moedaSelect = document.getElementById("toCurrency")
const currencyImage = document.getElementById("currencyImage")
const sourceValue = document.getElementById("sourceValue")
const chrrencmeney = document.getElementById("chrrenc-meney")

async function clicar() {
    const valor = Number(meuInput.value)

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.GBPBRL.high
    const bitcoin = data.BTCBRL.high
    console.log(data)

    if (meuInput.value === "" || valor <= 0) { //se o select estiver sem nenhum valor, entre aqui
        resultado.innerHTML = "digite um valo!r válido"
        sourceValue.innerHTML = "R$ 0,00"
        return;
    }

    sourceValue.innerHTML = "R$ " + valor.toFixed(2)

    if (moedaSelect.value.includes("Dólar")) { //se o select estiver selecionando o valor de dólar, entre aqui
        const valorConvertido = valor / dolar;
        resultado.innerHTML = "$ " + valorConvertido.toFixed(2)
        chrrencmeney.innerHTML = "Dólar Americano"

    } else if (moedaSelect.value.includes("Euro")) { //se o select estiver selecionando o valor de euro, entre aqui
        const valorConvertido = valor / euro;
        resultado.innerHTML = "€ " + valorConvertido.toFixed(2)
        chrrencmeney.innerHTML = "Euro"
    } else if (moedaSelect.value.includes("Libra")){
        const valorConvertido = valor / libra;
        resultado.innerHTML = "£" + valorConvertido.toFixed(2)
    } else if(moedaSelect.value.includes("Bitcoin")){
        const valorConvertido = valor / bitcoin;
        resultado.innerHTML = "₿ " + valorConvertido.toFixed(8)
    }
}

function changeCurrency(){
    if (moedaSelect.value.includes("Dólar")){
        currencyImage.src = "./assts/dolar.png"
        chrrencmeney.innerHTML = "Dólar Americano"
    } else if(moedaSelect.value.includes("Euro")){
        currencyImage.src = "./assts/euro.png"
        currencyImage.style.width = "55px";
        chrrencmeney.innerHTML = "Euro"
    } else if(moedaSelect.value.includes("Libra")){
        currencyImage.src = "./assts/libra.png"
        currencyImage.style.width = "50px";
        chrrencmeney.innerHTML = "Libra"
    } else if(moedaSelect.value.includes("Bitcoin")){
        currencyImage.src = "./assts/bitcoin .png"
        currencyImage.style.width = "50px";
        chrrencmeney.innerHTML = "bitcoin"
    }

    clicar()
}

moedaSelect.addEventListener("change", changeCurrency)
