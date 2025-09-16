// AdminTasksPage.tsx
import { Box, Typography } from "@mui/material";
import ScreenTemplate from "@sharedComponents/common/ScreenTemplate";
import ScreenHeading from "@sharedComponents/common/ScreenHeading";

export function AdminTasksPage() {
    return (
        <ScreenTemplate>
            <ScreenHeading title="AdminTasksPage" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>AdminTasksPage functionality will be implemented here...</Typography>
            </Box>
        </ScreenTemplate >
    );
}