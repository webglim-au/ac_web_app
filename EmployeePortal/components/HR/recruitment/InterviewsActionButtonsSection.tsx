import { Box } from "@mui/material";
import CustomButton from '@sharedComponents/common/StyledButton';
import styles from "./InterviewsStyles";
// Interview schedule component

// Action buttons component
const ActionButtonsSection = () => (
    <Box sx={styles.actionSection}>
        <CustomButton
            text="Send Interview Email"
            borderColor="none"
            textColor="#6f2d7a"
            fontWeight="600"
            bgColor="transparent"
            fontSize="12px"
            onClick={() => alert("Interview email sent!")}
            sx={styles.interviewButton}
        />
        <CustomButton
            text="Reschedule"
            borderColor="none"
            textColor="black"
            fontWeight="600"
            bgColor="transparent"
            fontSize="12px"
            onClick={() => alert("Interview rescheduled!")}
            sx={styles.rescheduleButton}
        />
    </Box>
);
export default ActionButtonsSection;