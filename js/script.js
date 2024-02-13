console.log('Hello');
// Triangle Function
document.getElementById('btnTriangle').addEventListener('click', function () {
  // call input value
  const baseInput = document.getElementById('b-input-Triangle');
  //   Convert String To Number
  const base = parseFloat(baseInput.value);
  //   Call input value
  const heightInput = document.getElementById('h-input-Triangle');
  //   Convert String To number
  const height = parseFloat(heightInput.value);

  const answer = 0.5 * base * height;
  //   console.log(answer);

  const output = document.getElementById('triangleOutput');
  output.innerText = answer.toFixed(4);
});

// Rectangle Function
document.getElementById('btnRectangle').addEventListener('click', function () {
  // call input value
  const widthInput = document.getElementById('w-input-Rectangle');
  //   Convert String To Number
  const width = parseFloat(widthInput.value);
  //   Call input value
  const leftInput = document.getElementById('l-input-Rectangle');
  //   Convert String To number
  const left = parseFloat(leftInput.value);

  const answer = width * left;
  //   console.log(answer);

  const output = document.getElementById('rectangleOutput');
  output.innerText = answer.toFixed(4);
});

// Parallelogram Function
document
  .getElementById('btnParallelogram')
  .addEventListener('click', function () {
    // call input value
    const baseInput = document.getElementById('b-input-Parallelogram');
    //   Convert String To Number
    const base = parseFloat(baseInput.value);
    //   Call input value
    const heightInput = document.getElementById('h-input-Parallelogram');
    //   Convert String To number
    const height = parseFloat(heightInput.value);

    const answer = base * height;
    //   console.log(answer);

    const output = document.getElementById('parallelogramOutput');
    output.innerText = answer.toFixed(4);
  });

// Rhombus Function
document.getElementById('btnRhombus').addEventListener('click', function () {
  // call input value
  const baseInput = document.getElementById('b-input-Rhombus');
  //   Convert String To Number
  const base = parseFloat(baseInput.value);
  //   Call input value
  const heightInput = document.getElementById('h-input-Rhombus');
  //   Convert String To number
  const height = parseFloat(heightInput.value);

  const answer = (base * height) / 2;
  console.log(answer);

  const output = document.getElementById('rhombusOutput');
  output.innerText = answer.toFixed(4);
});

// Pentagon Function
document.getElementById('btnPentagon').addEventListener('click', function () {
  // call input value

  const perimeterInput = document.getElementById('p-Input-Pentagon');
  //   Convert String To Number
  const perimeter = parseFloat(perimeterInput.value);
  //   Call input value
  const apothemInput = document.getElementById('a-Input-Pentagon');
  //   Convert String To number
  const apothem = parseFloat(apothemInput.value);

  const answer = 0.5 * perimeter * apothem;
  //   console.log(answer);

  const output = document.getElementById('pentagonOutput');
  output.innerText = answer.toFixed(4);
});

//  Ellipse Function
document.getElementById('btnEllipse').addEventListener('click', function () {
  // call input value
  const aInput = document.getElementById('a-Input-Ellipse');
  //   Convert String To Number
  const a = parseFloat(aInput.value);
  //   Call input value
  const bInput = document.getElementById('b-Input-Ellipse');
  //   Convert String To number
  const b = parseFloat(bInput.value);

  const answer = 3.1416 * a * b;
  //   console.log(answer);

  const output = document.getElementById('ellipseOutput');
  output.innerText = answer.toFixed(4);
});
