function interactBetweenFunc() {

    const result1 = document.getElementById('result1')
    const result2 = document.getElementById('result2')

    function printFunction() {
        console.log('Soy una funcion')
    }

    function returnMaxNumMinIndexNum(arrayNum) {
        let maxNum = Math.max(... arrayNum)
        let minNum = Math.min(...arrayNum)
        let indexMinNum = arrayNum.indexOf(minNum)

        console.log(`El numero mayor de ${arrayNum} es ${maxNum}`)
        console.log(`El indice del numero mas pequeño es ${indexMinNum}`)
        result1.innerHTML = `El numero menor de ${arrayNum} es ${minNum} `
    }

    function getIntermediateNumbers(firstNum, lastNum) {
        let arrayIntermediatNum = []
        for(let i = firstNum + 1; i < lastNum; i++) {
            arrayIntermediatNum.push(`\n ${i}`)
        }
        result2.innerHTML = `Los numeros comprendidos entre ${firstNum} y ${lastNum} son ${arrayIntermediatNum}`
    }
    printFunction()
    returnMaxNumMinIndexNum([8, 12, 5, 22, 6])
    getIntermediateNumbers(2, 10)
}