// AURELIA GRAND — Curated Luxury Hotel Data Store (Sample Content)

export const HOTEL_INFO = {
  name: "AURELIA GRAND",
  subtitle: "BOUTIQUE HOTEL & PRIVATE SUITES",
  tagline: "WHERE EVERY MOMENT FEELS TIMELESS",
  rating: "5-Star Luxury Heritage Sanctuary",
  address: "18 Royal Promenade, Civil Enclave, New Delhi 110001, India",
  phone: "+91 (0) 11 4890 5500",
  reservationsPhone: "+91 (0) 11 4890 5588",
  conciergeEmail: "concierge@aureliagrand-demo.com",
  reservationsEmail: "stays@aureliagrand-demo.com",
  checkInTime: "15:00 hrs (3:00 PM)",
  checkOutTime: "12:00 hrs (12:00 PM)",
  airportDistance: "18.5 km (Approx. 25 minutes via Private Chauffeur)",
  currencySymbol: "₹",
  currencyCode: "INR",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Our Story", href: "#story" },
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Dining", href: "#dining" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const ROOMS_DATA = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Serene Comfort & Heritage Craft",
    shortDescription: "Generously proportioned with hand-carved teak accents, Italian marble bath, and tranquil views over our scented courtyard gardens.",
    fullDescription: "Designed for discerning travelers seeking quiet refinement, the Deluxe Room blends classical proportion with contemporary comforts. Sink into custom 400-thread-count Egyptian linen, enjoy morning espresso on your private Juliet balcony, and refresh in an expansive marble bathroom equipped with a rainforest walk-in shower and deep soaking tub.",
    capacity: "2 Guests",
    bedType: "King or Twin Bed",
    size: "52 m² / 560 sq ft",
    view: "Courtyard & Heritage Gardens",
    priceINR: 24000,
    priceUSD: 290,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Custom 400-thread-count Egyptian cotton linens",
      "Italian marble bathroom with soaking tub & rain shower",
      "Acqua di Parma luxury toiletries & bespoke bathrobes",
      "Illy espresso machine & artisanal teas selection",
      "Marshall Bluetooth sound system & 55\" OLED display",
      "Twice-daily housekeeping with personalized evening turndown"
    ],
    popular: false
  },
  {
    id: "garden-suite",
    name: "Premium Garden Suite",
    tagline: "Botanical Sanctuary & Private Verandah",
    shortDescription: "An expansive sanctuary featuring a private sun-dappled verandah, temperature-controlled plunge pool, and curated botanical views.",
    fullDescription: "Opening onto secluded jasmine gardens, the Premium Garden Suite offers effortless indoor-outdoor living. Features a lavish living salon separate from the master bedroom, personal plunge pool on a private teak terrace, and a freestanding stone soaking bath with garden panoramas.",
    capacity: "3 Guests",
    bedType: "California King",
    size: "78 m² / 840 sq ft",
    view: "Private Jasmine Garden & Plunge Pool",
    priceINR: 36500,
    priceUSD: 440,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Private heated plunge pool and teak daybed terrace",
      "Separate living salon with artisan bar and sommelier wine selection",
      "Dyson Supersonic hair styling suite and marble vanity",
      "Complimentary afternoon tea served in your suite or verandah",
      "Walk-in dressing chamber with bespoke cedar wardrobes",
      "Personal packing and unpacking service upon arrival"
    ],
    popular: true
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    tagline: "Architectural Grandeur & Skyline Panoramas",
    shortDescription: "Perched on our highest levels, showcasing bespoke mid-century furniture, separate formal study, and dedicated 24-hour butler service.",
    fullDescription: "Exuding the calm confidence of a private residence, our Executive Suite provides seamless luxury for discerning leaders and leisure connoisseurs. The suite features a formal 6-seat dining room, dedicated library/study, and floor-to-ceiling glass offering skyline vistas.",
    capacity: "3 Guests",
    bedType: "Master King",
    size: "110 m² / 1,180 sq ft",
    view: "Skyline & Royal Enclave Grounds",
    priceINR: 52000,
    priceUSD: 625,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Dedicated 24/7 private butler on call",
      "Executive study with library and high-speed encrypted Wi-Fi",
      "Formal 6-seat dining area with pantry service",
      "Complimentary access to the exclusive Aurelia Club Lounge",
      "Dual marble vanities, steam shower & chromotherapy bath",
      "Priority reservations at all Aurelia restaurants and spa"
    ],
    popular: false
  },
  {
    id: "presidential-suite",
    name: "Signature Presidential Suite",
    tagline: "The Pinnacle of Regal Hospitality",
    shortDescription: "A palatial 220 m² residence with dual master bedrooms, private wellness chamber, grand grand piano lounge, and private chauffeur.",
    fullDescription: "The crown jewel of Aurelia Grand. Hosting heads of state, artists, and discerning families, the Signature Presidential Suite offers unmatched privacy, majestic ceiling heights, original museum-grade artwork, a private massage chamber, and personal luxury EV chauffeur throughout your stay.",
    capacity: "4 Guests",
    bedType: "Dual Master King Beds",
    size: "220 m² / 2,360 sq ft",
    view: "360° Panoramic Estate & Cityscape",
    priceINR: 115000,
    priceUSD: 1380,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Private Mercedes Maybach or luxury EV airport & city chauffeur",
      "Dual master suites with custom dressing rooms & jacuzzi terrace",
      "Private in-suite spa massage room & dry Finnish sauna",
      "Steinway baby grand piano and curated private vinyl collection",
      "Fully equipped butler's kitchen with private chef on request",
      "Unrestricted VIP access to all hotel amenities and private vaults"
    ],
    popular: true
  }
];

