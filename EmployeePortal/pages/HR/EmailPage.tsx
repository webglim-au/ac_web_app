import { Box, Typography } from "@mui/material";
import ScreenTemplate from "@employeeComponents/common/ScreenTemplate";
import ScreenHeading from "@employeeComponents/common/ScreenHeading";
import { HRTopItems, HRBottomItems } from "@utils/sidebarMenuItems";

// EmailPage.tsx
export function EmailPage() {
    return (
        <ScreenTemplate topItems={HRTopItems} bottomItems={HRBottomItems}>
            <ScreenHeading title="Email" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Email functionality will be implemented here...</Typography>
            </Box>
        </ScreenTemplate>
    );
}