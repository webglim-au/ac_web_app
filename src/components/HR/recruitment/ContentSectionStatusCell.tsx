import React from 'react';
import {
    Box,
} from '@mui/material';

import StatusChip from '@components/common/StatusChip'

const StatusCell = React.memo(({ status }: { status: string }) => (
    <Box>
        <StatusChip
            colorKey={status as "pending" | "active" | "inactive"}
            label={status === "pending" ? 'Pending' : status === "active" ? 'Active' : 'Inactive'}
        />
    </Box>
));

export default StatusCell;