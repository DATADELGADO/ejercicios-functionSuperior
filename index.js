// ***************EJERCICIOS NIVEL 1 **************


// ************ #1 ***************

// forEach se usa para iterar los elementos de un array.Utilizamos forEach sólo con arrays.Toma una función callback con elementos, parámetro de índice y el propio array.El índice y el array son opcionales, map se usa para Iterar los elementos de un array y modificar los elementos del mismo. Toma una función callback con elementos, índice , parámetro del array y devuelve un nuevo array, filter Filtra los elementos que cumplen las condiciones de filtrado y devuelve un nuevo array y reduce toma una función callback. La función callback toma como parámetro el acumulador, el valor actual y opcional el valor inicial y retorna un único valor.


// ************* #2 **************

// const callback = () => {

// }

// ************* #3 **************


// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

// countries.forEach((element) => console.log(element));


// ************* #4 **************

// const names = ["Alfred", "Mathias", "Elias", "Brook"];
// names.forEach((element) => console.log(element));


// ************* #5 **************

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((element) => console.log(element));


// ************* #6 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

// const countries2 = countries.map((element) => element.toLocaleUpperCase());
// console.log(countries2);


// ************* #7 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// const countriesLon = countries.map((element) => element.length);
// console.log(countriesLon);


// ************* #8 **************

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbersCua = numbers.map((element) => element ** 2);
// console.log(numbersCua);


// ************* #9 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// const countriesUpper = countries.map((element) => element.toLocaleUpperCase());
// console.log(countriesUpper);



// ************* #10 **************

// const products = [
//     { product: "banana", price: 3 },
//     { product: "mango", price: 6 },
//     { product: "potato", price: " " },
//     { product: "avocado", price: 8 },
//     { product: "coffee", price: 10 },
//     { product: "tea", price: "" },
// ];

// const productsMod = products.map((element) => {
//     if (typeof element.price !== "number") {
//         element.price = 3;
//     }
//     return element;
// });
// console.log(productsMod);


// ************* #11 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

// console.log(countries.filter((element) => element.toLocaleLowerCase().includes("land")));


// ************* #12 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

// console.log(countries.filter((element) => element.length == 6));


// ************* #13 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// console.log(countries.filter((element) => element.length >= 6));


// ************* #14 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

// console.log(countries.filter((element) => element.startsWith("E")));


// ************* #15 **************

// const products = [
//     { product: "banana", price: 3 },
//     { product: "mango", price: 6 },
//     { product: "potato", price: " " },
//     { product: "avocado", price: 8 },
//     { product: "coffee", price: 10 },
//     { product: "tea", price: "" },
// ];

// console.log(products.filter((element) => {
//     if (typeof element.price === "number") {
//         return element.price;
//     }
// }));



// ************* #16 **************

// const array = [5, "a", 6, true, "4"];
// const getStringLists = (array) => {
//     return array.filter((element) => typeof element === "string");
// }
// console.log(getStringLists(array));



