
import { Box, Typography, InputAdornment } from "@mui/material";

import CalendarIcon from '@components/common/IconComponents/CalendarIcon';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import styles from "./InterviewsStyles";
import BorderlessTextField from './BorderlessTextFieldInterview';

// Interview schedule component
const InterviewScheduleSection = ({
    interviewDate,
    setInterviewDate
}: {
    interviewDate: string;
    setInterviewDate: (date: string) => void;
}) => (
    <Box sx={styles.interviewSection}>
        <Typography sx={styles.sectionTitle}>
            Interview Schedule & Notes:
        </Typography>

        <Box sx={styles.dateTimeRow}>
            <BorderlessTextField
                type="date"
                value={interviewDate}
                onChange={(e) => setInterviewDate(e.target.value)}
                size="small"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <CalendarIcon />
                        </InputAdornment>
                    ),
                }}
                sx={styles.dateField}
            />
            <Box>
                <Typography sx={styles.confirmationText}>
                    Confirmation with notification
                </Typography>
                <Box sx={styles.timeContainer}>
                    <AccessTimeRoundedIcon sx={styles.timeIcon} />
                    <Typography sx={styles.timeText}>9:45 AM</Typography>
                </Box>
            </Box>
        </Box>

        <Box sx={styles.locationRow}>
            <Typography sx={styles.locationLabel}>Location:</Typography>
            <Typography sx={styles.locationValue}>
                In person or online
            </Typography>
        </Box>
    </Box>
);
export default InterviewScheduleSection;