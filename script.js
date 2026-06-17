const meuInput = document.getElementById("amountInput")
const resultado = document.getElementById("convertido")
const moedaSelect = document.getElementById("toCurrency")
const currencyImage = document.getElementById("currencyImage")
const sourceValue = document.getElementById("sourceValue")

function clicar(){
    const valor = Number(meuInput.value)
    const dolar = 5.10;
    const euro = 5.91;

    if (meuInput.value === "" || valor <= 0){
        resultado.innerHTML = "digite um valor válido"
        sourceValue.innerHTML = "R$ 0,00"
        return;
    }

    sourceValue.innerHTML = "R$ " + valor.toFixed(2)

    if (moedaSelect.value.includes("Dólar")){
        const valorConvertido = valor / dolar;
        resultado.innerHTML = "US$ " + valorConvertido.toFixed(2)
        currencyImage.src = "./assts/dolar.png"

    } else if (moedaSelect.value.includes("Euro")){
        const valorConvertido = valor / euro;
        resultado.innerHTML = "€ " + valorConvertido.toFixed(2)
        currencyImage.src = "./assts/euro.png"
        currencyImage.style.width = "55px";
        
    } else {
        resultado.innerHTML = "selecione uma moeda"
    }
}
