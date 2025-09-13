import { Box, Typography } from "@mui/material";
import HRScreenTemplate from "@components/HR/dashboard/HRScreenTemplate";
import ScreenHeading from "@components/common/ScreenHeading";

// EmailPage.tsx
export function EmailPage() {
    return (
        <HRScreenTemplate>
            <ScreenHeading title="Email" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Email functionality will be implemented here...</Typography>
            </Box>
        </HRScreenTemplate>
    );
}