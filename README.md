## SWAPS
<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=800&size=36&duration=3000&pause=1000&color=2563EB&center=true&vCenter=true&width=650&height=70&lines=S.W.A.P.S.;Should+You+Swap%3F;Audit+Impact+Before+You+Buy;Circular+Material+Simulator" alt="SWAPS Header Animation" />

  <p align="center">
    <strong>Sustainable Waste-reduction & Alternative Part Simulator</strong><br/>
    An environmental decision engine evaluating factory carbon, landfill timelines, and greener swaps before you buy.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Version-2.4.0-2563eb?style=for-the-badge" alt="Version" />
    <img src="https://img.shields.io/badge/SDG-12%20Responsible%20Consumption-059669?style=for-the-badge" alt="SDG 12" />
    <img src="https://img.shields.io/badge/Graphics-Three.js%20WebGL-000000?style=for-the-badge&logo=three.js" alt="Three.js" />
    <img src="https://img.shields.io/badge/AI-Groq%20Llama%203.3-f97316?style=for-the-badge" alt="Groq AI" />
    
  </p>

  <img src="https://capsule-render.vercel.app/api?type=waving&color=2563eb&height=70&section=header" width="100%" alt="Header Wave" />

</div>

---

## What is SWAPS?

Over 80% of product-level environmental damage is locked in during the design and purchasing phase. Once an item has permanently glued parts, toxic additives, or multi-layer plastics, recycling facilities can do very little to prevent it from reaching a landfill.

**S.W.A.P.S.** moves environmental decision-making upstream before consumption happens:
* **Measures Factory Carbon:** Accurately estimates greenhouse emissions required to extract and mold each individual component.
* **Calculates Years Till Landfill:** Unpacks part-by-part degradation timelines (e.g., silicone gaskets vs. plastic shells vs. aluminum frames).
* **Provides 3 Actionable Swap Pointers:** Delivers relatable, realistic recommendations on cleaner market alternatives and longevity habits.

---

## Core Features

* **Calibrated Scale Logic:** Distinguishes between everyday goods (0.3–3 kg CO₂), apparel (4–25 kg CO₂), electronics (30–140 kg CO₂), and vehicles (6,000–14,000 kg CO₂) to prevent distorted emissions data.
* **Component-Level Breakdown:** Audits individual sub-assemblies (e.g., EV battery chemistries, tire wear rates, casing alloys) instead of giving a generic, opaque eco-score.
* **Dual Side-by-Side Comparison:** Direct head-to-head analysis comparing linear items against circular alternatives (e.g., *Plastic Tiffin vs. 304 Stainless Steel* or *Tesla Model 3 vs. RAV4 Hybrid*).
* **Kinetic 3D WebGL Backgrounds:** Randomized wireframe geometries (Torus Knots, Icosahedrons, Octahedrons) that react to mouse physics on every page refresh.
* **In-Card Particle Fields:** Three.js particle systems isolated inside profile cards that accelerate and brighten on user hover.
* **Dual Inference Pipeline:** Local calibrated benchmark database for instant zero-latency lookups, with live AI analysis powered by Groq's high-speed Llama-3.3-70B model.
* **Serverless Sheet Integration:** Contact submissions and beta waitlist emails route directly into Google Sheets via Google Apps Script webhooks.

---

## Sample Benchmarks

| Item Analyzed | Factory Carbon | Years Till Landfill | Primary Swap Advice |
| :--- | :--- | :--- | :--- |
| **Tupperware Plastic Tiffin** | `~1.1 kg CO₂` | **Seal:** 3–5 yrs<br/>**Box:** 400+ yrs | Switch to 304 stainless steel or borosilicate glass; prevents food staining and microplastic leaching. |
| **304 Stainless Steel Tiffin** | `~2.4 kg CO₂` | **Metal:** Infinitely Recycled<br/>**Seal:** 5–8 yrs | Zero landfill burden; offsets initial factory smelting energy in under 6 months of daily use. |
| **Tesla Model 3 (LFP)** | `11,500 kg CO₂` | **Tires:** 3–4 yrs<br/>**Battery:** 15–20 yrs | Highly sustainable if charged with clean power; accelerate gently to limit tire wear into storm drains. |
| **Toyota RAV4 Hybrid** | `7,800 kg CO₂` | **Battery:** 12 yrs<br/>**Exhaust:** Lifetime | Ideal if lacking home charging; otherwise pure EVs yield 60% lower lifetime running emissions. |
| **Fast Fashion T-Shirt** | `~6.5 kg CO₂` | **Garment:** 1–2 yrs | Choose 100% certified organic cotton or hemp; wash cold and air-dry to double fabric life. |
| **Flagship Smartphone** | `72 kg CO₂` | **Battery:** 2–3 yrs<br/>**Frame:** 100+ yrs | Replace battery at year 2 instead of upgrading; or choose modular alternatives like Fairphone. |

---

## Architecture Flow


Product / Vehicle Query
│
▼
Category & Scale Detection
(Kitchenware | Clothing | Electronics | Automotive)
│
┌─────┴─────┐
▼           ▼
Groq AI     Local Fallback
(Live API)  (Calibrated Benchmarks)
│           │
└─────┬─────┘
▼
Structured Lifecycle Output
├── Factory Carbon Footprint
├── Years Till Landfill (Part Breakdown)
├── Environmental Flaws
└── 3 Relatable Swap Pointers
│
▼
Interactive UI & Side-by-Side Compare



---

## Tech Stack

* **Frontend:** HTML5, Modern CSS3 (CSS Variables, Flexbox, CSS Grid)
* **3D Visuals:** Three.js (r128 WebGL Canvas, 3D Perspective Tilt Physics)
* **Inference Engine:** Groq Cloud API (`llama-3.3-70b-versatile`)
* **Local Simulator:** Deterministic category-scale heuristic engine
* **Database & Webhooks:** Google Apps Script Web App connected to Google Sheets

---

## Project Structure


├── index.html        # Main search terminal, 3D canvas, and comparison matrix
├── style.css         # Master styling (theme variables, 3D tilt, card layouts)
├── script.js         # Core logic, Three.js engine, Groq integration, local database
├── about.html        # Core team showcase with internal 3D particle card systems
├── contact.html      # Direct web communication portal connected to Google Sheets
├── beta.html         # Early access testing lab with live email waitlist intake
└── README.md         # Project documentation




Sustainable Development Goals (SDGs)
SDG 12: Responsible Consumption and Production: Empowers consumers and engineers with upstream transparency, prioritizing repair, reuse and material retention over disposal.

SDG 9: Industry, Innovation and Infrastructure: Encourages circular product architectures, non destructive disassembly and modular manufacturing.

SDG 13: Climate Action: Prevents embedded factory carbon emissions by extending real world product usage lifespans.
