import { useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Reoverlay } from "reoverlay";
import * as Yup from "yup";

import Layout from "../components/layout/Layout";
import ServiceRequestFailedModal from "../components/modal/ServiceRequestFailedModal";
import ServiceRequestSubmittedModal from "../components/modal/ServiceRequestSubmittedModal";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import CustomErrorMessage from "../components/ui/CustomErrorMessage";
import PageSection from "../components/ui/PageSection";
import useLocalStorage from "../hooks/useLocalStorage";
import { calcTotalPriceOfServices } from "../utils/utils";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  carDetails: "",
  preferredServiceDate: "",
  message: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string().max(20, "Must be 20 characters or less"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Invalid phone number"),
  carDetails: Yup.string().required("Required"),
  preferredServiceDate: Yup.string().required("Required"),
  message: Yup.string(),
});

const isRequired = (field) => {
  return (
    validationSchema?.fields[field.name]?.exclusiveTests?.required || false
  );
};

const BookNowStage2 = () => {
  const [userServiceSelections, _] = useLocalStorage(
    "user-service-selections",
    null
  );

  useEffect(() => {
    Reoverlay.showModal(ServiceRequestSubmittedModal, {
      onConfirm: () => {
        Reoverlay.hideModal();
      },
    });
  }, []);

  const handleOnSubmit = async (values, { setSubmitting }) => {
    await delay(1000);
    setSubmitting(false);

    Reoverlay.showModal(ServiceRequestSubmittedModal, {
      onConfirm: () => {
        Reoverlay.hideModal();
      },
    });
  };

  const totalPrice = calcTotalPriceOfServices({
    carType: userServiceSelections?.carType,
    service: userServiceSelections?.service,
    addOns: userServiceSelections?.addOns,
  });

  let selectedCarTypeString = "No Car Type Selected";
  let selectedServiceString = "No Service Selected";
  let selectedAddOnsString = "No Add Ons Selected";

  if (userServiceSelections) {
    const { carType, service, addOns } = userServiceSelections;
    if (carType) {
      selectedCarTypeString = carType.label;
    }

    if (service && carType) {
      const price = service.prices[carType.id];
      selectedServiceString = `${service.label} ($${price})`;
    }

    if (addOns && addOns.length > 0) {
      selectedAddOnsString = addOns
        .map((addOn) => `${addOn.label} ($${addOn.price})`)
        .join(", ");
    }
  }

  return (
    <Layout>
      <main>
        <h2 className="page-heading">Book Now</h2>
        <PageSection>
          <section className="grid grid-cols-3 gap-10">
            <article>
              <Card>
                <div className="card-body">
                  <h3 className="font-bold card-title">Summary</h3>
                  <div className="card-text">
                    <section className="space-y-1">
                      <p>
                        <span>Car Type: </span>
                        <span className="font-semibold">
                          {selectedCarTypeString}
                        </span>
                      </p>
                      <p>
                        <span>Selected Package: </span>
                        <span className="font-semibold">
                          {selectedServiceString}
                        </span>
                      </p>
                      <p>
                        <span>Add-Ons: </span>
                        <span className="font-semibold">
                          {selectedAddOnsString}
                        </span>
                      </p>
                    </section>
                    <section className="mt-3">
                      <hr className="my-3" />
                      <p className="font-bold">
                        Total:{" "}
                        <span className="text-accent"> ${totalPrice} </span>
                      </p>
                    </section>
                  </div>
                </div>
              </Card>
            </article>
            <article className="col-span-2">
              <div className="text-center heading">Contact Info</div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
              >
                <Form className="space-y-5">
                  <section className="grid grid-cols-2 gap-5">
                    <div className="form-group">
                      <label
                        htmlFor="firstName"
                        className="form-label"
                        asterisk={isRequired({
                          name: "firstName",
                        }).toString()}
                      >
                        First Name
                      </label>
                      <Field
                        name="firstName"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="firstName"
                        render={CustomErrorMessage}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="lastName"
                        className="form-label"
                        asterisk={isRequired({
                          name: "lastName",
                        }).toString()}
                      >
                        Last Name
                      </label>
                      <Field
                        name="lastName"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="lastName"
                        render={CustomErrorMessage}
                      />
                    </div>
                  </section>

                  <section className="grid grid-cols-2 gap-5">
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="form-label"
                        asterisk={isRequired({
                          name: "email",
                        }).toString()}
                      >
                        Email Address
                      </label>
                      <Field
                        name="email"
                        type="email"
                        className="form-control"
                      />
                      <ErrorMessage name="email" render={CustomErrorMessage} />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="phoneNumber"
                        className="form-label"
                        asterisk={isRequired({
                          name: "phoneNumber",
                        }).toString()}
                      >
                        Phone Number
                      </label>
                      <Field
                        name="phoneNumber"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        render={CustomErrorMessage}
                      />
                    </div>
                  </section>

                  <section className="grid grid-cols-2 gap-5">
                    <div className="form-group">
                      <label
                        htmlFor="carDetails"
                        className="form-label"
                        asterisk={isRequired({
                          name: "carDetails",
                        }).toString()}
                      >
                        Car Details
                      </label>
                      <Field
                        name="carDetails"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="carDetails"
                        render={CustomErrorMessage}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="preferredServiceDate"
                        className="form-label"
                        asterisk={isRequired({
                          name: "preferredServiceDate",
                        }).toString()}
                      >
                        Preferred Service Date
                      </label>
                      <Field
                        name="preferredServiceDate"
                        type="date"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="preferredServiceDate"
                        render={CustomErrorMessage}
                      />
                    </div>
                  </section>
                  <div className="form-group">
                    <label
                      htmlFor="message"
                      className="form-label"
                      asterisk={isRequired({
                        name: "message",
                      }).toString()}
                    >
                      Message
                    </label>
                    <Field
                      name="message"
                      as="textarea"
                      className="form-control"
                    />
                    <ErrorMessage name="message" render={CustomErrorMessage} />
                  </div>

                  <div className="flex justify-end mt-3">
                    <Button submit accent>
                      Request Service
                    </Button>
                  </div>
                </Form>
              </Formik>
            </article>
          </section>
        </PageSection>
      </main>
    </Layout>
  );
};

export default BookNowStage2;
