'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '90%',
    height: 'auto',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingBottom: 30,
    color: 'black',
}));

const ContactBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'transparent',
    paddingTop: 20,
    paddingBottom: 20,
}));

export default function ContactUs() {
    return (
        <ContactBox maxWidth={'sm'} id="contactus-section">
            <Stack direction="row" spacing={2} justifyContent={'center'}>
                <DemoPaper variant="elevation" elevation={16}>
                    <h2>CONTACT US ON SOCIAL MEDIA</h2>
                    <p>Need help? Send us a message.</p>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '90%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div>
                            <TextField
                                id="outlined-static"
                                label="Your email address"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Type your message here"
                                multiline
                                rows={4}
                            />
                            <Button variant="contained" sx={{ backgroundColor: '#214675', color: 'black' }}>Send Message</Button>
                        </div>
                    </Box>
                </DemoPaper>
            </Stack>
        </ContactBox>
    );
}
