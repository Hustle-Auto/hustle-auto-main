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
import { calcTotalPriceOfServices } from "../utils/utils";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
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
  message: Yup.string().required("Required"),
});

const isRequired = (field) => {
  return (
    validationSchema?.fields[field.name]?.exclusiveTests?.required || false
  );
};

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleOnSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);

    try {
      const payload = {
        userContactInfo: { ...values },
      };

      const response = await axios.post("/.netlify/functions/send-email", {
        subject: "Contact Request",
        message: `${JSON.stringify(payload, null, 2)}`,
      });

      Reoverlay.showModal(SuccessModal, {
        title: "We Have Received Your Message!",
        message: "We will contact you shortly.",
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

  return (
    <Layout>
      <main>
        <PageSection>
          <h2 className="page-heading">Contact Us</h2>
          <section className="flex flex-col-reverse my-10 lg:gap-10 lg:grid lg:grid-cols-3">
            <article className="p-4 ">
              <Card>
                <div className="card-body">
                  <h3 className="font-bold card-title">Contact Info</h3>
                  <div className="card-text">
                    <section className="space-y-1">
                      <p>hustleaservices@gmail.com</p>
                      <p>(587) 436 - 0142</p>
                    </section>
                  </div>
                </div>
              </Card>
            </article>
            <article className="col-span-2 p-4">
              <div className="text-center heading">Send Us A Message</div>
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

                  <section className="grid grid-cols-2 gap-5">
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
                      placeholder="Enter your message here..."
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
                      <div>Submit</div>
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

export default ContactUs;
