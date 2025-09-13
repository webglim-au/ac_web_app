import { Box, Typography } from "@mui/material";
import HRScreenTemplate from "@components/HR/dashboard/HRScreenTemplate";
import ScreenHeading from "@components/common/ScreenHeading";


// FormsPage.tsx
export function FormsPage() {
    return (
        <HRScreenTemplate>
            <ScreenHeading title="Forms" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Forms functionality will be implemented here...</Typography>
            </Box>
        </HRScreenTemplate>
    );
}