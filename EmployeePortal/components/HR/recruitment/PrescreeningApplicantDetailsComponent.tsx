import { useState, useCallback, useMemo } from 'react';
import { Box, Typography, Card, CardContent, InputAdornment } from "@mui/material";
import CustomButton from '@sharedComponents/common/StyledButton';
import StatusChip from '@sharedComponents/common/StatusChip';
import StickyNote from '@sharedComponents/common/StickyNote';
import CalendarIcon from '@sharedComponents/common/IconComponents/CalendarIcon';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import { NoteData, ApplicantDetailsProps } from "@shared/types/HR";
import BorderlessTextFieldPrescreening from './BorderlessTextFieldPrescreening';
import { PRESCREENING_STATUSES } from '@utils/Constants';
import STYLES from "./PrescreeningApplicantDetailsStyles"

const INITIAL_NOTE: NoteData = {
    title: "My Note",
    description: "This is editable text",
};

// Custom hooks
const useInterviewScheduling = () => {
    const [interviewDate, setInterviewDate] = useState('');
    const [interviewTime, setInterviewTime] = useState('');

    const clearSchedule = useCallback(() => {
        setInterviewDate('');
        setInterviewTime('');
    }, []);

    const reschedule = useCallback(() => {
        if (!interviewDate || !interviewTime) {
            alert('Please select both date and time for rescheduling');
            return;
        }

        // In a real app, this would make an API call
        console.log('Rescheduling interview:', { date: interviewDate, time: interviewTime });
        alert(`Interview rescheduled for ${interviewDate} at ${interviewTime}!`);
    }, [interviewDate, interviewTime]);

    return {
        interviewDate,
        interviewTime,
        setInterviewDate,
        setInterviewTime,
        clearSchedule,
        reschedule
    };
};

const useNoteManagement = (initialNote: NoteData = INITIAL_NOTE) => {
    const [note, setNote] = useState<NoteData>(initialNote);

    const updateNote = useCallback((newNote: NoteData) => {
        setNote(newNote);
    }, []);

    const saveNote = useCallback(() => {
        console.log("Sticky note values:", note);
        alert(`Title: ${note.title}\nDescription: ${note.description}`);
    }, [note]);

    return { note, updateNote, saveNote };
};

// Memoized ApplicantDetailsComponent
const ApplicantDetailsComponent = ({ rowData, rowIndex }: ApplicantDetailsProps) => {
    const {
        interviewDate,
        interviewTime,
        setInterviewDate,
        setInterviewTime,
        clearSchedule,
        reschedule
    } = useInterviewScheduling();

    const { note, updateNote } = useNoteManagement();

    // Memoized status chips to prevent recreation
    const statusChips = useMemo(() => (
        PRESCREENING_STATUSES.map((status, index) => (
            <StatusChip
                key={`${status.label}-${index}`}
                label={status.label}
                colorKey={status.colorKey}
            />
        ))
    ), []);

    return (
        <Card elevation={0} sx={STYLES.detailsCard}>
            <CardContent>
                <Box sx={STYLES.mainContainer}>
                    {/* Pre Screening Forms Data Section */}
                    <Box sx={STYLES.prescreeningSection}>
                        <Typography sx={STYLES.prescreeningSectionTitle}>
                            Pre Screening Forms Data
                        </Typography>
                        <Box sx={STYLES.statusChipsContainer}>
                            {statusChips}
                        </Box>
                    </Box>

                    {/* Interview Schedule Section */}
                    <Box sx={STYLES.interviewSection}>
                        <Typography sx={STYLES.interviewSectionTitle}>
                            Interview Schedule and Notes:
                        </Typography>

                        <Box sx={STYLES.interviewInputsContainer}>
                            {/* Date and Time Inputs */}
                            <Box sx={STYLES.dateTimeContainer}>
                                <BorderlessTextFieldPrescreening
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
                                    sx={STYLES.inputField}
                                    aria-label="Interview date"
                                />

                                <BorderlessTextFieldPrescreening
                                    type="time"
                                    value={interviewTime}
                                    onChange={(e) => setInterviewTime(e.target.value)}
                                    size="small"
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <AccessTimeFilledRoundedIcon
                                                    fontSize="small"
                                                    sx={STYLES.timeIcon}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={STYLES.inputField}
                                    aria-label="Interview time"
                                />
                            </Box>

                            {/* Action Buttons */}
                            <Box sx={STYLES.buttonsContainer}>
                                <CustomButton
                                    text="Cancel"
                                    borderColor="#6f2d7a"
                                    textColor="#6f2d7a"
                                    fontWeight="600"
                                    bgColor="transparent"
                                    fontSize="12px"
                                    onClick={clearSchedule}
                                    sx={STYLES.cancelButton}
                                />

                                <CustomButton
                                    text="Reschedule"
                                    borderColor="none"
                                    textColor="#fff"
                                    fontWeight="600"
                                    bgColor="#6f2d7a"
                                    fontSize="12px"
                                    onClick={reschedule}
                                    sx={STYLES.rescheduleButton}
                                />
                            </Box>
                        </Box>
                    </Box>

                    {/* Sticky Note Section */}
                    <Box sx={STYLES.stickyNoteSection}>
                        <StickyNote
                            title={note.title}
                            description={note.description}
                            onChange={updateNote}
                            sx={STYLES.stickyNoteContainer}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ApplicantDetailsComponent;