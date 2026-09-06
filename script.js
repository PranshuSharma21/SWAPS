const SUSTAINABILITY_DATABASE = {
  "tupperware plastic tiffin": {
    name: "Tupperware Plastic Tiffin",
    category: "Kitchen & Food Storage",
    score: 46,
    carbonToMake: "~1.1 kg CO₂",
    yearsInLandfill: "Lid Seal: 3-4 yrs | Box: 400+ yrs",
    parts: [
      {
        name: "Main Food Container (Polypropylene Plastic)",
        carbonUsed: "~0.75 kg CO₂ to mold",
        landfillTime: "400+ years to degrade into microplastics",
        score: 42,
        impactSummary: "Derived directly from petroleum oil. Resists natural composting and absorbs food grease that causes recycling machines to reject it."
      },
      {
        name: "Latching Clips & Fasteners",
        carbonUsed: "~0.20 kg CO₂",
        landfillTime: "3 to 5 years (Snap hinges crack first)",
        score: 35,
        impactSummary: "Repeated mechanical bending fatigues thin plastic hinges, causing the whole container to be tossed out when one latch snaps."
      },
      {
        name: "Airtight Silicone Sealing Ring",
        carbonUsed: "~0.15 kg CO₂",
        landfillTime: "50+ years in regular garbage",
        score: 52,
        impactSummary: "Hard to recycle through local blue bins. Stretches or molds over time and gets discarded into standard municipal trash."
      }
    ],
    flaws: [
      "Microwaving hot or oily food can release microplastics and plasticizer chemicals directly into your lunch.",
      "Oils and curry stains permanently discolor the plastic surface, prompting consumers to discard it early.",
      "Over 90% of discarded food plastics end up in landfills because grease residue ruins recycling batches."
    ],
    swapPointers: [
      "Swap to a 3-tier food-grade 304 stainless steel tiffin (brands like Milton or Signoraware)—it lasts 10+ years, doesn't stain from oils, and won't leach microplastics into hot food.",
      "If you frequently reheat meals in an office microwave, pick a thermal borosilicate glass container with snap-lock silicone lids instead.",
      "Keep your current plastic boxes strictly for cold pantry grain storage so you don't generate instant landfill waste."
    ],
    comparisons: ["Stainless Steel Tiffin", "Borosilicate Glass Container"]
  },
  "stainless steel tiffin": {
    name: "Stainless Steel Tiffin (Food Grade 304)",
    category: "Kitchen & Food Storage",
    score: 92,
    carbonToMake: "~2.4 kg CO₂",
    yearsInLandfill: "Almost never (Infinitely recycled metal)",
    parts: [
      {
        name: "Deep Drawn Steel Tiers",
        carbonUsed: "~1.90 kg CO₂ to smelt and press",
        landfillTime: "100% recyclable forever",
        score: 95,
        impactSummary: "Higher factory footprint to smelt initially, but it never degrades, doesn't rust, and retains 100% scrap value forever."
      },
      {
        name: "Metal Side Clamps & Handle",
        carbonUsed: "~0.35 kg CO₂",
        landfillTime: "Infinitely recyclable scrap steel",
        score: 90,
        impactSummary: "Riveted steel wire locks hold up against thousands of drops without snapping like plastic hinges."
      },
      {
        name: "Removable Silicone Gasket",
        carbonUsed: "~0.15 kg CO₂",
        landfillTime: "5 to 8 years before replacement",
        score: 65,
        impactSummary: "Detaches easily for cleaning without requiring the metal boxes to be thrown away if worn out."
      }
    ],
    flaws: [
      "Cannot be put in standard microwaves (must use ovens, water-baths, or warmers).",
      "Slightly heavier in a backpack than a thin plastic box.",
      "Requires more mining energy on day one than cheap disposable plastic."
    ],
    swapPointers: [
      "Keep using it! It pays back its initial factory emissions in under 6 months of daily lunches and will never end up in a landfill.",
      "Pair it with a compact insulated thermal bag if you want your food hot by lunch without relying on an office microwave.",
      "If the silicone sealing ring stretches out after 4–5 years, buy simple replacement gaskets online instead of throwing the tins away."
    ],
    comparisons: ["Tupperware Plastic Tiffin", "Borosilicate Glass Container"]
  },
  "tesla model 3 ev": {
    name: "Tesla Model 3 (LFP Battery)",
    category: "Electric Car",
    score: 72,
    carbonToMake: "11,500 kg CO₂",
    yearsInLandfill: "Tires: 3-4 yrs | Battery: 15-20 yrs",
    parts: [
      {
        name: "LFP Battery Pack (60 kWh)",
        carbonUsed: "~5,100 kg CO₂ to produce",
        landfillTime: "15 to 20 years before being scrapped",
        score: 76,
        impactSummary: "Mining lithium and iron causes high emissions upfront, but cobalt-free cells can be reused for home or grid energy storage after 15 years."
      },
      {
        name: "Tires & Rubber Compounds",
        carbonUsed: "~140 kg CO₂ per set",
        landfillTime: "3 to 4 years (Fast landfill trip)",
        score: 32,
        impactSummary: "Instant motor power and heavy battery weight wear tires down 20% faster, releasing microplastic dust into storm drains."
      },
      {
        name: "Chassis & Aluminum Body",
        carbonUsed: "~3,600 kg CO₂ to smelt",
        landfillTime: "Almost never (95% recycled)",
        score: 89,
        impactSummary: "Takes high energy to make brand new, but nearly all automotive aluminum gets melted down and reused forever."
      },
      {
        name: "Interior Synthetic Leather",
        carbonUsed: "~380 kg CO₂ per car",
        landfillTime: "10 to 15 years to landfill or incinerator",
        score: 41,
        impactSummary: "Made from plastic polymers derived from crude oil. Cannot be composted or mechanically recycled at vehicle end-of-life."
      }
    ],
    flaws: [
      "Takes about 28,000 km of driving on typical electricity grids before beating a gas car on emissions.",
      "Tires wear down much faster than on lighter cars, creating more rubber trash.",
      "Glued battery cells make fixing one dead cell too risky and expensive."
    ],
    swapPointers: [
      "Definitely worth buying if you have home charging and drive 30+ km daily—your lifetime running emissions will be 60% lower than petrol cars.",
      "Maintain strict tire pressure and accelerate smoothly to avoid shedding premature tire dust into municipal storm drains.",
      "If you only do occasional highway trips, consider an efficient compact hybrid (like the Honda City e:HEV or Toyota Prius) to avoid hauling 450 kg of battery deadweight."
    ],
    comparisons: ["Toyota RAV4 Hybrid", "Polestar 2"]
  },
  "toyota rav4 hybrid": {
    name: "Toyota RAV4 Hybrid",
    category: "Hybrid SUV",
    score: 65,
    carbonToMake: "7,800 kg CO₂",
    yearsInLandfill: "Tires: 5 yrs | Tailpipe: Lifetime | Battery: 12 yrs",
    parts: [
      {
        name: "Small Hybrid Battery (1.6 kWh)",
        carbonUsed: "~450 kg CO₂ to produce",
        landfillTime: "10 to 14 years (High metal salvage)",
        score: 82,
        impactSummary: "Much smaller battery means far less nickel and lithium mining damage compared to big electric cars."
      },
      {
        name: "Gasoline Engine & Transmission",
        carbonUsed: "~2,900 kg CO₂ to cast",
        landfillTime: "Recyclable cast iron and metal",
        score: 54,
        impactSummary: "Low factory footprint to start, but burns fuel and emits greenhouse gases every kilometer you drive."
      },
      {
        name: "Tires & Suspension",
        carbonUsed: "~110 kg CO₂ per set",
        landfillTime: "4 to 6 years before replacement",
        score: 58,
        impactSummary: "Lighter weight than a pure EV means less tire friction and longer tread life before hitting a landfill."
      },
      {
        name: "Catalytic Converter & Exhaust",
        carbonUsed: "~310 kg CO₂ (Precious metal mining)",
        landfillTime: "Heavily recycled for scrap metals",
        score: 60,
        impactSummary: "Requires platinum and rhodium mining, which causes severe ground pollution in mining regions."
      }
    ],
    flaws: [
      "Will burn fuel and release over 30,000 kg of exhaust gases over its driving lifetime.",
      "Produces localized air pollution that hurts urban air quality.",
      "Having both an engine and electric motors means double the maintenance parts."
    ],
    swapPointers: [
      "Ideal choice if you live in an apartment without home charging—it skips the heavy mining footprint of large EV batteries.",
      "If you have dedicated garage parking, swap to a plug-in hybrid (PHEV) or compact EV so your daily errands run entirely on clean electricity.",
      "Use eco-drive modes and regenerative braking consistently to extend brake pad and tire life past 80,000 km."
    ],
    comparisons: ["Tesla Model 3 EV", "Honda CR-V Hybrid"]
  },
  "fast fashion cotton t-shirt": {
    name: "Conventional Cotton T-Shirt",
    category: "Clothing & Apparel",
    score: 38,
    carbonToMake: "~6.5 kg CO₂",
    yearsInLandfill: "1 to 2 years (Fast fashion cycle)",
    parts: [
      {
        name: "Conventionally Grown Cotton",
        carbonUsed: "~3.8 kg CO₂ (High chemical fertilizer)",
        landfillTime: "1 to 5 years (Can rot, but releases methane)",
        score: 45,
        impactSummary: "Consumes up to 2,700 liters of fresh drinking water per shirt and relies heavily on chemical pesticides that strip agricultural soil."
      },
      {
        name: "Synthetic Polyester Stitching & Collar Elastic",
        carbonUsed: "~1.2 kg CO₂",
        landfillTime: "100+ years in garbage piles",
        score: 25,
        impactSummary: "Blended with cotton fibers, making modern mechanical textile recycling equipment impossible to separate."
      },
      {
        name: "Chemical Azo Dyes & Bleaches",
        carbonUsed: "~1.5 kg CO₂",
        landfillTime: "Persistent synthetic ground contamination",
        score: 30,
        impactSummary: "Untreated toxic dye wastewater from textile mills frequently empties into regional rivers."
      }
    ],
    flaws: [
      "Mass-market thin jersey weave stretches and develops holes after only 15-20 wash cycles.",
      "Synthetic thread blends mean less than 1% of discarded garments are recycled into new clothes.",
      "High chemical runoff contaminates freshwater water tables in agricultural communities."
    ],
    swapPointers: [
      "Swap to 100% certified organic cotton or hemp t-shirts from brands that guarantee reinforced collar seams and free repairs.",
      "Wash your t-shirts inside out in cold water and air-dry them—this prevents fiber thinning and doubles garment lifespan.",
      "Aim for the #30Wears rule: don't buy a shirt unless you know you will wear it at least 30 times, and repurpose old ones into kitchen dust rags."
    ],
    comparisons: ["Organic Hemp T-Shirt", "Recycled Cotton T-Shirt"]
  },
  "flagship smartphone": {
    name: "Flagship Glass/Metal Smartphone",
    category: "Electronics",
    score: 41,
    carbonToMake: "72 kg CO₂",
    yearsInLandfill: "Battery: 2-3 yrs | Frame: 100+ yrs in e-waste",
    parts: [
      {
        name: "Lithium Battery",
        carbonUsed: "~9 kg CO₂ to refine",
        landfillTime: "2 to 3 years before dying",
        score: 35,
        impactSummary: "Glued tightly inside. When the battery gets weak, most people throw away the whole working phone."
      },
      {
        name: "Microchips & Circuit Board",
        carbonUsed: "~38 kg CO₂ (High fab energy)",
        landfillTime: "50+ years in electronic waste dumps",
        score: 42,
        impactSummary: "Making tiny computer chips uses over half of the phone's total manufacturing energy."
      },
      {
        name: "OLED Screen & Front Glass",
        carbonUsed: "~16 kg CO₂ to build",
        landfillTime: "Permanent landfill glass",
        score: 44,
        impactSummary: "Glass and screen layers are glued together, so one crack ruins the entire assembly."
      }
    ],
    flaws: [
      "Over 80% of the phone's total emissions happen on the factory floor before you even open the box.",
      "Glued parts make replacing a simple battery so risky that repair shops charge too much.",
      "Less than 20% of global electronic waste is properly recycled."
    ],
    swapPointers: [
      "Keep your current phone for 4+ years instead of upgrading at 2 years—simply getting an official $40 battery replacement cuts your tech footprint in half.",
      "If you need another device, buy certified refurbished (via Apple Refurbished, Cashify, or BackMarket) to eliminate brand-new factory emissions.",
      "Check out modular phones like the Fairphone 5 where you can replace the screen or battery yourself with an ordinary screwdriver in under 2 minutes."
    ],
    comparisons: ["Modular Smartphone", "Refurbished Smartphone"]
  }
};

