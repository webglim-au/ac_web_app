
import React, { useRef } from 'react';
import { Box, TextField } from '@mui/material';
import { styles } from './VerificationInputStyles';

interface VerificationInputProps {
    digits: string[];
    setDigits: (digits: string[]) => void;
}

export const VerificationInput: React.FC<VerificationInputProps> = ({ digits, setDigits }) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleDigitChange = (index: number, value: string) => {
        if (value.length > 1) return;

        const newDigits = [...digits];
        newDigits[index] = value;
        setDigits(newDigits);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !digits[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        const newDigits = pastedData.split('').slice(0, 6);

        while (newDigits.length < 6) {
            newDigits.push('');
        }

        setDigits(newDigits);

        const nextEmptyIndex = newDigits.findIndex(digit => !digit);
        const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
        inputRefs.current[focusIndex]?.focus();
    };

    return (
        <Box
            sx={styles.container}
        >
            {digits.map((digit, index) => (
                <TextField
                    key={index}
                    inputRef={(el: HTMLInputElement | null) => { inputRefs.current[index] = el; }}
                    value={digit}
                    onChange={(e) => handleDigitChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    inputProps={{
                        maxLength: 1,
                        style: styles.inputProps,
                    }}
                    sx={styles.textField}
                    type="text"
                    variant="outlined"
                />
            ))}
        </Box>
    );
};