import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = ({onClose}) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>donate</h2>
        </header>
        <div className={classes.content}>
          <p>Amount</p>
          <input type='text'></input>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onClose}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;