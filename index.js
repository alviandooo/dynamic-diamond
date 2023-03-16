const printDiamond = (number) => {
  const isNumber = typeof number === "number";
  const isOdd = number % 2 === 1;
  const isPositive = number > 0;

  if (!isNumber || !isOdd || !isPositive) {
    console.log(
      "Error! Params must be number, odd number and positive number."
    );
    return false;
  }

  let n = number; // params
  let totalRow = n * 2 - 1;
  let halfRow = Math.ceil(totalRow / 2);
  let limitDown = 0; // limit left
  let limitUp = 0; // limit right
  let countReverse = 0;

  // loop row
  for (let row = 0; row <= totalRow; row++) {
    let stars = "";
    let countIn = 0;

    // if row < half
    if (row < halfRow) {
      limitDown = halfRow - row;
      limitUp = halfRow + row;
    } else {
      countReverse++;
      limitDown = row + 2 - halfRow;
      limitUp = totalRow - countReverse;
    }

    // loop column
    for (let column = 1; column <= totalRow; column++) {
      if (column < limitDown || column > limitUp) {
        stars += " ";
      } else {
        countIn++;
        if (countIn % 2 === 1) {
          stars += "*";
        } else {
          stars += " ";
        }
      }
    }

    // print stars
    console.log(stars);
    // move new row
  }
  return true;
};

printDiamond(9);
printDiamond(-1);
printDiamond("2");
printDiamond(2);
