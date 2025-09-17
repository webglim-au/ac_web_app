import React, { useState } from 'react';
import {
    Button,
    Box,
    Typography,
    TextField,
    Stack,
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material';

const ArchiveModal = ({ open, onClose, onArchive }: any) => {
    const [notes, setNotes] = useState('');

    const handleArchive = () => {
        if (notes.trim()) {
            onArchive(notes);
            setNotes('');
            onClose();
        }
    };

    const handleCancel = () => {
        setNotes('');
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleCancel}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    boxShadow:
                        '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)',
                    animation: 'modalFadeIn 0.2s ease-out',
                },
            }}
        >
            {/* White Header Section */}
            <DialogTitle
                sx={{
                    backgroundColor: 'white',
                    p: 3,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 700,
                        color: '#000',
                        fontSize: '20px',
                        mb: 0.5,
                        textAlign: 'left',
                    }}
                >
                    Add to Archive
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#666',
                        fontWeight: 400,
                        fontSize: '17px',
                        textAlign: 'left',
                    }}
                >
                    Add notes/reasons to archive
                </Typography>
            </DialogTitle>

            {/* Grey Content Section */}
            <DialogContent
                sx={{
                    backgroundColor: '#f9fafb',
                    p: 3,
                    py: 2,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTop: '1px solid #0000001A',
                }}
            >
                {/* Add Notes Label with Red Asterisk */}
                <Typography
                    variant="body1"
                    component="label"
                    sx={{
                        mb: 1.5,
                        mt: 1,
                        color: '#333',
                        fontWeight: 600,
                        textAlign: 'left',
                        display: 'block',
                        fontSize: '13px',
                    }}
                >
                    Notes <span style={{ color: 'red' }}>*</span>
                </Typography>

                {/* 3 Row Text Field */}
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add notes or reasons to archive here...."
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
                                boxShadow: '0 0 0 1px #1976d2',
                            },
                        },
                        '& .MuiOutlinedInput-input': {
                            color: '#000',
                            fontSize: '14px',
                            '&::placeholder': {
                                color: '#666',
                                opacity: 1,
                            },
                        },
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
                            borderRadius: '4px',
                            py: 1,
                            '&:hover': {
                                borderColor: '#999',
                                backgroundColor: '#f9f9f9',
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleArchive}
                        disabled={!notes.trim()}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 500,
                            fontSize: '14px',
                            px: 2.75,
                            borderRadius: '4px',
                            py: 1,
                            '&:disabled': {
                                backgroundColor: '#ccc',
                                color: 'white',
                            },
                        }}
                    >
                        Archive
                    </Button>
                </Stack>
            </DialogContent>

            {/* CSS Animation */}
            <style>{`
    @keyframes modalFadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`}</style>

        </Dialog>
    );
};

export default ArchiveModal;
