export const addOns = [
  {
    id: "pet-hair-removal",
    label: "Pet Hair Removal",
    price: 25,
  },
  {
    id: "tough-stain-removal",
    label: "Tough Stain Removal",
    price: 50,
  },
  {
    id: "foul-odor-elimination",
    label: "Foul Odor Elimination",
    price: 75,
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
    id: "close-calgary-location",
    type: "mobile",
    label: "At your location in Calgary NE/NW",
    description: "We will come to you to perform the service",
    price: 30.0,
  },
  {
    id: "far-calgary-location",
    type: "mobile",
    label: "At your location in Calgary SE/SW",
    description: "We will come to you to perform the service",
    price: 50.0,
  },
];

const CarType = {
  SEDAN: "sedan",
  SUV: "mid-size-suv",
  TRUCK: "pickup-truck",
};

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

const ServiceType = {
  INTERIOR: "interior",
  EXTERIOR: "exterior",
  CERAMIC_COATING: "ceramic-coating",
};

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
    id: "stage-1-paint-correction",
    label: "Stage 1 Paint Correction",
    serviceType: "paint-correction",
    description: `
    <p>All Paint Corrections</p>
    <ul>
      <li>Cleaning off rims and tires</li>
      <li>Two bucket hand wash</li>
      <li>Clay bar of the vehicle (if required)</li>
      <li>A decontamination wash iron deposits</li>
      <li>Paint correction prep</li>
    </ul>
    <p>Stage 1 Paint Correction</p>
    <ul>
      <li>1 step of compounding of larger swirl, scratches and any other defects</li>
      <li>1 step polish of refining the paint, removing of minor scratches and swirls, and improving clarity of the paint</li>
      <li>Here you achieve a 80% to 90% clarity</li>
    </ul>
    `,
    prices: {
      sedan: 331.0,
      "mid-size-suv": 413.5,
      "pickup-truck": 463.0,
      "full-size-suv": 496.0,
    },
  },
  {
    id: "stage-2-paint-correction",
    label: "Stage 2 Paint Correction",
    serviceType: "paint-correction",
    description: `
    <p>All Paint Corrections</p>
    <ul>
      <li>Cleaning off rims and tires</li>
      <li>Two bucket hand wash</li>
      <li>Clay bar of the vehicle (if required)</li>
      <li>A decontamination wash iron deposits</li>
      <li>Paint correction prep</li>
    </ul>
    <p>Stage 2 Paint Correction</p>
    <ul>
      <li>2 step correction of compound of removal defects, marks, scratches and swirls with more in-depth</li>
      <li>1 step correction polish to refine the finish to achieve 90% to 99% clarity</li>
    </ul>
    `,
    prices: {
      sedan: 380.5,
      "mid-size-suv": 446.5,
      "pickup-truck": 512.5,
      "full-size-suv": 529.0,
    },
  },
];
