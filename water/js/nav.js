const page = location.pathname.split("/").pop();

document.querySelectorAll(".bottom-nav a").forEach(a => {
  if (a.getAttribute("href") === page) a.classList.add("active");
});