export const EXPERIENCES_DATA = [
  {
    id: "fine-dining",
    title: "Fine Dining",
    subtitle: "Gastronomic Poetry",
    description: "Michelin-caliber culinary artistry celebrating heritage spices, seasonal harvests, and rare vintages curated by master sommeliers.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
    badge: "Epicurean Journey",
    timing: "Lunch: 12:30 - 15:30 | Dinner: 19:00 - 23:30",
    details: "Dine beneath gilded chandeliers or on our candlelit reflection terrace. Every evening unfolds as a multi-course symphony."
  },
  {
    id: "wellness-spa",
    title: "Wellness & Spa",
    subtitle: "Sanctuary of Equilibrium",
    description: "Centuries-old Ayurvedic rejuvenation therapies harmonized with modern Swiss hydrothermal restorative treatments.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    badge: "Hydrothermal & Ayurvedic",
    timing: "Daily: 07:00 - 21:00",
    details: "Six private treatment pavilions, aromatic herbal steam rooms, Himalayan salt saunas, and tranquil cold plunge pools."
  },
  {
    id: "poolside-relaxation",
    title: "Poolside Relaxation",
    subtitle: "Azure Stillness",
    description: "Temperature-controlled lap waters surrounded by fragrant frangipani trees, shaded double cabanas, and discreet refreshments.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    badge: "Outdoor Oasis",
    timing: "Daily: 06:00 - 20:00",
    details: "Enjoy iced mineral spritzes, afternoon sorbet tastings, and serene ambient acoustics in our private garden alcoves."
  },
  {
    id: "private-celebrations",
    title: "Private Celebrations",
    subtitle: "Timeless Milestones",
    description: "Bespoke galas, intimate garden soirees, and grand milestone banquets orchestrated with meticulous discretion and poise.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
    badge: "Curated Events",
    timing: "By Private Appointment",
    details: "From candlelit courtyard nuptials to royal anniversary dinners, our master event planners bring your dream vision to life."
  }
];

