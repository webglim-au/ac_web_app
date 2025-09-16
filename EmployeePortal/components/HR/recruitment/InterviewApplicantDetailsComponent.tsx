import { useState } from 'react';
import { Box, Card, CardContent, Divider } from "@mui/material";
import StickyNote from '@sharedComponents/common/StickyNote';
import styles from "./InterviewsStyles";
import { ApplicantDetailsInterviewProps } from "types/HR";
import SkillsSection from "./InterviewSkillsComponent";
import InterviewScheduleSection from './InterviewScheduleSection';
import ActionButtonsSection from './InterviewsActionButtonsSection';


// Details component that will be shown when "View Details" is clicked
const ApplicantDetailsComponent = ({ rowData, rowIndex }: ApplicantDetailsInterviewProps) => {
    const [interviewTime, setInterviewTime] = useState('');
    const [interviewDate, setInterviewDate] = useState('');
    const [note, setNote] = useState({
        title: "My Note",
        description: "This is editable text",
    });
    const [note2, setNote2] = useState({
        title: "My Note2",
        description: "This is editable text2",
    });

    return (
        <Card elevation={0} sx={styles.detailsCard}>
            <CardContent>
                <Box sx={styles.mainContainer}>
                    <SkillsSection />

                    <Box sx={styles.secondSection}>
                        <StickyNote
                            title={note.title}
                            description={note.description}
                            onChange={(newNote) => setNote(newNote)}
                        />
                    </Box>

                    <Box sx={styles.thirdSection} />
                </Box>

                <Divider sx={styles.sectionDivider} />

                <Box sx={styles.mainContainer}>
                    <InterviewScheduleSection
                        interviewDate={interviewDate}
                        setInterviewDate={setInterviewDate}
                    />

                    <Box sx={styles.notesSection}>
                        <StickyNote
                            title={note2.title}
                            description={note2.description}
                            onChange={(newNote) => setNote2(newNote)}
                        />
                    </Box>

                    <ActionButtonsSection />
                </Box>
            </CardContent>
        </Card>
    );
};

export default ApplicantDetailsComponent