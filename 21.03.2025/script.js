// 1. Deklarējam divus mainīgos un piešķiram tiem skaitliskas vērtības
let a = 10;
let b = 5;

// 2. Izvadām summu, starpību, reizinājumu un dalījumu konsolē
console.log("Summa:", a + b);
console.log("Starpība:", a - b);
console.log("Reizinājums:", a * b);
console.log("Dalījums:", a / b);

// 3. Izvadām a pakāpē b un a dalījuma atlikumu, dalot ar b
console.log("a pakāpē b:", a ** b);
console.log("Dalījuma atlikums:", a % b);

// 4. Salīdzināšanas konstrukcija
if (a > b) {
    console.log("a ir lielāks par b");
} else if (a == b) {
    console.log("a ir vienāds ar b");
} else {
    console.log("b ir lielāks par a");
}

// 5. Cita salīdzināšanas konstrukcija (izmantojot switch)
switch (true) {
    case a > b:
        console.log("a ir lielāks par b");
        break;
    case a == b:
        console.log("a ir vienāds ar b");
        break;
    default:
        console.log("b ir lielāks par a");
}

// 6. Deklarējam un inicializējam masīvu ar 10 vērtībām
let masivs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 7. Izvadām katru masīva elementu, izmantojot for ciklu
console.log("Masīva elementi:");
for (let i = 0; i < masivs.length; i++) {
    console.log(masivs[i]);
}

// 8. Izvadām masīva elementus apgrieztā secībā
console.log("Masīva elementi apgrieztā secībā:");
for (let i = masivs.length - 1; i >= 0; i--) {
    console.log(masivs[i]);
}
