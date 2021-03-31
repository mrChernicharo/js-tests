const items = [
  [
    "cats",
    [
      { name: "name", img: "img/img.jpg" },
      { name: "name2", img: "img2/img.jpg" },
    ],
  ],
  [
    "dogs",
    [
      { name: "name", img: "img/img.jpg" },
      { name: "name2", img: "img2/img.jpg" },
    ],
  ],
];

const search = (searchString) => {
  const matchedItem = items.find((item) => item[0] === searchString);
  return matchedItem[1];
};

console.log(search("cats"));
