// ChatPage.tsx
import { Box, Typography } from "@mui/material";
import HRScreenTemplate from "@components/HR/dashboard/HRScreenTemplate";
import ScreenHeading from "@components/common/ScreenHeading";

export function ChatPage() {
    return (
        <HRScreenTemplate>
            <ScreenHeading title="Chat" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Chat functionality will be implemented here...</Typography>
            </Box>
        </HRScreenTemplate>
    );
}