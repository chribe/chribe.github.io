/* =========================
   Dark Mode Initialization
   ========================= */

function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme, save = true) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Keep navigation links black
    document.querySelectorAll("#tswcssbuttons a")
      .forEach(a => a.style.color = "#000");

    if (save) localStorage.setItem("theme", theme);
  }

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme
      : (systemPrefersDark.matches ? "dark" : "light");
  }

  // Apply theme immediately
  applyTheme(getPreferredTheme(), false);

  // Toggle click
  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    applyTheme(isDark ? "light" : "dark");
  });

  // React to system changes
  systemPrefersDark.addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light", false);
    }
  });
}

/* ----------------------------------
   Wait until nav is loaded
---------------------------------- */

function waitForThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");

  if (toggleBtn) {
    initThemeToggle();
  } else {
    setTimeout(waitForThemeToggle, 50);
  }
}

window.addEventListener("load", waitForThemeToggle);


// Cloudflare Web Analytics
if (!document.querySelector('script[src="https://static.cloudflareinsights.com/beacon.min.js"]')) {
    const cfScript = document.createElement("script");

    cfScript.type = "module";
    cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
    cfScript.dataset.cfBeacon = JSON.stringify({
        token: "ac57c6222b1e4e87a9bd199a1b7b8e55"
    });

    document.head.appendChild(cfScript);
}