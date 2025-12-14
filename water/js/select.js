const btn = document.getElementById("continue");
const opts = document.querySelectorAll(".option");

let nextPage = null;

function setSelected(el){
  opts.forEach(o => o.classList.remove("selected","pop"));
  el.classList.add("selected","pop");

  const key = el.dataset.key;                 // frequency | mood | type
  const label = el.querySelector(".label")?.textContent?.trim() || el.textContent.trim();
  localStorage.setItem(key, label);

  nextPage = el.dataset.next || null;

  if (btn){
    btn.disabled = false;
    btn.textContent = (nextPage && nextPage.includes("summary")) ? "Finish ✓" : "Continue →";
  }
}

opts.forEach(el => {
  el.addEventListener("click", () => setSelected(el), {passive:true});
});

if (btn){
  btn.addEventListener("click", () => {
    if (!nextPage) return;
    location.href = nextPage;
  });
}

/* восстановление выбора при возврате */
(function restore(){
  const any = opts[0];
  if (!any) return;
  const key = any.dataset.key;
  const saved = localStorage.getItem(key);
  if (!saved) return;

  const match = Array.from(opts).find(o => {
    const label = o.querySelector(".label")?.textContent?.trim() || o.textContent.trim();
    return label === saved;
  });
  if (match) setSelected(match);
})();
