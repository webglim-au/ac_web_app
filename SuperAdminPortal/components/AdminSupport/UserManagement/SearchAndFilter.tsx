// AdminUserManagementPage.tsx
import React, { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    IconButton,
} from "@mui/material";
import AddNewUserModal from "./AddNewUserModal";
import searchFilterStyles from "./SearchAndFilterStyles";
import CustomButton from '@sharedComponents/common/StyledButton';
import ExportSVG from "@assets/icons/Export.svg";
import AddUserSVG from "@assets/icons/AddUser.svg";

// Search and Filter Component
function SearchAndFilter({ onFiltersChange }: { onFiltersChange: (filters: { searchTerm: string, roleFilter: string, statusFilter: string }) => void }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [addUserModalOpen, setAddUserModalOpen] = useState(false);

    // Update parent component whenever filters change
    useEffect(() => {
        onFiltersChange({ searchTerm, roleFilter, statusFilter });
    }, [searchTerm, roleFilter, statusFilter, onFiltersChange]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleRoleChange = (e: any) => {
        setRoleFilter(e.target.value);
    };

    const handleStatusChange = (e: any) => {
        setStatusFilter(e.target.value);
    };

    return (
        <>
            <Box sx={searchFilterStyles.container}>
                <Box sx={searchFilterStyles.responsiveContainer}>
                    <Box sx={searchFilterStyles.leftSection}>
                        <TextField
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            size="small"
                            sx={searchFilterStyles.searchField}
                        />

                        <FormControl sx={searchFilterStyles.formControl}>
                            <InputLabel
                                shrink={!!roleFilter}
                                sx={{
                                    backgroundColor: "white",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    zIndex: 100,
                                    transform: roleFilter ? 'translate(14px, -6px) scale(0.75)' : 'translate(14px, 9px) scale(1)',
                                    transformOrigin: 'top left',
                                    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
                                }}
                            >
                                Role
                            </InputLabel>
                            <Select
                                value={roleFilter}
                                onChange={handleRoleChange}
                                // label="Role"
                                size='small'
                                sx={{
                                    '& .MuiSelect-select': {
                                        display: 'flex',
                                        width: "100%",
                                        alignItems: 'center',
                                        minHeight: 'unset',
                                    }
                                }}
                            >
                                <MenuItem value="">
                                    All Roles
                                </MenuItem>
                                <MenuItem value="Admin">Admin</MenuItem>
                                <MenuItem value="Client Coordinator">Client Coordinator</MenuItem>
                                <MenuItem value="Client Manager">Client Manager</MenuItem>
                                <MenuItem value="Support Worker">Support Worker</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={searchFilterStyles.formControl}>
                            <InputLabel
                                shrink={!!statusFilter}
                                sx={{
                                    backgroundColor: "white",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    zIndex: 100,
                                    transform: statusFilter ? 'translate(14px, -6px) scale(0.75)' : 'translate(14px, 9px) scale(1)',
                                    transformOrigin: 'top left',
                                    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
                                }}
                            >
                                Status
                            </InputLabel>
                            <Select
                                size='small'
                                value={statusFilter}
                                onChange={handleStatusChange}
                                // label="Status"
                                sx={{
                                    '& .MuiSelect-select': {
                                        display: 'flex',
                                        alignItems: 'center',
                                        minHeight: 'unset',
                                    }
                                }}
                            >
                                <MenuItem value="">
                                    All Status
                                </MenuItem>
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Away">Away</MenuItem>
                                <MenuItem value="Suspended">Suspended</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={searchFilterStyles.rightSection}>
                        <CustomButton
                            text='Add User'
                            startIcon={<IconButton size="small">
                                <img src={AddUserSVG} alt="Add User" />
                            </IconButton>}
                            bgColor='#6F2D7A'
                            color='white'
                            onClick={() => setAddUserModalOpen(true)} // Change this line
                            sx={searchFilterStyles.addButton}
                        />
                        <CustomButton
                            text='Export'
                            startIcon={<IconButton size="small">
                                <img src={ExportSVG} alt="Export" />
                            </IconButton>}
                            bgColor='white'
                            color='#374151'
                            hoverBgColor="#F3F4F6"
                            borderColor='#D1D5DB'
                            onClick={() => alert('Export clicked')}
                            sx={searchFilterStyles.exportButton}
                        />
                    </Box>
                </Box>
            </Box>
            <AddNewUserModal
                open={addUserModalOpen}
                onClose={() => setAddUserModalOpen(false)}
            />
        </>
    );
}

export default SearchAndFilter;