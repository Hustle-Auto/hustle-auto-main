import { useState } from "react";

import Image from "next/image";

import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
import CheckboxCardInput from "../components/ui/CheckboxCardInput.jsx";
import PageSection from "../components/ui/PageSection";
import RadioCardInput from "../components/ui/RadioCardInput";
import { carTypes, serviceTypes, services, addOns } from "../data/services";

const BookNow = () => {
  const [userInput, setUserInput] = useState({
    carType: null,
    serviceType: null,
    service: null,
    addOns: [],
  });

  const handleCarTypeChange = (e) => {
    const selectedCarType = carTypes.find(
      (carType) => carType.id === e.target.value
    );

    const newUserInput = {
      ...userInput,
      carType: selectedCarType,
      serviceType: null,
      package: null,
    };

    setUserInput(newUserInput);
  };

  const handleServiceTypeChange = (e) => {
    const selectedServiceType = serviceTypes.find(
      (serviceType) => serviceType.id === e.target.value
    );

    const newUserInput = {
      ...userInput,
      carType: userInput.carType,
      serviceType: selectedServiceType,
      package: null,
    };

    setUserInput(newUserInput);
  };

  const handleServiceChange = (e) => {
    const selectedService = services.find(
      (service) => service.id === e.target.value
    );

    const newUserInput = {
      ...userInput,
      carType: userInput.carType,
      serviceType: userInput.serviceType,
      package: selectedService,
    };

    setUserInput(newUserInput);
  };

  const handleAddOnChange = (e) => {
    const newAddOns = userInput.addOns;
    if (e.target.checked) {
      newAddOns.push(e.target.value);
    } else {
      newAddOns.splice(newAddOns.indexOf(e.target.value), 1);
    }
    setUserInput({ ...userInput, addOns: newAddOns });
  };

  const calcTotal = () => {
    let total = 0;
    if (userInput.carType && userInput.package) {
      total += parseFloat(userInput.package.prices[userInput.carType.id]);
    }
    if (userInput.addOns.length > 0) {
      userInput.addOns.forEach((addOn) => {
        total += parseFloat(addOns.find((a) => a.id === addOn).price);
      });
    }
    return total;
  };

  const filteredServices = services.filter((service) => {
    return service.serviceType === userInput.serviceType?.id;
  });

  return (
    <Layout>
      <main>
        <PageSection>
          <div className="grid grid-cols-3 gap-8"></div>
        </PageSection>
        <PageSection>
          <h2 className="page-heading">Book Now</h2>
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
                    checked={service.id === userInput.package?.id}
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
                        {service.description}
                      </div>
                    </div>
                  </RadioCardInput>
                ))}
            </div>
          </section>

          <section>
            <p className="heading">Select Your AddOns</p>
            <div className="grid grid-cols-3 gap-8">
              {addOns.map((addOn) => (
                <CheckboxCardInput
                  key={addOn.id}
                  value={addOn.id}
                  checked={userInput.addOns.includes(addOn.id)}
                  onChange={handleAddOnChange}
                >
                  <div className="card-body">{addOn.label}</div>
                </CheckboxCardInput>
              ))}
            </div>
          </section>
        </PageSection>
        <PageSection>
          <div className="flex items-center justify-between max-w-md mx-auto">
            <p className="text-2xl font-bold">
              Total: <span className="text-accent"> ${calcTotal()} </span>
            </p>
            <div>
              <Button accent>Continue</Button>
            </div>
          </div>
        </PageSection>
      </main>
    </Layout>
  );
};

export default BookNow;