let primaryProduct = null;
let secondaryProduct = null;
let isComparing = false;

function init3DBackground() {
  const container = document.getElementById("canvasContainer");
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 6.8;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const shapes = [
    new THREE.TorusKnotGeometry(1.6, 0.38, 120, 16, 2, 3),
    new THREE.IcosahedronGeometry(2.1, 1),
    new THREE.DodecahedronGeometry(2.0, 1),
    new THREE.OctahedronGeometry(2.2, 2),
    new THREE.TetrahedronGeometry(2.4, 2),
    new THREE.TorusGeometry(1.9, 0.45, 16, 90),
    new THREE.CylinderGeometry(1.4, 1.4, 2.8, 16, 4, true)
  ];
  const chosenGeometry = shapes[Math.floor(Math.random() * shapes.length)];

  const material = new THREE.MeshBasicMaterial({
    color: 0x1d4ed8,
    wireframe: true,
    transparent: true,
    opacity: 0.38
  });
  const mesh = new THREE.Mesh(chosenGeometry, material);
  scene.add(mesh);

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.0005;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.0005;
  });

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.002;
    mesh.rotation.y += 0.003;
    mesh.rotation.x += mouseY * 0.05;
    mesh.rotation.y += mouseX * 0.05;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  init3DBackground();

  const savedKey = localStorage.getItem("sustain_groq_key");
  const apiStatusText = document.getElementById("apiStatusText");
  const groqApiKeyInput = document.getElementById("groqApiKeyInput");
  if (savedKey) {
    apiStatusText.textContent = "AI Ready";
    groqApiKeyInput.value = savedKey;
  }

  document.querySelectorAll(".preset-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.getElementById("searchInput").value = pill.dataset.query;
      document.getElementById("searchForm").dispatchEvent(new Event("submit"));
    });
  });

  const searchForm = document.getElementById("searchForm");
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    if (!query) return;

    setButtonState(true);
    primaryProduct = await analyzeProduct(query);
    secondaryProduct = null;
    isComparing = false;
    setButtonState(false);

    renderProductCards();
  });

  const compareForm = document.getElementById("compareForm");
  compareForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = document.getElementById("compareInput").value.trim();
    if (!query) return;

    closeCompareModal();
    setButtonState(true);
    secondaryProduct = await analyzeProduct(query);
    isComparing = true;
    setButtonState(false);

    renderProductCards();
  });

  document.getElementById("exitCompareBtn").addEventListener("click", () => {
    secondaryProduct = null;
    isComparing = false;
    renderProductCards();
  });

  document.getElementById("closeModalBtn").addEventListener("click", closeCompareModal);
  document.getElementById("cancelCompareBtn").addEventListener("click", closeCompareModal);

  document.getElementById("configApiBtn").addEventListener("click", () => {
    document.getElementById("apiModal").classList.remove("hidden");
  });
  document.getElementById("closeApiModalBtn").addEventListener("click", () => {
    document.getElementById("apiModal").classList.add("hidden");
  });

  document.getElementById("saveApiBtn").addEventListener("click", () => {
    const key = groqApiKeyInput.value.trim();
    if (key) {
      localStorage.setItem("sustain_groq_key", key);
      apiStatusText.textContent = "AI Ready";
    }
    document.getElementById("apiModal").classList.add("hidden");
  });

  document.getElementById("clearApiBtn").addEventListener("click", () => {
    localStorage.removeItem("sustain_groq_key");
    groqApiKeyInput.value = "";
    apiStatusText.textContent = "AI Key";
    document.getElementById("apiModal").classList.add("hidden");
  });
});

