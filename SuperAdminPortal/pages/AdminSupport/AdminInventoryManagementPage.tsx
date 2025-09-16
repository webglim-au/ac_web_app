// AdminInventoryManagementPage.tsx
import { Box, Typography } from "@mui/material";
import ScreenTemplate from "@sharedComponents/common/ScreenTemplate";
import ScreenHeading from "@sharedComponents/common/ScreenHeading";

export function AdminInventoryManagementPage() {
    return (
        <ScreenTemplate>
            <ScreenHeading title="AdminInventoryManagementPage" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>AdminInventoryManagementPage functionality will be implemented here...</Typography>
            </Box>
        </ScreenTemplate >
    );
}