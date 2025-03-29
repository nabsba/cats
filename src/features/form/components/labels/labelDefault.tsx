import { LabelProps } from 'features/form/types/form';
import React from 'react';
import styles from '../../styles/label.module.css';
const LabelDefault: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return (
    <label
      className={styles['label']}
      id={htmlFor}
      htmlFor={htmlFor}
      aria-labelledby={htmlFor}
    >
      {text}
    </label>
  );
};

export default LabelDefault;
