import React from 'react';
import styles from './EnrollForm.module.css';
import { TextField, Button, Box } from '@mui/material';

const EnrollForm = () => {
  return (
    <div className={styles.enrollForm}>
      <Box className={styles.form}>
        <h1 className={styles.title}>Enroll Here</h1>
      <TextField id="FullName" fullWidth label="Full Name" style={{ marginBottom: '1rem' }}  variant="outlined" name="fullname" placeholder='Enter Name'/>
      <TextField id="mail" label="Email Id" fullWidth name="email" placeholder="enter email Id" style={{ marginBottom: '1rem' }} variant="outlined" />
      <TextField id="phoneNumber" label="Phone Number"  style={{ marginBottom: '1rem' }} variant="outlined" fullWidth placeholder='enter phone number' name="phone number" />
      <div style={{ textAlign: 'center' }}> 
    <Button variant="contained">Submit</Button>
  </div>
      </Box>
    </div>
  );
};

export default EnrollForm;
