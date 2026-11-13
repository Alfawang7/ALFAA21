/* ==========================================================================
   CONFIG: ubah bagian ini untuk mengganti isi portofolio secara permanen.
   - sosial.<platform>.handle : nama akun yang ditampilkan
   - sosial.<platform>.url    : tautan ke akun asli kamu
   - sosial.<platform>.aktif  : false untuk menyembunyikan platform
   ========================================================================== */
const CONFIG = {
  nama: "Muhammad Umar Al Faruq",
  namaHero: "ALFA",
  peran: "Mahasiswa IT",
  peran2: "Desainer & Developer",
  sudutKiri: "UI/UX dan vibe coding.",
  sudutKanan: "Setiap karya dirancang rapi, enak dilihat, dan mudah dipakai.",
  tentangLead: "Saya merancang antarmuka yang enak dipakai dan mewujudkannya lewat vibe coding.",
  tentangIsi: "Saya Muhammad Umar Al Faruq, mahasiswa IT yang tinggal di Tuban. Saya fokus pada desain UI/UX dan mengubah ide menjadi produk lewat vibe coding bersama AI. Di halaman ini kamu bisa melihat karya dan konten yang saya bagikan.",
  keahlian: ["UI Design", "UX Design", "Vibe coding"],
  fakta: [
    ["Nama", "Muhammad Umar Al Faruq"],
    ["Lahir", "21 Mei"],
    ["Tinggal", "Tuban"],
    ["Kemampuan", "UI/UX, vibe coding"],
    ["Status", "Mahasiswa IT"]
  ],
  email: "alfawang7@Gmail.com",
  kontakTeks: "Kirim pesan lewat email atau DM di salah satu platform di bawah.",
  sosial: {
   instagram: { aktif: true, handle: "@__namasayaal",   url: "https://www.instagram.com/__namasayaal?exln=MTh5dngzaHU5czI0eA==" },
    tiktok:    { aktif: true, handle: "@vonalfred",   url: "https://www.tiktok.com/@vonalfred_?_r=1&_t=ZS-9BDNbLPiwBp" },
    youtube:   { aktif: true, handle: "@NamasayaAlfaa",   url: "https://youtube.com/@usernamekamu" },
    discord:   { aktif: true, handle: "alfamart21", url: "https://discord.com/users/1508130737117724692" }
  }
};

/* ============================ Kode di bawah ini ============================ */
const $ = (s, r = document) => r.querySelector(s);
const LS = "portofolio-umar-v2";
const PLAT = {
  instagram: { label: "Instagram", ar: "1/1",  kata: "Postingan" },
  tiktok:    { label: "TikTok",    ar: "9/14", kata: "Video" },
  youtube:   { label: "YouTube",   ar: "16/9", kata: "Video" },
  discord:   { label: "Discord",   ar: "1/1",  kata: "Channel" }
};
const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.2"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>'
};
const LAYOUTS = [["grid", "Grid"], ["carousel", "Geser"], ["list", "Daftar"]];

/* Elemen aman: semua teks dipasang sebagai teks, bukan HTML */
function h(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  for (const k in (attrs || {})) {
    if (attrs[k] === false || attrs[k] == null) continue;
    if (k === "html") e.innerHTML = attrs[k]; else e.setAttribute(k, attrs[k]);
  }
  kids.flat().forEach(c => { if (c != null) e.append(c.nodeType ? c : document.createTextNode(String(c))); });
  return e;
}
const safe = u => /^https?:\/\//i.test(u || "") ? u : (u === "#" ? "#" : "#");
const ext = { target: "_blank", rel: "noopener noreferrer" };

/* Muat perubahan yang disimpan di browser */
let C = JSON.parse(JSON.stringify(CONFIG));
const layoutPref = {};
try {
  const s = JSON.parse(localStorage.getItem(LS) || "null");
  if (s) {
    ["nama", "namaHero", "peran", "peran2", "tentangLead", "gmail"].forEach(k => { if (typeof s[k] === "string" && s[k]) C[k] = s[k]; });
    if (s.sosial) for (const p in s.sosial) if (C.sosial[p]) Object.assign(C.sosial[p], s.sosial[p]);
    if (s.layout) Object.assign(layoutPref, s.layout);
  }
} catch (e) {}
function persist() {
  const out = { nama: C.nama, namaHero: C.namaHero, peran: C.peran, peran2: C.peran2, tentangLead: C.tentangLead, email: C.email, layout: layoutPref, sosial: {} };
  for (const p in C.sosial) out.sosial[p] = { handle: C.sosial[p].handle, url: C.sosial[p].url, aktif: C.sosial[p].aktif };
  try { localStorage.setItem(LS, JSON.stringify(out)); } catch (e) {}
}

/* Render */
function renderTop() {
  const nama = (C.namaHero || C.nama || "Nama").toUpperCase();
  const hn = $("#heroName");
  hn.textContent = nama;
  hn.style.setProperty("--len", Math.max(3, nama.length));
  $("#brand").textContent = nama.slice(0, 14);
  $("#brand").append(h("span", null, "."));
  $("#heroRole").textContent = C.peran;
  $("#heroRole2").textContent = C.peran2;
  $("#heroL").textContent = C.sudutKiri;
  $("#heroR").textContent = C.sudutKanan;
  $("#aboutLead").textContent = C.tentangLead;
  $("#aboutBody").textContent = C.tentangIsi;
  $("#contactText").textContent = C.kontakTeks;
  $("#emailText").textContent = C.email;
  $("#copy").textContent = "© " + new Date().getFullYear() + " " + C.nama;
  $("#skills").replaceChildren(...C.keahlian.map(k => h("span", { class: "chip" }, k)));
  $("#facts").replaceChildren(...C.fakta.map(([a, b]) => h("div", null, h("dt", null, a), h("dd", null, a === "Nama" ? C.nama : b))));
}

