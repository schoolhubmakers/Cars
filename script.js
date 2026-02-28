const featureData = [
  {
    icon: "fa-solid fa-gem",
    title: "Curated Excellence",
    text: "Every vehicle in our collection is meticulously maintained and detailed to perfection."
  },
  {
    icon: "fa-solid fa-shield",
    title: "Uncompromising Privacy",
    text: "Discreet service and completely confidential booking tailored for high-profile clients.",
    highlight: true
  },
  {
    icon: "fa-solid fa-compass",
    title: "Bespoke Journeys",
    text: "From custom delivery locations to requested amenities, we cater to your exact needs."
  }
];

const carData = [
  {
    id: "1",
    thumb: "fullbodycar/062afb2c-812b-4fc4-bee2-f87b6366482a.jpg",
    image: "carimage/0058d133-1dc2-4a1c-b08e-f47ee4ae540b.jpg",
    name: "Aston Martin DB11",
    year: "2024",
    km: "2k km",
    transmission: "Automatic",
    price: "$850",
    description: "Experience the epitome of British grand touring. The Aston Martin DB11 blends breathtaking performance with exquisite craftsmanship.",
    topSpeed: "322 km/h",
    accel: "3.7s",
    power: "528 hp"
  },
  {
    id: "2",
    thumb: "fullbodycar/243e69a6-b330-46a3-8488-74db97fdbe8a.jpg",
    image: "carimage/0772f3df-4308-4adb-90be-a3801b4c3cb7.jpg",
    name: "Lamborghini Huracán",
    year: "2023",
    km: "5k km",
    transmission: "Dual-Clutch",
    price: "$1,200",
    description: "Visceral, dramatic, and unforgivingly fast. The Huracán Evo delivers a symphony of naturally aspirated V10 power.",
    topSpeed: "325 km/h",
    accel: "2.9s",
    power: "631 hp"
  },
  {
    id: "3",
    thumb: "fullbodycar/52f534b5-0442-4682-ae82-6833cda1604a.jpg",
    image: "carimage/0fdd0e22-8aa5-4689-911e-c54f5309e67a.jpg",
    name: "Ferrari F8 Tributo",
    year: "2024",
    km: "1.5k km",
    transmission: "Automatic",
    price: "$1,400",
    description: "A celebration of excellence. The F8 Tributo features the most powerful V8 in Ferrari history, paired with flawless aerodynamics.",
    topSpeed: "340 km/h",
    accel: "2.9s",
    power: "710 hp"
  },
  {
    id: "4",
    thumb: "fullbodycar/60c314b9-75dd-4e21-83b0-cf15e5016f37.jpg",
    image: "carimage/126575ba-2b35-4038-aa79-c4c5d01ac81c.jpg",
    name: "Porsche 911 GT3",
    year: "2024",
    km: "4k km",
    transmission: "PDK",
    price: "$950",
    description: "Motorsport precision engineered for the road. The 911 GT3 offers an unfiltered, pure driving experience.",
    topSpeed: "318 km/h",
    accel: "3.4s",
    power: "502 hp"
  },
  {
    id: "5",
    thumb: "fullbodycar/6cfa1876-66ed-404b-acee-b344ae2b84ab.jpg",
    image: "carimage/2426049a-2fc3-4ec0-a4bf-d456e258c2e9.jpg",
    name: "McLaren 720S",
    year: "2023",
    km: "6k km",
    transmission: "Automatic",
    price: "$1,300",
    description: "Sculpted by the wind, the 720S is ruthlessly efficient and blazingly fast, redefining the supercar class.",
    topSpeed: "341 km/h",
    accel: "2.8s",
    power: "710 hp"
  },
  {
    id: "6",
    thumb: "fullbodycar/95609661-0739-45a7-9d52-3ae93726ea66.jpg",
    image: "carimage/351ef4db-8c37-4527-8b65-2cbac7c9d183.jpg",
    name: "Rolls-Royce Ghost",
    year: "2025",
    km: "1k km",
    transmission: "Automatic",
    price: "$1,800",
    description: "The sanctuary of luxury. The Ghost presents an atmosphere of calm and tranquility, propelled by silent V12 power.",
    topSpeed: "250 km/h",
    accel: "4.8s",
    power: "563 hp"
  },
  {
    id: "7",
    thumb: "fullbodycar/98d7adc6-0197-406d-9795-c88394417386.jpg",
    image: "carimage/53a083ff-af69-415b-9e1e-0088a5245d3b.jpg",
    name: "Bentley Continental GT",
    year: "2024",
    km: "3k km",
    transmission: "Automatic",
    price: "$1,100",
    description: "Unrivaled grand touring capability. The Continental GT combines immense W12 power with handcrafted elegance.",
    topSpeed: "333 km/h",
    accel: "3.6s",
    power: "650 hp"
  },
  {
    id: "8",
    thumb: "fullbodycar/a680b47d-9bb4-481d-a535-a4e2651b43df.jpg",
    image: "carimage/5e57a62b-c6a1-4f02-9ddc-9f37c94554ee.jpg",
    name: "Mercedes-AMG G63",
    year: "2025",
    km: "8k km",
    transmission: "Automatic",
    price: "$800",
    description: "Iconic design meets uncompromised performance. The G63 commands attention and conquers any terrain.",
    topSpeed: "220 km/h",
    accel: "4.5s",
    power: "577 hp"
  },
  {
    id: "9",
    thumb: "fullbodycar/b224b553-75a5-439b-adda-251669a61157.jpg",
    image: "carimage/ed5291fc-ae6c-4ef7-be89-424205baf910.jpg",
    name: "Audi R8 V10",
    year: "2023",
    km: "10k km",
    transmission: "Automatic",
    price: "$750",
    description: "The everyday supercar. The R8 combines a howling naturally aspirated V10 with Quattro all-wheel-drive confidence.",
    topSpeed: "330 km/h",
    accel: "3.2s",
    power: "602 hp"
  },
  {
    id: "10",
    thumb: "fullbodycar/cba60d4e-354b-4ba8-9b14-2a5d64fcaf23.jpg",
    image: "carimage/f28f8f00-c045-4b9f-9319-fca837234714.jpg",
    name: "Range Rover SV",
    year: "2025",
    km: "2k km",
    transmission: "Automatic",
    price: "$700",
    description: "Peerless luxury and off-road capability. The ultimate Range Rover experience for both driver and passenger.",
    topSpeed: "225 km/h",
    accel: "5.4s",
    power: "523 hp"
  },
  {
    id: "11",
    thumb: "fullbodycar/f341e10e-60b9-4923-9686-a29a09a1529d.jpg",
    image: "carimage/g8D9u.jpg",
    name: "Porsche Taycan Turbo S",
    year: "2024",
    km: "5k km",
    transmission: "2-Speed Auto",
    price: "$850",
    description: "The soul of a Porsche, electrified. The Taycan Turbo S delivers shocking acceleration and precise handling.",
    topSpeed: "260 km/h",
    accel: "2.8s",
    power: "750 hp"
  },
  {
    id: "12",
    thumb: "fullbodycar/f3d0e0b3-cc9a-4033-a3ff-a7d3a72673ba.jpg",
    image: "carimage/rnHCH.jpg",
    name: "BMW M8 Competition",
    year: "2024",
    km: "7k km",
    transmission: "Automatic",
    price: "$650",
    description: "Aggressive styling and relentless power. The M8 Competition is a brutal yet sophisticated grand tourer.",
    topSpeed: "305 km/h",
    accel: "3.0s",
    power: "617 hp"
  },
  {
    id: "13",
    thumb: "fullbodycar/0e731c7f-a287-46a1-8703-a28b05ef66d0.jpg",
    image: "carimage/0058d133-1dc2-4a1c-b08e-f47ee4ae540b.jpg",
    name: "Maserati MC20",
    year: "2024",
    km: "3k km",
    transmission: "Dual-Clutch",
    price: "$1,150",
    description: "Italian passion meets mid-engine perfection. The MC20 is a lightweight, breathtakingly beautiful supercar.",
    topSpeed: "325 km/h",
    accel: "2.9s",
    power: "621 hp"
  },
  {
    id: "14",
    thumb: "fullbodycar/400d08b0-d876-4d21-841c-78ecacd04ef4.jpg",
    image: "carimage/0772f3df-4308-4adb-90be-a3801b4c3cb7.jpg",
    name: "Ferrari Roma",
    year: "2025",
    km: "1k km",
    transmission: "Automatic",
    price: "$1,250",
    description: "La Nuova Dolce Vita. The Roma brings elegant styling and surprising daily drivability to the Ferrari lineup.",
    topSpeed: "320 km/h",
    accel: "3.4s",
    power: "612 hp"
  },
  {
    id: "15",
    thumb: "fullbodycar/591e9d6d-1707-4782-b31d-62d863f9c1e9.jpg",
    image: "carimage/0fdd0e22-8aa5-4689-911e-c54f5309e67a.jpg",
    name: "Aston Martin Vantage",
    year: "2024",
    km: "6k km",
    transmission: "Automatic",
    price: "$900",
    description: "A born predator. The Vantage offers a driver-centric experience with an aggressively tuned V8 soundtrack.",
    topSpeed: "314 km/h",
    accel: "3.6s",
    power: "503 hp"
  },
  {
    id: "16",
    thumb: "fullbodycar/8e8b5325-cb4a-4655-8bda-e9f12d00c164.jpg",
    image: "carimage/126575ba-2b35-4038-aa79-c4c5d01ac81c.jpg",
    name: "Mercedes-Benz S-Class",
    year: "2025",
    km: "8k km",
    transmission: "Automatic",
    price: "$750",
    description: "The benchmark for luxury sedans. The S-Class offers unparalleled comfort, technology, and refined driving.",
    topSpeed: "250 km/h",
    accel: "4.9s",
    power: "429 hp"
  },
  {
    id: "17",
    thumb: "fullbodycar/a7874c49-7dfb-47f9-bbd4-6566d2d88f6f.jpg",
    image: "carimage/2426049a-2fc3-4ec0-a4bf-d456e258c2e9.jpg",
    name: "BMW 7 Series",
    year: "2025",
    km: "4k km",
    transmission: "Automatic",
    price: "$700",
    description: "Innovative engineering and striking presence. The 7 Series is the ultimate luxury driving machine.",
    topSpeed: "250 km/h",
    accel: "4.1s",
    power: "536 hp"
  },
  {
    id: "18",
    thumb: "fullbodycar/d678df9d-c261-466d-82bf-a81858d82f88.jpg",
    image: "carimage/351ef4db-8c37-4527-8b65-2cbac7c9d183.jpg",
    name: "Bentley Flying Spur",
    year: "2024",
    km: "5k km",
    transmission: "Automatic",
    price: "$1,350",
    description: "The definitive four-door grand tourer. Exhilarating performance meets the highest levels of craftsmanship.",
    topSpeed: "333 km/h",
    accel: "3.7s",
    power: "626 hp"
  },
  {
    id: "19",
    thumb: "fullbodycar/f93cdcb4-454f-4edf-9f56-42527a1382f4.jpg",
    image: "carimage/53a083ff-af69-415b-9e1e-0088a5245d3b.jpg",
    name: "Rolls-Royce Cullinan",
    year: "2025",
    km: "2k km",
    transmission: "Automatic",
    price: "$2,000",
    description: "Effortless everywhere. The Cullinan is the apex of luxury SUVs, designed to conquer any environment in supreme comfort.",
    topSpeed: "250 km/h",
    accel: "5.0s",
    power: "563 hp"
  },
  {
    id: "20",
    thumb: "fullbodycar/fc3adc36-91c3-4669-b2d1-74fe0f346305.jpg",
    image: "carimage/5e57a62b-c6a1-4f02-9ddc-9f37c94554ee.jpg",
    name: "Audi RS Q8",
    year: "2024",
    km: "9k km",
    transmission: "Automatic",
    price: "$850",
    description: "Breathtaking performance in an SUV package. The RS Q8 delivers supercar acceleration with family practicality.",
    topSpeed: "305 km/h",
    accel: "3.7s",
    power: "591 hp"
  }
];