export const DINING_MENUS = {
  breakfast: [
    { name: "Artisanal Boulangerie Basket", desc: "Warm saffron brioche, French butter croissants, wild berry preserves & cultured butter", price: "₹1,450" },
    { name: "Truffled Organic Eggs Benedict", desc: "Poached farm eggs, smoked salmon or heritage ham, black truffle hollandaise, toasted brioche", price: "₹2,100" },
    { name: "Avocado & Heritage Seeds Tartine", desc: "Whipped goat curd, pomegranate pearls, cold-pressed olive oil on seeded sourdough", price: "₹1,650" },
    { name: "Saffron Royal Masala Chai & Sweet Bites", desc: "Cardamom-infused Assam reserve, roasted almond biscotti, pistachios", price: "₹950" }
  ],
  tasting: [
    { name: "Amuse-Bouche: Golden Beet Tartare", desc: "Aged balsamic pearls, oscietra caviar, crisp lotus chip", price: "Course 1" },
    { name: "Slow-Braised Wagyu with Morel Reduction", desc: "Pomme purée with cultured butter, charred baby leeks, vintage Port jus", price: "Course 2" },
    { name: "Pan-Seared Chilean Sea Bass", desc: "Saffron lemongrass broth, braised samphire, pickled mustard seeds", price: "Course 3" },
    { name: "Valrhona Grand Cru Chocolate Sphere", desc: "Warm gold-dusted spiced caramel pour, Tahitian vanilla bean gelato", price: "Course 4" }
  ],
  evening: [
    { name: "Charred Heirloom Burrata", desc: "Grilled summer figs, 18-year Modena balsamic, micro basil, toasted pine nuts", price: "₹1,950" },
    { name: "Dum Pukht Royal Biryani", desc: "Heritage slow-cooked aromatics, tender lamb or seasonal morels, saffron essence", price: "₹3,400" },
    { name: "Handmade Tagliolini with White Truffle", desc: "Aged Parmigiano Reggiano emulsification, shaved seasonal truffles", price: "₹3,850" },
    { name: "Roasted Duck Breast with Cherry Glaze", desc: "Celeriac silky puree, spiced heritage cherries, duck jus", price: "₹3,200" }
  ],
  cellar: [
    { name: "Dom Pérignon Vintage Champagne", desc: "Épernay, France — Crisp, mineral-driven with brioche and citrus complexity", price: "₹42,000 / btl" },
    { name: "Château Margaux Premier Grand Cru", desc: "Bordeaux, France — Velvety tannins, blackcurrant, cedar, timeless structure", price: "₹98,000 / btl" },
    { name: "The Aurelia Gilded Negroni", desc: "Barrel-aged botanical gin, Carpano Antica, Campari, smoked orange peel, edible 24k gold", price: "₹1,850" },
    { name: "Smoked Cardamom Old Fashioned", desc: "Small-batch Kentucky bourbon, artisanal bitters, roasted cardamom smoke", price: "₹1,750" }
  ]
};

export const AMENITIES_DATA = [
  { icon: "Wifi", title: "Complimentary Wi-Fi", desc: "Seamless ultra-high-speed gigabit Wi-Fi across all suites and grounds." },
  { icon: "Dumbbell", title: "Fitness Center", desc: "24/7 private wellness studio with Technogym equipment and personal trainers." },
  { icon: "Waves", title: "Swimming Pool", desc: "Temperature-controlled lap pool nestled within lush garden terraces." },
  { icon: "Sparkles", title: "Spa & Wellness", desc: "Hydrothermal suites, Himalayan salt saunas, and Ayurvedic practitioners." },
  { icon: "UtensilsCrossed", title: "Restaurant & Bar", desc: "Michelin-caliber seasonal cuisine and a temperature-regulated grand cellar." },
  { icon: "BellRing", title: "Concierge Service", desc: "Round-the-clock dedicated Clefs d'Or concierge for bespoke requests." },
  { icon: "Briefcase", title: "Conference Facilities", desc: "Discreet executive boardrooms and multimedia ballrooms with private service." },
  { icon: "Car", title: "Airport Transfer", desc: "Complimentary or on-demand luxury chauffeur service in our private fleet." }
];

