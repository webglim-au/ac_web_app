// Memoized components
import React from 'react';
import {
    Box,
    Typography,

} from '@mui/material';

const ApplicantCell = React.memo(({ applicant, email, phone }: { applicant: string; email: string; phone: string }) => (
    <Box>
        <Typography>{applicant}</Typography>
        <Typography fontSize="14px">{email}</Typography>
        <Typography fontSize="14px">{phone}</Typography>
    </Box>
));

export default ApplicantCell;