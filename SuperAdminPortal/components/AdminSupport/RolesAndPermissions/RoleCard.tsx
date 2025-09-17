import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Chip,
    IconButton,
    Button,
} from "@mui/material";
import { History } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockSVG from '@assets/icons/LockSVG.svg';
import roleCardStyles from "./RoleCardStyles";
import { RoleCardProps } from "@shared/types/SuperAdmin/index"

export const RoleCard: React.FC<RoleCardProps> = ({
    icon,
    title,
    subtitle,
    totalUsers,
    permissions,
    moreCount = 0,
    bgColor,
    color,
    border,
}) => {
    const handleViewDetails = () => {
        alert('Viewing details for ' + title);
    };

    const permissionChipStyle = {
        backgroundColor: bgColor,
        color: color,
        border: `1px solid ${border}`
    };

    const roleIconStyle = {
        ...roleCardStyles.roleIcon,
        backgroundColor: bgColor
    };

    return (
        <Card sx={roleCardStyles.card}>
            <CardContent sx={roleCardStyles.cardContent}>
                {/* Header with Icon, Title and Lock */}
                <Box sx={roleCardStyles.cardHeader}>
                    <Box sx={roleCardStyles.cardHeaderLeft}>
                        <Box src={icon} component={"img"} sx={roleIconStyle} />

                        <Box sx={roleCardStyles.roleInfo}>
                            <Box sx={roleCardStyles.roleTitleContainer}>
                                <Typography sx={roleCardStyles.roleTitle}>
                                    {title}
                                </Typography>
                                <Box component={"img"} src={LockSVG} sx={roleCardStyles.lockIcon} />
                            </Box>
                            <Typography sx={roleCardStyles.roleSubtitle}>
                                {subtitle}
                            </Typography>
                        </Box>
                    </Box>
                    {/* User Status Chips */}
                    <Box sx={roleCardStyles.statusChips}>
                        <Chip
                            label={`Active`}
                            sx={roleCardStyles.activeChip}
                            size="small"
                        />
                        <Chip
                            label={`${totalUsers} Users`}
                            sx={roleCardStyles.usersChip}
                            size="small"
                        />
                    </Box>
                </Box>

                {/* Permission Chips */}
                <Box sx={roleCardStyles.permissionChips}>
                    {permissions.slice(0, 4).map((permission, index) => (
                        <Chip
                            key={index}
                            label={permission}
                            size="small"
                            sx={permissionChipStyle}
                            variant="filled"
                            color="default"
                        />
                    ))}
                    {moreCount > 0 && (
                        <Chip
                            label={`+${moreCount} more`}
                            size="small"
                            sx={permissionChipStyle}
                            variant="outlined"
                        />
                    )}
                </Box>

                {/* Action Buttons */}
                <Box sx={roleCardStyles.actionButtons}>
                    <Button
                        startIcon={<ExpandMoreIcon />}
                        size="small"
                        sx={roleCardStyles.viewDetailsButton}
                        onClick={handleViewDetails}
                    >
                        View Details
                    </Button>
                    <Box sx={roleCardStyles.historyContainer}>
                        <IconButton size="small">
                            <History />
                        </IconButton>
                        <Typography sx={roleCardStyles.historyText}>
                            History
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};