// ChatPage.tsx
import { Box, Typography } from "@mui/material";
import ScreenTemplate from "@sharedComponents/common/ScreenTemplate";
import ScreenHeading from "@sharedComponents/common/ScreenHeading";
import { HRTopItems, HRBottomItems } from "@utils/sidebarMenuItems";
// SettingsPage.tsx
export function SettingsPage() {
    return (
        <ScreenTemplate topItems={HRTopItems} bottomItems={HRBottomItems}>
            <ScreenHeading title="Settings" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Settings functionality will be implemented here...</Typography>
            </Box>
        </ScreenTemplate>
    );
}