const labels = [
  { name: "a", x: 10 },
  { name: "b", x: 12 },
  { name: "c", x: 22 },
  { name: "d", x: 21 },
  { name: "e", x: 20 },
  { name: "f", x: 52 },
  { name: "g", x: 32 },
];

const conflicts = [];

labels.forEach((label, i, arr) => {
  const conflicting = arr.filter(
    (item) => item.name !== label.name && Math.abs(item.x - label.x) < 4
  );
  console.log(label.name);

  conflicting.forEach((conflictItem) =>
    conflicts.push({
      label,
      conflictItem,
    })
  );

  console.log(conflicts);
});

// labels.filter(((label,i,arr) => { label.x }))
