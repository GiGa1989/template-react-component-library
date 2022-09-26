import React from 'react';

import styles from './Title.module.scss';

export interface TitleProps {
  type?: 'primary' | 'secondary' | 'plain';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ onClick, type = 'primary', disabled = false, children, ...rest }) => {
  return (
    <button className={`${styles.title} ${styles[type]} ${disabled && styles.disabled}`} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Title;
