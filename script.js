function calcular() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número.')     
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') // Para criar opção na barra de select(html).
            item.text = `${n} x ${c} = ${n*c}`// Item.text, declara qual será o texto nas options.
            item.value = `tab${c}`
            tab.appendChild(item)// Basicamente a variavel tab ta adotando o item como filho, inserindo-o.
            c++ // Para crescer de 1 em 1 até dar 11 e o sistema quebrar a repetição.
        }
    }
}