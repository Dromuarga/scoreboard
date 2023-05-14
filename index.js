let results = document.getElementById("results");
let countA = document.getElementById("countA");
let countM = document.getElementById("countM");
let countAr = 0;
let countMa = 0;
let goalA = 0;
let goalM = 0;

function incrementA() {
  countAr += 1;
  countA.textContent = countAr;
}

function incrementM() {
  countMa += 1;
  countM.textContent = countMa;
}

function goalArsenal() {
  goalA += 1;
}

function goalManCity() {
  goalM += 1;
}

function results() {
  let resstr = countAr + "/" + goalA + " vs. " + countMa + "/" + goalM + ",";
  results.textContent += resstr;
}
