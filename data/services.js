const CarType = {
  SEDAN: "sedan",
  SUV: "mid-size-suv",
  TRUCK: "pickup-truck",
};

const ServiceType = {
  INTERIOR: "interior",
  EXTERIOR: "exterior",
  CERAMIC_COATING: "ceramic-coating",
};

export const addOns = [
  {
    id: "pet-hair-removal",
    label: "Pet Hair Removal",
    price: 40.0,
    enableOnServiceTypes: [ServiceType.INTERIOR],
  },
  {
    id: "foul-odor-elimination",
    label: "Foul Odor Elimination",
    price: 100.0,
    enableOnServiceTypes: [ServiceType.INTERIOR],
  },
  {
    id: "glass-ceramic-coating",
    label: "Glass Ceramic Coating",
    price: 200.0,
    enableOnServiceTypes: [ServiceType.CERAMIC_COATING],
  },
  {
    id: "wheel-ceramic-coating",
    label: "Wheel Ceramic Coating",
    price: 300.0,
    enableOnServiceTypes: [ServiceType.CERAMIC_COATING],
  },
  {
    id: "stage-2-paint-correction",
    label: "Stage 2 Paint Correction",
    price: 300.0,
    enableOnServiceTypes: [ServiceType.CERAMIC_COATING],
  },
];

export const detailingLocations = [
  {
    id: "at-hustle-auto",
    label: "At HustleAuto's Location",
    description: "We will perform the service in our location in Airdrie",
    price: 0,
  },
  {
    id: "airdrie-location",
    type: "mobile",
    label: "At your location in Airdrie",
    description: "We will come to you to perform the service",
    price: 10.0,
    disableOnServiceTypes: [ServiceType.CERAMIC_COATING],
    disabledMessage:
      "Mobile service is not available for Ceramic Coating services",
  },
  {
    id: "close-calgary-location",
    type: "mobile",
    label: "At your location in Calgary NE/NW",
    description: "We will come to you to perform the service",
    price: 25.0,
    disableOnServiceTypes: [ServiceType.CERAMIC_COATING],
    disabledMessage:
      "Mobile service is not available for Ceramic Coating services",
  },
  {
    id: "far-calgary-location",
    type: "mobile",
    label: "At your location in Calgary SE/SW",
    description: "We will come to you to perform the service",
    price: 35.0,
    disableOnServiceTypes: [ServiceType.CERAMIC_COATING],
    disabledMessage:
      "Mobile service is not available for Ceramic Coating services",
  },
];

export const carTypes = [
  {
    id: CarType.SEDAN,
    label: "Sedan",
  },
  {
    id: CarType.SUV,
    label: "Mid-Size SUV",
  },
  {
    id: CarType.TRUCK,
    label: "Full-Size SUV / Minivan / Truck",
  },
];

export const serviceTypes = [
  { id: ServiceType.INTERIOR, label: "Interior Detailing" },
  { id: ServiceType.EXTERIOR, label: "Exterior Detailing" },
  { id: ServiceType.CERAMIC_COATING, label: "Ceramic Coating" },
];

