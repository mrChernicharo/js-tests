const data = [
  {
    itemFolder: "personal",
    itemLocation: "right infront of me",
    itemName: "macBook",
    itemNotes: "Space Gray",
  },
  {
    itemFolder: "professional",
    itemLocation: "behind me",
    itemName: "Dell",
    itemNotes: "Black",
  },
  {
    itemFolder: "student",
    itemLocation: "left of me",
    itemName: "HP",
    itemNotes: "silver",
  },
  {
    itemFolder: "worker",
    itemLocation: "right of me",
    itemName: "Lenovo",
    itemNotes: "black",
  },
  {
    itemFolder: "worker",
    itemLocation: "behind me",
    itemName: "HP",
    itemNotes: "silver",
  },
  // around 20 more items
];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

for (let key of Object.keys(data[0])) {
  const th = document.createElement("th");
  th.textContent = key;
  thead.appendChild(th);
}

data.forEach((item, i) => {
  const tr = document.createElement("tr");

  const td0 = document.createElement("td");
  const td1 = document.createElement("td");
  const td3 = document.createElement("td");
  const td2 = document.createElement("td");

  td0.textContent = item.itemFolder;
  td1.textContent = item.itemName;
  td2.textContent = item.itemLocation;
  td3.textContent = item.itemNotes;

  // tr.append([td1, td2, td3]);
  tr.appendChild(td0);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tbody.appendChild(tr);
});

document.body.appendChild(table);
