/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  // Este es un método porque crea una funcion dentro de un objeto, esta funcion tiene 1 parametro llamado lidStatus. El nombre del método es toggleLid
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  // Este es un método porque crea una funcion dentro de un objeto
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
console.log("Left before:", backpack.strapLength.left);
backpack.newStrapLength(10, 15);
console.log("Left after:", backpack.strapLength.left);
