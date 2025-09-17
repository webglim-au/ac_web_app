import { useMemo, useCallback } from 'react';
import {
    Box, Typography, Divider, useTheme
} from "@mui/material";
import IconTextButton from '@sharedComponents/common/IconTextButton';
import StatusChip from '@sharedComponents/common/StatusChip';
import PhoneIcon from '@sharedComponents/common/IconComponents/PhoneIcon';
import EmailIcon from '@sharedComponents/common/IconComponents/EmailIcon';
import DetailedNotes from "@sharedComponents/common/DetailedNotes";
import styles from './ReferencesComponentStyles';

import { RefereeItemProps } from '@shared/types/HR';

// Referee Item Component
const RefereeItem: React.FC<RefereeItemProps> = ({
    referee,
    index,
    selectedReference,
    onViewDetails
}) => {
    const isSelected = selectedReference === referee.id;
    const theme = useTheme();

    const handleViewDetailsClick = useCallback(() => {
        onViewDetails(referee.id);
    }, [referee.id, onViewDetails]);

    const statusLabel = useMemo(() =>
        referee.status.charAt(0).toUpperCase() + referee.status.slice(1),
        [referee.status]
    );

    return (
        <Box>
            <Box sx={styles.refereeItemGrid}>
                <Typography sx={styles.refereeIndexText}>
                    Referee {index + 1}
                </Typography>

                <Box sx={styles.refereeInfoColumn}>
                    <Typography sx={styles.refereeNameText}>
                        {referee.name}
                    </Typography>
                    <Typography sx={styles.refereeSubText}>
                        {referee.title}
                    </Typography>
                    <Typography sx={styles.refereeSubText}>
                        {referee.company}
                    </Typography>
                </Box>

                <Box>
                    <IconTextButton
                        icon={<PhoneIcon />}
                        text={referee.phone}
                        color="black"
                        fontWeight="400"
                        fontSize="15px"
                    />
                    <IconTextButton
                        icon={<EmailIcon color="#6F2D7A" />}
                        text={referee.email}
                        color="black"
                        fontWeight="400"
                        fontSize="15px"
                    />
                </Box>

                <Box>
                    <StatusChip
                        colorKey={referee.status}
                        label={statusLabel}
                    />
                </Box>

                <Box sx={styles.viewDetailsContainer}>
                    <Typography
                        onClick={handleViewDetailsClick}
                        sx={{
                            ...styles.viewDetailsText,
                            color: isSelected ? "#9E9E9E" : "#6F2D7A",
                        }}
                    >
                        {isSelected ? "View Details -" : "View Details +"}
                    </Typography>
                </Box>
            </Box>

            <Divider sx={{ ...styles.divider, borderColor: theme.palette.divider }} />

            {/* Show DetailedNotes when selected */}
            {isSelected && (
                <Box>
                    <Typography sx={styles.detailedNotesTitle}>
                        Referee response to Professional and Ethical Behaviour
                    </Typography>
                    <Box sx={styles.detailedNotesContainer}>
                        <DetailedNotes />
                    </Box>
                    <Divider sx={{ ...styles.divider, borderColor: theme.palette.divider }} />
                </Box>
            )}
        </Box>
    );
};

export default RefereeItem;