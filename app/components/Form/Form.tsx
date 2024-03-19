import React, { useState } from "react";
import styles from "./form.module.scss";
import InputForm from "../InputForm/InputForm";
import { TextAreaForm } from "../TextAreaForm/TextAreaForm";
import Button from "@mui/material/Button";
import { FormErrors } from "@/app/types/types";

const CommentsForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Data validation
    const errors: FormErrors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!comment.trim()) {
      errors.comment = "Comment is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Clear errors if there are no validation issues
    setErrors({});

    // Clear form fields after submission
    setName("");
    setEmail("");
    setComment("");
  };

  const onSetName = (inputValue: string) => {
    setName(inputValue);
  };

  const onSetEmail = (inputValue: string) => {
    setEmail(inputValue);
  };

  const onSetComment = (inputValue: string) => {
    setComment(inputValue);
  };

  return (
    <div className={styles.form}>
      <div className={styles.formTitle}>
        Contact us now!
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <InputForm
            label="Name"
            value={name}
            onInputSet={onSetName}
            error={errors.name}
          />
          <InputForm
            label="Email"
            value={email}
            onInputSet={onSetEmail}
            error={errors.email}
          />
          <TextAreaForm
            label="Comment"
            value={comment}
            onInputSet={onSetComment}
            error={errors.comment}
          />
          <div className={styles.formButton}>
            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentsForm;
