// DashboardPage.tsx
import { Box, useTheme } from "@mui/material";
import ScreenTemplate from "@employeeComponents/common/ScreenTemplate";
import CalendarWithTasks from "@employeeComponents/HR/dashboard/CalendarWithTasks";
import UpcomingTrainings from "@employeeComponents/HR/dashboard/UpcomingTrainings";
import DashboardCards from "@employeeComponents/HR/dashboard/DashboardCards";
import { dashboardStyles } from "@employeePages/HR/DashboardStyles";
import ScreenHeading from "@sharedComponents/common/ScreenHeading";
import { HRTopItems, HRBottomItems } from "@utils/sidebarMenuItems";
export function DashboardPage() {
    const theme = useTheme();
    return (
        <ScreenTemplate topItems={HRTopItems} bottomItems={HRBottomItems}>


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
        </ScreenTemplate>
    );
}