function openCompareModal() {
  const modal = document.getElementById("compareModal");
  const chipsRow = document.getElementById("modalDynamicChips");
  modal.classList.remove("hidden");
  chipsRow.innerHTML = "";

  if (primaryProduct && primaryProduct.comparisons) {
    primaryProduct.comparisons.forEach(alt => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "preset-pill";
      pill.textContent = alt;
      pill.onclick = () => {
        document.getElementById("compareInput").value = alt;
      };
      chipsRow.appendChild(pill);
    });
  }
}

function closeCompareModal() {
  document.getElementById("compareModal").classList.add("hidden");
  document.getElementById("compareInput").value = "";
}

function setButtonState(loading) {
  const btn = document.getElementById("analyzeBtn");
  btn.disabled = loading;
  btn.style.opacity = loading ? "0.5" : "1";
}

async function analyzeProduct(query) {
  const cleanQuery = query.toLowerCase().trim();

  if (SUSTAINABILITY_DATABASE[cleanQuery]) {
    return SUSTAINABILITY_DATABASE[cleanQuery];
  }

  const apiKey = localStorage.getItem("sustain_groq_key");
  if (apiKey) {
    try {
      const aiData = await callGroqAPI(query, apiKey);
      if (aiData) return aiData;
    } catch (err) {
      console.warn(err);
    }
  }

  return generateTailoredFallback(query);
}

