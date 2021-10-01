import React, { useState } from "react";
import Layout from "../../NoAuthLayout/Layout";
import UserDetails from "./Steps/UserDetails/UserDetails";
import PasswordSet from "./Steps/PasswordSet";
import EmailConfirmation from "./Steps/EmailConfirmation/EmailConfirmation";
import MoreDetails from "./Steps/MoreDetails";

export default function StudentForm() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    matricOrIDNumber: "",
    faculty: "default",
    department: "default",
    password: "",
    confirmPassword: "",
  });
  const [step, setStep] = useState(1);

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return (
        <Layout>
          <UserDetails
            values={values}
            nextStep={nextStep}
            onChange={handleChange}
          />
        </Layout>
      );
    case 2:
      return (
        <Layout>
          <MoreDetails
            values={values}
            nextStep={nextStep}
            prevStep={prevStep}
            onChange={handleChange}
          />
        </Layout>
      );
    case 3:
      return (
        <Layout>
          <PasswordSet
            values={values}
            nextStep={nextStep}
            prevStep={prevStep}
            onChange={handleChange}
          />
        </Layout>
      );
    case 4:
      return (
        <Layout>
          <EmailConfirmation
            values={values}
            nextStep={nextStep}
            prevStep={prevStep}
            onChange={handleChange}
          />
        </Layout>
      );
    default:
    // do nothing
  }
}
