const filamentCosts = {
  "filament1": 4.80, // Grey - Elegoo PLA+
  "filament2": 5.15, // White - eSUN PLA+
  "filament3": 6.50, // Black - eSUN PLA Matte
  "filament4": 3.69  // Orange - Elegoo PLA+
};

function getNumber(id) {
  const val = document.getElementById(id).value.trim();
  return val ? parseFloat(val) : 0;
}

function roundUpTo100(num) {
  return Math.ceil(num / 100) * 100;
}

document.getElementById("calculate").addEventListener("click", () => {
  const g1 = getNumber("grams1");
  const g2 = getNumber("grams2");
  const g3 = getNumber("grams3");
  const g4 = getNumber("grams4");
  const hours = getNumber("hours");

  // Calculate total filament cost
  const totalFilament = g1*filamentCosts.filament1 + g2*filamentCosts.filament2 + g3*filamentCosts.filament3 + g4*filamentCosts.filament4;

  // Machine + electricity cost per hour assumed 20 Rs/hour (you can adjust)
  const machineCost = hours * 20;

  const totalCost = totalFilament + machineCost;

  // 60% profit
  const salePrice = roundUpTo100(totalCost * 1.6);

  document.getElementById("finalPrice").textContent = `Rs. ${salePrice}`;
});
