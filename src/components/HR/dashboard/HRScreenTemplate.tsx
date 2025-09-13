// DashboardScreen.tsx - Main screen layout component
import { Box, useTheme } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import { dashboardStyles } from "@pages/HR/DashboardStyles";


interface DashboardScreenProps {
    children: ReactNode;
}

export default function DashboardScreen({ children }: DashboardScreenProps) {
    const theme = useTheme();


    return (
        <Box sx={dashboardStyles.root}>
            <Header />

            {/* Sidebar and Main Content Container */}
            <Box sx={dashboardStyles.screenBodyContainer}>
                <Sidebar />

                {/* Main Content */}
                <Box sx={dashboardStyles.screenMainContent(theme)}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}