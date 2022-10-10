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

export function generateUserSelectionsSummary({
  carType,
  service,
  addOns,
  detailingLocation,
}) {
  const summary = {
    carType: "No Car Type Selected",
    service: "No Service Selected",
    addOns: "No Add-Ons Selected",
    detailingLocation: "No Detailing Location Selected",
  };

  if (carType) {
    summary.carType = carType.label;
  }

  if (service && carType) {
    const price = service.prices[carType.id];
    summary.service = `${service.label} ($${price})`;
  }

  if (addOns && addOns.length > 0) {
    summary.addOns = addOns
      .map((addOn) => `${addOn.label} ($${addOn.price})`)
      .join(", ");
  }

  if (detailingLocation) {
    summary.detailingLocation = `${detailingLocation.label} ($${detailingLocation.price})`;
  }

  summary.totalPrice = calcTotalPriceOfServices({
    carType,
    service,
    addOns,
    detailingLocation,
  });

  return summary;
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
