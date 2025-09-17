import { Box, Typography } from "@mui/material";
import ScreenTemplate from "@sharedComponents/common/ScreenTemplate";
import ScreenHeading from "@sharedComponents/common/ScreenHeading";
import { HRTopItems, HRBottomItems } from "@utils/sidebarMenuItems";

// StaffManagementPage.tsx
export function StaffManagementPage() {
    return (
        <ScreenTemplate >
            <ScreenHeading title="Property Inspection" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Staff management functionality will be implemented here...</Typography>
            </Box>
        </ScreenTemplate>
    );
}