import { useState, useMemo, useCallback } from 'react';
import {
    Box, Typography, TextField, Divider,
    InputAdornment, useTheme
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from '@components/common/StyledButton';
import IconTextButton from '@components/common/IconTextButton';
import PhoneIcon from '@components/common/IconComponents/PhoneIcon';
import EmailIcon from '@components/common/IconComponents/EmailIcon';
import EmailSVGComponent from '@components/common/IconComponents/EmailSVGComponent';
import NotesSVGComponent from '@components/common/IconComponents/NotesSVGComponent';
import styles from './ReferencesComponentStyles';
import RefereeItem from './RefereeItemComponent';
import { Referee, ReferenceComponentApplicant } from 'types/HR';

export function ReferencesComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedReference, setSelectedReference] = useState<string | null>(null);
    const theme = useTheme();

    // Mock data - replace with props or API data
    const applicant: ReferenceComponentApplicant = useMemo(() => ({
        name: "Alex Thompson",
        title: "Support Worker",
        phone: "+61 2 9123 4567",
        email: "alex.thompson@techcorp.com"
    }), []);

    const referees: Referee[] = useMemo(() => [
        {
            id: 'referee-1',
            name: 'Sarah',
            title: 'Design Manager',
            company: 'Tech Corp',
            phone: '+61 2 9123 4567',
            email: 'sarah.smith@techcorp.com',
            status: 'completed'
        },
        {
            id: 'referee-2',
            name: 'John Doe',
            title: 'Team Lead',
            company: 'Tech Corp',
            phone: '+61 2 9123 4568',
            email: 'john.doe@techcorp.com',
            status: 'pending'
        }
    ], []);

    // Filter referees based on search term
    const filteredReferees = useMemo(() => {
        if (!searchTerm) return referees;

        const searchLower = searchTerm.toLowerCase();
        return referees.filter(referee =>
            referee.name.toLowerCase().includes(searchLower) ||
            referee.title.toLowerCase().includes(searchLower) ||
            referee.company.toLowerCase().includes(searchLower) ||
            applicant.name.toLowerCase().includes(searchLower)
        );
    }, [referees, searchTerm, applicant.name]);

    const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }, []);

    const handleViewDetails = useCallback((referenceId: string) => {
        setSelectedReference(prev => prev === referenceId ? null : referenceId);
    }, []);

    // Action handlers
    const handleActions = useCallback(() => alert("Actions menu"), []);
    const handleReferenceTemplate = useCallback(() => alert("Reference Template"), []);
    const handleEditNotes = useCallback(() => alert("Edit Notes"), []);
    const handleSendEmail = useCallback(() => alert("Send Email"), []);

    const actionButtons = useMemo(() => [
        {
            text: "Actions",
            color: "black",
            bgColor: "transparent",
            onClick: handleActions
        },
        {
            text: "Reference Template",
            color: "#6f2d7a",
            bgColor: "transparent",
            onClick: handleReferenceTemplate
        },
        {
            text: "Schedule Follow-ups",
            color: "#6f2d7a",
            bgColor: "transparent",
            disabled: true
        },
        {
            text: "Edit Notes",
            color: "white",
            bgColor: "#6f2d7a",
            startIcon: <NotesSVGComponent />,
            onClick: handleEditNotes,
            sx: styles.editNotesButton
        },
        {
            text: "Send Email",
            color: "#6f2d7a",
            bgColor: "white",
            borderColor: "#6f2d7a",
            startIcon: <EmailSVGComponent />,
            onClick: handleSendEmail,
            sx: styles.sendEmailButton
        }
    ], [handleActions, handleReferenceTemplate, handleEditNotes, handleSendEmail]);

    return (
        <Box sx={styles.mainContainer}>
            <Box sx={styles.contentContainer}>
                {/* Header */}
                <Box sx={styles.headerContainer}>
                    <Typography sx={styles.headerTitle}>
                        Reference Center
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Search applicant or referee"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        sx={styles.searchField}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={styles.searchIcon} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Main Content */}
                <Box sx={styles.mainContentContainer}>
                    <Typography sx={styles.referenceForText}>
                        Reference for:
                    </Typography>

                    {/* ReferenceComponentApplicant Info */}
                    <Box sx={styles.applicantInfoContainer}>
                        <Box sx={styles.applicantInfoColumn}>
                            <Typography sx={styles.applicantText}>
                                {applicant.name}
                            </Typography>
                            <Typography sx={styles.applicantText}>
                                {applicant.title}
                            </Typography>
                        </Box>
                        <Box sx={styles.applicantContactColumn}>
                            <IconTextButton
                                icon={<PhoneIcon />}
                                text={applicant.phone}
                                color="black"
                                fontWeight="400"
                                fontSize="14px"
                            />
                            <IconTextButton
                                icon={<EmailIcon color="#6F2D7A" />}
                                text={applicant.email}
                                color="black"
                                fontWeight="400"
                                fontSize="14px"
                            />
                        </Box>
                    </Box>

                    <Divider sx={{ ...styles.divider, borderColor: theme.palette.divider }} />

                    {/* Referees List */}
                    {filteredReferees.length > 0 ? (
                        filteredReferees.map((referee, index) => (
                            <RefereeItem
                                key={referee.id}
                                referee={referee}
                                index={index}
                                selectedReference={selectedReference}
                                onViewDetails={handleViewDetails}
                            />
                        ))
                    ) : (
                        <Box sx={styles.noRefereesContainer}>
                            <Typography sx={styles.noRefereesText}>
                                No referees found matching your search criteria.
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>

            {/* Action Buttons Sidebar */}
            <Box sx={styles.sidebarContainer}>
                {actionButtons.map((button, index) => (
                    <CustomButton
                        key={index}
                        text={button.text}
                        textAlign="left"
                        borderColor={button.borderColor || "none"}
                        fontSize="14px"
                        bgColor={button.bgColor}
                        fontWeight="600"
                        color={button.color}
                        disabled={button.disabled}
                        startIcon={button.startIcon}
                        onClick={button.onClick ? (e) => {
                            e.stopPropagation();
                            button.onClick();
                        } : undefined}
                        sx={button.sx || styles.defaultActionButton}
                    />
                ))}
            </Box>
        </Box>
    );
}