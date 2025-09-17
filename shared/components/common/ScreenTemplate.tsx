// DashboardScreen.tsx - Main screen layout component
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import { screenTemplateStyles } from "./ScreenTemplatesStyles";
import { AdminTopItems } from "@utils/sidebarMenuItems";
interface ScreenProps {
    children: ReactNode;

}

export default function ScreenTemplate({ children }: ScreenProps) {
    const theme = useTheme();

    return (
        <Box sx={screenTemplateStyles.root}>
            <Header />

            {/* Sidebar and Main Content Container */}
            <Box sx={screenTemplateStyles.screenBodyContainer}>
                <Sidebar topItems={AdminTopItems} />

                {/* Main Content */}
                <Box sx={screenTemplateStyles.screenMainContent(theme)}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}