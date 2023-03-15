import { ersteElement, 
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

} from "./function.js";

import { names, numbers } from "./data.js";

console.log(numbers)
console.log(names)

console.log(ersteElement(numbers));
console.log(ersteElementArrowF(numbers));
console.log(ersteElement(names));


console.log(allesAußerLetzteElement(numbers));
console.log(allesAußerLetzteElementArrowF(numbers));
console.log(allesAußerLetzteElement(names));


console.log(nurLetzteElement(numbers));
console.log(nurLetzteElementArrowF(numbers));
console.log(nurLetzteElement(names));

console.log(alleAußerErsteElement(numbers));

/* Para 1=Array   2=das was gelöscht werden soll */
console.log(löschtElementAusArr(numbers, 1));
console.log(löschtElementAusArr(names, "Simon"));

console.log(doppelteWerteEntfernenMitSet(numbers));
console.log(doppelteWerteEntfernenMitSet(names));
console.log(doppelteWerteEntfernenMitFilter(numbers));
console.log(doppelteWerteEntfernenMitForSchleife(numbers));

console.log(zufallsZahl_zwischenZweiZahlen(1, 10))

console.log(ersteBuchstabe_VonString_InGroßUmwandeln("hallo"))
console.log(ersteBuchstabe_VonString_InGroßUmwandeln_ohneSlice("abendessen"))

console.log(ganzeString_inGroßbuchstabenUmwandeln("guten morgen"))

console.log(übereinstimmungDerZweiPara("test","t"))
console.log(übereinstimmungDerZweiPara("test","q"))

console.log(stimmtDerLetzteBuchstabeÜberein("test","t"))
console.log(stimmtDerLetzteBuchstabeÜberein("test","q"))