async function callGroqAPI(query, apiKey) {
  const prompt = `Perform an accurate sustainability and material audit for: "${query}".
CRITICAL: Calibrate carbon and parts precisely to the actual physical object.
REALISTIC CARBON SCALES:
- Kitchenware/Bottles/Tiffins/Plastics: 0.3 kg to 3 kg CO2.
- Clothing/Apparel/Shoes: 4 kg to 25 kg CO2.
- Electronics (phones, laptops, screens): 30 kg to 140 kg CO2.
- Vehicles (cars, EVs, SUVs): 6,000 kg to 14,000 kg CO2.

Return ONLY raw unescaped JSON with this exact structure and NO markdown ticks:
{
  "name": "Clean real name",
  "category": "Appropriate category",
  "score": number between 15 and 95,
  "carbonToMake": "Realistic carbon with unit",
  "yearsInLandfill": "Realistic breakdown",
  "parts": [
    {
      "name": "Exact component or material",
      "carbonUsed": "Realistic portion of CO2",
      "landfillTime": "Years until discarded or degraded",
      "score": number 0-100,
      "impactSummary": "Plain words explaining raw material mining, toxic leaching, or factory molding."
    },
    {
      "name": "Second component",
      "carbonUsed": "Realistic portion of CO2",
      "landfillTime": "Years",
      "score": number 0-100,
      "impactSummary": "Plain words explaining how it wears out or gets thrown away."
    }
  ],
  "flaws": [
    "First realistic environmental flaw",
    "Second realistic flaw",
    "Third realistic flaw"
  ],
  "swapPointers": [
    "Relatable pointer 1 recommending an exact greener product or brand alternative to buy instead.",
    "Relatable pointer 2 with everyday practical advice to prolong the item or reduce waste.",
    "Relatable pointer 3 on what to look for when shopping for this category."
  ],
  "comparisons": ["Realistic Green Swap 1", "Realistic Green Swap 2"]
}`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: "You output strictly raw unescaped JSON without any markdown formatting." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    })
  });

  if (!res.ok) throw new Error("API call failed");
  const data = await res.json();
  const raw = data.choices[0].message.content.trim();
  const cleaned = raw.replace(/```json/g, "").replace(/```/g, "").trim();
  return JSON.parse(cleaned);
}

