import React from "react";
import styles from "./textAreaForm.module.scss";
import { InputFormProps } from "@/app/types/types";

export function TextAreaForm({
  value,
  error,
  onInputSet,
  label,
}: InputFormProps) {
  return (
    <div className={styles.textAreaForm}>
      <div className={styles.textAreaFormContainer}>
        <label>
          <div className={styles.textAreaFormLabel}>{label}</div>
          <textarea
            className={styles.textAreaFormArea}
            value={value}
            onChange={(e) => onInputSet(e.target.value)}
          />
          {error && <span className={styles.textAreaFormError}>{error}</span>}
        </label>
      </div>
    </div>
  );
}
