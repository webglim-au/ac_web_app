// ChatPage.tsx
import { Box, Typography } from "@mui/material";
import HRScreenTemplate from "@components/HR/dashboard/HRScreenTemplate";
import ScreenHeading from "@components/common/ScreenHeading";

// SettingsPage.tsx
export function SettingsPage() {
    return (
        <HRScreenTemplate>
            <ScreenHeading title="Settings" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Settings functionality will be implemented here...</Typography>
            </Box>
        </HRScreenTemplate>
    );
}