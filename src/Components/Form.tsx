import React, { FormEvent, useRef } from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function AddressForm() {
    const formRef = useRef<HTMLFormElement>(null); // Form reference

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs.sendForm(
                'service_w3t17uv', // Your EmailJS Service ID
                'template_5s16f4h', // Your EmailJS Template ID
                formRef.current,
                'JyHwk0wdw6SS0qP5x' // Your EmailJS Public Key
            ).then(
                () => {
                    window.alert('Email Sent Successfully!');
                },
                (error) => {
                    console.error('FAILED...', error.text);
                }
            );
        }
    };

    return (
        <form ref={formRef} onSubmit={sendEmail}>
            <Grid container spacing={3}>
                <FormGrid item xs={12} md={6}>
                    <FormLabel htmlFor="first-name">First name</FormLabel>
                    <OutlinedInput id="first-name" name="first_name" placeholder="John" required size="small" />
                </FormGrid>
                <FormGrid item xs={12} md={6}>
                    <FormLabel htmlFor="last-name">Last name</FormLabel>
                    <OutlinedInput id="last-name" name="last_name" placeholder="Snow" required size="small" />
                </FormGrid>
                <FormGrid item xs={12}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <OutlinedInput id="email" name="email" type="email" placeholder="example@example.com" required size="small" />
                </FormGrid>
                <FormGrid item xs={12}>
                    <FormLabel htmlFor="address1">Address line 1</FormLabel>
                    <OutlinedInput id="address1" name="address1" placeholder="Street name and number" required size="small" />
                </FormGrid>
                <FormGrid item xs={12}>
                    <FormLabel htmlFor="address2">Address line 2</FormLabel>
                    <OutlinedInput id="address2" name="address2" placeholder="Apartment, suite, unit, etc. (optional)" size="small" />
                </FormGrid>
                <FormGrid item xs={6}>
                    <FormLabel htmlFor="city">City</FormLabel>
                    <OutlinedInput id="city" name="city" placeholder="New York" required size="small" />
                </FormGrid>
                <FormGrid item xs={6}>
                    <FormLabel htmlFor="state">State</FormLabel>
                    <OutlinedInput id="state" name="state" placeholder="NY" required size="small" />
                </FormGrid>
                <FormGrid item xs={6}>
                    <FormLabel htmlFor="zip">Zip / Postal code</FormLabel>
                    <OutlinedInput id="zip" name="zip" placeholder="12345" required size="small" />
                </FormGrid>
                <FormGrid item xs={6}>
                    <FormLabel htmlFor="country">Country</FormLabel>
                    <OutlinedInput id="country" name="country" placeholder="United States" required size="small" />
                </FormGrid>

                {/* Submit button */}
                <Grid item xs={12}>
                    <button type="submit">Enroll Now</button>
                </Grid>
            </Grid>
        </form>
    );
}
