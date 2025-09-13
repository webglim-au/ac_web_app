// Updated Sidebar.tsx with responsive text hiding
import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
    SxProps, Theme
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from "@components/common/IconComponents/DashboardIcon";
import ChatIcon from "@components/common/IconComponents/ChatIcon";
import EmailIcon from "@components/common/IconComponents/EmailIcon";
import RecruitmentIcon from "@components/common/IconComponents/RecruitmentIcon";
import PropertyInspectionIcon from "@components/common/IconComponents/PropertyInspectionIcon";
import StaffManagementIcon from "@components/common/IconComponents/StaffManagementIcon";
import TrainingsIcon from "@components/common/IconComponents/TrainingsIcon";
import FormsIcon from "@components/common/IconComponents/FormsIcon";
import SettingsIcon from "@components/common/IconComponents/SettingsIcon";
import LogoutIcon from "@components/common/IconComponents/LogoutIcon";
import { sidebarStyles } from "./SideBarStyles";

interface MenuItem {
    text: string;
    icon: any;
    path?: string;
}

const topItems: MenuItem[] = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Chat", icon: <ChatIcon />, path: "/chat" },
    { text: "Email", icon: <EmailIcon />, path: "/email" },
    { text: "Recruitment", icon: <RecruitmentIcon />, path: "/recruitment" },
    { text: "Trainings", icon: <TrainingsIcon />, path: "/trainings" },
    { text: "Staff Management", icon: <StaffManagementIcon />, path: "/staff-management" },
    { text: "Property Inspection", icon: <PropertyInspectionIcon />, path: "/property-inspection" },
    { text: "Forms", icon: <FormsIcon />, path: "/forms" },
];

const bottomItems: MenuItem[] = [
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { text: "Logout", icon: <LogoutIcon /> },
];

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    // Check if screen width is 1210px or less
    const isSmallScreen = useMediaQuery('(max-width:1210px)');

    const getSelectedItemFromPath = (pathname: string) => {
        const allItems = [...topItems, ...bottomItems];
        const foundItem = allItems.find(item => item.path === pathname);
        return foundItem ? foundItem.text : "Dashboard";
    };

    const [selected, setSelected] = useState<string>(getSelectedItemFromPath(location.pathname));
    const sidebarStylesRoot = (theme: Theme): SxProps<Theme> => {
        const calcHeight = window.innerHeight - 89;
        const height = calcHeight > 300 ? `calc(100vh - 89px)` : "300px";

        return {
            width: isSmallScreen ? 80 : 320,
            flexShrink: 0,
            height,
            backgroundColor: "primary.main",
            color: "white",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "width 0.3s ease",
            position: "fixed",
            top: 89,
            zIndex: 1200

        };
    };
    const handleItemClick = (item: MenuItem) => {
        setSelected(item.text);
        console.log("item", item)
        if (item.text === "Logout") {
            console.log("Logging out...");
            return;
        }

        if (item.path) {
            navigate(item.path);
        }
    };

    const renderMenu = (items: MenuItem[]) =>
        items.map((item) => {
            const isSelected = selected === item.text;
            return (
                <ListItem
                    key={item.text}
                    button
                    onClick={() => handleItemClick(item)}
                    sx={sidebarStyles.menuItem(isSelected, isSmallScreen)}
                >
                    <ListItemIcon sx={sidebarStyles.menuIcon(isSelected)}>
                        {React.cloneElement(item.icon, {
                            color: isSelected ? "#6F2D7A" : "white",
                        })}
                    </ListItemIcon>

                    {/* Hide text on small screens */}
                    {!isSmallScreen && (
                        <ListItemText
                            primary={item.text}
                            primaryTypographyProps={sidebarStyles.menuText(isSelected, isSmallScreen)}
                        />
                    )}
                </ListItem>
            );
        });

    return (
        <Box sx={sidebarStylesRoot(theme)}>
            {/* Top Menu Items */}
            <List>{renderMenu(topItems)}</List>

            {/* Bottom Menu Items */}
            <Box>
                <List>{renderMenu(bottomItems)}</List>
            </Box>
        </Box>
    );
}