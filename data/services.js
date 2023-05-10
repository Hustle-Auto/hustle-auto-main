export const addOns = [
  {
    id: "pet-hair-removal",
    label: "Pet Hair Removal",
    price: "25",
  },
  {
    id: "tough-stain-removal",
    label: "Tough Stain Removal",
    price: "50",
  },
  {
    id: "foul-odor-elimination",
    label: "Foul Odor Elimination",
    price: "75",
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

export const carTypes = [
  {
    id: "sedan",
    label: "Sedan",
    imageSrc: "/images/car-types/sedan.png",
    imageWidth: "1000",
    imageHeight: "273",
  },
  {
    id: "mid-size-suv",
    label: "Mid-Size SUV",
    imageSrc: "/images/car-types/midsize-suv.png",
    imageWidth: "1000",
    imageHeight: "369",
  },
  {
    id: "pickup-truck",
    label: "Truck",
    imageSrc: "/images/car-types/truck.png",
    imageWidth: "1000",
    imageHeight: "334",
  },
  {
    id: "full-size-suv",
    label: "Full-Size SUV",
    imageSrc: "/images/car-types/car.png",
    imageWidth: "965",
    imageHeight: "500",
  },
];

export const serviceTypes = [
  { id: "interior", label: "Interior Detailing" },
  { id: "exterior", label: "Exterior Detailing" },
  { id: "complete", label: "Complete Packages" },
  { id: "paint-correction", label: "Paint Correction" },
];

export const services = [
  {
    id: "regular-interior-detailing",
    label: "Regular Interior Detailing",
    serviceType: "interior",
    description: `
    <ul>
      <li>A thoroughly vacuum the interior carpets, mats, seats and truck space</li>
      <li>Clean and sanitize all interior panels</li>
      <li>Clean both exterior & interior windows</li>
      <li>Steam clean the vents</li>
      <li>Wash the rubber mats</li>
    </ul>
    `,
    prices: {
      sedan: 100.0,
      "mid-size-suv": 120.0,
      "pickup-truck": 120.0,
      "full-size-suv": 130.0,
    },
  },
  {
    id: "enhanced-interior-detailing",
    label: "Enhanced Interior Detailing",
    serviceType: "interior",
    description: `
    <ul>
      <li>Everything within the Regular Interior Included</li>
      <li>Shampoo of mats, carpets of the vehicle and if vehicle is equipped with cloths seats, that will be shampooed as well</li>
      <li>Clean and condition leather seats</li>
      <li>Clean and condition vinyl and plastics </li>
      <li>Remove any spots</li>
      <li>Cleaning of door jams</li>
    </ul>
    `,
    prices: {
      sedan: 140.0,
      "mid-size-suv": 170.0,
      "pickup-truck": 170.0,
      "full-size-suv": 190.0,
    },
  },
  {
    id: "elite-interior-detailing",
    label: "Elite Interior Detailing",
    serviceType: "interior",
    description: `
    <ul>
      <li>Includes everything from Enhanced Interior detail</li>
      <li>Cleaning of the headliner </li>
      <li>Steam and clean of seat belts </li>
      <li>Protection Coating to all Plastic, Vinyl and Rubber surfaces from stains and dirt</li>
      <li>Protection Coating to all Leather Surfaces </li>
      <li>Protection Coating to all fabric surfaces</li>
    </ul>
    `,
    prices: {
      sedan: 200.0,
      "mid-size-suv": 230.0,
      "pickup-truck": 230.0,
      "full-size-suv": 245.0,
    },
  },
  {
    id: "regular-exterior-detailing",
    label: "Regular Exterior Detailing",
    serviceType: "exterior",
    description: `
    <ul>
      <li>Two bucket hand wash</li>
      <li>Cleaning of tires and rims</li>
      <li>Conditioning of tire with shine </li>
      <li>Cleaning of all exterior windows </li>
    </ul>
    `,
    prices: {
      sedan: 80.0,
      "mid-size-suv": 90.0,
      "pickup-truck": 100.0,
      "full-size-suv": 100.0,
    },
  },
  {
    id: "enhanced-exterior-detailing",
    label: "Enhanced Exterior Detailing",
    serviceType: "exterior",
    description: `
    <ul>
      <li>Includes everything in the Regular Exterior</li>
      <li>Decontamination wash</li>
      <li>Clay bar the vehicle removing any containments in the paint</li>
      <li>A wax/sealant applied to the vehicle providing a deeper shine and protection to the vehicle</li>
    </ul>
    `,
    prices: {
      sedan: 95.0,
      "mid-size-suv": 100.0,
      "pickup-truck": 110.0,
      "full-size-suv": 110.0,
    },
  },
  {
    id: "elite-exterior-detailing",
    label: "Elite Exterior Detailing",
    serviceType: "exterior",
    description: `
    <ul>
      <li>Includes berthing in the Enhanced Detail</li>
      <li>Iron remover</li>
      <li>A full exterior stage 1 polish</li>
      <li>Protection added of Wax to help protect that clear and enriched polish</li>
      <li>With protection to all plastic and rubber parts</li>
    </ul>
    `,
    prices: {
      sedan: 110.0,
      "mid-size-suv": 115.0,
      "pickup-truck": 130.0,
      "full-size-suv": 130.0,
    },
  },
  {
    id: "regular-complete-package",
    label: "Regular Complete Detailing",
    serviceType: "complete",
    description: `
    <p>Interior</p>
    <ul>
      <li>A thorough vacuum of the interior carpets, mats, seats and truck space</li>
      <li>Clean and sanitize all interior panels</li>
      <li>Windows cleaned from both sides</li>
      <li>Steam clean of the vents</li>
      <li>Wash rubber mats</li>
    </ul>
    <p>Exterior</p>
    <ul>
      <li>Two bucket hand wash</li>
      <li>Cleaning of tires and rims </li>
      <li>Conditioning of tire with tire dressing</li>
      <li>Cleaning of all exterior windows</li>
    </ul>
    `,
    prices: {
      sedan: 140.0,
      "mid-size-suv": 170.0,
      "pickup-truck": 200.0,
      "full-size-suv": 190.0,
    },
  },
  {
    id: "enhanced-complete-package",
    label: "Enhanced Complete Detailing",
    serviceType: "complete",
    description: `
    <p>Interior</p>
    <ul>
      <li>Includes everything from the Regular Interior Detail</li>
      <li>Shampoo of mats, carpets of the vehicle and if vehicle is equipped with cloths seats, they will be shampooed as well</li>
      <li>Clean and condition leather seats</li>
      <li>Clean and condition vinyl and plastics</li>
      <li>Remove any spots</li>
      <li>Cleaning of door jams</li>
    </ul>
    <p>Exterior</p>
    <ul>
      <li>Includes everything in the Regular Exterior </li>
      <li>Decontamination wash </li>
      <li>Clay bar the vehicle, removing any containments in the paint</li>
      <li>A wax/sealant applied to the vehicle providing a deeper shine and protection to the vehicle</li>
    </ul>
    `,
    prices: {
      sedan: 190.0,
      "mid-size-suv": 225.0,
      "pickup-truck": 240.0,
      "full-size-suv": 260.0,
    },
  },
  {
    id: "elite-complete-package",
    label: "Elite Complete Detailing",
    serviceType: "complete",
    description: `
    <p>Interior</p>
    <ul>
      <li>Includes everything from Enhanced Interior detail</li>
      <li>Cleaning of the headliner</li>
      <li>Steam clean of seat belts</li>
      <li>Protection coating of all Plastic, Vinyl and Rubber surfaces from stains and dirt</li>
      <li>Protection coating on all leather surfaces</li>
      <li>Protection coating on all fabric surfaces</li>
    </ul>
    <p>Exterior</p>
    <ul>
      <li>Includes everything in the Enhanced Detail </li>
      <li>Iron remover</li>
      <li>A full exterior stage 1 polish</li>
      <li>Wax to help protect paint, and bring a  clear and enriched polish </li>
      <li>Protection on all plastic and rubber parts </li>
    </ul>
    `,
    prices: {
      sedan: 230.0,
      "mid-size-suv": 295.0,
      "pickup-truck": 310.0,
      "full-size-suv": 330.0,
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
      sedan: 320.0,
      "mid-size-suv": 370.0,
      "pickup-truck": 400.0,
      "full-size-suv": 420.0,
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
      sedan: 420.0,
      "mid-size-suv": 470.0,
      "pickup-truck": 500.0,
      "full-size-suv": 520.0,
    },
  },
];
