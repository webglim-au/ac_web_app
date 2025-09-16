import { useState } from 'react';
import { Box } from "@mui/material";
import ContentSection from '@employeeComponents/HR/recruitment/ContentSection';
import ArchiveModal from './ArchiveModal';
import styles from "./InterviewsStyles";
import { HR_REC_JOB_APP_TABLE_COLUMNS } from '@utils/HeaderColumns';
import { INITIAL_INTERVIEW_DATA } from "@utils/DummyData";
import ApplicantDetailsComponent from './InterviewApplicantDetailsComponent';

export function InterviewsComponent() {
    const [archiveModalOpen, setArchiveModalOpen] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    const handleArchiveClick = (applicantData: any, rowIndex: number) => {
        setSelectedApplicant({ ...applicantData, rowIndex });
        setArchiveModalOpen(true);
    };

    const handleArchive = (notes: string) => {
        console.log('Archiving applicant:', selectedApplicant);
        console.log('Archive notes:', notes);

        alert(`Archived ${selectedApplicant?.name || 'applicant'} with notes: ${notes}`);
    };

    const handleSearch = (searchTerm: string) => {
        console.log('Searching for:', searchTerm);
    };

    return (
        <>
            <Box sx={styles.mainWrapper}>
                <ContentSection
                    title="Interviews"
                    columns={HR_REC_JOB_APP_TABLE_COLUMNS}
                    data={INITIAL_INTERVIEW_DATA}
                    searchPlaceholder="Search"
                    onSearch={handleSearch}
                    rowsPerPage={4}
                    onArchive={handleArchiveClick}
                    renderExpandedContent={(rowData, rowIndex) => (
                        <ApplicantDetailsComponent rowData={rowData} rowIndex={rowIndex} />
                    )}
                />
            </Box>

            <ArchiveModal
                open={archiveModalOpen}
                onClose={() => setArchiveModalOpen(false)}
                onArchive={handleArchive}
            />
        </>
    );
}