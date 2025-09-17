import React from 'react';
import {
    Box,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
} from "@mui/material";
import { Add } from '@mui/icons-material';
import CompareSVG from "@assets/icons/CompareSVG.svg";
import searchFilterStyles from './SearchFilterStyles';
import { SearchFilterProps } from "@shared/types/SuperAdmin";

export const SearchFilter: React.FC<SearchFilterProps> = ({
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter
}) => {
    const getInputLabelStyle = (value: string) => ({
        ...searchFilterStyles.inputLabel,
        transform: value ? 'translate(14px, -6px) scale(0.75)' : 'translate(14px, 9px) scale(1)',
        transformOrigin: 'top left',
        transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    });

    return (
        <Box sx={searchFilterStyles.searchSection}>
            <Box sx={searchFilterStyles.searchContainer}>
                {/* Search Field */}
                <TextField
                    placeholder="Search roles..."
                    value={searchTerm}
                    size="small"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={searchFilterStyles.searchField}
                />

                <FormControl sx={searchFilterStyles.formControl}>
                    <InputLabel
                        shrink={!!statusFilter}
                        sx={getInputLabelStyle(statusFilter)}
                    >
                        Status
                    </InputLabel>
                    <Select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        size='small'
                        sx={searchFilterStyles.select}
                    >
                        <MenuItem value="">
                            All Status
                        </MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                    </Select>
                </FormControl>

                {/* Action Buttons */}
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    sx={searchFilterStyles.createButton}
                >
                    Create Role
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<Box component={"img"} src={CompareSVG} />}
                    sx={searchFilterStyles.compareButton}
                >
                    Compare Roles
                </Button>
            </Box>
        </Box>
    );
};