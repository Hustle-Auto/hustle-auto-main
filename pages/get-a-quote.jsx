import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import CheckboxCardInput from "../components/ui/CheckboxCardInput.jsx";
import PageSection from "../components/ui/PageSection";
import RadioCardInput from "../components/ui/RadioCardInput";
import {
  carTypes,
  serviceTypes,
  services,
  addOns,
  detailingLocations,
} from "../data/services";
import useSessionStorage from "../hooks/useSessionStorage";
import { calcTotalPriceOfServices } from "../utils/utils";

const GetAQuote = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useSessionStorage(
    "user-service-selections",
    {
      carType: null,
      serviceType: null,
      service: null,
      addOns: [],
      detailingLocation: null,
    }
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCarTypeChange = (e) => {
    const selectedCarType = carTypes.find(
      (carType) => carType.id === e.target.value
    );

    const newUserInput = {
      ...userInput,
      carType: selectedCarType,
      serviceType: null,
      service: null,
      addOns: [],
      detailingLocation: null,
    };

    setUserInput(newUserInput);
  };

  const handleServiceTypeChange = (e) => {
    const selectedServiceType = serviceTypes.find(
      (serviceType) => serviceType.id === e.target.value
    );

    const newUserInput = {
      ...userInput,
      serviceType: selectedServiceType,
      service: null,
      addOns: [],
      detailingLocation: null,
    };

    setUserInput(newUserInput);
  };

  const handleServiceChange = (e) => {
    const selectedService = services.find(
      (service) => service.id === e.target.value
    );

    const newUserInput = {
      ...userInput,
      service: selectedService,
      addOns: [],
      detailingLocation: null,
    };

    setUserInput(newUserInput);
  };

  const handleAddOnChange = (e) => {
    const newAddOns = userInput.addOns;
    const currAddOn = addOns.find((addOn) => addOn.id === e.target.value);
    const currAddOnChecked = e.target.checked;

    if (currAddOnChecked) {
      newAddOns.push(currAddOn);
    } else {
      newAddOns = newAddOns.filter((addOn) => addOn.id !== currAddOn.id);
    }
    setUserInput({ ...userInput, addOns: newAddOns });
  };

  const handleDetailingLocationChange = (e) => {
    const selectedDetailingLocation = detailingLocations.find(
      (detailingLocation) => detailingLocation.id === e.target.value
    );

    const newUserInput = {
      ...userInput,
      detailingLocation: selectedDetailingLocation,
    };

    setUserInput(newUserInput);
  };

  const handleOnContinueClick = () => {
    router.push("/book-now");
  };

  useEffect(() => {
    setTotalPrice(
      calcTotalPriceOfServices({
        carType: userInput.carType,
        service: userInput.service,
        addOns: userInput.addOns,
        detailingLocation: userInput.detailingLocation,
      })
    );
  }, [userInput]);

  const filteredServices = services.filter((service) => {
    return service.serviceType === userInput.serviceType?.id;
  });

  return (
    <main>
      <PageSection>
        <h2 className="page-heading">Get A Quote</h2>
        <section className="my-10">
          <p className="heading">Select Your Car Size</p>
          <div className="sm:grid sm:grid-cols-3 sm:gap-8">
            {carTypes.map((carType) => (
              <RadioCardInput
                key={carType.id}
                value={carType.id}
                checked={carType.id === userInput.carType?.id}
                onChange={handleCarTypeChange}
              >
                <Card.Body>
                  <Card.Text>
                    <div className="text-center">{carType.label}</div>
                  </Card.Text>
                </Card.Body>
              </RadioCardInput>
            ))}
          </div>
        </section>

        <section className="my-10">
          <p className="heading">Select Your Service</p>
          <div className="sm:grid sm:grid-cols-3 sm:gap-8">
            {!userInput.carType && <p>Please Select A Car Type</p>}
            {userInput.carType &&
              serviceTypes.map((serviceType) => (
                <RadioCardInput
                  key={serviceType.id}
                  value={serviceType.id}
                  checked={serviceType.id === userInput.serviceType?.id}
                  onChange={handleServiceTypeChange}
                >
                  <Card.Body>
                    <Card.Text>
                      <p className="text-center">{serviceType.label}</p>
                    </Card.Text>
                  </Card.Body>
                </RadioCardInput>
              ))}
          </div>
        </section>

        <section className="my-10">
          <p className="heading">Select Your Package</p>
          <div className="md:grid md:grid-cols-3 md:gap-8">
            {!userInput.serviceType && <p>Please Select A Service Type</p>}
            {userInput.serviceType &&
              filteredServices.map((service) => (
                <RadioCardInput
                  key={service.id}
                  value={service.id}
                  checked={service.id === userInput.service?.id}
                  onChange={handleServiceChange}
                >
                  <Card.Body>
                    <Card.Text>
                      <div className="mb-3 space-y-1 text-center">
                        <div>{service.label}</div>
                        <div className="font-bold">
                          ${service.prices[userInput.carType?.id]}
                        </div>
                      </div>
                      <div className="text-sm leading-6">
                        <div
                          className="service-description"
                          dangerouslySetInnerHTML={{
                            __html: service.description,
                          }}
                        ></div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </RadioCardInput>
              ))}
          </div>
        </section>
        <section className="my-10">
          <p className="heading">Select Your Add-Ons</p>
          <div className="sm:grid sm:grid-cols-3 sm:gap-8">
            {!userInput.service && <p>Please Select A Package</p>}
            {userInput.service &&
              addOns.map((addOn) => (
                <CheckboxCardInput
                  key={addOn.id}
                  value={addOn.id}
                  checked={userInput.addOns
                    .map((addOn) => addOn.id)
                    .includes(addOn.id)}
                  onChange={handleAddOnChange}
                >
                  <Card.Body>
                    <Card.Text>
                      <div className="space-y-1 text-center">
                        <div>{addOn.label}</div>
                        <div className="font-bold">${addOn.price}</div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </CheckboxCardInput>
              ))}
          </div>
        </section>
        <section className="my-10">
          <p className="heading">Select Your Detailing Location</p>
          <div className="sm:grid sm:grid-cols-3 sm:gap-8">
            {!userInput.service && <p>Please Select A Package</p>}
            {userInput.service &&
              detailingLocations.map((detailingLocation) => (
                <RadioCardInput
                  key={detailingLocation.id}
                  value={detailingLocation.id}
                  checked={
                    detailingLocation.id === userInput.detailingLocation?.id
                  }
                  onChange={handleDetailingLocationChange}
                >
                  <Card.Body>
                    <Card.Text>
                      <div className="mb-3 space-y-1 text-center">
                        <div>{detailingLocation.label}</div>
                        <div className="font-bold">
                          ${detailingLocation.price}
                        </div>
                      </div>
                      <div className="text-sm text-center">
                        {detailingLocation.description}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </RadioCardInput>
              ))}
          </div>
        </section>
      </PageSection>
      <PageSection>
        <div className="items-center justify-between max-w-md mx-auto sm:flex">
          <p className="text-2xl font-bold">
            Estimated Total:{" "}
            <span className="text-accent"> ${totalPrice} </span>
          </p>
          <div className="flex justify-center my-8 sm:my-0">
            <Button accent onClick={handleOnContinueClick}>
              Book Now
            </Button>
          </div>
        </div>
      </PageSection>
    </main>
  );
};

export default GetAQuote;