// ************* #17 **************


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = numbers.reduce((acc, cur) => {
//     return acc + cur
// }, 0);
// console.log(sum);


// ************* #18 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

// const counstriesConcat = countries.reduce((acc, acur, index) => {
//     if (index == countries.length - 1) {
//         return acc + ", y " + acur + " son paises del norte de Europa";
//     }
//     return acc + ", " + acur;
// }, "Estonia");
// console.log(counstriesConcat);


// ************* #19 **************

// some omprueba si algunos de los elementos son similares en un aspecto y every comprueba si todos los elementos son similares en un aspecto. Devuelve un booleano




// ************* #20 **************


// const names = ["Alfred", "Mathias", "Elias", "Brook"];
// console.log(names.some((element) => element.length > 7));


// ************* #21 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// console.log(countries.every((element) => element.toLocaleLowerCase().includes("land")));


// ************* #22 **************

// find retorna el primer elemento que cumple la condición y findIndex retorna la posición del primer elemento que cumple la condición

// ************* #23 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// console.log(countries.find((element) => element.length == 6));



// ************* #24 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// console.log(countries.findIndex((element) => element.length == 6));


// ************* #25 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// console.log(countries.findIndex((element) => element == "Norway"));



// ************* #26 **************

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// console.log(countries.findIndex((element) => element == "Russia"));





// ***************EJERCICIOS NIVEL 2 **************


// ************* #1 **************

// const products = [
//     { product: "banana", price: 3 },
//     { product: "mango", price: 6 },
//     { product: "potato", price: " " },
//     { product: "avocado", price: 8 },
//     { product: "coffee", price: 10 },
//     { product: "tea", price: "" },
// ];

// const totalProducts = products.filter((element) => {
//     return typeof element.price === "number";
// });

// const sumaProducts = totalProducts.reduce((acc, acur) => {
//     return acc + acur.price;
// }, 0);

// console.log(sumaProducts);


// ************* #2 **************

// const products = [
//     { product: "banana", price: 3 },
//     { product: "mango", price: 6 },
//     { product: "potato", price: " " },
//     { product: "avocado", price: 8 },
//     { product: "coffee", price: 10 },
//     { product: "tea", price: "" },
// ];


// const sumaProducts = products.reduce((acc, acur) => {
//     if (typeof acur.price === "number") {
//         acc += acur.price;
//     }
//     return acc;
// }, 0);
// console.log(sumaProducts);


// ************* #3 **************

// const countriesU = [
//     'Afghanistan',
//     'Albania',
//     'Algeria',
//     'Andorra',
//     'Angola',
//     'Antigua and Barbuda',
//     'Argentina',
//     'Armenia',
//     'Australia',
//     'Austria',
//     'Azerbaijan',
//     'Bahamas',
//     'Bahrain',
//     'Bangladesh',
//     'Barbados',
//     'Belarus',
//     'Belgium',
//     'Belize',
//     'Benin',
//     'Bhutan',
//     'Bolivia',
//     'Bosnia and Herzegovina',
//     'Botswana',
//     'Brazil',
//     'Brunei',
//     'Bulgaria',
//     'Burkina Faso',
//     'Burundi',
//     'Cambodia',
//     'Cameroon',
//     'Canada',
//     'Cape Verde',
//     'Central African Republic',
//     'Chad',
//     'Chile',
//     'China',
//     'Colombi',
//     'Comoros',
//     'Congo (Brazzaville)',
//     'Congo',
//     'Costa Rica',
//     "Cote d'Ivoire",
//     'Croatia',
//     'Cuba',
//     'Cyprus',
//     'Czech Republic',
//     'Denmark',
//     'Djibouti',
//     'Dominica',
//     'Dominican Republic',
//     'East Timor (Timor Timur)',
//     'Ecuador',
//     'Egypt',
//     'El Salvador',
//     'Equatorial Guinea',
//     'Eritrea',
//     'Estonia',
//     'Ethiopia',
//     'Fiji',
//     'Finland',
//     'France',
//     'Gabon',
//     'Gambia, The',
//     'Georgia',
//     'Germany',
//     'Ghana',
//     'Greece',
//     'Grenada',
//     'Guatemala',
//     'Guinea',
//     'Guinea-Bissau',
//     'Guyana',
//     'Haiti',
//     'Honduras',
//     'Hungary',
//     'Iceland',
//     'India',
//     'Indonesia',
//     'Iran',
//     'Iraq',
//     'Ireland',
//     'Israel',
//     'Italy',
//     'Jamaica',
//     'Japan',
//     'Jordan',
//     'Kazakhstan',
//     'Kenya',
//     'Kiribati',
//     'Korea, North',
//     'Korea, South',
//     'Kuwait',
//     'Kyrgyzstan',
//     'Laos',
//     'Latvia',
//     'Lebanon',
//     'Lesotho',
//     'Liberia',
//     'Libya',
//     'Liechtenstein',
//     'Lithuania',
//     'Luxembourg',
//     'Macedonia',
//     'Madagascar',
//     'Malawi',
//     'Malaysia',
//     'Maldives',
//     'Mali',
//     'Malta',
//     'Marshall Islands',
//     'Mauritania',
//     'Mauritius',
//     'Mexico',
//     'Micronesia',
//     'Moldova',
//     'Monaco',
//     'Mongolia',
//     'Morocco',
//     'Mozambique',
//     'Myanmar',
//     'Namibia',
//     'Nauru',
//     'Nepal',
//     'Netherlands',
//     'New Zealand',
//     'Nicaragua',
//     'Niger',
//     'Nigeria',
//     'Norway',
//     'Oman',
//     'Pakistan',
//     'Palau',
//     'Panama',
//     'Papua New Guinea',
//     'Paraguay',
//     'Peru',
//     'Philippines',
//     'Poland',
//     'Portugal',
//     'Qatar',
//     'Romania',
//     'Russia',
//     'Rwanda',
//     'Saint Kitts and Nevis',
//     'Saint Lucia',
//     'Saint Vincent',
//     'Samoa',
//     'San Marino',
//     'Sao Tome and Principe',
//     'Saudi Arabia',
//     'Senegal',
//     'Serbia and Montenegro',
//     'Seychelles',
//     'Sierra Leone',
//     'Singapore',
//     'Slovakia',
//     'Slovenia',
//     'Solomon Islands',
//     'Somalia',
//     'South Africa',
//     'Spain',
//     'Sri Lanka',
//     'Sudan',
//     'Suriname',
//     'Swaziland',
//     'Sweden',
//     'Switzerland',
//     'Syria',
//     'Taiwan',
//     'Tajikistan',
//     'Tanzania',
//     'Thailand',
//     'Togo',
//     'Tonga',
//     'Trinidad and Tobago',
//     'Tunisia',
//     'Turkey',
//     'Turkmenistan',
//     'Tuvalu',
//     'Uganda',
//     'Ukraine',
//     'United Arab Emirates',
//     'United Kingdom',
//     'United States',
//     'Uruguay',
//     'Uzbekistan',
//     'Vanuatu',
//     'Vatican City',
//     'Venezuela',
//     'Vietnam',
//     'Yemen',
//     'Zambia',
//     'Zimbabwe'
// ]
// const categorizeCountries = () => {
//     return countriesU.filter((element) => element.toLocaleLowerCase().includes("land"));
// }

// console.log(categorizeCountries());


// ************* #4 **************


// const arrayObj = () => {
//     let arrayLetras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
//     return arrayLetras.map((element, i) => {
//         let count = countriesU.reduce((acc, acur) => {
//             if (acur.startsWith(element)) {
//                 acc++;
//             }
//             return acc;
//         }, 0);
//         return {
//             letter: element,
//             cantidad: count
//         };
//     });
// }
// console.log(arrayObj());


// ************* #5 **************

// const getFirstTenCountries = () => {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         array.push(countriesU[Math.round(Math.random() * countriesU.length - 1)]);
//     }
//     return array;
// }
// console.log(getFirstTenCountries());



// ************* #6 **************

// const getLastTenCountries = () => {
//     return countriesU.splice(countriesU.length - 10, countriesU.length - 1);
// }
// console.log(getLastTenCountries());



// ************* #7 **************


// const arrayObj = () => {
//     let arrayLetras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
//     return arrayLetras.map((element, i) => {
//         let count = countriesU.reduce((acc, acur) => {
//             if (acur.startsWith(element)) {
//                 acc++;
//             }
//             return acc;
//         }, 0);
//         return {
//             letter: element,
//             cantidad: count
//         };
//     });
// }
// console.log(arrayObj());
// let mayor = 0;
// let obj = {};
// arrayObj().forEach(element => {
//     if (element.cantidad > mayor) {
//         mayor = element.cantidad;
//         obj = element;
//     }
// });
// console.log(obj);








