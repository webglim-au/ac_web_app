// ChatPage.tsx
import { Box, Typography } from "@mui/material";
import ScreenTemplate from "@employeeComponents/common/ScreenTemplate";
import ScreenHeading from "@employeeComponents/common/ScreenHeading";
import { HRTopItems, HRBottomItems } from "@utils/sidebarMenuItems";

export function ChatPage() {
    return (
        <ScreenTemplate topItems={HRTopItems} bottomItems={HRBottomItems}>
            <ScreenHeading title="Chat" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Chat functionality will be implemented here...</Typography>
            </Box>
        </ScreenTemplate>
    );
}