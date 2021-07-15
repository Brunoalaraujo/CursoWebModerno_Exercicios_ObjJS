function mes(numero) {
    switch (numero) {
        case 1:
            console.log(`${numero} é Janeiro`)
            break;
        case 2:
            console.log(`${numero} é Fevereiro`)
            break;
        case 3:
            console.log(`${numero} é Março`)
            break;
        case 4:
            console.log(`${numero} é Abril`)
            break;
        case 5:
            console.log(`${numero} é Maio`)
            break;
        case 6:
            console.log(`${numero} é Junho`)
            break;
        case 7:
            console.log(`${numero} é Julho`)
            break;
        case 8:
            console.log(`${numero} é Agosto`)
            break;
        case 9:
            console.log(`${numero} é Setembro`)
            break;
        case 10:
            console.log(`${numero} é Outubro`)
            break;
        case 11:
            console.log(`${numero} é Novembro`)
            break;
        case 12:
            console.log(`${numero} é Dezembro`)
            break;
    
        default:
            console.log(`${numero} não é um mês valido`)
            break;
    }
}

mes(3)
mes(9)
mes(15)
mes(-3)