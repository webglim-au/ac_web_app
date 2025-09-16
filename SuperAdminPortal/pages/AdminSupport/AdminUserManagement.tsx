// AdminUserManagementPage.tsx
import { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import ScreenTemplate from "@sharedComponents/common/ScreenTemplate";
import UserTable from '@adminComponents/AdminSupport/UserManagement/UserTable';
import SearchAndFilter from '@adminComponents/AdminSupport/UserManagement/SearchAndFilter';

// Main Component
export function AdminUserManagementPage() {
    const [filters, setFilters] = useState({
        searchTerm: '',
        roleFilter: '',
        statusFilter: ''
    });

    const handleFiltersChange = useCallback((newFilters: { searchTerm: string, roleFilter: string, statusFilter: string }) => {
        setFilters(newFilters);
    }, []);

    return (
        <ScreenTemplate>
            <Box

                sx={() => ({
                    padding: 3,
                    // maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,

                    "@media (max-width: 1210px)": {

                        gap: 1,
                    }
                })}
            >

                <SearchAndFilter onFiltersChange={handleFiltersChange} />
                <UserTable filters={filters} />
            </Box>
        </ScreenTemplate>
    );
}