const testimonialData = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Alexander Vance",
    role: "CEO, TechVentures",
    quote: "Lurex doesn't just rent cars; they curate experiences. The vehicle was immaculate, and the delivery service was completely seamless."
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Isabella Rossi",
    role: "Architectural Designer",
    quote: "A flawless experience from start to finish. The aesthetic and performance of the fleet perfectly match the high standards of my own work."
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Julian Carter",
    role: "Global Executive",
    quote: "In my line of work, punctuality and presentation are everything. Lurex delivers both with effortless sophistication."
  }
];

function renderFeatures() {
  const root = document.getElementById("featureGrid");
  if (!root) return;

  root.innerHTML = featureData
    .map((item, index) => {
      return `
        <article class="feature-card ${item.highlight ? 'highlight' : ''}" style="animation-delay: ${index * 0.1}s">
          <div class="feature-icon" aria-hidden="true"><i class="${item.icon}"></i></div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `;
    })
    .join("");
}

function renderCars() {
  const root = document.getElementById("carGrid");
  if (!root) return;

  root.innerHTML = carData
    .map(
      (car, index) => `
        <article class="car-card" style="animation-delay: ${index * 0.05}s">
          <div class="car-media" onclick="window.location.href='car.html?id=${car.id}'" style="cursor:pointer;">
            <img src="${car.thumb}" alt="${car.name}" loading="lazy">
            <div class="car-overlay">
              <span class="view-btn">View Details</span>
            </div>
          </div>
          <div class="car-body">
            <div class="car-meta" onclick="window.location.href='car.html?id=${car.id}'" style="cursor:pointer;">
              <h3>${car.name}</h3>
              <span class="car-year">${car.year}</span>
            </div>
            <div class="specs">
              <span><i class="fa-solid fa-gauge-high"></i> ${car.topSpeed}</span>
              <span><i class="fa-solid fa-bolt"></i> ${car.accel}</span>
            </div>
            <div class="car-foot">
              <p class="price">${car.price} <span>/ day</span></p>
              <button class="btn btn-primary btn-sm" onclick="openGlobalReserve('${car.id}'); event.stopPropagation();">Quick Reserve</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTestimonials() {
  const root = document.getElementById("testimonialGrid");
  if (!root) return;

  root.innerHTML = testimonialData
    .map(
      (item) => `
        <article class="testimonial-card">
          <div class="client">
            <img src="${item.avatar}" alt="${item.name}" loading="lazy">
            <div>
              <strong>${item.name}</strong>
              <small>${item.role}</small>
            </div>
          </div>
          <div class="stars" aria-label="5 out of 5 stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>"${item.quote}"</p>
        </article>
      `
    )
    .join("");
}

function renderCarDetails() {
  const detailContainer = document.getElementById("carDetailContainer");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const carId = urlParams.get('id');
  
  const car = carData.find(c => c.id === carId);

  if (!car) {
    detailContainer.innerHTML = `
      <div class="error-state">
        <h2>Vehicle not found</h2>
        <p>The vehicle you are looking for does not exist or has been removed from our fleet.</p>
        <a href="index.html#cars" class="btn btn-primary">Return to Fleet</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${car.name} | Lurex Premium Rentals`;

  detailContainer.innerHTML = `
    <div class="car-detail-header car-detail-header--left">
      <span class="eyebrow">${car.year} Model</span>
      <h1>${car.name}</h1>
    </div>

    <div class="car-detail-body">
      
      <div class="car-detail-main-col">
        <div class="car-detail-hero">
          <img src="${car.thumb}" alt="${car.name}" class="car-detail-img">
        </div>
        
        <div class="car-desc">
          <h3>Overview</h3>
          <p>${car.description}</p>
        </div>
      </div>

      <aside class="car-side">
        <div class="reserve-card glass-panel">
          <p class="car-price-large">${car.price} <span>/ day</span></p>
          <button type="button" class="btn btn-primary btn-large js-open-reserve">Reserve Now</button>
          <a href="index.html#cars" class="btn btn-secondary">Back to Fleet</a>
        </div>

        <div class="car-specs-grid">
          <div class="spec-item">
            <span class="spec-label">Top Speed</span>
            <span class="spec-value">${car.topSpeed}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">0-100 km/h</span>
            <span class="spec-value">${car.accel}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Power</span>
            <span class="spec-value">${car.power}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Transmission</span>
            <span class="spec-value">${car.transmission}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Mileage</span>
            <span class="spec-value">${car.km}</span>
          </div>
        </div>
      </aside>

    </div>

    <div class="reserve-modal" id="reserveModal" aria-hidden="true">
      <button type="button" class="reserve-modal-backdrop" data-close-reserve aria-label="Close reservation form"></button>
      <div class="reserve-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="reserveTitle">
        <button type="button" class="reserve-modal-close" aria-label="Close reservation form" data-close-reserve>
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>

        <form class="reserve-form" id="reserveForm" novalidate>
          <h3 id="reserveTitle">Reserve this vehicle</h3>

          <label class="field">
            <span>Vehicle</span>
            <input type="text" name="vehicle" value="${car.name}" readonly>
          </label>

          <div class="reserve-grid">
            <label class="field">
              <span>Full Name</span>
              <input type="text" name="name" placeholder="Your name" required>
            </label>
            <label class="field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@email.com" required>
            </label>
          </div>

          <div class="reserve-grid">
            <label class="field">
              <span>Pickup Date</span>
              <input type="date" name="pickup_date" required>
            </label>
            <label class="field">
              <span>Return Date</span>
              <input type="date" name="return_date" required>
            </label>
          </div>

          <label class="field">
            <span>Pickup Location</span>
            <input type="text" name="location" placeholder="City or airport" required>
          </label>

          <div class="reserve-actions">
            <button type="submit" class="btn btn-primary btn-large">Send Request</button>
            <button type="button" class="btn btn-secondary" data-close-reserve>Cancel</button>
          </div>

          <p class="form-note">A concierge specialist will contact you shortly.</p>
          <p class="form-status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  `;
}

function setupReserveForm() {
  const form = document.getElementById("reserveForm");
  const modal = document.getElementById("reserveModal");
  const openButtons = document.querySelectorAll(".js-open-reserve");
  if (!form || !modal) return;

  const pickupInput = form.querySelector('input[name="pickup_date"]');
  const returnInput = form.querySelector('input[name="return_date"]');
  const status = form.querySelector(".form-status");
  const vehicleInput = form.querySelector('input[name="vehicle"]');
  const originalVehicle = vehicleInput ? vehicleInput.value : "";
  const closeButtons = modal.querySelectorAll("[data-close-reserve]");
  const today = new Date().toISOString().split("T")[0];
  const firstField = form.querySelector('input[name="name"]');

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (status) {
      status.textContent = "";
      status.classList.remove("is-success");
    }
    if (firstField) firstField.focus();
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  if (pickupInput) pickupInput.min = today;
  if (returnInput) returnInput.min = today;

  if (pickupInput && returnInput) {
    pickupInput.addEventListener("change", () => {
      const nextMin = pickupInput.value || today;
      returnInput.min = nextMin;
      if (returnInput.value && returnInput.value < nextMin) {
        returnInput.value = nextMin;
      }
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (status) {
      status.textContent = "Reservation request sent. Our concierge will contact you shortly.";
      status.classList.add("is-success");
    }

    setTimeout(() => {
      form.reset();
      if (pickupInput) pickupInput.min = today;
      if (returnInput) returnInput.min = today;
      if (vehicleInput) vehicleInput.value = originalVehicle;
      closeModal();
    }, 900);
  });
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");
  const header = document.querySelector(".navbar");

  if (!toggle || !nav) return;

  const closeNav = () => {
    toggle.classList.remove("is-open");
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 900px)").matches) closeNav();
    });
  });

  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 900px)").matches) closeNav();
  });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      if(header) header.classList.add("scrolled");
    } else {
      if(header) header.classList.remove("scrolled");
    }
  });
}

