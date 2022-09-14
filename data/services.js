export const carTypes = [
  {
    id: "sedan",
    label: "Sedan",
    imageSrc: "/images/car-types/sedan.png",
    imageWidth: "1000",
    imageHeight: "273",
  },
  {
    id: "suv",
    label: "SUV",
    imageSrc: "/images/car-types/suv.png",
    imageWidth: "1000",
    imageHeight: "369",
  },
  {
    id: "truck",
    label: "Truck",
    imageSrc: "/images/car-types/truck.png",
    imageWidth: "1000",
    imageHeight: "334",
  },
];

export const serviceTypes = [
  { id: "interior", label: "Interior Detailing" },
  { id: "exterior", label: "Exterior Detailing" },
  { id: "complete", label: "Complete Packages" },
];

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
      sedan: "100",
      suv: "200",
      truck: "300",
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
      sedan: "100",
      suv: "200",
      truck: "300",
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
      sedan: "100",
      suv: "200",
      truck: "300",
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
      sedan: "100",
      suv: "200",
      truck: "300",
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
      sedan: "100",
      suv: "200",
      truck: "300",
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
      sedan: "100",
      suv: "200",
      truck: "300",
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
      sedan: "100",
      suv: "200",
      truck: "300",
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
      sedan: "100",
      suv: "200",
      truck: "300",
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
      sedan: "100",
      suv: "200",
      truck: "300",
    },
  },
];
