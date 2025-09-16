// Sidebar.tsx
import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
    SxProps,
    Theme,

} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { sidebarStyles } from "./SideBarStyles";
import { MenuItem } from "../../../shared/types/common/index"

interface SidebarProps {
    topItems: MenuItem[];
    bottomItems: MenuItem[];
}

export default function Sidebar({ topItems, bottomItems }: SidebarProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:1210px)");

    const getSelectedItemFromPath = (pathname: string) => {
        const allItems = [...topItems, ...bottomItems];
        const foundItem = allItems.find(item => item.path === pathname);
        return foundItem ? foundItem.text : "Dashboard";
    };

    const [selected, setSelected] = useState<string>(
        getSelectedItemFromPath(location.pathname)
    );

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
        if (item.path) {
            navigate(item.path);
        }
    };

    const renderMenu = (items: MenuItem[]) =>
        items.map(item => {
            const isSelected = selected === item.text;
            return (
                <ListItem
                    key={item.text}
                    button
                    onClick={() => handleItemClick(item)}
                    sx={sidebarStyles.menuItem(isSelected, isSmallScreen)}
                >
                    <ListItemIcon sx={sidebarStyles.menuIcon(isSelected)}>
                        {React.createElement(item.icon, {
                            color: isSelected ? "#6F2D7A" : "white"
                        })}
                    </ListItemIcon>
                    {!isSmallScreen && (
                        <ListItemText
                            primary={item.text}
                            primaryTypographyProps={sidebarStyles.menuText(
                                isSelected,
                                isSmallScreen
                            )}
                        />
                    )}
                </ListItem>
            );
        });

    return (
        <Box sx={sidebarStylesRoot(theme)}>
            <List>{renderMenu(topItems)}</List>
            <Box>
                <List>{renderMenu(bottomItems)}</List>
            </Box>
        </Box>
    );
}
