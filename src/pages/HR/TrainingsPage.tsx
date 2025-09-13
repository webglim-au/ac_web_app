import { Box, Typography } from "@mui/material";
import HRScreenTemplate from "@components/HR/dashboard/HRScreenTemplate";
import ScreenHeading from "@components/common/ScreenHeading";


// TrainingsPage.tsx
export function TrainingsPage() {
    return (
        <HRScreenTemplate>
            <ScreenHeading title="Trainings" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Training management functionality will be implemented here...</Typography>
            </Box>
        </HRScreenTemplate>
    );
}