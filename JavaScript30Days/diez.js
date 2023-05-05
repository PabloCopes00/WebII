"Use strict";
const languages = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French",
];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

for (const language of setOfLanguages) {
    console.log(language);
}

const companies = new Set(); // crear set vacío
console.log(companies.size); // 0

companies.add("Google"); // añadir un elemento a set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Apple");
console.log(companies.size); // 5 elements in set
console.log(companies);

const setOfCompanies = new Set();
for (const company of companies) {
    setOfCompanies.add(company);
}
console.log("Compañias agregadas desde un bucle", setOfCompanies);

console.log(companies.delete("Google"));
console.log(companies.size); // 4 elementos en set
console.log(companies.has("Microsoft")); // false
console.log(companies.has("Apple")); // true
companies.clear();
console.log(companies);