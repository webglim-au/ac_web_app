// DashboardPage.tsx
import { Box, useTheme } from "@mui/material";
import HRScreenTemplate from "@components/HR/dashboard/HRScreenTemplate";
import CalendarWithTasks from "@components/HR/dashboard/CalendarWithTasks";
import UpcomingTrainings from "@components/HR/dashboard/UpcomingTrainings";
import DashboardCards from "@components/HR/dashboard/DashboardCards";
import { dashboardStyles } from "@pages/HR/DashboardStyles";
import ScreenHeading from "@components/common/ScreenHeading";

export default function DashboardPage() {
    const theme = useTheme();
    return (
        <HRScreenTemplate>
            {/* Dashboard Title */}
            <ScreenHeading
                title="Dashboard"
                sx={{
                    marginLeft: "170px",
                    "@media (max-width: 1210px)": {
                        marginLeft: "45px"
                    }
                }}
            />

            {/* Rest of your code remains the same */}
            <Box sx={dashboardStyles.bodyContainer(theme)}>
                <Box sx={dashboardStyles.mainContent(theme)}>
                    <DashboardCards />
                    <Box sx={dashboardStyles.contentSection}>
                        <UpcomingTrainings />
                    </Box>
                </Box>
                <Box sx={dashboardStyles.calendarContainer}>
                    <CalendarWithTasks />
                </Box>
            </Box>
        </HRScreenTemplate>
    );
}