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

/* funktion bekommt 2 Parameter übergeben.
Rückgabe soll ZufallsZahl zwischen diesen 2 Parametern sein */

function zufallsZahl_zwischenZweiZahlen(zahl1, zahl2) {

    let ergebniss = Math.floor(Math.random() * (zahl2 - zahl1) + zahl1)

    return ergebniss

}


/* funktion der ein String übergeben wird
der erste Buchstabe des Strings soll groß geschrieben werden */
function ersteBuchstabe_VonString_InGroßUmwandeln(paraStr) {
    let s = paraStr
    let länge = s.length;
    let gesplittet = s.slice(0, 1)
    let rest = s.slice(1, länge)
    let groß = gesplittet.toLocaleUpperCase()
    let ergebniss = groß + rest


    return ergebniss
}

function ersteBuchstabe_VonString_InGroßUmwandeln_ohneSlice(paraStr) {
    let s = paraStr
    let ergebniss = s[0].toLocaleUpperCase() + s.slice(1, s.length)
    return ergebniss
}

/* ganze String soll in großbuchstaben  */
function ganzeString_inGroßbuchstabenUmwandeln(paraStr) {
    let s = paraStr

    let ergebniss = s.toLocaleUpperCase()

    return ergebniss
}


/* funktion die prüft ob letzte Buchstabe von 1.para mit 2.para übereinstimmt
output true oder false */
function übereinstimmungDerZweiPara(para1, para2) {
    let a = para1  /* Test */
    let b = para2  /* t  / q */

    let aEnde = a.slice(a.length - 1, a.length)
    
    function ergebniss () {
        if (aEnde === b) { return "true"}
        else {return "false"}
    }

    return ergebniss()
}

const stimmtDerLetzteBuchstabeÜberein = (para1, para2) => {
    return para1[para1.length - 1] === para2[para2.length - 1] ? true : false
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

    zufallsZahl_zwischenZweiZahlen,

    ersteBuchstabe_VonString_InGroßUmwandeln,
    ersteBuchstabe_VonString_InGroßUmwandeln_ohneSlice,

    ganzeString_inGroßbuchstabenUmwandeln,

    übereinstimmungDerZweiPara,
    stimmtDerLetzteBuchstabeÜberein,

};