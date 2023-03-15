import { names, numbers } from "./data.js";

/* console.log(numbers);
console.log(names); */

function ersteElement(para) {
    let a = para
    const ergebniss = a.slice(0, 1);
    /*     console.log(ergebniss);
     */
    return ergebniss

}

const ersteElementArrowF = (paraArr) => { return paraArr[0] }

function allesAußerLetzteElement(para) {
    let a = para
    let länge = a.length;
    let ergebniss = a.slice(0, länge - 1);

    return ergebniss
}

const allesAußerLetzteElementArrowF = (paraArr) => { return paraArr[paraArr.length - 1] }

function nurLetzteElement(para) {
    let a = para
    let länge = a.length;
    let ergebniss = a.slice(länge - 1, länge);

    return ergebniss
}

const nurLetzteElementArrowF = (paraArr) => { return paraArr[paraArr.length - 1] }

function alleAußerErsteElement(para) {
    let a = para
    let länge = a.length;
    let ergebniss = a.slice(1, länge);

    return ergebniss
}

/* filter = findet das gesucht,
in diesem fall soll filter !nicht das gesuchte finden 
sondern alles andere 
filter erstellt ein neues Array mit den Ergebnissen*/
function löschtElementAusArr(paraArr, paraZuLöschen) {
    let a = paraArr
    let l = paraZuLöschen

    /* Var 1 */
    let ergebniss = a.filter(element => element !== l)

    /* Var 2 */
    let ergebniss2 = a.filter(functionZuLöschen)
    function functionZuLöschen(elementPara) {
        return elementPara !== l
    }

    return ergebniss2, ergebniss
}

function doppelteWerteEntfernenMitSet(paraArr) {
    let a = paraArr
    let b = [...new Set(a)]

    return b
}

function doppelteWerteEntfernenMitFilter(paraArr) {
    let a = paraArr

    function suchtDoppelteWerte_VergleichtMitIndex(x, i) {
        return a.indexOf(x) === i
    }


    return a.filter(suchtDoppelteWerte_VergleichtMitIndex)
}

function doppelteWerteEntfernenMitForSchleife(paraArr) {
    let a = paraArr
    let ergebniss = []

    for (let i = 0; i < a.length; i++) {
        let einzigartig = true;

        for (let j = 0; j < i; j++) {
            if (a[i] === a[j]) {
                einzigartig = false;
                /* bricht ab, wenn es zweites gleiches findet */
                break;
            }
        }
        if (einzigartig) {
            ergebniss.push(a[i])
        }
    }
    return ergebniss
}



export {
    ersteElement,
    ersteElementArrowF,

    allesAußerLetzteElement,
    allesAußerLetzteElementArrowF,

    nurLetzteElement,
    nurLetzteElementArrowF,

    alleAußerErsteElement,

    löschtElementAusArr,

    doppelteWerteEntfernenMitSet,
    doppelteWerteEntfernenMitFilter,
    doppelteWerteEntfernenMitForSchleife,

};