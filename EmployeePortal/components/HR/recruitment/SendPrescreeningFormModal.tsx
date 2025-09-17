import React, { useState } from 'react';
import {
    Button,
    Box,
    Typography,
    TextField,
    Stack
} from '@mui/material';

// Send Prescreening Modal Component
const SendPrescreeningModal = ({ open, onClose, onSend, applicant }) => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (email.trim() && subject.trim() && message.trim()) {
            onSend({ email, subject, message });
            setEmail('');
            setSubject('');
            setMessage('');
            onClose();
        }
    };

    const handleCancel = () => {
        setEmail('');
        setSubject('');
        setMessage('');
        onClose();
    };

    if (!open) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1300
            }}
            onClick={(e) => e.target === e.currentTarget && handleCancel()}
        >
            <Box
                sx={{
                    width: 700,
                    maxWidth: '90vw',
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)',
                    overflow: 'hidden',
                    animation: 'modalFadeIn 0.2s ease-out'
                }}
            >
                {/* White Header Section */}
                <Box sx={{
                    backgroundColor: 'white',
                    p: 3,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8
                }}>
                    <Typography
                        color='primary'
                        sx={{
                            fontWeight: 700,

                            fontSize: "20px",
                            mb: 0.25,
                            textAlign: 'left'
                        }}
                    >
                        Send Prescreening
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: '#0871BA',
                            fontWeight: 400,
                            fontSize: "17px",
                            textAlign: 'left'
                        }}
                    >
                        Send Prescreening email and Forms
                    </Typography>
                </Box>

                {/* Grey Content Section */}
                <Box sx={{
                    backgroundColor: '#f9fafb',
                    p: 3,
                    py: 2,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTop: "1px solid #0000001A"
                }}>
                    {/* Email Field */}
                    <Typography
                        variant="body1"
                        component="label"
                        sx={{

                            color: '#333',
                            fontWeight: 600,
                            textAlign: "left",
                            display: 'block',
                            fontSize: "13px"
                        }}
                    >
                        Email
                    </Typography>

                    <TextField
                        fullWidth
                        type="email"
                        size='small'
                        value={email}

                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address..."
                        variant="outlined"
                        sx={{
                            mb: 2,
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "flex-start",
                            width: 400,
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                                '& fieldset': {
                                    borderColor: '#ddd',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#999',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1976d2',
                                    boxShadow: '0 0 0 1px #1976d2'
                                },
                            },
                            '& .MuiOutlinedInput-input': {
                                color: '#000',
                                fontSize: '14px',
                                '&::placeholder': {
                                    color: '#666',
                                    opacity: 1,
                                },
                            }
                        }}
                    />

                    {/* Subject Field */}
                    <Typography
                        variant="body1"
                        component="label"
                        sx={{
                            color: '#333',
                            fontWeight: 600,
                            textAlign: "left",
                            display: 'block',
                            fontSize: "13px"
                        }}
                    >
                        Subject
                    </Typography>

                    <TextField
                        fullWidth
                        size='small'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter email subject..."
                        variant="outlined"
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                                '& fieldset': {
                                    borderColor: '#ddd',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#999',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1976d2',
                                    boxShadow: '0 0 0 1px #1976d2'
                                },
                            },
                            '& .MuiOutlinedInput-input': {
                                color: '#000',
                                fontSize: '14px',
                                '&::placeholder': {
                                    color: '#666',
                                    opacity: 1,
                                },
                            }
                        }}
                    />

                    {/* Message Field */}
                    <Typography

                        sx={{

                            color: '#333',
                            fontWeight: 600,
                            textAlign: "left",
                            display: 'block',
                            fontSize: "13px"
                        }}
                    >
                        Message
                    </Typography>

                    <TextField
                        fullWidth
                        multiline
                        rows={10}
                        // size='small'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message here..."
                        variant="outlined"
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                                '& fieldset': {
                                    borderColor: '#ddd',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#999',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1976d2',
                                    boxShadow: '0 0 0 1px #1976d2'
                                },
                            },
                            '& .MuiOutlinedInput-input': {
                                color: '#000',
                                fontSize: '14px',
                                '&::placeholder': {
                                    color: '#666',
                                    opacity: 1,
                                },
                            }
                        }}
                    />

                    {/* Buttons Row */}
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="flex-end"
                        sx={{ mt: 2 }}
                    >
                        <Button
                            variant="outlined"
                            onClick={handleCancel}
                            sx={{
                                textTransform: 'none',
                                fontWeight: 500,
                                fontSize: '14px',
                                px: 2.75,
                                borderRadius: "4px",
                                py: 0.5,
                                '&:hover': {
                                    borderColor: '#999',
                                    backgroundColor: '#f9f9f9'
                                }
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSend}
                            disabled={!email.trim() || !subject.trim() || !message.trim()}
                            sx={{
                                textTransform: 'none',
                                fontWeight: 500,
                                fontSize: '14px',
                                px: 2.75,
                                borderRadius: "4px",
                                py: 0.5,
                                '&:disabled': {
                                    backgroundColor: '#ccc',
                                    color: 'white'
                                }
                            }}
                        >
                            Send
                        </Button>
                    </Stack>
                </Box>
            </Box>


        </Box>
    );
};




export default SendPrescreeningModal;