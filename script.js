/* ============================================================
   NATHAN COUTURIER PORTFOLIO JS
   Render content from CONTENT, handle theme/lang, tickers, motion.
   No frameworks, no build step. Plain ES2020+.
   ============================================================ */

(() => {
  "use strict";

  /* ---------- 0. STATE ---------- */
  const root = document.documentElement;
  const state = {
    theme: localStorage.getItem("nc-theme") || "light",
    lang: localStorage.getItem("nc-lang") || "en",
  };

  /* ---------- 1. UTILS ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = (obj, lang = state.lang) => {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] ?? obj.en ?? "";
  };
  const el = (tag, attrs = {}, ...kids) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k.startsWith("data-")) node.setAttribute(k, v);
      else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
      else if (v != null) node.setAttribute(k, v);
    }
    for (const kid of kids.flat()) {
      if (kid == null || kid === false) continue;
      node.append(kid instanceof Node ? kid : document.createTextNode(kid));
    }
    return node;
  };

  /* ---------- 2. THEME ---------- */
  const applyTheme = (theme) => {
    state.theme = theme;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("nc-theme", theme);
    const icon = $("#theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#17181C" : "#FBFAF8";
  };

  const toggleTheme = () => applyTheme(state.theme === "dark" ? "light" : "dark");

  /* ---------- 3. LANGUAGE ---------- */
  const applyLang = (lang) => {
    state.lang = lang;
    root.setAttribute("lang", lang);
    localStorage.setItem("nc-lang", lang);
    const label = $("#lang-label");
    if (label) label.textContent = lang === "en" ? "FR" : "EN";
    renderAll();
  };

  const toggleLang = () => applyLang(state.lang === "en" ? "fr" : "en");

  /* ---------- 4. NAV ---------- */
  const renderNav = () => {
    const nav = $("#nav");
    if (!nav) return;
    const c = CONTENT;
    nav.innerHTML = "";
    nav.append(
      el("div", { class: "container nav__inner" },
        el("a", { class: "nav__brand", href: "#top" }, "Nathan Couturier"),
        el("ul", { class: "nav__links" },
          el("li", {}, el("a", { class: "nav__link", href: "#currently" }, t(c.nav.currently))),
          el("li", {}, el("a", { class: "nav__link", href: "#experience" }, t(c.nav.work))),
          el("li", {}, el("a", { class: "nav__link", href: "#education" }, t(c.nav.education))),
          el("li", {}, el("a", { class: "nav__link", href: "#skills" }, t(c.nav.skills))),
          el("li", {}, el("a", { class: "nav__link", href: "#projects" }, t(c.nav.projects))),
          el("li", {}, el("a", { class: "nav__link", href: "#contact" }, t(c.nav.contact))),
        ),
        el("div", { class: "nav__tools" },
          el("button", { class: "icon-btn", "aria-label": "Toggle language", onclick: toggleLang, title: "Press L to toggle" },
            el("span", { id: "lang-label" }, state.lang === "en" ? "FR" : "EN")
          ),
          el("button", { class: "icon-btn", "aria-label": "Toggle theme", onclick: toggleTheme, title: "Press T to toggle" },
            el("span", { id: "theme-icon" }, state.theme === "dark" ? "☀" : "☾")
          ),
          el("a", { class: "icon-btn cv-btn", href: c.meta.cv, download: "" }, t(c.nav.cv)),
          el("button", { class: "icon-btn nav__hamburger", "aria-label": "Open menu", onclick: openMobileNav },
            el("span", { html: "≡" })
          ),
        )
      )
    );

    renderMobileNav();
  };

  const renderMobileNav = () => {
    let mn = $("#nav-mobile");
    if (!mn) {
      mn = el("div", { id: "nav-mobile", class: "nav__mobile" });
      document.body.append(mn);
    }
    mn.innerHTML = "";
    const c = CONTENT;
    mn.append(
      el("button", { class: "nav__mobile-close", "aria-label": "Close menu", onclick: closeMobileNav }, "×"),
      el("a", { class: "nav__link", href: "#currently", onclick: closeMobileNav }, t(c.nav.currently)),
      el("a", { class: "nav__link", href: "#experience", onclick: closeMobileNav }, t(c.nav.work)),
      el("a", { class: "nav__link", href: "#education", onclick: closeMobileNav }, t(c.nav.education)),
      el("a", { class: "nav__link", href: "#skills", onclick: closeMobileNav }, t(c.nav.skills)),
      el("a", { class: "nav__link", href: "#projects", onclick: closeMobileNav }, t(c.nav.projects)),
      el("a", { class: "nav__link", href: "#contact", onclick: closeMobileNav }, t(c.nav.contact)),
      el("div", { class: "nav__mobile-tools" },
        el("button", { class: "icon-btn", onclick: () => { toggleLang(); } },
          el("span", {}, state.lang === "en" ? "FR" : "EN")
        ),
        el("button", { class: "icon-btn", onclick: toggleTheme },
          el("span", {}, state.theme === "dark" ? "☀" : "☾")
        ),
        el("a", { class: "icon-btn cv-btn", href: c.meta.cv, download: "" }, t(c.nav.cv)),
      ),
    );
  };

  const openMobileNav = () => $("#nav-mobile")?.classList.add("open");
  const closeMobileNav = () => $("#nav-mobile")?.classList.remove("open");

  /* ---------- 5. HERO ---------- */
  const renderHero = () => {
    const hero = $("#hero");
    if (!hero) return;
    const c = CONTENT.hero;
    hero.innerHTML = "";
    hero.append(
      el("div", { class: "container hero__inner" },
        el("div", { class: "hero__left" },
          el("p", { class: "eyebrow hero__eyebrow" }, t(c.eyebrow)),
          el("h1", { class: "hero__name" },
            el("span", { class: "name-l1" }, "Nathan"),
            el("span", { class: "name-l2" }, "Couturier"),
          ),
          el("p", { class: "hero__tagline" }, t(c.tagline)),
          el("p", { class: "hero__intro" }, t(c.intro)),
          el("div", { class: "hero__ctas" },
            el("a", { class: "btn btn--primary", href: `mailto:${CONTENT.meta.email}` },
              t(c.ctaPrimary),
              el("span", { class: "arrow" }, "→")
            ),
            el("a", { class: "btn btn--ghost", href: CONTENT.meta.cv, download: "" },
              t(c.ctaSecondary),
              el("span", { class: "arrow" }, "↓")
            ),
          ),
        ),
        el("div", { class: "hero__portrait-wrap" },
          el("div", { class: "hero__portrait" },
            el("img", {
              src: "portrait.jpg",
              alt: "Nathan Couturier",
              loading: "lazy",
              onerror: (ev) => {
                const wrap = ev.target.closest(".hero__portrait-wrap");
                if (wrap) wrap.style.display = "none";
              },
            }),
          ),
          el("div", { class: "hero__meta" },
            "Paris · ", el("span", { class: "dim" }, "Avenue Kléber"),
            el("br"),
            "ESCP · ", el("span", { class: "dim" }, "M1 Investment Banking"),
            el("br"),
            "Available · ", el("span", { class: "dim" }, "Jan 2027"),
          ),
        )
      ),
      el("div", { class: "scroll-cue" }, t(c.scrollCue), " ↓")
    );
  };

  /* ---------- 6. CURRENTLY ---------- */
  const renderCurrently = () => {
    const sec = $("#currently");
    if (!sec) return;
    const c = CONTENT.currently;
    sec.innerHTML = "";
    sec.append(
      el("div", { class: "container" },
        el("div", { class: "section-head reveal" },
          el("span", { class: "eyebrow" }, t(c.sectionLabel)),
          el("h2", {}, t(c.title)),
        ),
        el("div", { class: "currently__card reveal" },
          el("div", { class: "currently__grid" },
            el("div", {},
              el("p", { class: "currently__company" }, c.company),
              el("p", { class: "currently__role" }, t(c.role)),
              el("p", { class: "currently__dates" }, t(c.dates)),
              el("p", { class: "currently__address" }, c.address),
            ),
            el("p", { class: "currently__blurb" }, t(c.blurb)),
          ),
          el("div", { class: "scope-grid" },
            ...c.scope.map(s =>
              el("div", { class: "scope-item" },
                el("h4", { class: "scope-item__label" }, t(s.label)),
                el("p", { class: "scope-item__text" }, t(s.text)),
              )
            )
          ),
          el("div", { class: "seeking" },
            el("span", { class: "seeking__label" }, t(c.seeking.label)),
            el("p", { class: "seeking__text" }, t(c.seeking.text)),
          ),
        )
      )
    );
  };

  /* ---------- 7. EXPERIENCE ---------- */
  const renderExperience = () => {
    const sec = $("#experience");
    if (!sec) return;
    const c = CONTENT.experience;
    sec.innerHTML = "";
    sec.append(
      el("div", { class: "container" },
        el("div", { class: "section-head reveal" },
          el("span", { class: "eyebrow" }, t(c.sectionLabel)),
          el("h2", {}, t(c.title)),
        ),
        el("ul", { class: "timeline reveal-stagger" },
          ...c.items.map(it =>
            el("li", { class: "tl-item" },
              el("div", { class: "tl-item__dates" },
                t(it.dates),
                el("span", { class: "tl-item__location" }, t(it.location)),
              ),
              el("div", {},
                it.logo ? el("img", {
                  class: "tl-item__logo",
                  src: it.logo,
                  alt: `${it.company} logo`,
                  loading: "lazy",
                  onerror: (ev) => { ev.target.style.display = "none"; },
                }) : null,
                el("p", { class: "tl-item__company" }, it.company),
                el("p", { class: "tl-item__role" }, t(it.role)),
              ),
              el("ul", { class: "tl-item__bullets" },
                ...it.bullets.map(b => el("li", {}, t(b)))
              ),
            )
          )
        )
      )
    );
  };

  /* ---------- 8. EDUCATION ---------- */
  const renderEducation = () => {
    const sec = $("#education");
    if (!sec) return;
    const c = CONTENT.education;
    sec.innerHTML = "";
    sec.append(
      el("div", { class: "container" },
        el("div", { class: "section-head reveal" },
          el("span", { class: "eyebrow" }, t(c.sectionLabel)),
          el("h2", {}, t(c.title)),
        ),
        el("div", { class: "edu-grid reveal-stagger" },
          ...c.items.map(it =>
            el("div", { class: "edu-card" },
              it.logo ? el("img", {
                class: "edu-card__logo",
                src: it.logo,
                alt: `${it.school} logo`,
                loading: "lazy",
                onerror: (ev) => { ev.target.style.display = "none"; },
              }) : null,
              el("h3", { class: "edu-card__school" }, it.school),
              el("p", { class: "edu-card__degree" }, t(it.degree)),
              el("div", { class: "edu-card__campuses" },
                ...it.campuses.map(cm =>
                  el("div", { class: "edu-card__campus" },
                    el("span", { class: "city" }, t(cm.label)),
                    el("span", {}, cm.dates),
                  )
                )
              ),
              el("p", { class: "edu-card__courses" }, t(it.courses)),
            )
          )
        ),
        el("div", { class: "edu-extras reveal" },
          el("div", { class: "edu-extra" },
            el("h4", { class: "edu-extra__label" }, t(c.certs.label)),
            el("ul", { class: "edu-extra__list" },
              ...c.certs.items.map(i => el("li", {}, el("span", {}, t(i))))
            ),
          ),
          el("div", { class: "edu-extra" },
            el("h4", { class: "edu-extra__label" }, t(c.languages.label)),
            el("ul", { class: "edu-extra__list" },
              ...c.languages.items.map(i =>
                el("li", {},
                  el("span", {}, t(i.lang)),
                  el("span", { class: "lvl" }, t(i.level)),
                )
              )
            ),
          ),
        ),
      )
    );
  };

  /* ---------- 9. SKILLS ---------- */
  const renderSkills = () => {
    const sec = $("#skills");
    if (!sec) return;
    const c = CONTENT.skills;
    sec.innerHTML = "";
    sec.append(
      el("div", { class: "container" },
        el("div", { class: "section-head reveal" },
          el("span", { class: "eyebrow" }, t(c.sectionLabel)),
          el("h2", {}, t(c.title)),
        ),
        el("div", { class: "skills__list reveal-stagger" },
          ...c.items.map(s => {
            const node = el("div", { class: "skill" },
              el("span", { class: "skill__name" }, s.name),
              el("div", { class: "skill__bar" },
                el("div", { class: "skill__fill" }),
              ),
              el("span", { class: `skill__level ${s.level.toLowerCase()}` }, s.level),
            );
            node.style.setProperty("--scale", String(s.value / 100));
            return node;
          })
        )
      )
    );
  };

  /* ---------- 10. PROJECTS ---------- */
  const renderProjects = () => {
    const sec = $("#projects");
    if (!sec) return;
    const c = CONTENT.projects;
    sec.innerHTML = "";
    sec.append(
      el("div", { class: "container" },
        el("div", { class: "section-head reveal" },
          el("span", { class: "eyebrow" }, t(c.sectionLabel)),
          el("h2", {}, t(c.title)),
        ),
        el("p", { class: "projects__intro reveal" }, t(c.intro)),
        el("div", { class: "proj-hero reveal-stagger" },
          ...c.hero.map(p =>
            el("article", { class: "proj-card" },
              el("span", { class: "proj-card__index" }, p.index),
              el("div", {},
                el("h3", { class: "proj-card__title" }, t(p.title)),
                el("p", { class: "proj-card__tagline" }, t(p.tagline)),
              ),
              el("div", {},
                el("p", { class: "proj-card__body" }, t(p.body)),
                el("ul", { class: "proj-card__stack" },
                  ...p.stack.map(s => el("li", {}, s))
                ),
              ),
            )
          )
        ),
        el("div", { class: "proj-secondary reveal-stagger" },
          ...c.secondary.map(p =>
            el("article", { class: "proj-sec" },
              el("h3", { class: "proj-sec__title" }, t(p.title)),
              el("p", { class: "proj-sec__body" }, t(p.body)),
              el("ul", { class: "proj-card__stack" },
                ...p.stack.map(s => el("li", {}, s))
              ),
            )
          )
        ),
      )
    );
  };

  /* ---------- 11. QUOTE ---------- */
  const renderQuote = () => {
    const sec = $("#quote");
    if (!sec) return;
    const c = CONTENT.quote;
    sec.innerHTML = "";
    sec.append(
      el("div", { class: "container" },
        el("div", { class: "reveal" },
          el("div", { class: "quote__mark" }, "“"),
          el("blockquote", { class: "quote__text" }, t(c.text)),
          el("p", { class: "quote__attr" }, t(c.attribution)),
        )
      )
    );
  };

  /* ---------- 12. BEYOND ---------- */
  const renderBeyond = () => {
    const sec = $("#beyond");
    if (!sec) return;
    const c = CONTENT.beyond;
    sec.innerHTML = "";
    sec.append(
      el("div", { class: "container" },
        el("div", { class: "section-head reveal" },
          el("span", { class: "eyebrow" }, t(c.sectionLabel)),
          el("h2", {}, t(c.title)),
        ),
        el("div", { class: "beyond-grid reveal-stagger" },
          ...c.items.map(b =>
            el("article", { class: "beyond-card" },
              el("p", { class: "beyond-card__kind" }, t(b.kind)),
              el("h3", { class: "beyond-card__title" }, t(b.title)),
              el("p", { class: "beyond-card__years" }, t(b.years)),
              el("p", { class: "beyond-card__body" }, t(b.body)),
            )
          )
        )
      )
    );
  };

  /* ---------- 13. CONTACT ---------- */
  const renderContact = () => {
    const sec = $("#contact");
    if (!sec) return;
    const c = CONTENT.contact;
    const m = CONTENT.meta;
    sec.innerHTML = "";
    sec.append(
      el("div", { class: "container contact__inner" },
        el("div", { class: "reveal" },
          el("span", { class: "eyebrow" }, t(c.sectionLabel)),
          el("h2", { class: "contact__title" }, t(c.title)),
        ),
        el("div", { class: "reveal" },
          el("p", { class: "contact__body" }, t(c.body)),
          el("div", { class: "contact__list" },
            el("div", { class: "contact__row" },
              el("span", { class: "contact__key" }, "Email"),
              el("a", { class: "contact__val", href: `mailto:${m.email}` }, m.email),
            ),
            el("div", { class: "contact__row" },
              el("span", { class: "contact__key" }, state.lang === "fr" ? "Téléphone" : "Phone"),
              el("a", { class: "contact__val", href: `tel:${m.phone.replace(/\s/g, "")}` }, m.phone),
            ),
            el("div", { class: "contact__row" },
              el("span", { class: "contact__key" }, "LinkedIn"),
              el("a", { class: "contact__val", href: m.linkedin, target: "_blank", rel: "noopener" }, "linkedin.com/in/nathancouturier"),
            ),
            el("div", { class: "contact__row" },
              el("span", { class: "contact__key" }, "CV"),
              el("a", { class: "contact__val", href: m.cv, download: "" }, "Nathan-Couturier-CV.pdf"),
            ),
          ),
        ),
      )
    );
  };

  /* ---------- 14. FOOTER ---------- */
  const renderFooter = () => {
    const fr = $("#footer");
    if (!fr) return;
    const c = CONTENT.footer;
    fr.innerHTML = "";
    fr.append(
      el("div", { class: "container" },
        el("div", { class: "footer__signature reveal" },
          "Nathan ", el("em", {}, "Couturier"),
        ),
        el("div", { class: "footer__meta" },
          el("span", {}, "© ", String(new Date().getFullYear()), " · ", t(c.location)),
          el("span", {}, t(c.role)),
          el("a", { class: "back-top", href: "#top" }, "Back to top ↑"),
        )
      )
    );
  };

  /* ---------- 15. ALL ---------- */
  const renderAll = () => {
    renderNav();
    renderHero();
    renderCurrently();
    renderExperience();
    renderEducation();
    renderSkills();
    renderProjects();
    renderQuote();
    renderBeyond();
    renderContact();
    renderFooter();
    setupReveals();
    bindAnchors();
  };

  /* ---------- 16. REVEALS ---------- */
  let revealIO;
  const setupReveals = () => {
    if (revealIO) revealIO.disconnect();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      $$(".reveal, .reveal-stagger").forEach(n => n.classList.add("in-view"));
      $$(".skill").forEach(n => n.classList.add("in-view"));
      return;
    }
    revealIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          revealIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal, .reveal-stagger, .skill").forEach(n => revealIO.observe(n));
  };

  /* ---------- 17. NAV SCROLLED + SMOOTH ANCHORS ---------- */
  const bindAnchors = () => {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener("click", ev => {
        const id = a.getAttribute("href");
        if (id.length < 2) return;
        const target = $(id);
        if (target) {
          ev.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", id);
        }
      });
    });
  };

  window.addEventListener("scroll", () => {
    const nav = $("#nav");
    if (!nav) return;
    if (window.scrollY > 16) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }, { passive: true });

  /* ---------- 18. KEYBOARD SHORTCUTS ---------- */
  document.addEventListener("keydown", (ev) => {
    if (ev.target.matches("input, textarea")) return;
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
    if (ev.key === "t" || ev.key === "T") { ev.preventDefault(); toggleTheme(); }
    if (ev.key === "l" || ev.key === "L") { ev.preventDefault(); toggleLang(); }
    if (ev.key === "Escape") closeMobileNav();
  });

  /* ---------- 19. MAGNETIC CTA ---------- */
  const bindMagnetic = () => {
    const target = $(".btn--primary");
    if (!target) return;
    const strength = 0.25;
    target.addEventListener("mousemove", (ev) => {
      const r = target.getBoundingClientRect();
      const x = ev.clientX - r.left - r.width / 2;
      const y = ev.clientY - r.top - r.height / 2;
      target.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    target.addEventListener("mouseleave", () => {
      target.style.transform = "";
    });
  };

  /* ---------- 20. CONSOLE EASTER EGG ---------- */
  const easterEgg = () => {
    const styleTitle = "color:#8E2B2B; font-size:18px; font-weight:bold; font-family:Georgia,serif;";
    const styleBody = "color:#6A6E76; font-size:12px; font-family:monospace;";
    console.log("%cNathan Couturier", styleTitle);
    console.log("%cCommodity Trade Finance · HSBC · Paris", styleBody);
    console.log("%cIf you got here from an email, the address is nathan.couturier@edu.escp.eu.", styleBody);
    console.log("%cPress T to toggle theme · Press L to toggle language.", styleBody);
  };

  /* ---------- 21. INIT ---------- */
  const init = () => {
    applyTheme(state.theme);
    applyLang(state.lang);
    bindMagnetic();
    easterEgg();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
