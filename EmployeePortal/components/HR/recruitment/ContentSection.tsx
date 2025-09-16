import React, { useState, useCallback, useMemo } from 'react';
import {
    Box,
    Typography,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Pagination,
    PaginationItem,
    InputAdornment,
    Collapse
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import CustomButton from '@sharedComponents/common/StyledButton';
import STYLES from './ContentSectionStyles';
import ApplicantCell from './ContentSectionApplicantCell';
import StatusCell from './ContentSectionStatusCell';
import ACTION_CONFIGS from './ContentActionConfigs';

interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'left' | 'right' | 'center';
}

interface ContentSectionProps {
    title: string;
    columns: Column[];
    data: any[];
    searchPlaceholder?: string;
    onSearch?: (searchTerm: string) => void;
    rowsPerPage?: number;
    onArchive?: (row: any, rowIndex: number) => void;
    onSend?: (row: any, rowIndex: number) => void;
    renderExpandedContent?: (rowData: any, rowIndex: number) => React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({
    title,
    columns,
    data,
    searchPlaceholder = "Search...",
    onSearch,
    rowsPerPage = 10,
    onArchive,
    onSend,
    renderExpandedContent
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    // Memoized filtered data
    const filteredData = useMemo(() => {
        if (!searchTerm) return data;

        return data.filter(row =>
            Object.values(row).some(value =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [data, searchTerm]);

    // Memoized pagination calculations
    const paginationData = useMemo(() => {
        const totalPages = Math.ceil(filteredData.length / rowsPerPage);
        const startIndex = (currentPage - 1) * rowsPerPage;
        const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

        return { totalPages, paginatedData };
    }, [filteredData, currentPage, rowsPerPage]);

    const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        setCurrentPage(1);
        onSearch?.(value);
    }, [onSearch]);

    const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        setExpandedRow(null);
    }, []);

    const handleRowClick = useCallback((rowIndex: number) => {
        setSelectedRow(rowIndex);
    }, []);

    const handleViewDetails = useCallback((rowIndex: number) => {
        setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
    }, [expandedRow]);

    const handleExpandedSave = useCallback(() => {
        alert("Saved");
        setExpandedRow(null);
    }, []);

    const handleExpandedCancel = useCallback(() => {
        setExpandedRow(null);
    }, []);

    // Memoized action buttons renderer
    const renderActionButtons = useCallback((row: any, rowIndex: number) => {
        if (title === "Job Applications") {
            return (
                <Box display="flex" flexDirection="column" gap={1}>
                    {ACTION_CONFIGS['Job Applications'].primary(row, onSend, rowIndex)}
                    {ACTION_CONFIGS['Job Applications'].secondary(onArchive, row, rowIndex)}
                </Box>
            );
        }

        if (title === "Interviews") {
            return (
                <Box display="flex" flexDirection="column" gap={1}>
                    {ACTION_CONFIGS['Interviews'].buttons(expandedRow, rowIndex, setExpandedRow, onArchive, row).map((buttonConfig, index) => (
                        <React.Fragment key={index}>
                            {buttonConfig.component}
                        </React.Fragment>
                    ))}
                </Box>
            );
        }

        if (title === "Archived") {
            return (
                <Box display="flex" flexDirection="column" gap={1}>
                    {ACTION_CONFIGS['Archived'].buttons(row, rowIndex, onArchive).map((buttonConfig, index) => (
                        <React.Fragment key={index}>
                            {buttonConfig.component}
                        </React.Fragment>
                    ))}
                </Box>
            );
        }

        // Default case with expanded/collapsed states
        return (
            <Box display="flex" flexDirection="column" gap={1}>
                {ACTION_CONFIGS['Default'].buttons(
                    expandedRow,
                    rowIndex,
                    setExpandedRow,
                    onArchive,
                    row,
                    handleExpandedSave,
                    handleExpandedCancel
                ).map((buttonConfig, index) => (
                    <React.Fragment key={index}>
                        {buttonConfig.component}
                    </React.Fragment>
                ))}
            </Box>
        );
    }, [title, expandedRow, onSend, onArchive, handleViewDetails, handleExpandedSave, handleExpandedCancel]);

    // Memoized cell content renderer
    const renderCellContent = useCallback((column: Column, row: any, rowIndex: number) => {
        switch (column.id) {
            case "Applicant":
                return <ApplicantCell applicant={row.Applicant} email={row.email} phone={row.phone} />;
            case "actions":
                return <StatusCell status={row[column.id]} />;
            case "status":
                return renderActionButtons(row, rowIndex);
            default:
                return row[column.id];
        }
    }, [renderActionButtons]);

    const { totalPages, paginatedData } = paginationData;

    return (
        <Box sx={STYLES.container}>
            {/* Header with Title and Search */}
            <Box sx={STYLES.header}>

                <TextField
                    size="small"
                    placeholder={searchPlaceholder}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={STYLES.searchField}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "#7E7E7E", fontSize: 18 }} />
                            </InputAdornment>
                        ),
                    }}
                    aria-label="Search table data"
                />
            </Box>

            <TableContainer component={Paper} elevation={0}>
                <Table stickyHeader aria-label={`${title} data table`}>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align || "left"}
                                    style={{ minWidth: column.minWidth }}
                                    sx={STYLES.tableHeader}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, rowIndex) => (
                                <React.Fragment key={`${row.id || rowIndex}-${currentPage}`}>
                                    <TableRow
                                        onClick={() => handleRowClick(rowIndex)}
                                        sx={STYLES.tableRow(selectedRow === rowIndex)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                handleRowClick(rowIndex);
                                            }
                                        }}
                                    >
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align || "left"}
                                                sx={STYLES.tableCell(expandedRow === rowIndex)}
                                            >
                                                {renderCellContent(column, row, rowIndex)}
                                            </TableCell>
                                        ))}
                                    </TableRow>

                                    {/* Expandable Row */}
                                    <TableRow>
                                        <TableCell
                                            style={{ padding: 0 }}
                                            colSpan={columns.length}
                                        >
                                            <Collapse in={expandedRow === rowIndex} timeout="auto" unmountOnExit>
                                                <Box sx={{ borderTop: '2px solid #CFCFCF' }}>
                                                    {renderExpandedContent ?
                                                        renderExpandedContent(row, rowIndex) :
                                                        <Typography>No details component provided</Typography>
                                                    }
                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                </React.Fragment>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} align="center" sx={{ py: 4 }}>
                                    <Typography variant="body1" color="text.secondary">
                                        {searchTerm ? "No results found" : "No data available"}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            {totalPages > 1 && (
                <Box sx={STYLES.pagination}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        shape="rounded"
                        aria-label="Table pagination"
                        renderItem={(item) => (
                            <PaginationItem
                                {...item}
                                sx={STYLES.paginationItem}
                            />
                        )}
                    />
                </Box>
            )}
        </Box>
    );
};

export default React.memo(ContentSection);