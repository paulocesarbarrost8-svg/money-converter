const meuInput = document.getElementById("amountInput")
const resultado = document.getElementById("convertido")
const moedaSelect = document.getElementById("toCurrency")
const currencyImage = document.getElementById("currencyImage")
const sourceValue = document.getElementById("sourceValue")
const chrrencmeney = document.getElementById("chrrenc-meney")

function clicar() {
    const valor = Number(meuInput.value)
    const dolar = 5.10;
    const euro = 5.91;
    const libra = 6.81
    const bitcoin = 322.916

    if (meuInput.value === "" || valor <= 0) { //se o select estiver sem nenhum valor, entre aqui
        resultado.innerHTML = "digite um valor válido"
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
        resultado.innerHTML = "₿" + valorConvertido.toFixed(1)
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
