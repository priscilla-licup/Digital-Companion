const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
    { minDegree: 0, maxDegree: 90, value: '0,0,0,6,6,6', type: 'Triple Zero or Six' }, // Using string to represent array // 1
    { minDegree: 91, maxDegree: 180, value: '-1,-1,-1,-1,10,10', type: 'High Stakes' }, // 4
    { minDegree: 181, maxDegree: 270, value: '1,1,3,3,5,5', type: 'Odd and Safe' }, // 3
    { minDegree: 271, maxDegree: 360, value: '2,2,4,4,6,6', type: 'Even Spread' }, // 2
  ];
  
//Size of each piece
const data = [24, 24, 24, 24];
//background color for each piece
var pieColors = [
  "#E07F66",
  "#548A4B",
  "#ECAF5B",
  "#61AAB8"
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: [1, 2, 3, 4],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Special Die: ${i.value}</p>`;
      spinBtn.disabled = false;
      showModal(i.value, i.type); // NEW
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});


  
  // Update valueGenerator function or wherever you calculate the spin result
  function showModal(result, type) {
    document.getElementById('diceType').textContent = `${type}`;
    document.getElementById('diceValues').textContent = `${result}`;
    document.getElementById('specialdie').setAttribute('data-new-value', `${result}`);

    document.getElementById('resultModal').style.display = "block";
  }
  
//  ----- Redirecting to Roll Page -----

  // Optional: Implement the actions for your buttons
  document.getElementById('regulardie').addEventListener('click', function() {
    localStorage.setItem('diceType', 'regular');
    localStorage.setItem('diceValue', '1,2,3,4,5,6');
    window.location.href = 'trialroll.html'; // Redirect to the dice roll page
  });
  document.getElementById('specialdie').addEventListener('click', function() {
    // Assuming the special die's value is pre-determined or calculated before this function is called
    const diceValue = document.getElementById('specialdie').getAttribute('data-new-value');
    localStorage.setItem('diceType', 'special');
    localStorage.setItem('diceValue', diceValue); // Store the special dice value
    window.location.href = 'specialroll.html'; // Redirect to the dice roll page
  });
  


