// Action button configurations - moved outside component to prevent recreation
import React from 'react';
import { Tooltip } from '@mui/material';
import CustomButton from '@components/common/StyledButton';
import ArchiveIcon from '@mui/icons-material/Archive';
import FormatListBulletedAddIcon from '@mui/icons-material/FormatListBulletedAdd';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Cancel } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InterviewIcon from '@mui/icons-material/RecordVoiceOver';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RestoreIcon from '@mui/icons-material/Restore';

const ACTION_CONFIGS = {
    'Job Applications': {
        primary: (row: any, onSend: any, rowIndex: number) => (
            <Tooltip title={row.status === "sent" ? "Pre-screening form sent" : "Send Pre-screening forms"}>
                <span>
                    <CustomButton
                        text=""
                        borderColor={row.status === "sent" ? "#CBC8C8" : "#6f2d7a"}
                        disabled={row.status === "sent"}
                        bgColor="transparent"
                        startIcon={
                            row.status === "sent" ?
                                <CheckCircleIcon sx={{ color: row.status === "sent" ? "#CBC8C8" : "#6f2d7a", marginLeft: "5px" }} /> :
                                <SendIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />
                        }
                        onClick={() => onSend(row, rowIndex)}
                        sx={{
                            width: "40px",
                            height: "40px",
                            minWidth: "40px",
                            padding: "8px",
                            borderRadius: "6px",
                            border: `1px solid ${row.status === "sent" ? "#CBC8C8" : "#6f2d7a"}`
                        }}
                    />
                </span>
            </Tooltip>
        ),
        secondary: (onArchive: any, row: any, rowIndex: number) => (
            <Tooltip title="Archive application">
                <CustomButton
                    text=""
                    borderColor="#6f2d7a"
                    bgColor="transparent"
                    startIcon={<ArchiveIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                    onClick={() => onArchive(row, rowIndex)}
                    sx={{
                        width: "40px",
                        height: "40px",
                        minWidth: "40px",
                        padding: "8px",
                        borderRadius: "6px",
                        border: "1px solid #6f2d7a"
                    }}
                />
            </Tooltip>
        )
    },
    'Interviews': {
        buttons: (expandedRow: number | null, rowIndex: number, setExpandedRow: any, onArchive: any, row: any) => [
            {
                component: (
                    <Tooltip title="Edit interview details">
                        <CustomButton
                            text=""
                            borderColor="#6f2d7a"
                            bgColor="transparent"
                            startIcon={<EditOutlinedIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                            onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
                            }}
                            sx={{
                                width: "40px",
                                height: "40px",
                                minWidth: "40px",
                                padding: "8px",
                                borderRadius: "6px",
                                border: "1px solid #6f2d7a",

                            }}
                        />
                    </Tooltip>
                )
            },
            {
                component: (
                    <Tooltip title="Move to interview">
                        <CustomButton
                            text=""
                            borderColor="#6f2d7a"
                            bgColor="transparent"
                            startIcon={<InterviewIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                            onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                alert("Move to Interview clicked!");
                            }}
                            sx={{
                                width: "40px",
                                height: "40px",
                                minWidth: "40px",
                                padding: "8px",
                                borderRadius: "6px",
                                border: "1px solid #6f2d7a",

                            }}
                        />
                    </Tooltip>
                )
            },
            {
                component: (
                    <Tooltip title="Archive interview">
                        <CustomButton
                            text=""
                            borderColor="#6f2d7a"
                            bgColor="transparent"
                            startIcon={<ArchiveIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                            onClick={() => onArchive(row, rowIndex)}
                            sx={{
                                width: "40px",
                                height: "40px",
                                minWidth: "40px",
                                padding: "8px",
                                borderRadius: "6px",
                                border: "1px solid #6f2d7a",

                            }}
                        />
                    </Tooltip>
                )
            }
        ]
    },
    'Archived': {
        buttons: (row: any, rowIndex: number, onArchive: any) => [
            {
                component: (
                    <Tooltip title="Restore application">
                        <CustomButton
                            text=""
                            borderColor="#6f2d7a"
                            bgColor="transparent"
                            startIcon={<RestoreIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                            onClick={(e: React.MouseEvent) => {
                                alert("Application activated");
                                e.stopPropagation();
                            }}
                            sx={{
                                width: "40px",
                                height: "40px",
                                minWidth: "40px",
                                padding: "8px",
                                borderRadius: "6px",
                                border: "1px solid #6f2d7a"
                            }}
                        />
                    </Tooltip>
                )
            },
            {
                component: (
                    <Tooltip title="Edit (disabled)">
                        <span>
                            <CustomButton
                                text=""
                                borderColor="#CBC8C8"
                                bgColor="transparent"
                                disabled={true}
                                startIcon={<EditOutlinedIcon sx={{ color: "#CBC8C8", marginLeft: "5px" }} />}
                                onClick={() => alert("Clicked!")}
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    minWidth: "40px",
                                    padding: "8px",
                                    borderRadius: "6px",
                                    border: "1px solid #CBC8C8",

                                }}
                            />
                        </span>
                    </Tooltip>
                )
            },
            {
                component: (
                    <Tooltip title="Archive (disabled)">
                        <span>
                            <CustomButton
                                text=""
                                borderColor="#CBC8C8"
                                bgColor="transparent"
                                disabled={true}
                                startIcon={<ArchiveIcon sx={{ color: "#CBC8C8", marginLeft: "5px" }} />}
                                onClick={() => onArchive?.(row, rowIndex)}
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    minWidth: "40px",
                                    padding: "8px",
                                    borderRadius: "6px",
                                    border: "1px solid #CBC8C8",

                                }}
                            />
                        </span>
                    </Tooltip>
                )
            }
        ]
    },
    'Default': {
        buttons: (expandedRow: number | null, rowIndex: number, setExpandedRow: any, onArchive: any, row: any, handleExpandedSave: () => void, handleExpandedCancel: () => void) =>
            expandedRow === rowIndex ? [
                {
                    component: (
                        <Tooltip title="Save changes">
                            <CustomButton
                                text=""
                                borderColor="#6f2d7a"
                                bgColor="#6f2d7a"
                                startIcon={<CheckCircleIcon sx={{ color: "white", marginLeft: "5px" }} />}
                                onClick={handleExpandedSave}
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    minWidth: "40px",
                                    padding: "8px",
                                    borderRadius: "6px",
                                    border: "1px solid #6f2d7a"
                                }}
                            />
                        </Tooltip>
                    )
                },
                {
                    component: (
                        <Tooltip title="Cancel changes">
                            <CustomButton
                                text=""
                                borderColor="#6f2d7a"
                                bgColor="transparent"
                                startIcon={<Cancel sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                                onClick={handleExpandedCancel}
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    minWidth: "40px",
                                    padding: "8px",
                                    borderRadius: "6px",
                                    border: "1px solid #6f2d7a",
                                    // ml: 1
                                }}
                            />
                        </Tooltip>
                    )
                },
                // {
                //     component: (
                //         <Tooltip title="Schedule interview">
                //             <CustomButton
                //                 text=""
                //                 borderColor="#6f2d7a"
                //                 bgColor="transparent"
                //                 startIcon={<InterviewIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                //                 onClick={() => alert("Interview Scheduled")}
                //                 sx={{
                //                     width: "40px",
                //                     height: "40px",
                //                     minWidth: "40px",
                //                     padding: "8px",
                //                     borderRadius: "6px",
                //                     border: "1px solid #6f2d7a",
                //                     mt: 1
                //                 }}
                //             />
                //         </Tooltip>
                //     )
                // },
                // {
                //     component: (
                //         <Tooltip title="Archive">
                //             <CustomButton
                //                 text=""
                //                 borderColor="#6f2d7a"
                //                 bgColor="transparent"
                //                 startIcon={<ArchiveIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                //                 onClick={() => onArchive?.(row, rowIndex)}
                //                 sx={{
                //                     width: "40px",
                //                     height: "40px",
                //                     minWidth: "40px",
                //                     padding: "8px",
                //                     borderRadius: "6px",
                //                     border: "1px solid #6f2d7a",
                //                     ml: 1,
                //                     mt: 1
                //                 }}
                //             />
                //         </Tooltip>
                //     )
                // }
            ] : [
                {
                    component: (
                        <Tooltip title="View details">
                            <CustomButton
                                text=""
                                borderColor="#6f2d7a"
                                bgColor="transparent"
                                startIcon={<VisibilityIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
                                }}
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    minWidth: "40px",
                                    padding: "8px",
                                    borderRadius: "6px",
                                    border: "1px solid #6f2d7a"
                                }}
                            />
                        </Tooltip>
                    )
                },

                {
                    component: (
                        <Tooltip title="Archive">
                            <CustomButton
                                text=""
                                borderColor="#6f2d7a"
                                bgColor="transparent"
                                startIcon={<ArchiveIcon sx={{ color: "#6f2d7a", marginLeft: "5px" }} />}
                                onClick={() => onArchive?.(row, rowIndex)}
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    minWidth: "40px",
                                    padding: "8px",
                                    borderRadius: "6px",
                                    border: "1px solid #6f2d7a",
                                    mt: 0
                                }}
                            />
                        </Tooltip>
                    )
                }
            ]
    }
} as const;

export default ACTION_CONFIGS;