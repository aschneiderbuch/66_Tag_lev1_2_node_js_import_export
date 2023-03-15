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
