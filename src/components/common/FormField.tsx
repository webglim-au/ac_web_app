import React from 'react';
import { TextField, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { styles } from './FormFieldStyles';

interface FormFieldProps {
    label: string;
    type?: string;
    placeholder: string;
    value?: string;
    error?: string;
    onChange?: (value: string) => void;
    marginTop?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    type = 'text',
    placeholder,
    value,
    error,
    onChange,
    marginTop = '0px'
}) => (
    <>
        <Typography
            align="left"
            sx={styles.label(marginTop, error)}
        >
            {label}
        </Typography>
        <TextField
            fullWidth
            type={type}
            placeholder={placeholder}
            variant="outlined"
            size="small"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            error={Boolean(error)}
            helperText={error || ''}
            FormHelperTextProps={{
                sx: styles.helperText,
            }}
            InputProps={{
                endAdornment: error ? (
                    <ErrorOutline
                        color="error"
                        sx={styles.errorIcon}
                    />
                ) : null,
            }}
        />
    </>
);
