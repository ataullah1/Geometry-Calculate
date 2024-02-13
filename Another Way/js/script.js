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

  // call gamete name
  const gNum = document.getElementById('tName').innerText;
  // Area section added function this value
  const areaCalculateSec = document.getElementById('areaCalculate');
  // Element create for areaCalculate section
  const areaCalculateSecValue = document.createElement('div');
  areaCalculateSecValue.innerHTML = `<h2 class="text-2xl">${gNum}:</h2>
  <p class="text-lg">${base} × ${height} = ${answer.toFixed(
    4
  )}cm<sup>2</sup></p>
  <hr />`;
  areaCalculateSec.appendChild(areaCalculateSecValue);
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

  // call gamete name
  const gNum = document.getElementById('rName').innerText;
  // Area section added function this value
  const areaCalculateSec = document.getElementById('areaCalculate');
  // Element create for areaCalculate section
  const areaCalculateSecValue = document.createElement('div');
  areaCalculateSecValue.innerHTML = `<h2 class="text-2xl">${gNum}:</h2>
  <p class="text-lg">${width} × ${left} = ${answer.toFixed(4)}cm<sup>2</sup></p>
  <hr />`;
  areaCalculateSec.appendChild(areaCalculateSecValue);
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

    // call gamete name
    const gNum = document.getElementById('paraName').innerText;
    // Area section added function this value
    const areaCalculateSec = document.getElementById('areaCalculate');
    // Element create for areaCalculate section
    const areaCalculateSecValue = document.createElement('div');
    areaCalculateSecValue.innerHTML = `<h2 class="text-2xl">${gNum}:</h2>
  <p class="text-lg">${base} × ${height} = ${answer.toFixed(
      4
    )}cm<sup>2</sup></p>
  <hr />`;
    areaCalculateSec.appendChild(areaCalculateSecValue);
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

  // call gamete name
  const gNum = document.getElementById('rName').innerText;
  // Area section added function this value
  const areaCalculateSec = document.getElementById('areaCalculate');
  // Element create for areaCalculate section
  const areaCalculateSecValue = document.createElement('div');
  areaCalculateSecValue.innerHTML = `<h2 class="text-2xl">${gNum}:</h2>
  <p class="text-lg">${base} × ${height} ÷ 2 = ${answer.toFixed(
    4
  )}cm<sup>2</sup></p>
  <hr />`;
  areaCalculateSec.appendChild(areaCalculateSecValue);
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

  // call gamete name
  const gNum = document.getElementById('pentName').innerText;
  // Area section added function this value
  const areaCalculateSec = document.getElementById('areaCalculate');
  // Element create for areaCalculate section
  const areaCalculateSecValue = document.createElement('div');
  areaCalculateSecValue.innerHTML = `<h2 class="text-2xl">${gNum}:</h2>
  <p class="text-lg">0.5 × ${perimeter} × ${apothem} = ${answer.toFixed(
    4
  )}cm<sup>2</sup></p>
  <hr />`;
  areaCalculateSec.appendChild(areaCalculateSecValue);
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

  // Area section added function this value

  // call gamete name
  const gNum = document.getElementById('elName').innerText;
  // Area section added function this value
  const areaCalculateSec = document.getElementById('areaCalculate');
  // Element create for areaCalculate section
  const areaCalculateSecValue = document.createElement('div');
  areaCalculateSecValue.innerHTML = `<h2 class="text-2xl">${gNum}:</h2>
  <p class="text-lg">3.1416 × ${a} × ${b} = ${answer.toFixed(
    4
  )}cm<sup>2</sup></p>
  <hr />`;
  areaCalculateSec.appendChild(areaCalculateSecValue);
});
