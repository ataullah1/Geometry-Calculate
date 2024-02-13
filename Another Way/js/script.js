console.log('Hello');
// Input value call Function
function inputValue(value) {
  const valueCall = document.getElementById(value);
  const valueNum = parseFloat(valueCall.value);
  return valueNum;
}
// Result function call
function result(value, ans) {
  const output = document.getElementById(value);
  output.innerText = ans.toFixed(4);
}

// Triangle Function
document.getElementById('btnTriangle').addEventListener('click', function () {
  // call input value fun call
  const base = inputValue('b-input-Triangle');
  //   Call input value fuc call
  const height = inputValue('h-input-Triangle');
  // Formula
  const answer = 0.5 * base * height;
  //   console.log(answer);
  result('triangleOutput', answer);

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
  const width = inputValue('w-input-Rectangle');
  //   Call input value
  const left = inputValue('l-input-Rectangle');

  const answer = width * left;
  result('rectangleOutput', answer);

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
    const base = inputValue('b-input-Parallelogram');
    //   Call input value
    const height = inputValue('h-input-Parallelogram');
    const answer = base * height;
    result('parallelogramOutput', answer);

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
  const base = inputValue('b-input-Rhombus');
  const height = inputValue('h-input-Rhombus');
  const answer = (base * height) / 2;
  result('rhombusOutput', answer);

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
  const perimeter = inputValue('p-Input-Pentagon');
  const apothem = inputValue('a-Input-Pentagon');
  const answer = 0.5 * perimeter * apothem;
  result('pentagonOutput', answer);

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
  const a = inputValue('a-Input-Ellipse');
  const b = inputValue('b-Input-Ellipse');
  const answer = 3.1416 * a * b;
  result('ellipseOutput', answer);
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
