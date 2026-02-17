document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("tswsidecol");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});
