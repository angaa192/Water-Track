const water = Number(localStorage.getItem("water")) || 0;
const frequency = localStorage.getItem("frequency") || "—";
const mood = localStorage.getItem("mood") || "—";
const type = localStorage.getItem("type") || "—";

document.getElementById("water").textContent = water;
document.getElementById("frequency").textContent = frequency;
document.getElementById("mood").textContent = mood;
document.getElementById("type").textContent = type;

/* прогресс как в goal */
const goal = 2000;
const percent = Math.min(100, Math.round((water / goal) * 100));
document.getElementById("sumFill").style.width = percent + "%";

/* сообщение */
const msg = document.getElementById("message");
if (percent >= 100) msg.textContent = "Perfect. You hit your daily goal 💪";
else if (percent >= 70) msg.textContent = "Strong progress. One more glass and you’re there.";
else if (percent >= 35) msg.textContent = "Good start. Keep going step by step.";
else msg.textContent = "Start small: try +250 ml now — you’ll feel it.";

function restart(){
  localStorage.clear();
  location.href = "index.html";
}
window.restart = restart;
