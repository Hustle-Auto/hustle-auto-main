import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
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
    console.log(`e.target.value: '${e.target.value}'`);
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
    <Layout>
      <main>
        <PageSection>
          <h2 className="page-heading">Get A Quote</h2>
          <section className="my-10">
            <p className="heading">Select Your Car Size</p>
            <div className="grid grid-cols-3 gap-8">
              {carTypes.map((carType) => (
                <RadioCardInput
                  key={carType.id}
                  value={carType.id}
                  checked={carType.id === userInput.carType?.id}
                  onChange={handleCarTypeChange}
                >
                  <div className="card-body">
                    <div className="text-center card-title">
                      {carType.label}
                    </div>
                    <div className="card-text">
                      <div className="px-10">
                        <Image
                          src={carType.imageSrc}
                          alt={carType.label}
                          width={carType.imageWidth}
                          height={carType.imageHeight}
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                </RadioCardInput>
              ))}
            </div>
          </section>

          <section className="my-10">
            <p className="heading">Select Your Service</p>
            <div className="grid grid-cols-3 gap-8">
              {!userInput.carType && <p>Please Select A Car Type</p>}
              {userInput.carType &&
                serviceTypes.map((serviceType) => (
                  <RadioCardInput
                    key={serviceType.id}
                    value={serviceType.id}
                    checked={serviceType.id === userInput.serviceType?.id}
                    onChange={handleServiceTypeChange}
                  >
                    <div className="card-body">{serviceType.label}</div>
                  </RadioCardInput>
                ))}
            </div>
          </section>

          <section className="my-10">
            <p className="heading">Select Your Package</p>
            <div className="grid grid-cols-3 gap-8">
              {!userInput.serviceType && <p>Please Select A Service Type</p>}
              {userInput.serviceType &&
                filteredServices.map((service) => (
                  <RadioCardInput
                    key={service.id}
                    value={service.id}
                    checked={service.id === userInput.service?.id}
                    onChange={handleServiceChange}
                  >
                    <div className="card-body">
                      <div className="text-center card-title">
                        <div className="mb-2">{service.label}</div>
                        <div className="font-bold text-center">
                          ${service.prices[userInput.carType?.id]}
                        </div>
                      </div>
                      <div className="text-sm leading-6 card-text">
                        <div
                          className="service-description"
                          dangerouslySetInnerHTML={{
                            __html: service.description,
                          }}
                        ></div>
                      </div>
                    </div>
                  </RadioCardInput>
                ))}
            </div>
          </section>
          <section className="my-10">
            <p className="heading">Select Your Add-Ons</p>
            <div className="grid grid-cols-3 gap-8">
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
                    <div className="card-body">
                      <div className="text-center card-text">
                        <div className="mb-2">{addOn.label}</div>
                        <div className="font-bold text-center">
                          ${addOn.price}
                        </div>
                      </div>
                    </div>
                  </CheckboxCardInput>
                ))}
            </div>
          </section>
          <section className="my-10">
            <p className="heading">Select Your Detailing Location</p>
            <div className="grid grid-cols-3 gap-8">
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
                    <div className="card-body">
                      <div className="text-center card-text">
                        <div className="mb-2">{detailingLocation.label}</div>
                        <div className="font-bold text-center">
                          ${detailingLocation.price}
                        </div>
                        <div className="mt-3 text-sm leading-6 card-text">
                          {detailingLocation.description}
                        </div>
                      </div>
                    </div>
                  </RadioCardInput>
                ))}
            </div>
          </section>
        </PageSection>
        <PageSection>
          <div className="flex items-center justify-between max-w-md mx-auto">
            <p className="text-2xl font-bold">
              Estimated Total:{" "}
              <span className="text-accent"> ${totalPrice} </span>
            </p>
            <div>
              <Button accent onClick={handleOnContinueClick}>
                Book Now
              </Button>
            </div>
          </div>
        </PageSection>
      </main>
    </Layout>
  );
};

export default GetAQuote;