export const services = [
  {
    id: "regular-interior-detailing",
    label: "Regular Interior Detail",
    serviceType: ServiceType.INTERIOR,
    description: `
    <ul>
      <li>Vacuum carpets, seats, and trunk</li>
      <li>Hot water shampoo for carpets and seats</li>
      <li>Floor mats washed and shined</li>
      <li>Wipe down of all surfaces for cleaning and sanitization</li>
      <li>Interior glass cleaned for a streak-free view</li>
    </ul>
    `,
    prices: {
      [CarType.SEDAN]: 90.0,
      [CarType.SUV]: 90.0,
      [CarType.TRUCK]: 110.0,
    },
  },
  {
    id: "enhanced-interior-detailing",
    label: "Deep Cleaning Interior Detail",
    serviceType: ServiceType.INTERIOR,
    description: `
    <ul>
      <li>Includes all Regular Interior Detail features</li>
      <li>Air compression cleaning for cracks and crevices</li>
      <li>Protection for all carpeted and fabric surfaces</li>
      <li>Leather seats cleaned and conditioned</li>
      <li>Vinyl surfaces conditioned and dressed</li>
      <li>Headliner and door jams cleaned</li>
      <li>Stain removal and steam cleaning for vinyl and leather</li>
      <li>Air vents sanitized and cleaned</li>
    </ul>
    `,
    prices: {
      [CarType.SEDAN]: 180.0,
      [CarType.SUV]: 180.0,
      [CarType.TRUCK]: 220.0,
    },
  },
  {
    id: "regular-exterior-detailing",
    label: "Regular Exterior Detailing",
    serviceType: ServiceType.EXTERIOR,
    description: `
    <ul>
      <li>Two-bucket hand wash</li>
      <li>Tires and rims cleaned, tires conditioned</li>
      <li>Streak-free exterior window cleaning</li>
      <li>Spray on wax/sealant for shine and protection</li>
    </ul>
    `,
    prices: {
      [CarType.SEDAN]: 90.0,
      [CarType.SUV]: 120.0,
      [CarType.TRUCK]: 180.0,
    },
  },
  {
    id: "enhanced-exterior-detailing",
    label: "Enhanced Exterior Detailing",
    serviceType: ServiceType.EXTERIOR,
    description: `
    <ul>
      <li>Comprehensive hand wash including bug removal</li>
      <li>Clay bar treatment for a smooth finish</li>
      <li>Machine wax for enhanced gloss and protection</li>
      <li>Engine bay shampoo for a clean engine environment</li>
    </ul>
    `,
    prices: {
      [CarType.SEDAN]: 200.0,
      [CarType.SUV]: 260.0,
      [CarType.TRUCK]: 300.0,
    },
  },
  {
    id: "elite-exterior-detailing",
    label: "Elite Exterior Detailing",
    serviceType: ServiceType.EXTERIOR,
    description: `
    <ul>
      <li>All Enhanced Exterior Detail features</li>
      <li>Iron removal for paint decontamination</li>
      <li>One-step gloss enhancement for a brilliant shine</li>
      <li>Long-lasting protective coating application</li>
    </ul>
    `,
    prices: {
      [CarType.SEDAN]: 320.0,
      [CarType.SUV]: 390.0,
      [CarType.TRUCK]: 450.0,
    },
  },
  {
    id: "5-year-ceramic-coating",
    label: "5-Year Ceramic Coating",
    serviceType: ServiceType.CERAMIC_COATING,
    description: `
    <p>Protect and preserve your vehicle's exterior with our 5-Year Ceramic Coating, offering a durable barrier against the elements for lasting beauty and ease of maintenance</p>
    <ul>
      <li>Two layers of high-quality ceramic coating</li>
      <li>Enhanced gloss and color depth</li>
      <li>Superior hydrophobic properties for easy cleaning</li>
    </ul>
    `,
    prices: {
      [CarType.SEDAN]: 699.0,
      [CarType.SUV]: 799.0,
      [CarType.TRUCK]: 899.0,
    },
  },
  {
    id: "7-year-ceramic-coating",
    label: "7-Year Ceramic Coating",
    serviceType: ServiceType.CERAMIC_COATING,
    description: `
    <p>Our ultimate protection package, the 7-Year Ceramic Coating, ensures your vehicle maintains a showroom look with the highest level of durability and resistance to environmental impacts.</p>
    <ul>
      <li>Three layers of premium ceramic coating</li>
      <li>Maximum durability for protection against scratches and contaminants</li>
      <li>Advanced hydrophobic effect for superior water repelling</li>
    </ul>
    `,
    prices: {
      [CarType.SEDAN]: 799.0,
      [CarType.SUV]: 899.0,
      [CarType.TRUCK]: 999.0,
    },
  },
];
