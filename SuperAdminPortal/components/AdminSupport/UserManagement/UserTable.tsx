// AdminUserManagementPage.tsx
import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Chip,
    Paper,
    IconButton,
} from "@mui/material";

import Edit from "@assets/icons/Edit.svg";
import Reinstate from "@assets/icons/Reinstate.svg";
import Restore from "@assets/icons/Restore.svg";
import Suspend from "@assets/icons/Suspend.svg";
import userTableStyles from "./UserTableStyles";
import { getRoleChipColor, getStatusChipColor } from '@utils/Constants';
import { mockUsersManagement } from '@utils/DummyData';
import { UserTableProps } from 'shared/types/SuperAdmin';

function UserTable({ filters }: UserTableProps) {
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    // Filter users based on search term, role, and status
    const filteredUsers = mockUsersManagement.filter(user => {
        const matchesSearch = !filters.searchTerm ||
            user.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(filters.searchTerm.toLowerCase());

        const matchesRole = !filters.roleFilter || user.role === filters.roleFilter;
        const matchesStatus = !filters.statusFilter || user.status === filters.statusFilter;

        return matchesSearch && matchesRole && matchesStatus;
    });

    const totalFilteredCount = filteredUsers.length;
    const totalPages = Math.ceil(totalFilteredCount / usersPerPage) || 1;

    // Calculate pagination
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const currentPageUsers = filteredUsers.slice(startIndex, endIndex);

    // Reset selection and pagination when filters change
    useEffect(() => {
        setSelectedUsers([]);
        setSelectAll(false);
        setCurrentPage(1);
    }, [filters]);

    // Reset selectAll when page changes
    useEffect(() => {
        setSelectAll(selectedUsers.length > 0 && currentPageUsers.every(user => selectedUsers.includes(user.id)));
    }, [currentPage, selectedUsers, currentPageUsers]);

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const currentPageUserIds = currentPageUsers.map(user => user.id);
            const newSelected = [...new Set([...selectedUsers, ...currentPageUserIds])];
            setSelectedUsers(newSelected);
            setSelectAll(true);
        } else {
            const currentPageUserIds = currentPageUsers.map(user => user.id);
            const newSelected = selectedUsers.filter(id => !currentPageUserIds.includes(id));
            setSelectedUsers(newSelected);
            setSelectAll(false);
        }
    };

    const handleSelectUser = (userId: number) => {
        const newSelected = selectedUsers.includes(userId)
            ? selectedUsers.filter(id => id !== userId)
            : [...selectedUsers, userId];
        setSelectedUsers(newSelected);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Calculate display numbers
    const showingStart = totalFilteredCount > 0 ? startIndex + 1 : 0;
    const showingEnd = Math.min(endIndex, totalFilteredCount);

    return (
        <Box sx={userTableStyles.container}>
            <Box sx={userTableStyles.header}>
                <Typography sx={userTableStyles.headerTitle}>
                    All Users
                </Typography>
                <Box sx={userTableStyles.headerRightSection}>
                    <Typography sx={userTableStyles.showingText}>
                        Showing {showingStart}-{showingEnd} of {totalFilteredCount}
                        {filters.searchTerm || filters.roleFilter || filters.statusFilter ? ' (filtered)' : ' '}
                    </Typography>
                    <Box sx={userTableStyles.paginationContainer}>
                        <IconButton
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            sx={userTableStyles.paginationButton}
                        >
                            <Typography variant="body2" sx={userTableStyles.paginationButtonText}>
                                &lt;
                            </Typography>
                        </IconButton>
                        <Typography sx={userTableStyles.paginationPageInfo}>
                            {currentPage} of {totalPages}
                        </Typography>
                        <IconButton
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            sx={userTableStyles.paginationButton}
                        >
                            <Typography variant="body2" sx={userTableStyles.paginationButtonText}>
                                &gt;
                            </Typography>
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            <TableContainer component={Paper} sx={userTableStyles.tableContainer}>
                <Table sx={userTableStyles.table}>
                    <TableHead sx={userTableStyles.tableHeader}>
                        <TableRow>
                            <TableCell padding="checkbox" sx={userTableStyles.checkboxCell}>
                                <Checkbox
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                    indeterminate={selectedUsers.length > 0 && !currentPageUsers.every(user => selectedUsers.includes(user.id))}
                                    sx={userTableStyles.headerCheckbox}
                                />
                            </TableCell>
                            <TableCell sx={userTableStyles.userColumnCell}>User</TableCell>
                            <TableCell sx={userTableStyles.roleColumnCell}>Role</TableCell>
                            <TableCell sx={userTableStyles.lastLoginColumnCell}>Last Login</TableCell>
                            <TableCell sx={userTableStyles.statusColumnCell}>Status</TableCell>
                            <TableCell align="right" sx={userTableStyles.actionsColumnCell}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentPageUsers.length > 0 ? (
                            currentPageUsers.map((user) => (
                                <TableRow key={user.id} sx={userTableStyles.tableRow}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedUsers.includes(user.id)}
                                            onChange={() => handleSelectUser(user.id)}
                                            sx={userTableStyles.rowCheckbox}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={userTableStyles.userCell}>
                                            <img
                                                src={user.image || 'https://via.placeholder.com/40x40.png'}
                                                alt={user.name}
                                                style={userTableStyles.userAvatar}
                                            />
                                            <Box sx={userTableStyles.userInfo}>
                                                <Typography sx={userTableStyles.userName}>
                                                    {user.name}
                                                </Typography>
                                                <Typography sx={userTableStyles.userEmail}>
                                                    {user.email}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={user.role}
                                            size="small"
                                            sx={{
                                                ...getRoleChipColor(user.role),
                                                ...userTableStyles.roleChip
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={userTableStyles.lastLoginText}>
                                            {user.lastLogin}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={user.status}
                                            size="small"
                                            sx={{
                                                ...getStatusChipColor(user.status),
                                                ...userTableStyles.statusChip
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Box sx={userTableStyles.actionsContainer}>
                                            <IconButton size="small" onClick={() => console.log(`Edit user ${user.id}`)}>
                                                <img src={Edit} alt="Edit" style={userTableStyles.actionIcon} />
                                            </IconButton>
                                            <IconButton size="small" onClick={() => console.log(`Restore user ${user.id}`)}>
                                                <img src={Restore} alt="Restore" style={userTableStyles.actionIcon} />
                                            </IconButton>
                                            {user?.status !== "Suspended" &&
                                                <IconButton size="small" onClick={() => console.log(`Suspend user ${user.id}`)}>
                                                    <img src={Suspend} alt="Suspend" style={userTableStyles.actionIcon} />
                                                </IconButton>
                                            }
                                            {user?.status === "Suspended" &&
                                                <IconButton size="small" onClick={() => console.log(`Reinstate user ${user.id}`)}>
                                                    <img src={Reinstate} alt="Reinstate" style={userTableStyles.actionIcon} />
                                                </IconButton>
                                            }
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={userTableStyles.emptyStateCell}>
                                    <Typography variant="body2" color="text.secondary">
                                        No users found matching the selected filters.
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default UserTable;