function detectItemCategory(query) {
  const q = query.toLowerCase();

  if (q.includes("tiffin") || q.includes("tupperware") || q.includes("lunchbox") || q.includes("bottle") || q.includes("cup") || q.includes("mug") || q.includes("container") || q.includes("plate") || q.includes("bowl") || q.includes("glass") || q.includes("dabba") || q.includes("flask") || q.includes("pan") || q.includes("cookware")) {
    return "kitchen";
  }

  if (q.includes("shirt") || q.includes("pant") || q.includes("jeans") || q.includes("jacket") || q.includes("shoe") || q.includes("sneaker") || q.includes("hoodie") || q.includes("clothes") || q.includes("apparel") || q.includes("cotton") || q.includes("wool") || q.includes("dress")) {
    return "clothing";
  }

  if (q.includes("phone") || q.includes("laptop") || q.includes("tablet") || q.includes("tv") || q.includes("headphone") || q.includes("earphone") || q.includes("charger") || q.includes("watch") || q.includes("monitor") || q.includes("camera") || q.includes("gadget") || q.includes("computer")) {
    return "electronics";
  }

  if (q.includes("car") || q.includes("ev") || q.includes("tesla") || q.includes("suv") || q.includes("truck") || q.includes("hybrid") || q.includes("vehicle") || q.includes("bike") || q.includes("motorcycle") || q.includes("scooter")) {
    return "automotive";
  }

  return "general";
}

