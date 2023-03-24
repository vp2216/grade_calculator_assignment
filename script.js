const eng = document.getElementById("english");
const math = document.getElementById("maths");
const phy = document.getElementById("physics");
const che = document.getElementById("chemistry");
const com = document.getElementById("computer");
const total = document.getElementById("total");
const avg = document.getElementById("avg");
const grade = document.getElementById("grade");

function submit() {
  if (eng.value == "") eng.value = 0;
  if (math.value == "") math.value = 0;
  if (phy.value == "") phy.value = 0;
  if (che.value == "") che.value = 0;
  if (com.value == "") com.value = 0;
  if (
    parseInt(eng.value) > 100 ||
    parseInt(eng.value) < 0 ||
    parseInt(math.value) > 100 ||
    parseInt(math.value) < 0 ||
    parseInt(phy.value) > 100 ||
    parseInt(phy.value) < 0 ||
    parseInt(che.value) > 100 ||
    parseInt(che.value) < 0 ||
    parseInt(com.value) > 100 ||
    parseInt(com.value) < 0
  ) {
    alert("Marks should be between 0 and 100");
    return;
  }
  const total_marks =
    parseInt(eng.value) +
    parseInt(math.value) +
    parseInt(phy.value) +
    parseInt(che.value) +
    parseInt(com.value);
  total.innerHTML = total_marks;
  const avg_marks = parseInt(total_marks / 5);
  avg.innerHTML = avg_marks;
  if (
    parseInt(eng.value) <= 35 ||
    parseInt(math.value) <= 35 ||
    parseInt(phy.value) <= 35 ||
    parseInt(che.value) <= 35 ||
    parseInt(com.value) <= 35
  ) {
    grade.innerHTML = "F";
    grade.style.color = "red";
  } else {
    if (avg_marks >= 90) {
      grade.innerHTML = "A";
      grade.style.color = "green";
    } else if (avg_marks >= 80) {
      grade.innerHTML = "B";
      grade.style.color = "green";
    } else if (avg_marks >= 70) {
      grade.innerHTML = "C";
      grade.style.color = "green";
    } else if (avg_marks >= 60) {
      grade.innerHTML = "D";
      grade.style.color = "green";
    } else {
      grade.innerHTML = "F";
      grade.style.color = "red";
    }
  }
  eng.value = "";
  math.value = "";
  phy.value = "";
  che.value = "";
  com.value = "";
}
