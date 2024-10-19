function search(data, keyword) {
  keyword = keyword.toLowerCase();

  for (let i = 0; i < data.length; i++) {
    if (data[i].toLowerCase().includes(keyword)) {
      return `Data found: ${data[i]}`;
    }
  }
  return "Data not found";
}

const data = [
  "Danawi Liam",
  "Tarjaya",
  "Daruna",
  "Warsoni",
  "John Wick",
  "Hadi PS",
  "Derian Lekso",
];
console.log(search(data, "Warsoni"));
console.log(search(data, "search"));
