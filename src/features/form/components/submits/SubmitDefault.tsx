import { SubmitButtonProps } from 'features/form/types/form';
import React from 'react';
import styles from '../../styles/submitButton.module.css';
// !improvment    remove hard coding text.
const SubmitButtonDefault: React.FC<SubmitButtonProps> = ({
  disabled = false,
}) => {
  return (
    <button className={styles['submit-btn']} type="submit" disabled={disabled}>
      Submit
    </button>
  );
};
export default SubmitButtonDefault;
