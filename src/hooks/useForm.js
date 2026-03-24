import { useState } from "react";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  location: "Meru-Maua Road",
  service: "Medical Consultation",
  date: "",
  message: "",
};

const phoneRegex = /^(\+254|0)(7|1)\d{8}$/;

export default function useForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) {
      nextErrors.name = "Full name is required.";
    }
    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(values.phone.trim())) {
      nextErrors.phone = "Use a valid Kenya phone format (07XXXXXXXX or +2547XXXXXXXX).";
    }
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setValues(initialValues);
    }, 900);
  };

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
  };
}
