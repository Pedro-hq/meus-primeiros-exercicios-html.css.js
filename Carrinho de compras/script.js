function calcula(op){
    switch (op) {
        case 'op1':
            quant = document.getElementById(op).value
            prect = 25 * quant
            pt1.innerHTML = "R$" + prect + ",00"
            break;
        case 'op2':
            quant = document.getElementById(op).value
            prect = 400 * quant
            pt2.innerHTML = "R$" + prect + ",00"
            break;
        case 'op3':
            quant = document.getElementById(op).value
            prect = 200 * quant
            pt3.innerHTML = "R$" + prect + ",00"
            break;
    }
}