let map = new Map();
map.set('1', 'Первое значение');
map.set(2, 'Второе значение');
map.set(true, 'Третье значение');

const mapKeys = map.keys();

for (let key of mapKeys) {
    console.log(`Ключ - ${key}, значение - ${map.get(key)}`);
};


// for (let element of map) {
//     console.log(`Ключ - ${element[0]}, значение - ${element[1]}`);
// };

  
// map.forEach((value, key) => {
//     console.log(`Ключ - ${key}, значение - ${value}`);
// });