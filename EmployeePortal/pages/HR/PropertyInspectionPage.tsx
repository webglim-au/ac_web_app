import { Box, Typography } from "@mui/material";
import ScreenTemplate from "@employeeComponents/common/ScreenTemplate";
import ScreenHeading from "@employeeComponents/common/ScreenHeading";
import { HRTopItems, HRBottomItems } from "@utils/sidebarMenuItems";
// PropertyInspectionPage.tsx
export function PropertyInspectionPage() {
    return (
        <ScreenTemplate topItems={HRTopItems} bottomItems={HRBottomItems}>
            <ScreenHeading title="Property Inspection" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Property inspection functionality will be implemented here...</Typography>
            </Box>
        </ScreenTemplate>
    );
}