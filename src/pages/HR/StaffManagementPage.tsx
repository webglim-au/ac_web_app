import { Box, Typography } from "@mui/material";
import HRScreenTemplate from "@components/HR/dashboard/HRScreenTemplate";
import ScreenHeading from "@components/common/ScreenHeading";


// StaffManagementPage.tsx
export function StaffManagementPage() {
    return (
        <HRScreenTemplate>
            <ScreenHeading title="Property Inspection" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Staff management functionality will be implemented here...</Typography>
            </Box>
        </HRScreenTemplate>
    );
}