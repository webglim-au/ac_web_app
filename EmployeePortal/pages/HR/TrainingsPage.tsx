import { Box, Typography } from "@mui/material";
import ScreenTemplate from "@sharedComponents/common/ScreenTemplate";
import ScreenHeading from "@sharedComponents/common/ScreenHeading";
import { HRTopItems, HRBottomItems } from "@utils/sidebarMenuItems";

// TrainingsPage.tsx
export function TrainingsPage() {
    return (
        <ScreenTemplate >
            <ScreenHeading title="Trainings" />
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2, m: 2 }}>
                <Typography>Training management functionality will be implemented here...</Typography>
            </Box>
        </ScreenTemplate>
    );
}