function salario(quantidadeDeHoras, valorDaHora) {
    let calcularSalario = quantidadeDeHoras * valorDaHora
    return console.log(`Salário igual a R$ ${calcularSalario}`)
}

salario(100, 20)