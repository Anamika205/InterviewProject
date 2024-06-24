// pages/ClientPage.js (or appropriate path)
'use client'
import React from 'react'; 
import { useState } from 'react';
import axios from 'axios';
import { Grid, TextField, Button } from '@mui/material';

function ClientPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const API_URL = 'http://34.225.132.160:8002/api'; // API endpoint

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email validation
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post(API_URL, { email });
      if (response.status === 200) {
        alert('Form submitted successfully!');
        setEmail('');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {        
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '65vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Grid item xs={12}>
          <TextField
            
            variant='outlined'
            label="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error}
            sx={{mr:"1rem", width:"60%"}}
          />
          <Button variant='contained' type="submit" sx={{mt:"0.5rem", bgcolor:"#FF7F3E"}}>Contact Me</Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default ClientPage;