function renderPlats() {
  const root = $("#plats");
  const foot = $("#footIcons");
  root.replaceChildren();
  foot.replaceChildren();
  Object.keys(PLAT).forEach(key => {
    const c = C.sosial[key];
    if (!c || c.aktif === false) return;
    const meta = PLAT[key];
    root.append(h("a", Object.assign({ class: "plat-card", id: key, href: safe(c.url), "aria-label": "Buka " + meta.label + " " + c.handle }, ext),
      h("div", { class: "plat-ico", html: ICONS[key] }),
      h("div", null, h("h3", null, meta.label), h("div", { class: "handle" }, c.handle)),
      h("span", { class: "arr", html: ICONS.arrow })));
    foot.append(h("a", Object.assign({ href: safe(c.url), "aria-label": meta.label + " " + c.handle, html: ICONS[key] }, ext)));
  });
}

function renderAll() { renderTop(); renderPlats(); buildForm(); }

/* Panel edit */
function field(id, label, val) {
  const input = h("input", { id, type: "text", value: val || "" });
  return h("label", { for: id }, label, input);
}
function buildForm() {
  const f = $("#editform");
  const keep = document.activeElement && document.activeElement.id;
  f.replaceChildren(
    h("fieldset", null, h("legend", null, "Profil"),
      field("f-nama", "Nama lengkap", C.nama), field("f-hero", "Nama besar di hero", C.namaHero), field("f-peran", "Peran", C.peran), field("f-peran2", "Peran kedua", C.peran2),
      field("f-lead", "Kalimat pembuka", C.tentangLead), field("f-email", "Email", C.email)),
    ...Object.keys(PLAT).map(k => h("fieldset", null, h("legend", null, PLAT[k].label),
      field("f-" + k + "-h", "Nama akun", C.sosial[k].handle), field("f-" + k + "-u", "Tautan (https://...)", C.sosial[k].url)))
  );
  if (keep) { const el = document.getElementById(keep); if (el) el.focus(); }
}
function readForm() {
  C.nama = $("#f-nama").value.trim() || C.nama; C.namaHero = $("#f-hero").value.trim() || C.namaHero;
  C.peran = $("#f-peran").value; C.peran2 = $("#f-peran2").value;
  C.tentangLead = $("#f-lead").value; C.email = $("#f-email").value;
  Object.keys(PLAT).forEach(k => {
    C.sosial[k].handle = $("#f-" + k + "-h").value;
    const u = $("#f-" + k + "-u").value.trim();
    C.sosial[k].url = /^https?:\/\//i.test(u) ? u : C.sosial[k].url;
    (C.sosial[k].item || []).forEach(it => { if (it.url && /^https?:\/\//i.test(it.url)) it.url = C.sosial[k].url; });
  });
}
function liveUpdate() { renderTop(); renderPlats(); }
$("#editform").addEventListener("input", () => { readForm(); liveUpdate(); });
$("#saveBtn").addEventListener("click", () => { readForm(); persist(); renderAll(); $("#saveBtn").textContent = "Tersimpan"; setTimeout(() => $("#saveBtn").textContent = "Simpan", 1400); });
$("#resetBtn").addEventListener("click", () => {
  try { localStorage.removeItem(LS); } catch (e) {}
  C = JSON.parse(JSON.stringify(CONFIG)); Object.keys(layoutPref).forEach(k => delete layoutPref[k]);
  renderAll();
});
$("#exportBtn").addEventListener("click", () => {
  readForm();
  const code = "const CONFIG = " + JSON.stringify(Object.assign({}, CONFIG, {
    nama: C.nama, namaHero: C.namaHero, peran: C.peran, peran2: C.peran2, tentangLead: C.tentangLead, email: C.email, sosial: C.sosial
  }), null, 2) + ";";
  const out = $("#exportOut"); out.value = code; $("#exportLabel").hidden = false;
  const done = () => { $("#exportBtn").textContent = "Tersalin"; setTimeout(() => $("#exportBtn").textContent = "Salin CONFIG", 1400); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(done, () => { out.select(); });
  else out.select();
});
$("#editfab").addEventListener("click", () => {
  const p = $("#panel"); p.hidden = !p.hidden;
  $("#editfab").setAttribute("aria-expanded", String(!p.hidden));
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("#panel").hidden) { $("#panel").hidden = true; $("#editfab").setAttribute("aria-expanded", "false"); $("#editfab").focus(); } });
$("#copyMail").addEventListener("click", () => {
  const t = C.email, b = $("#copyMail");
  const done = () => { b.textContent = "Tersalin"; setTimeout(() => b.textContent = "Salin email", 1400); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, () => {});
});

/* Tema */
$("#themebtn").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : !matchMedia("(prefers-color-scheme: light)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem(LS + "-tema", root.dataset.theme); } catch (e) {}
});
try { const t = localStorage.getItem(LS + "-tema"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}

/* Efek 3D foto: kemiringan mengikuti kursor */
(function () {
  const hero = $(".hero"), tilt = $("#tilt");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.setProperty("--ry", (x * 18).toFixed(2) + "deg");
    tilt.style.setProperty("--rx", (-y * 12).toFixed(2) + "deg");
  });
  hero.addEventListener("pointerleave", () => { tilt.style.setProperty("--ry", "0deg"); tilt.style.setProperty("--rx", "0deg"); });
})();

renderAll();
