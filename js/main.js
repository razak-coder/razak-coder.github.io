(function () {
  "use strict";

  var SITE = window.SITE;
  var WHATSAPP = "22899718792";
  var EMAIL = "hamadouabdourazak96@gmail.com";
  var root = document.documentElement;
  var lang = "fr";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var ICONS = {
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
    ship: '<path d="M3 17l2 4h14l2-4M5 17V9h14v8M9 9V5h6v4M12 21v-8"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
    box: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M17 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>'
  };

  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function t(key) { return (SITE.ui[lang] && SITE.ui[lang][key]) || SITE.ui.fr[key] || ""; }
  function tr(obj) { return obj ? (obj[lang] || obj.fr || "") : ""; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.layers) + "</svg>";
  }

  /* ---------- Rendu des sections ---------- */
  function renderServices() {
    document.getElementById("services-list").innerHTML = SITE.services.map(function (s) {
      var pts = (s.points && (s.points[lang] || s.points.fr)) || [];
      return '<article class="card reveal">' +
        '<div class="card__icon">' + icon(s.icon) + "</div>" +
        "<h3>" + esc(tr(s.title)) + "</h3>" +
        "<p>" + esc(tr(s.text)) + "</p>" +
        (pts.length ? "<ul>" + pts.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") +
        "</article>";
    }).join("");
  }

  function renderSkills() {
    toggleSection("skills", SITE.skills.length);
    document.getElementById("skills-list").innerHTML = SITE.skills.map(function (s) {
      return '<article class="card reveal">' +
        '<div class="card__icon">' + icon(s.icon) + "</div>" +
        "<h3>" + esc(tr(s.title)) + "</h3>" +
        tagList(s.tags) +
        (s.learning ? '<p class="card__note"><strong>' + esc(t("skills.learning")) + "</strong> " + esc(s.learning) + "</p>" : "") +
        "</article>";
    }).join("");
  }

  function renderProjects() {
    toggleSection("projects", SITE.projects.length);
    document.getElementById("projects-list").innerHTML = SITE.projects.map(function (p) {
      var links = "";
      if (p.demo) links += '<a href="' + esc(p.demo) + '" target="_blank" rel="noopener">' + esc(t("projects.demo")) + ' <span class="arrow" aria-hidden="true">→</span></a>';
      if (p.code) links += '<a href="' + esc(p.code) + '" target="_blank" rel="noopener">' + esc(t("projects.code")) + "</a>";
      var pts = (p.points && (p.points[lang] || p.points.fr)) || [];
      var shot = p.image ?
        '<div class="project__shot" aria-hidden="true"><span class="project__bar"><i></i><i></i><i></i></span>' +
        '<picture><source srcset="' + esc(p.image) + '.webp" type="image/webp">' +
        '<img src="' + esc(p.image) + '.jpg" alt="" width="1200" height="675" loading="lazy" decoding="async"></picture></div>' : "";
      return '<article class="card reveal' + (p.wide ? " card--wide" : " card--project") + '">' +
        shot +
        "<h3>" + esc(tr(p.title)) + "</h3>" +
        (p.text ? "<p>" + esc(tr(p.text)) + "</p>" : "") +
        (pts.length ? '<ul class="cols">' + pts.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
        tagList(p.tags) +
        (links ? '<div class="project__links">' + links + "</div>" : "") +
        "</article>";
    }).join("");
  }

  function renderJourney() {
    toggleSection("journey", SITE.journey.length);
    ["work", "edu"].forEach(function (group) {
      var items = SITE.journey.filter(function (j) { return (j.group || "work") === group; });
      var list = document.getElementById("journey-" + group);
      list.parentNode.hidden = !items.length;
      list.innerHTML = items.map(function (j) {
        return '<li class="reveal">' +
          '<div class="timeline__date">' + esc(typeof j.date === "string" ? j.date : tr(j.date)) + "</div>" +
          "<h4>" + esc(tr(j.title)) + "</h4>" +
          (j.place ? '<div class="timeline__place">' + esc(tr(j.place)) + "</div>" : "") +
          (j.text ? "<p>" + esc(tr(j.text)) + "</p>" : "") +
          "</li>";
      }).join("");
    });
  }

  function renderQualities() {
    document.getElementById("qualities-list").innerHTML = (SITE.qualities || []).map(function (q) {
      return "<li>" + esc(tr(q)) + "</li>";
    }).join("");
  }

  function tagList(tags) {
    if (!tags || !tags.length) return "";
    return '<ul class="tags">' + tags.map(function (x) {
      return "<li>" + esc(typeof x === "string" ? x : tr(x)) + "</li>";
    }).join("") + "</ul>";
  }

  function toggleSection(id, hasItems) {
    document.getElementById(id).hidden = !hasItems;
    var link = document.querySelector('[data-section-link="' + id + '"]');
    if (link) link.hidden = !hasItems;
  }

  /* ---------- Langue ---------- */
  function setLang(next) {
    lang = SITE.languages.indexOf(next) >= 0 ? next : "fr";
    root.lang = lang;
    root.dir = SITE.rtl.indexOf(lang) >= 0 ? "rtl" : "ltr";
    document.title = t("meta.title");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v) el.textContent = v;
    });
    document.getElementById("theme-toggle").setAttribute("aria-label", t("ui.theme"));
    document.getElementById("menu-toggle").setAttribute("aria-label", t("ui.menu"));
    document.getElementById("lang-select").value = lang;
    renderServices();
    renderSkills();
    renderProjects();
    if (typeof tiltProjects === "function") tiltProjects();
    renderJourney();
    renderQualities();
    observeReveals();
    var globe = document.getElementById("globe");
    if (globe) {
      globe.setAttribute("data-lome", t("globe.lome"));
      globe.setAttribute("data-china", t("globe.china"));
      window.dispatchEvent(new Event("portfolio:lang"));
    }
    safeSet("lang", lang);
  }

  function initialLang() {
    var saved = safeGet("lang");
    if (saved && SITE.languages.indexOf(saved) >= 0) return saved;
    var nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
    return SITE.languages.indexOf(nav) >= 0 ? nav : "fr";
  }

  // Changement de langue en fondu (instantané si animations réduites)
  document.getElementById("lang-select").addEventListener("change", function (e) {
    var next = e.target.value;
    if (reduceMotion) { setLang(next); return; }
    root.classList.add("lang-switch");
    setTimeout(function () {
      setLang(next);
      requestAnimationFrame(function () { root.classList.remove("lang-switch"); });
    }, 180);
  });

  /* ---------- Thème clair / sombre ---------- */
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    safeSet("theme", next);
  });

  /* ---------- Menu mobile ---------- */
  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menu-toggle");
  function closeMenu() { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---------- En-tête au défilement + lien actif ---------- */
  var header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  if ("IntersectionObserver" in window) {
    var links = nav.querySelectorAll("a");
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Apparition au défilement ---------- */
  var revealObs = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); revealObs.unobserve(en.target); }
    });
  }, { threshold: 0.1 }) : null;

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      // Cascade : chaque élément d'une grille ou d'une liste attend un peu plus que le précédent
      var i = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty("--d", (Math.max(i, 0) % 6) * 80 + "ms");
      if (revealObs) revealObs.observe(el); else el.classList.add("is-visible");
    });
  }

  /* ---------- Barre de progression de lecture ---------- */
  var bar = document.getElementById("progress-bar");
  var ticking = false;
  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ")";
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  updateProgress();

  /* ---------- Inclinaison 3D au survol (souris uniquement) ---------- */
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  function tilt(el, max) {
    var target = el.querySelector(".tilt") || el;
    var raf = 0;
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        target.style.setProperty("--rx", (-y * max).toFixed(2) + "deg");
        target.style.setProperty("--ry", (x * max).toFixed(2) + "deg");
        target.style.setProperty("--gx", (x + 0.5) * 100 + "%");
        target.style.setProperty("--gy", (y + 0.5) * 100 + "%");
      });
      target.classList.add("is-tilting");
    });
    el.addEventListener("pointerleave", function () {
      cancelAnimationFrame(raf);
      target.classList.remove("is-tilting");
      target.style.setProperty("--rx", "0deg");
      target.style.setProperty("--ry", "0deg");
    });
  }
  if (finePointer && !reduceMotion) {
    document.querySelectorAll("[data-tilt]").forEach(function (el) { tilt(el, 10); });
  }
  function tiltProjects() {
    if (!finePointer || reduceMotion) return;
    document.querySelectorAll(".card--project").forEach(function (el) { tilt(el, 4); });
  }

  /* ---------- Formulaire : WhatsApp ou email (aucun serveur requis) ---------- */
  var form = document.getElementById("contact-form");
  var channel = "whatsapp";
  form.querySelectorAll("button[type=submit]").forEach(function (b) {
    b.addEventListener("click", function () { channel = b.getAttribute("data-channel"); });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("f-name").value.trim();
    var message = document.getElementById("f-message").value.trim();
    var err = document.getElementById("form-error");
    var fName = document.getElementById("f-name");
    var fMsg = document.getElementById("f-message");
    fName.setAttribute("aria-invalid", String(!name));
    fMsg.setAttribute("aria-invalid", String(!message));
    if (!name || !message) {
      err.hidden = false;
      (!name ? fName : fMsg).focus();
      return;
    }
    err.hidden = true;
    var sel = document.getElementById("f-subject");
    var subject = sel.options[sel.selectedIndex].textContent;
    var body = t("form.greeting") + " " + name + ".\n\n[" + subject + "]\n" + message;
    if (channel === "email") {
      window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject + " | " + name) +
        "&body=" + encodeURIComponent(body);
    } else {
      window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(body), "_blank", "noopener");
    }
  });

  /* ---------- Init ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  document.querySelectorAll(".about__photo, .about__text, .services__head > *, .journey > div, .contact > *").forEach(function (el) { el.classList.add("reveal"); });
  // Ordre d'apparition des éléments de l'accueil
  document.querySelectorAll(".hero__text > *").forEach(function (el, i) { el.style.setProperty("--i", i); });
  setLang(initialLang());
  // Entrée de l'accueil en cascade, déclenchée après le premier affichage
  requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add("is-loaded"); }); });
})();
