import React, { useState, useCallback, useMemo } from 'react';
import { Box } from "@mui/material";
import ContentSection from '@components/HR/recruitment/ContentSection';
import ArchiveModal from './ArchiveModal';
import { PrescreeningApplicant, SelectedApplicantPrescreening, } from 'types/HR';
import { INITIAL_PRESCREENING_DATA } from '@utils/DummyData';
import { HR_REC_JOB_APP_TABLE_COLUMNS } from '@utils/HeaderColumns';
import ApplicantDetailsComponent from './PrescreeningApplicantDetailsComponent';
import STYLES from "./PrescreeningStyles";

const ROWS_PER_PAGE = 4;
// Memoize the component for better performance
const MemoizedApplicantDetailsComponent = React.memo(ApplicantDetailsComponent);

export function PrescreeningComponent() {
    const [archiveModalOpen, setArchiveModalOpen] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState<SelectedApplicantPrescreening | null>(null);
    const [applicationsData, setApplicationsData] = useState<PrescreeningApplicant[]>(INITIAL_PRESCREENING_DATA);

    // Memoized columns
    const columns = useMemo(() => HR_REC_JOB_APP_TABLE_COLUMNS, []);

    // Event handlers with useCallback
    const handleArchiveClick = useCallback((applicantData: PrescreeningApplicant, rowIndex: number) => {
        setSelectedApplicant({ ...applicantData, rowIndex });
        setArchiveModalOpen(true);
    }, []);

    const handleArchive = useCallback(async (notes: string) => {
        if (!selectedApplicant) {
            console.error('No applicant selected for archiving');
            return;
        }

        try {
            console.log('Archiving applicant:', selectedApplicant);
            console.log('Archive notes:', notes);

            // In a real application:
            // await archiveApplicantAPI(selectedApplicant.id, notes);

            // Update local state
            setApplicationsData(prevData =>
                prevData.filter(app => app.id !== selectedApplicant.id)
            );

            alert(`Archived ${selectedApplicant.Applicant} with notes: ${notes}`);

            // Clean up
            setSelectedApplicant(null);
            setArchiveModalOpen(false);
        } catch (error) {
            console.error('Failed to archive applicant:', error);
            alert('Failed to archive applicant. Please try again.');
        }
    }, [selectedApplicant]);

    const handleSearch = useCallback((searchTerm: string) => {
        console.log('Searching for:', searchTerm);
        // TODO: Implement search functionality
    }, []);

    const handleModalClose = useCallback(() => {
        setArchiveModalOpen(false);
        setSelectedApplicant(null);
    }, []);

    // Memoized expanded content renderer
    const renderExpandedContent = useCallback((rowData: PrescreeningApplicant, rowIndex: number) => (
        <MemoizedApplicantDetailsComponent rowData={rowData} rowIndex={rowIndex} />
    ), []);

    return (
        <>
            <Box sx={STYLES.container}>
                <ContentSection
                    title="Pre Screening"
                    columns={columns}
                    data={applicationsData}
                    searchPlaceholder="Search"
                    onSearch={handleSearch}
                    onArchive={handleArchiveClick}
                    rowsPerPage={ROWS_PER_PAGE}
                    renderExpandedContent={renderExpandedContent}
                />
            </Box>

            {/* Conditional modal rendering */}
            {archiveModalOpen && (
                <ArchiveModal
                    open={archiveModalOpen}
                    onClose={handleModalClose}
                    onArchive={handleArchive}
                    applicant={selectedApplicant}
                />
            )}
        </>
    );
}