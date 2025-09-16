import { useState, useCallback, useMemo } from 'react';
import { Box } from "@mui/material";
import ContentSection from '@employeeComponents/HR/recruitment/ContentSection';
import ArchiveModal from './ArchiveModal';
import SendPrescreeningModal from './SendPrescreeningFormModal';
import { Applicant, SelectedApplicant } from '../../../../shared/types/HR/index';
import { HR_REC_JOB_APP_TABLE_COLUMNS } from "@utils/HeaderColumns";
import { INITIAL_APPLICATIONS_DATA } from "@utils/DummyData";

const ROWS_PER_PAGE = 4;
const SEARCH_PLACEHOLDER = "Search applications...";

// Custom hooks for better state management
const useModalState = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return { isOpen, open, close };
};

const useApplicantSelection = () => {
    const [selectedApplicant, setSelectedApplicant] = useState<SelectedApplicant | null>(null);

    const selectApplicant = useCallback((applicantData: Applicant, rowIndex: number) => {
        setSelectedApplicant({ ...applicantData, rowIndex });
    }, []);

    const clearSelection = useCallback(() => {
        setSelectedApplicant(null);
    }, []);

    return { selectedApplicant, selectApplicant, clearSelection };
};

export function JobApplicationsComponent() {
    // State management with custom hooks
    const archiveModal = useModalState();
    const prescreeningModal = useModalState();
    const { selectedApplicant, selectApplicant, clearSelection } = useApplicantSelection();

    // Application data - in real app this would come from an API/context
    const [applicationsData, setApplicationsData] = useState<Applicant[]>(INITIAL_APPLICATIONS_DATA);

    // Memoized columns to prevent recreation on each render
    const columns = useMemo(() => HR_REC_JOB_APP_TABLE_COLUMNS, []);

    // Event handlers with useCallback for performance
    const handleArchiveClick = useCallback((applicantData: Applicant, rowIndex: number) => {
        selectApplicant(applicantData, rowIndex);
        archiveModal.open();
    }, [selectApplicant, archiveModal.open]);

    const handleFormClick = useCallback((applicantData: Applicant, rowIndex: number) => {
        selectApplicant(applicantData, rowIndex);
        prescreeningModal.open();
    }, [selectApplicant, prescreeningModal.open]);

    const handleSearch = useCallback((searchTerm: string) => {
        console.log('Searching for:', searchTerm);
    }, []);

    // Archive handler with proper error handling and state updates
    const handleArchive = useCallback(async (notes: string) => {
        if (!selectedApplicant) {
            console.error('No applicant selected for archiving');
            return;
        }
        try {
            setApplicationsData(prevData =>
                prevData.filter(app => app.id !== selectedApplicant.id)
            );
            alert(`Successfully archived ${selectedApplicant.Applicant} with notes: ${notes}`);
            clearSelection();
            archiveModal.close();
        } catch (error) {
            console.error('Failed to archive applicant:', error);
            alert('Failed to archive applicant. Please try again.');
        }
    }, [selectedApplicant, clearSelection, archiveModal.close]);

    // Form submission handler with proper validation and error handling
    const handleFormSubmission = useCallback(async (email: string, subject: string, message: string) => {
        if (!selectedApplicant) {
            console.error('No applicant selected for form submission');
            return;
        }
        try {

            if (!email || !subject || !message) {
                alert(`Please fill in all required fields ${email}, ${subject}, ${message}`);
                return;
            }

            setApplicationsData(prevData =>
                prevData.map(app =>
                    app.id === selectedApplicant.id
                        ? { ...app, status: 'sent' as const }
                        : app
                )
            );

            alert(`Successfully sent prescreening form to ${selectedApplicant.Applicant}`);

            // Clean up
            clearSelection();
            prescreeningModal.close();
        } catch (error) {
            console.error('Failed to send prescreening form:', error);
            alert('Failed to send prescreening form. Please try again.');
        }
    }, [selectedApplicant, clearSelection, prescreeningModal.close]);

    // Modal close handlers that clean up selection
    const handleArchiveModalClose = useCallback(() => {
        archiveModal.close();
        clearSelection();
    }, [archiveModal.close, clearSelection]);

    const handlePrescreeningModalClose = useCallback(() => {
        prescreeningModal.close();
        clearSelection();
    }, [prescreeningModal.close, clearSelection]);

    return (
        <>
            <Box sx={{ marginTop: "0px" }}>
                <ContentSection
                    title="Job Applications"
                    columns={columns}
                    data={applicationsData}

                    searchPlaceholder={SEARCH_PLACEHOLDER}
                    onSearch={handleSearch}
                    rowsPerPage={ROWS_PER_PAGE}
                    onArchive={handleArchiveClick}
                    onSend={handleFormClick}
                />
            </Box>

            {/* Modals - only render when needed for better performance */}
            {archiveModal.isOpen && (
                <ArchiveModal
                    open={archiveModal.isOpen}
                    onClose={handleArchiveModalClose}
                    onArchive={handleArchive}
                    applicant={selectedApplicant}
                />
            )}

            {prescreeningModal.isOpen && (
                <SendPrescreeningModal
                    open={prescreeningModal.isOpen}
                    onClose={handlePrescreeningModalClose}
                    onSend={handleFormSubmission}
                    applicant={selectedApplicant}
                />
            )}
        </>
    );
}