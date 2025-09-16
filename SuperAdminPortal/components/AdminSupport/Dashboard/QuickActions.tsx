// QuickActions.tsx
import { Box, Typography, Button } from "@mui/material";

import TestPermissions from "@assets/icons/TestPermissions.svg";
import AddNewRole from "@assets/icons/AddNewUser.svg";
import CreateRole from "@assets/icons/CreateRole.svg"
import styles from "./QuickActionsStyle";
import { QuickActionItem, QuickActionsProps } from "shared/types/SuperAdmin";

const defaultActions: QuickActionItem[] = [
    {
        icon: AddNewRole,
        heading: "Add New User",
        subheading: "Create user account",
        color: "#6F2D7A1A" // green
    },
    {
        icon: CreateRole,
        heading: "Create Role",
        subheading: "Define new role ",
        color: "#10B9811A" // red
    }, {
        icon: TestPermissions,
        heading: "Test Permissions",
        subheading: "Launch Simulator",
        color: "#F59E0B1A" // blue
    },

];

export function QuickActions({
    title = "Quick Actions",
    actions = defaultActions
}: QuickActionsProps) {
    return (
        <Box sx={styles.quickActionsContainer}>
            <Typography
                variant="h6"
                sx={styles.quickActionsHeading}
            >
                {title}
            </Typography>

            <Box sx={styles.quickActionsButtonsWrapper}>
                {actions.map((action, index) => (
                    <Button
                        key={index}
                        sx={styles.quickActionButton}
                        variant="outlined"
                        onClick={action.onClick}
                    >
                        <Box sx={styles.quickActionButtonContent}>

                            <Box src={action.icon} component="img" sx={{
                                ...styles.quickActionIcon,
                                backgroundColor: action.color ?? "#E5E7EB"
                            }} />


                            <Box sx={styles.quickActionTextContainer}>
                                <Typography sx={styles.quickActionHeading}>
                                    {action.heading}
                                </Typography>
                                <Typography sx={styles.quickActionSubheading}>
                                    {action.subheading}
                                </Typography>
                            </Box>
                        </Box>
                    </Button>
                ))}
            </Box>
        </Box >
    );
}
