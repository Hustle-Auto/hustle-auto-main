export function calcTotalPriceOfServices({ carType, service, addOns }) {
  let total = 0;
  if (carType && service) {
    total += parseFloat(service.prices[carType.id]);
  }
  if (addOns && addOns.length > 0) {
    addOns.forEach((addOn) => {
      total += parseFloat(addOn.price);
    });
  }

  return total;
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