export const GALLERY_DATA = [
  {
    id: 1,
    title: "Grand Courtyard at Twilight",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85",
    caption: "Amber glow illuminating the classical stonework and central reflection basin."
  },
  {
    id: 2,
    title: "Signature Presidential Suite Salon",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=85",
    caption: "Palatial master living area with custom furnishings and curated artwork."
  },
  {
    id: 3,
    title: "The Pavilion Reflection Pool",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    caption: "Architectural symmetry echoing royal palace designs of ancient dynasties."
  },
  {
    id: 4,
    title: "L'Aurelia Fine Dining Room",
    category: "dining",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85",
    caption: "Intimate evening ambiance set with polished crystal and warm candlelight."
  },
  {
    id: 5,
    title: "Hydrothermal Marble Spa",
    category: "wellness",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
    caption: "Calming steam and natural spring water chambers carved from Makrana marble."
  },
  {
    id: 6,
    title: "Artisanal Gourmet Presentation",
    category: "dining",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85",
    caption: "Seasonal ingredients plated as edible works of contemporary art."
  },
  {
    id: 7,
    title: "Premium Garden Suite Verandah",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    caption: "Peaceful morning views looking out across flowering jasmine gardens."
  },
  {
    id: 8,
    title: "Sun-Drenched Garden Cabanas",
    category: "wellness",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
    caption: "Private lounging cabanas flanked by palm trees and serene pool waters."
  },
  {
    id: 9,
    title: "Grand Evening Ballroom Gala",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
    caption: "An opulent setting for private celebrations, galas, and milestones."
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "Aurelia Grand achieves that rarest quality in luxury hospitality: an atmosphere of supreme grandeur combined with the intimate warmth of a private estate. The butler team anticipated every preference effortlessly.",
    author: "Elena Rostova",
    role: "Architectural Digest Contributing Editor",
    stayedIn: "Signature Presidential Suite",
    rating: 5,
    location: "London, United Kingdom"
  },
  {
    id: 2,
    quote: "From the tranquil morning flute music in the courtyard to the unforgettable 7-course tasting menu at L'Aurelia, our weekend retreat was peerless. The attention to acoustic calm and aromatic details is sublime.",
    author: "Vikram & Ananya Singhania",
    role: "Private Art Collectors",
    stayedIn: "Premium Garden Suite",
    rating: 5,
    location: "Mumbai, India"
  },
  {
    id: 3,
    quote: "The spa treatments rival the finest wellness sanctuaries in Zurich and Kyoto. Returning to the suite with a personalized nightcap and warm lavender pillow mist made this the most restorative stay of my year.",
    author: "Marcus Vance",
    role: "Global Creative Director",
    stayedIn: "Executive Suite",
    rating: 5,
    location: "Geneva, Switzerland"
  }
];

export const SPECIAL_OFFERS = [
  {
    id: "weekend-escape",
    code: "WEEKEND-ESCP",
    title: "Weekend Escape",
    tagline: "Serenity For The Senses",
    description: "Reclaim your weekends with complimentary daily gourmet breakfast, leisurely 4:00 PM late check-out, and welcome vintage champagne on arrival.",
    benefits: [
      "Daily gourmet breakfast at L'Aurelia",
      "Guaranteed 4:00 PM late departure",
      "Chilled champagne & macarons welcome",
      "15% privilege credit on spa treatments"
    ],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",
    badge: "Sample Offer"
  },
  {
    id: "romantic-getaway",
    code: "ROMANCE-ROYAL",
    title: "Romantic Getaway",
    tagline: "Unforgettable Togetherness",
    description: "An intimate sanctuary designed for two. Includes a candlelit 4-course dinner under the stars, couple's herbal spa ritual, and evening rose petal bath.",
    benefits: [
      "Private 4-course candlelit dinner",
      "90-minute couple's herbal massage",
      "Rose petal evening bath preparation",
      "Daily champagne breakfast in suite"
    ],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    badge: "Most Cherished"
  },
  {
    id: "extended-stay",
    code: "EXTENDED-STAY",
    title: "Extended Stay Privilege",
    tagline: "Linger in Splendor",
    description: "Immerse yourself longer in luxury. Reserve 4 nights or more to enjoy an exclusive 20% privilege credit, private airport transfer, and daily laundry service.",
    benefits: [
      "20% experiential privilege credit",
      "Complimentary round-trip airport chauffeur",
      "Complimentary daily pressing & laundry",
      "Dedicated butler throughout your stay"
    ],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
    badge: "Sample Offer"
  }
];

export const NEARBY_ATTRACTIONS = [
  { name: "National Heritage & Art Museum", distance: "1.8 km", driveTime: "5 mins", desc: "Curated antiquities, royal textiles, and classical sculptures." },
  { name: "Royal Botanical Gardens", distance: "2.4 km", driveTime: "7 mins", desc: "Centuries-old heritage banyans, orchid greenhouses, and walking trails." },
  { name: "Imperial Diplomatic Enclave", distance: "3.2 km", driveTime: "8 mins", desc: "Broad tree-lined avenues, fine dining bistros, and high embassies." },
  { name: "Luxury High Fashion District", distance: "4.5 km", driveTime: "12 mins", desc: "Bespoke jewelers, haute couture boutiques, and artisan ateliers." },
  { name: "Indira Gandhi International Airport (DEL)", distance: "18.5 km", driveTime: "25 mins", desc: "Direct highway transit via Aurelia's private chauffeur fleet." }
];