function injectGlobalModal() {
  if (document.getElementById('globalReserveModal')) return;
  const modalHTML = `
    <div class="reserve-modal" id="globalReserveModal" aria-hidden="true">
      <button type="button" class="reserve-modal-backdrop" data-close-global-reserve aria-label="Close reservation form"></button>
      <div class="reserve-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="globalReserveTitle">
        <button type="button" class="reserve-modal-close" aria-label="Close reservation form" data-close-global-reserve>
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>

        <form class="reserve-form" id="globalReserveForm" novalidate>
          <h3 id="globalReserveTitle">Quick Reserve (3-Click)</h3>

          <label class="field">
            <span>Vehicle</span>
            <input type="text" name="vehicle" id="globalReserveVehicleName" readonly>
            <input type="hidden" name="vehicleId" id="globalReserveVehicleId">
          </label>

          <div class="reserve-grid">
            <label class="field">
              <span>Full Name</span>
              <input type="text" name="name" placeholder="Your name" required>
            </label>
            <label class="field">
              <span>Phone Number</span>
              <input type="tel" name="phone" placeholder="Your phone" required>
            </label>
          </div>

          <div class="reserve-grid">
            <label class="field">
              <span>Pickup Date</span>
              <input type="date" name="pickup_date" required>
            </label>
            <label class="field">
              <span>Return Date</span>
              <input type="date" name="return_date" required>
            </label>
          </div>

          <div class="reserve-actions">
            <button type="submit" class="btn btn-primary btn-large">Confirm Booking</button>
            <button type="button" class="btn btn-secondary" data-close-global-reserve>Cancel</button>
          </div>

          <p class="form-status" id="globalFormStatus" aria-live="polite"></p>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  setupGlobalReserveForm();
}

function openGlobalReserve(carId) {
  const car = carData.find(c => c.id === carId);
  if (!car) return;
  
  const modal = document.getElementById('globalReserveModal');
  const vehicleNameInput = document.getElementById('globalReserveVehicleName');
  const vehicleIdInput = document.getElementById('globalReserveVehicleId');
  const status = document.getElementById('globalFormStatus');
  const firstField = document.querySelector('#globalReserveForm input[name="name"]');
  
  vehicleNameInput.value = car.name;
  vehicleIdInput.value = car.id;
  
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (status) {
    status.textContent = "";
    status.classList.remove("is-success");
    status.style = "";
  }
  if (firstField) firstField.focus();
}

function setupGlobalReserveForm() {
  const form = document.getElementById("globalReserveForm");
  const modal = document.getElementById("globalReserveModal");
  if (!form || !modal) return;

  const pickupInput = form.querySelector('input[name="pickup_date"]');
  const returnInput = form.querySelector('input[name="return_date"]');
  const status = document.getElementById("globalFormStatus");
  const closeButtons = modal.querySelectorAll("[data-close-global-reserve]");
  const today = new Date().toISOString().split("T")[0];

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  if (pickupInput) pickupInput.min = today;
  if (returnInput) returnInput.min = today;

  if (pickupInput && returnInput) {
    pickupInput.addEventListener("change", () => {
      const nextMin = pickupInput.value || today;
      returnInput.min = nextMin;
      if (returnInput.value && returnInput.value < nextMin) {
        returnInput.value = nextMin;
      }
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (status) {
      status.innerHTML = '<i class="fa-solid fa-check-circle"></i> Reservation confirmed in 3 clicks! We will contact you shortly.';
      status.classList.add("is-success");
      status.style.color = "#4caf50";
      status.style.fontSize = "1.05rem";
      status.style.marginTop = "10px";
    }

    setTimeout(() => {
      form.reset();
      if (pickupInput) pickupInput.min = today;
      if (returnInput) returnInput.min = today;
      closeModal();
      alert("Success! Your car has been reserved. Thank you for using Lurex 3-click booking.");
    }, 1200);
  });
}

function setupSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.includes('#')) {
          const hash = href.substring(href.indexOf('#'));
          const target = document.querySelector(hash);
          // If target is on the same page, scroll to it smoothly
          if (target && (href.startsWith('#') || window.location.pathname.includes(href.split('#')[0]))) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -80 }); // Offset for navbar
          }
        }
      });
    });
  }
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  setupSmoothScroll();
  renderFeatures();
  renderCars();
  renderTestimonials();
  renderCarDetails();
  setupReserveForm();
  setupNav();
  injectGlobalModal();
});

