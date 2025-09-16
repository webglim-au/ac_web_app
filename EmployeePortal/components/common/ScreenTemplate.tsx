// DashboardScreen.tsx - Main screen layout component
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import { screenTemplateStyles } from "./ScreenTemplatesStyles";
import { MenuItem } from "../../../shared/types/common";
interface ScreenProps {
    children: ReactNode;
    topItems: MenuItem[];
    bottomItems: MenuItem[];
}

export default function ScreenTemplate({ children, topItems, bottomItems }: ScreenProps) {
    const theme = useTheme();

    return (
        <Box sx={screenTemplateStyles.root}>
            <Header />

            {/* Sidebar and Main Content Container */}
            <Box sx={screenTemplateStyles.screenBodyContainer}>
                <Sidebar topItems={topItems} bottomItems={bottomItems} />

                {/* Main Content */}
                <Box sx={screenTemplateStyles.screenMainContent(theme)}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}