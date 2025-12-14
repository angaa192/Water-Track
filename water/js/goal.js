let current = Number(localStorage.getItem("water")) || 0;
const goal = 2000;

update();

function addWater(amount){
  current += amount;
  if (current > goal) current = goal;
  localStorage.setItem("water", String(current));
  update();
}

function update(){
  const percent = Math.round((current / goal) * 100);
  document.getElementById("current").textContent = current;
  document.getElementById("progress").textContent = percent;
  document.getElementById("fill").style.width = percent + "%";
}