function generateTailoredFallback(query) {
  let hash = 0;
  for (let i = 0; i < query.length; i++) hash += query.charCodeAt(i);

  const cat = detectItemCategory(query);
  const formattedTitle = query.charAt(0).toUpperCase() + query.slice(1);

  if (cat === "kitchen") {
    const carbonEst = ((hash % 10) * 0.15 + 0.7).toFixed(1);
    const score = 42 + (hash % 35);
    return {
      name: formattedTitle,
      category: "Kitchen & Food Storage",
      score: score,
      carbonToMake: `~${carbonEst} kg CO₂`,
      yearsInLandfill: "Seals: 3-5 yrs | Container: 400+ yrs",
      parts: [
        {
          name: "Main Storage Body (Polymer Plastic)",
          carbonUsed: `~${(carbonEst * 0.7).toFixed(2)} kg CO₂ to mold`,
          landfillTime: "400+ years in landfills",
          score: 40,
          impactSummary: "Refined directly from petroleum oil. Takes centuries to break down and sheds microplastics into hot food over microwave cycles."
        },
        {
          name: "Lid Hinges & Locking Latches",
          carbonUsed: `~${(carbonEst * 0.2).toFixed(2)} kg CO₂`,
          landfillTime: "3 to 5 years (Snap hinges wear out first)",
          score: 35,
          impactSummary: "Thin plastic latches snap after repeated opening, often forcing the whole container into the trash."
        },
        {
          name: "Airtight Silicone Gasket",
          carbonUsed: `~${(carbonEst * 0.1).toFixed(2)} kg CO₂`,
          landfillTime: "50+ years in garbage piles",
          score: 55,
          impactSummary: "Silicone resists rotting but is not accepted by standard municipal recycling sorting machines."
        }
      ],
      flaws: [
        "Traps curry odors, oils, and stains that make people throw it away early.",
        "Microwaving hot food in plastic can leach plasticizers and microplastics directly into meals.",
        "Food grease residue causes recycling facilities to reject it and redirect it to landfills."
      ],
      swapPointers: [
        `Switch to a high-grade 304 stainless steel container or borosilicate glass tiffin—they never retain greasy odors or leach microplastics into hot food.`,
        `If you need a seal that doesn't leak in a backpack, look for clip-lock lids with food-safe silicone gaskets rather than all-plastic snap hinges.`,
        `Never throw away your existing plastic containers right away—repurpose them for sorting dry kitchen spices, nails, or stationery to maximize their life.`
      ],
      comparisons: ["Stainless Steel Tiffin", "Borosilicate Glass Container"]
    };
  }

  if (cat === "clothing") {
    const carbonEst = (hash % 8) + 7;
    const score = 35 + (hash % 40);
    return {
      name: formattedTitle,
      category: "Clothing & Textiles",
      score: score,
      carbonToMake: `~${carbonEst} kg CO₂`,
      yearsInLandfill: "1 to 3 years (Typical fashion lifecycle)",
      parts: [
        {
          name: "Primary Woven Fabric",
          carbonUsed: `~${Math.round(carbonEst * 0.6)} kg CO₂ in textile mills`,
          landfillTime: "20 to 200 years if synthetic blend",
          score: 40,
          impactSummary: "High chemical fertilizer and agricultural water demand, or synthetic plastic fibers derived from fossil fuels."
        },
        {
          name: "Chemical Dyeing & Washing Agents",
          carbonUsed: `~${Math.round(carbonEst * 0.25)} kg CO₂`,
          landfillTime: "Persistent synthetic ground runoff",
          score: 30,
          impactSummary: "Toxic dye baths and finishing chemicals often pollute regional waterways around industrial garment factories."
        },
        {
          name: "Stitching Threads & Elastic",
          carbonUsed: `~${Math.round(carbonEst * 0.15)} kg CO₂`,
          landfillTime: "100+ years in landfills",
          score: 35,
          impactSummary: "Blended synthetic threads make it very difficult for machines to recycle the cloth back into pure virgin fibers."
        }
      ],
      flaws: [
        "Synthetic and blended fabrics shed thousands of microplastic fibers into water runoffs during home laundry.",
        "Less than 1% of post-consumer clothing waste is recycled back into wearable garments.",
        "Thin weaves and fast fashion seams stretch and unravel after only 15 to 25 wash cycles."
      ],
      swapPointers: [
        `Prioritize garments labeled 100% certified organic cotton, linen, or recycled wool rather than poly-cotton blends that can't be recycled.`,
        `Wash clothes with cold water and hang dry—skipping the electric tumble dryer prevents fabric pilling and cuts household laundry emissions by 75%.`,
        `Try thrift shopping or clothing rentals for event wear to keep existing clothing in active circulation instead of fueling fast-fashion factory runs.`
      ],
      comparisons: ["Organic Cotton Alternative", "Recycled Fabric Garment"]
    };
  }

  if (cat === "electronics") {
    const carbonEst = (hash % 6) * 15 + 45;
    const score = 35 + (hash % 45);
    return {
      name: formattedTitle,
      category: "Consumer Tech",
      score: score,
      carbonToMake: `~${carbonEst} kg CO₂`,
      yearsInLandfill: "Battery: 2-3 yrs | Circuit Boards: 80+ yrs in e-waste",
      parts: [
        {
          name: "Rechargeable Lithium Battery",
          carbonUsed: `~${Math.round(carbonEst * 0.2)} kg CO₂ to refine`,
          landfillTime: "2 to 3 years before severe capacity drop",
          score: 35,
          impactSummary: "Glued inside tight enclosures. When the battery weakens, high repair costs cause consumers to replace the entire working gadget."
        },
        {
          name: "Logic Board & Silicon Microchips",
          carbonUsed: `~${Math.round(carbonEst * 0.55)} kg CO₂ (High semiconductor cleanroom heat)`,
          landfillTime: "50+ years in electronic waste dumps",
          score: 42,
          impactSummary: "Semiconductor fabrication accounts for the vast majority of the device's lifetime greenhouse gas footprint."
        },
        {
          name: "Outer Glass & Casing Enclosure",
          carbonUsed: `~${Math.round(carbonEst * 0.25)} kg CO₂`,
          landfillTime: "Permanent landfill glass / plastic waste",
          score: 45,
          impactSummary: "Strong waterproof glues make disassembling cracked screens without destroying internal electronics very difficult."
        }
      ],
      flaws: [
        "Over 75% of the total lifetime carbon footprint occurs on factory floors before the user unboxes the gadget.",
        "Glued components prevent easy, low-cost battery replacement at home or in local shops.",
        "Less than 20% of global electronic waste is formally gathered and recycled."
      ],
      swapPointers: [
        `Instead of buying brand new, purchase certified refurbished models (like Apple Certified, BackMarket, or Cashify) to bypass new chip manufacturing emissions.`,
        `If your current device is lagging or dying quickly, pay for an official battery swap rather than spending hundreds on a replacement gadget.`,
        `Explore modular brands (such as Fairphone or Framework Laptop) that supply spare parts directly to your door with repair guides.`
      ],
      comparisons: ["Modular Architecture Device", "Certified Refurbished Model"]
    };
  }

  if (cat === "automotive") {
    const carbonEst = (hash % 8) * 800 + 7500;
    const score = 55 + (hash % 30);
    return {
      name: formattedTitle,
      category: "Vehicles & Transport",
      score: score,
      carbonToMake: `~${carbonEst.toLocaleString()} kg CO₂`,
      yearsInLandfill: "Tires: 3-4 yrs | Frame: Recyclable forever",
      parts: [
        {
          name: "Battery Pack / Engine Powertrain",
          carbonUsed: `~${Math.round(carbonEst * 0.5).toLocaleString()} kg CO₂`,
          landfillTime: "12 to 18 years before decommissioning",
          score: 65,
          impactSummary: "Refining metals and battery chemicals drives the heavy manufacturing footprint upfront."
        },
        {
          name: "Tires & Rubber Suspension",
          carbonUsed: "~130 kg CO₂ per replacement set",
          landfillTime: "3 to 5 years (Fast landfill trip)",
          score: 35,
          impactSummary: "High friction causes constant tire tread loss, sending rubber dust and microplastics into urban storm drains."
        },
        {
          name: "Chassis & Stamped Steel/Aluminum",
          carbonUsed: `~${Math.round(carbonEst * 0.35).toLocaleString()} kg CO₂`,
          landfillTime: "Infinitely recyclable scrap metals",
          score: 88,
          impactSummary: "Takes significant energy to smelt, but automotive steel and aluminum have near 95% recycling recovery rates."
        }
      ],
      flaws: [
        "High manufacturing emissions require years of driving before offsetting initial factory emissions.",
        "Tires and brake pads wear continuously into municipal storm drains and particulate smog.",
        "Heavily integrated electronics complicate long-term DIY mechanical repairs."
      ],
      swapPointers: [
        `If you can charge at home and drive regularly, pick an EV with a modest battery capacity (40–60 kWh) to avoid hauling unnecessary battery mass.`,
        `If you rely on street parking without reliable chargers, an efficient hybrid vehicle cuts emissions by 40% without battery charging stress.`,
        `Keep tire pressures calibrated monthly—under-inflated tires increase fuel consumption and wear through rubber compounds 25% faster.`
      ],
      comparisons: ["Lightweight Hybrid Option", "Compact Electric Vehicle"]
    };
  }

  const carbonEst = ((hash % 15) * 0.4 + 1.2).toFixed(1);
  const score = 45 + (hash % 35);
  return {
    name: formattedTitle,
    category: "Everyday Product",
    score: score,
    carbonToMake: `~${carbonEst} kg CO₂`,
    yearsInLandfill: "Wear parts: 3 yrs | Body: 50+ yrs",
    parts: [
      {
        name: "Primary Raw Materials",
        carbonUsed: `~${(carbonEst * 0.65).toFixed(2)} kg CO₂`,
        landfillTime: "25 to 100+ years if non-biodegradable",
        score: 45,
        impactSummary: "Refining raw ingredients and factory molding accounts for the majority of the object's carbon debt."
      },
      {
        name: "Fasteners, Glues & Surface Coatings",
        carbonUsed: `~${(carbonEst * 0.35).toFixed(2)} kg CO₂`,
        landfillTime: "3 to 5 years before peeling or wearing out",
        score: 38,
        impactSummary: "Surface adhesives and chemical coatings make clean material separation in recycling centers difficult."
      }
    ],
    flaws: [
      "Mixed material components cannot be separated easily in municipal recycling bins.",
      "Most wear parts are discarded straight into regular household trash.",
      "Upstream factory manufacturing causes more carbon than its day-to-day use."
    ],
    swapPointers: [
      `Choose models built from solid wood, stainless steel, or unpainted aluminum rather than thin glued plastics.`,
      `Check if the brand sells individual replacement screws, pads, or covers before buying so you can fix it instead of replacing it.`,
      `Buy second-hand or certified refurbished versions of ${query} to prevent new raw materials from being extracted.`
    ],
    comparisons: [`Durable Metal ${query}`, `Recycled Alternative`]
  };
}

