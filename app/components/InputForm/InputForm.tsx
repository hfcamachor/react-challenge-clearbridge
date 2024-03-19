import React from "react";
import styles from "./inputForm.module.scss";
import { InputFormProps } from "@/app/types/types";

export default function InputForm({
  value,
  error,
  onInputSet,
  label,
}: InputFormProps) {
  return (
    <div className={styles.inputForm}>
      <div className={styles.inputFormContainer}>
        <label>
          <div className={styles.inputFormLabel}>{label}</div>
          <input
            className={styles.inputFormInput}
            type="text"
            value={value}
            onChange={(e) => onInputSet(e.target.value)}
          />
          {error && <span className={styles.inputFormError}>{error}</span>}
        </label>
      </div>
    </div>
  );
}
