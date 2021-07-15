function inverso(valor) {
    if ( valor != Boolean || valor != Number) {
        return console.log(`booleano ou números esperados, mas o parâmentro é do tipo ${typeof valor}`)
    } else {
        return console.log(`${!valor}`)
    }
}

inverso(false)
inverso(3)