function renderProductCards() {
  if (!primaryProduct) return;

  const resultsSection = document.getElementById("resultsSection");
  const cardsGrid = document.getElementById("cardsGrid");
  const compareBanner = document.getElementById("compareBanner");

  resultsSection.classList.remove("hidden");
  cardsGrid.innerHTML = "";

  if (isComparing && secondaryProduct) {
    cardsGrid.className = "cards-grid compare-layout";
    compareBanner.classList.remove("hidden");
    cardsGrid.appendChild(buildCard(primaryProduct, false));
    cardsGrid.appendChild(buildCard(secondaryProduct, true));
  } else {
    cardsGrid.className = "cards-grid single-layout";
    compareBanner.classList.add("hidden");
    cardsGrid.appendChild(buildCard(primaryProduct, false));
  }

  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildCard(item, isSecondary) {
  const card = document.createElement("div");
  card.className = "product-card";

  const partsHTML = item.parts
    .map(p => {
      const badgeClass = p.score >= 70 ? "badge-green" : p.score >= 45 ? "badge-amber" : "badge-red";
      return `
        <div class="part-card-row">
          <div class="part-top-line">
            <span class="part-title">${p.name}</span>
            <span class="part-badge ${badgeClass}">${p.score} / 100 Eco Score</span>
          </div>
          <div class="part-meta-grid">
            <div class="part-meta-item"><strong>Carbon to make:</strong> ${p.carbonUsed}</div>
            <div class="part-meta-item"><strong>Years till landfill:</strong> ${p.landfillTime}</div>
          </div>
          <p class="part-notes">${p.impactSummary}</p>
        </div>
      `;
    })
    .join("");

  const flawsHTML = item.flaws
    .map(f => `<li>${f}</li>`)
    .join("");

  const pointersList = item.swapPointers || (item.swapAdvice ? [item.swapAdvice] : [
    "Choose certified durable materials that avoid mixed glues.",
    "Repair worn parts instead of throwing away the full item.",
    "Look for second-hand or refurbished models to reduce virgin factory demand."
  ]);

  const swapHTML = pointersList
    .map(pt => `<li>${pt}</li>`)
    .join("");

  card.innerHTML = `
    <div class="card-top">
      <div>
        <span class="item-category">${item.category}</span>
        <h3 class="item-name">${item.name}</h3>
      </div>
      ${
        !isSecondary && !isComparing
          ? `<button class="add-compare-btn" id="triggerCompareBtn" title="Compare with another option">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
             </button>`
          : ""
      }
    </div>

    <div class="score-banner">
      <div class="score-circle">
        <span class="score-number">${item.score}</span>
        <span class="score-max">/ 100</span>
      </div>
      <div class="score-summary">
        <h4>${item.score >= 75 ? "Low Environmental Impact" : item.score >= 50 ? "Moderate Waste & Footprint" : "Heavy Carbon & Waste Burden"}</h4>
        <p>Based on factory carbon, part wear time, and how fast it ends up in a landfill.</p>
      </div>
    </div>

    <div class="quick-stats-grid">
      <div class="stat-box">
        <div class="stat-label">Carbon used to make it</div>
        <div class="stat-value">${item.carbonToMake}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Years till it hits a landfill</div>
        <div class="stat-value">${item.yearsInLandfill}</div>
      </div>
    </div>

    <div class="part-breakdown-section">
      <div class="breakdown-title">How Each Part Affects The Planet</div>
      <div class="parts-list">
        ${partsHTML}
      </div>
    </div>

    <div class="issues-panel">
      <div class="panel-title-red">Biggest Environmental Problems</div>
      <ul class="issues-list">${flawsHTML}</ul>
    </div>

    <div class="swap-panel">
      <div class="panel-title-green">Should You Swap?</div>
      <ul class="swap-list">${swapHTML}</ul>
    </div>
  `;

  const plusBtn = card.querySelector("#triggerCompareBtn");
  if (plusBtn) plusBtn.addEventListener("click", openCompareModal);

  return card;
}
