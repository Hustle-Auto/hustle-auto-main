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
    id: "express-interior-detailing",
    label: "Express Interior Detailing",
    serviceType: "interior",
    description:
      "With our interior express detail, we aim to provide a quick service where the interior of the vehicle is cleaned of any dirt and any other contaminants on the surface. So when the customer leaves with their vehicle, they have the peace of mind that the vehicle is clean and sanitized!",
    prices: {
      sedan: "100",
      suv: "200",
      truck: "300",
    },
  },
  {
    id: "premium-interior-detailing",
    label: "Premium Interior Detailing",
    serviceType: "interior",
    description:
      "Within Our Premium Interior Detail, We Add Onto The Express Detail By Removing All Contaminants From The Vehicle, Shampooing The Carpets, Mats And Seats! For Leather Seats We Clean And Condition Them. We Clean Each Crevice And Corner Of The Interior.",
    prices: {
      sedan: "100",
      suv: "200",
      truck: "300",
    },
  },
  {
    id: "ultimate-interior-detailing",
    label: "Ultimate Interior Detailing",
    serviceType: "interior",
    description:
      "With The Ultimate Package, We Go Deep Within The Vehicle Ensuring Every Inch Is Cleaned, Sanitized, And Detailed To Perfection! We Include Odor Removal, Clay Bar On Windows To Remove Contaminants Water Spots.",
    prices: {
      sedan: "100",
      suv: "200",
      truck: "300",
    },
  },
  {
    id: "express-exterior-detailing",
    label: "Express Exterior Detailing",
    serviceType: "exterior",
    description:
      "Come In To Get Our Exterior Express Detail! Within This Detail Will Remove Any Grime, Dirt Or Contaminants That Lay On Top Of Your Paint. And Rejuvenate The Paint Bringing Back The Shine Of Your Vehicle.",
    prices: {
      sedan: "100",
      suv: "200",
      truck: "300",
    },
  },
  {
    id: "premium-exterior-detailing",
    label: "Premium Exterior Detailing",
    serviceType: "exterior",
    description:
      "With Our Premium Exterior Detail, We Take It A Step Further. We Remove All Dirt And Contaminates Found On The Paint But Also Tackle The More Difficult Aspects Of The Detail Such As The Badges, Any Dirt In The Crevices Of The Grill, As Well, The Removal Of Dead Bugs. Ensuring The Vehicle Look Spectacular When It Leaves.",
    prices: {
      sedan: "100",
      suv: "200",
      truck: "300",
    },
  },
  {
    id: "ultimate-exterior-detailing",
    label: "Ultimate Exterior Detailing",
    serviceType: "exterior",
    description:
      "In Our Ultimate Detail, We Aim To Bring Shine On The Exterior Of Your Vehicle Back To When It Originally Left The Factory! All Contaminates Found On The Paint Are Removed. As Well, We Provide A Deeper Shine By Doing A Stage 1 Polish, Removing A Majority Of The Paint Haze Created From UV Rays, Swirls In The Clear Coat Or Miniature Scratches Within The Paint. Ultimately Creating A Flawless Shine.",
    prices: {
      sedan: "100",
      suv: "200",
      truck: "300",
    },
  },
  {
    id: "premium-complete-package",
    label: "Premium Complete Detailing",
    serviceType: "complete",
    description:
      "With the Premium Complete Package, you will be receiving a combination of our Premium Exterior and Interior Detail, where the Hustle Automotive team transform your car from inside to out. We go into detail, removing any dirt or contaminates found and ensure the vehicle is detailed to the best of our abilities!",
    prices: {
      sedan: "100",
      suv: "200",
      truck: "300",
    },
  },
  {
    id: "ultimate-complete-package",
    label: "Ultimate Complete Detailing",
    serviceType: "complete",
    description:
      "With the Ultimate Complete Package we do not just clean the vehicle. We ensure that the vehicle receives the ultimate detail with the mix of our ultimate exterior and interior details. With this package, we will completely transform your vehicle!",
    prices: {
      sedan: "100",
      suv: "200",
      truck: "300",
    },
  },
];
