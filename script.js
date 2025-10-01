// ===================== Navbar =====================
const menu = document.querySelector("#menu-btn");
const navbarLinks = document.querySelector(".header .navbar .links");
const navbar = document.querySelector(".header .navbar");

menu?.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbarLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navbarLinks.classList.remove("active");
  navbar.classList.toggle("active", window.scrollY > 60);
});

// ===================== Dynamic Content =====================
const body = document.body;

const h1 = document.createElement("h1");
const namaSaya = document.createElement("p");
namaSaya.innerHTML = "<marquee>Ahlan Wasahlan Di Masjid Al-Ishlah</marquee>";
const namaKamu = document.createElement("b");

body.append(h1, namaSaya, namaKamu);

// ===================== Slider =====================
$(document).ready(() => {
  let index = 0;
  const images = $(".slider img");
  const total = images.length;

  const changeImage = () => {
    images.eq(index).removeClass("active");
    index = (index + 1) % total;
    images.eq(index).addClass("active");
  };

  setInterval(changeImage, 4000);
});

// ===================== Cards =====================
const cards = [
  { image: "Gambar_Gambar_Vektor_Masjid_Muslim___Elemen_Grafis_PSD_Unduhan_Gratis_-_Pikbest-removebg-preview.png", title: "Infaq", link: "infaq.html" },
  { image: "Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg", title: "Gallery", link: "gallery.html" },
  { image: "Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg", title: "Lokasi", link: "map.html" },
  { image: "Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg", title: "Agenda Ramadhan", link: "https://example.com/4" },
  { image: "Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg", title: "Kurmas", link: "https://example.com/5" },
  { image: "Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg", title: "Channel", link: "https://example.com/6" },
  { image: "Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg", title: "Acara besar", link: "https://example.com/7" },
  { image: "Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg", title: "TPQ", link: "https://example.com/8" }
];

const container = document.getElementById("cardContainer");

if (container) {
  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <div class="card-content">
        <h3>${card.title}</h3>
        ${
          index < 8
            ? `<button onclick="window.location.href='${card.link}'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24" style="fill:#fff;">
                  <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8
                  c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path>
                  <path d="m11 13.586-2.293-2.293-1.414 1.414L11 16.414l6.207-6.207-1.414-1.414z"></path>
                </svg>
              </button>`
            : `<a href="${card.link}" target="_blank">Kunjungi</a>`
        }
      </div>
    `;
    container.appendChild(cardElement);
  });
}

// ===================== Prayer Times =====================
const fetchPrayerTimes = async () => {
  try {
    const res = await fetch("https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=2");
    const data = await res.json();
    return {
      Subuh: data.data.timings.Fajr,
      Dzuhur: data.data.timings.Dhuhr,
      Ashar: data.data.timings.Asr,
      Magrib: data.data.timings.Maghrib,
      Isya: data.data.timings.Isha
    };
  } catch (err) {
    console.error("Error fetching prayer times:", err);
    return null;
  }
};

const loadPrayerTimes = async () => {
  const prayerTimes = await fetchPrayerTimes();
  if (!prayerTimes) return;

  const prayerList = document.getElementById("prayerList");
  if (!prayerList) return;

  prayerList.innerHTML = "";
  Object.entries(prayerTimes).forEach(([name, time]) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class='prayer-box'>
        <i class='fas fa-mosque icon'></i><span>${name}</span>
      </div>
      <span class="time">${time}</span>
    `;
    prayerList.appendChild(li);
  });
};

const updateCurrentTime = () => {
  const now = new Date();
  const currentTimeEl = document.getElementById("currentTime");
  if (currentTimeEl) currentTimeEl.textContent = now.toLocaleTimeString();
};

setInterval(updateCurrentTime, 1000);
loadPrayerTimes();
setInterval(loadPrayerTimes, 3600000); // refresh tiap 1 jam

// ===================== Modal =====================
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close");

btn?.addEventListener("click", () => (modal.style.display = "block"));
span?.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
