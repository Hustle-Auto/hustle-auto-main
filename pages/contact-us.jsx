import { useState } from "react";

import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { Reoverlay } from "reoverlay";
import * as Yup from "yup";

import ErrorModal from "../components/modal/ErrorModal";
import SuccessModal from "../components/modal/SuccessModal";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import CustomErrorMessage from "../components/ui/CustomErrorMessage";
import PageSection from "../components/ui/PageSection";
import HUSTLE from "../data/hustle";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const phoneRegExp = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string().trim().max(20, "Must be 20 characters or less"),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Required"),
  phoneNumber: Yup.string().trim().matches(phoneRegExp, "Invalid phone number"),
  message: Yup.string().trim().required("Required"),
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
    // cast values to match validation schema (aka trim strings)
    values = validationSchema.cast(values);

    setIsLoading(true);

    try {
      const payload = {
        userContactInfo: { ...values },
        emailType: "contact-us", // This is the email template to use. See /functions/send-email.js.
        subject: `${values.firstName} ${values.lastName} wants to contact HustleAuto!`,
      };

      const response = await axios.post(
        "/.netlify/functions/send-email",
        payload
      );

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
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="You can contact Hustle Motive using the form"
        />
      </Head>
      <main>
        <PageSection>
          <h2 className="page-heading">Contact Us</h2>
          <section className="flex flex-col-reverse my-10 lg:gap-10 lg:grid lg:grid-cols-3">
            <article className="p-4 ">
              <Card>
                <Card.Body>
                  <Card.Title>Contact Info</Card.Title>
                  <Card.Text>
                    <section className="space-y-1">
                      <a
                        className="text-accent"
                        href={`mailto:${HUSTLE.COMPANY.EMAIL}`}
                      >
                        {HUSTLE.COMPANY.EMAIL}
                      </a>
                      <p>{HUSTLE.COMPANY.PHONE_NUMBER}</p>
                      <p>Calgary, Alberta</p>
                    </section>
                  </Card.Text>
                </Card.Body>
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
    </>
  );
};

export default ContactUs;
