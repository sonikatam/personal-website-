function setActiveTab(tabId) {
  const tabs = document.querySelectorAll(".tab[data-tab]");
  const panels = document.querySelectorAll(".panel[data-panel]");
  const content = document.querySelector(".content");

  tabs.forEach((t) => {
    const isActive = t.dataset.tab === tabId;
    t.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  panels.forEach((p) => {
    const isActive = p.dataset.panel === tabId;
    p.hidden = !isActive;
  });

  // keep scroll only where needed, and reset when switching tabs
  if (content) content.scrollTop = 0;
}

function normalizeTabId(value) {
  const v = (value || "").trim().toLowerCase();
  if (!v) return "home";
  if (["home", "projects", "blog", "contact"].includes(v)) return v;
  return "home";
}

function getTabFromHash() {
  // supports #home, #projects, #blog, #contact
  const raw = window.location.hash.replace("#", "");
  return normalizeTabId(raw);
}

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab[data-tab]");

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = normalizeTabId(btn.dataset.tab);
      setActiveTab(tabId);
      window.location.hash = tabId;
    });
  });

  // initialize from hash if present
  setActiveTab(getTabFromHash());

  // respond to manual hash changes / back button
  window.addEventListener("hashchange", () => {
    setActiveTab(getTabFromHash());
  });
});
