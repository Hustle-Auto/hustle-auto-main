export function calcTotalPriceOfServices({
  carType,
  service,
  addOns,
  detailingLocation,
}) {
  let total = 0;
  if (carType && service) {
    total += parseFloat(service.prices[carType.id]);
  }
  if (addOns && addOns.length > 0) {
    addOns.forEach((addOn) => {
      total += parseFloat(addOn.price);
    });
  }
  if (detailingLocation) {
    total += parseFloat(detailingLocation.price);
  }

  return total;
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
