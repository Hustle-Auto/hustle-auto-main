import { useEffect, useState } from "react";

import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import { Reoverlay } from "reoverlay";
import * as Yup from "yup";

import Icon from "../components/icon";
import Layout from "../components/layout/Layout";
import ErrorModal from "../components/modal/ErrorModal";
import SuccessModal from "../components/modal/SuccessModal";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import CustomErrorMessage from "../components/ui/CustomErrorMessage";
import IconButton from "../components/ui/IconButton";
import PageSection from "../components/ui/PageSection";
import useSessionStorage from "../hooks/useSessionStorage";
import { generateUserSelectionsSummary } from "../utils/utils";

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
  email: Yup.string().email("Invalid email address"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Required"),
  carDetails: Yup.string().required("Required"),
  preferredServiceDate: Yup.string(),
  message: Yup.string(),
});

const isRequired = (field) => {
  return (
    validationSchema?.fields[field.name]?.exclusiveTests?.required || false
  );
};

const BookNow = () => {
  const [userServiceSelections, _] = useSessionStorage(
    "user-service-selections",
    null
  );

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userSelectionsSummary, setUserSelectionsSummary] = useState(null);

  useEffect(() => {
    if (!userServiceSelections) {
      return;
    }

    setUserSelectionsSummary(
      generateUserSelectionsSummary(userServiceSelections)
    );
  }, [userServiceSelections]);

  const handleOnSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);

    try {
      const payload = {
        userSelectionsSummary,
        userContactInfo: { ...values },
      };

      console.log(`payload: ${JSON.stringify(payload, null, 2)}`);

      const response = await axios.post("/.netlify/functions/send-email", {
        subject: "Service Request",
        message: `${JSON.stringify(payload, null, 2)}`,
      });

      Reoverlay.showModal(SuccessModal, {
        title: "We Have Received Your Request!",
        message: "We will contact you shortly to confirm your booking.",
        onConfirm: () => {
          Reoverlay.hideModal();
          router.push("/");
        },
      });
    } catch (err) {
      Reoverlay.showModal(ErrorModal, {
        onConfirm: () => {
          Reoverlay.hideModal();
        },
      });
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  const handleBackClick = () => {
    router.push("/get-a-quote");
  };

  return (
    <Layout>
      <main>
        <PageSection>
          <div className="relative">
            <p
              className="absolute flex items-center space-x-1 -top-8"
              onClick={handleBackClick}
            >
              <IconButton>
                <Icon.ArrowLeft className="w-6 h-6" />
              </IconButton>
              <span>Back</span>
            </p>
            <h2 className="page-heading">Book Now</h2>
          </div>
          <section className="my-10 lg:grid lg:grid-cols-3 lg:gap-10">
            <article>
              <Card>
                <div className="card-body">
                  <h3 className="font-bold card-title">Summary</h3>
                  <div className="card-text">
                    <section className="space-y-1">
                      <p>
                        <span>Car Type: </span>
                        <span className="font-semibold">
                          {userSelectionsSummary?.carType}
                        </span>
                      </p>
                      <p>
                        <span>Selected Package: </span>
                        <span className="font-semibold">
                          {userSelectionsSummary?.service}
                        </span>
                      </p>
                      <p>
                        <span>Add-Ons: </span>
                        <span className="font-semibold">
                          {userSelectionsSummary?.addOns}
                        </span>
                      </p>
                      <p>
                        <span>Detailing Location: </span>
                        <span className="font-semibold">
                          {userSelectionsSummary?.detailingLocation}
                        </span>
                      </p>
                    </section>
                    <section className="mt-3">
                      <hr className="my-3" />
                      <p className="font-bold">
                        Estimated Total:{" "}
                        <span className="text-accent">
                          ${userSelectionsSummary?.totalPrice}
                        </span>
                      </p>
                    </section>
                  </div>
                </div>
              </Card>
            </article>
            <article className="col-span-2 py-8 lg:p-0">
              <div className="text-center heading">Contact Info</div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
              >
                <Form className="space-y-5">
                  <section className="sm:grid sm:grid-cols-2 sm:gap-5">
                    <div className="form-group">
                      <label
                        htmlFor="firstName"
                        className="form-label"
                        // eslint-disable-next-line react/no-unknown-property
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
                        placeholder="Sanjay"
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
                        // eslint-disable-next-line react/no-unknown-property
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
                        placeholder="Smith"
                      />
                      <ErrorMessage
                        name="lastName"
                        render={CustomErrorMessage}
                      />
                    </div>
                  </section>

                  <section className="sm:grid sm:grid-cols-2 sm:gap-5">
                    <div className="form-group">
                      <label
                        htmlFor="phoneNumber"
                        className="form-label"
                        // eslint-disable-next-line react/no-unknown-property
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
                        placeholder="123-456-7890"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        render={CustomErrorMessage}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="form-label"
                        // eslint-disable-next-line react/no-unknown-property
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
                        placeholder="sanjay.smith@gmail.com"
                      />
                      <ErrorMessage name="email" render={CustomErrorMessage} />
                    </div>
                  </section>

                  <section className="sm:grid sm:grid-cols-2 sm:gap-5">
                    <div className="form-group">
                      <label
                        htmlFor="carDetails"
                        className="form-label"
                        // eslint-disable-next-line react/no-unknown-property
                        asterisk={isRequired({
                          name: "carDetails",
                        }).toString()}
                      >
                        Car Details{" "}
                        <span className="text-gray-400">(Make/Model/Year)</span>
                      </label>
                      <Field
                        name="carDetails"
                        type="text"
                        className="form-control"
                        placeholder="Honda Civic 2019"
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
                        // eslint-disable-next-line react/no-unknown-property
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
                      // eslint-disable-next-line react/no-unknown-property
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
                      placeholder="Anything else you'd like us to know? eg. My windshield is broken, My car is an auction car, My car was repossessed."
                    />
                    <ErrorMessage name="message" render={CustomErrorMessage} />
                  </div>

                  <div className="flex justify-end mt-3">
                    <Button
                      submit
                      accent
                      disabled={isLoading}
                      loading={isLoading}
                    >
                      <div>Request Service</div>
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

export default BookNow;
