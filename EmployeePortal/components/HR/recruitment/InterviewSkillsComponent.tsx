import { Box, Typography, Divider, } from "@mui/material";
import StatusChip from '@sharedComponents/common/StatusChip';
import styles from "./InterviewsStyles";
import { skillsData, documentsData } from '@utils/Constants'

const SkillsSection = () => (
    <Box sx={styles.firstSection}>
        <Typography sx={styles.sectionTitle}>Skills</Typography>
        <Box sx={styles.chipContainer}>
            {skillsData.map((skill, index) => (
                <StatusChip key={index} label={skill.label} colorKey={skill.colorKey} />
            ))}
        </Box>

        <Divider sx={styles.divider} />

        <Typography sx={styles.sectionTitle}>Requested Documents</Typography>
        <Box sx={styles.chipContainer}>
            {documentsData.map((doc, index) => (
                <StatusChip key={index} label={doc.label} colorKey={doc.colorKey} />
            ))}
        </Box>
    </Box>
);

export default SkillsSection;