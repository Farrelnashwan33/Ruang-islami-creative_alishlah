let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}

const body = document.body

const h1 = document.createElement('h1')

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee>Masjid Al-Ishlah Perumahan Soreang Indah</marquee>'
// fn + windows + titik
const namaKamu = document.createElement('b')

body.append(h1)
body.append(namaSaya)
body.append(namaKamu)

// alert('Assalamualaikum sahabat (*/ω＼*)')
$(document).ready(function(){
   let index = 0;
   const images = $('.slider img');
   const total = images.length;
   

   function changeImage() {
       images.eq(index).removeClass('active');
       index = (index + 1) % total;
       images.eq(index).addClass('active');
   }
   
   setInterval(changeImage, 4000);
});

const cards = [
   { image: 'Gambar_Gambar_Vektor_Masjid_Muslim___Elemen_Grafis_PSD_Unduhan_Gratis_-_Pikbest-removebg-preview.png', title: 'Infaq', description: 'Deskripsi singkat tentang card 1.', link: 'infaq.html' },
   { image: 'Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg', title: 'Gallery', description: 'Deskripsi singkat tentang card 2.', link: 'gallery.html' },
   { image: 'Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg', title: 'Lokasi', description: 'Deskripsi singkat tentang card 3.', link: 'map.html' },
   { image: 'Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg', title: 'Agenda Ramdhan', description: 'Deskripsi singkat tentang card 4.', link: 'https://example.com/4' },
   { image: 'Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg', title: 'Kurmas', description: 'Deskripsi singkat tentang card 5.', link: 'https://example.com/5' },
   { image: 'Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg', title: 'Channel', description: 'Deskripsi singkat tentang card 6.', link: 'https://example.com/6' },
   { image: 'Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg', title: 'Acara besar', description: 'Deskripsi singkat tentang card 7.', link: 'https://example.com/7' },
   { image: 'Premium Vector _ Hand drawn cute muslim boy cartoon with mosque and megaphone.jpeg', title: 'TPQ', description: 'Deskripsi singkat tentang card 8.', link: 'https://example.com/8' }
];

const container = document.getElementById('cardContainer');

cards.forEach((card, index) => {
   const cardElement = document.createElement('div');
   cardElement.classList.add('card');
   cardElement.innerHTML = `
       <img src="${card.image}" alt="${card.title}">
       <div class="card-content">
           <h3>${card.title}</h3>
           ${index < 8 ? `<button onclick="window.location.href='${card.link}'"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform: ;msFilter:;"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path><path d="m11 13.586-2.293-2.293-1.414 1.414L11 16.414l6.207-6.207-1.414-1.414z"></path></svg></button>` : `<a href="${card.link}" target="_blank">Kunjungi</a>`}
       </div>
   `;
   container.appendChild(cardElement);
});

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Fetches the prayer times for Jakarta, Indonesia using the Aladhan API.
 * The method parameter is set to 2, which corresponds to the Islamic
 * Society of North America (ISNA) method.
 *
 * If the request is successful, the function returns an object with the
 * prayer times for each of the five daily prayers in 24-hour format.
 * If the request fails, the function returns null and logs an error to the
 * console.
 *
 * @returns {Object|null} Object with prayer times or null if request fails.
 * @throws {Error} If the request fails.
 */
/*******  598dc38a-f4e4-4b30-b92b-280ed5c380da  *******/
async function fetchPrayerTimes() {
    try {
        const response = await fetch("https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=2");
        const data = await response.json();
        return {
            Subuh: data.data.timings.Fajr,
            Dzuhur: data.data.timings.Dhuhr,
            Ashar: data.data.timings.Asr,
            Magrib: data.data.timings.Maghrib,
            Isya: data.data.timings.Isha
        };
    } catch (error) {
        console.error("Error fetching prayer times:", error);
        return null;
    }
}

async function loadPrayerTimes() {
    const prayerTimes = await fetchPrayerTimes();
    if (!prayerTimes) return;

    const prayerList = document.getElementById("prayerList");
    prayerList.innerHTML = "";
    Object.entries(prayerTimes).forEach(([name, time]) => {
        const li = document.createElement("li");
        li.innerHTML = `<div class='prayer-box'><i class='fas fa-mosque icon'></i><span>${name}</span></div><span class="time">${time}</span>`;
        prayerList.appendChild(li);
    });
}

function updateCurrentTime() {
    const now = new Date();
    document.getElementById("currentTime").textContent = now.toLocaleTimeString();
}

setInterval(updateCurrentTime, 1000);
loadPrayerTimes();
setInterval(loadPrayerTimes, 3600000); // Update setiap jam

var modal = document.getElementById("myModal");
        var btn = document.getElementById("openModal");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
