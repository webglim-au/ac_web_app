import { useState, useCallback, useMemo } from 'react';
import { Box } from "@mui/material";
import ContentSection from '@employeeComponents/HR/recruitment/ContentSection';
import { INITIAL_ARCHIVED_DATA } from "@utils/DummyData";
import { HR_REC_ARCHIVED_TABLE_COLUMNS } from "@utils/HeaderColumns";
import { ArchivedApplicant } from '../../../../shared/types/HR';
const ROWS_PER_PAGE = 4;
const SEARCH_PLACEHOLDER = "Search";

// Styles
const STYLES = {
    container: {
        marginTop: "5px"
    }
} as const;

// Custom hooks
const useArchivedApplications = (initialData: ArchivedApplicant[]) => {
    const [applicationsData, setApplicationsData] = useState<ArchivedApplicant[]>(initialData);

    const activateApplication = useCallback((applicationId: number) => {
        try {
            setApplicationsData(prevData =>
                prevData.map(app =>
                    app.id === applicationId
                        ? { ...app, status: 'active' as const, actions: 'active' as const }
                        : app
                )
            );

            return true;
        } catch (error) {
            console.error('Failed to activate application:', error);
            return false;
        }
    }, []);

    const updateApplicationStatus = useCallback((applicationId: number, status: ArchivedApplicant['status']) => {
        setApplicationsData(prevData =>
            prevData.map(app =>
                app.id === applicationId
                    ? { ...app, status, actions: status }
                    : app
            )
        );
    }, []);

    const removeApplication = useCallback((applicationId: number) => {
        setApplicationsData(prevData =>
            prevData.filter(app => app.id !== applicationId)
        );
    }, []);

    return {
        applicationsData,
        activateApplication,
        updateApplicationStatus,
        removeApplication
    };
};

const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = useCallback((term: string) => {
        setSearchTerm(term);
        console.log('Searching for:', term);
    }, []);

    return {
        searchTerm,
        handleSearch
    };
};

export function ArchivedComponent() {
    // Custom hooks for state management
    const { applicationsData, activateApplication, updateApplicationStatus, removeApplication } =
        useArchivedApplications(INITIAL_ARCHIVED_DATA);

    const { handleSearch } = useSearch();

    // Memoized columns to prevent recreation
    const columns = useMemo(() => HR_REC_ARCHIVED_TABLE_COLUMNS, []);

    // Event handlers with proper error handling and user feedback
    const handleActivateApplication = useCallback(async (applicant: ArchivedApplicant) => {
        try {
            const success = activateApplication(applicant.id);

            if (success) {
                alert(`Successfully activated ${applicant.Applicant}'s application`);
            } else {
                alert('Failed to activate application. Please try again.');
            }
        } catch (error) {
            console.error('Error activating application:', error);
            alert('An error occurred while activating the application.');
        }
    }, [activateApplication]);

    const handleEditApplication = useCallback((applicant: ArchivedApplicant) => {
        // In a real application, this would navigate to an edit form or open a modal
        console.log('Editing application for:', applicant);
        alert(`Edit functionality would open for ${applicant.Applicant}`);
    }, []);

    const handleArchiveApplication = useCallback((applicant: ArchivedApplicant) => {
        // This seems redundant since we're already in the archived section,
        // but keeping for consistency with the ContentSection component
        console.log('Archive action for already archived application:', applicant);
        alert(`${applicant.Applicant} is already archived`);
    }, []);

    // Additional handlers that might be needed
    const handleBulkActions = useCallback((selectedIds: number[], action: string) => {
        // For future bulk operations
        console.log('Bulk action:', action, 'on applications:', selectedIds);
    }, []);

    const handleExportData = useCallback(() => {
        // For exporting archived data
        console.log('Exporting archived applications data');
        // Implementation would generate CSV/Excel file
    }, []);

    const handleRestoreApplication = useCallback((applicant: ArchivedApplicant) => {
        // Move application back to active pool
        try {
            updateApplicationStatus(applicant.id, 'active');
            alert(`${applicant.Applicant}'s application has been restored to active status`);
        } catch (error) {
            console.error('Error restoring application:', error);
            alert('Failed to restore application. Please try again.');
        }
    }, [updateApplicationStatus]);

    return (
        <Box sx={STYLES.container}>
            <ContentSection
                title="Archived"
                columns={columns}
                data={applicationsData}
                searchPlaceholder={SEARCH_PLACEHOLDER}
                onSearch={handleSearch}
                rowsPerPage={ROWS_PER_PAGE}
                onArchive={handleArchiveApplication}

            />
        </Box>
    );
}