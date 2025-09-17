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
    ListItemButton,
    SxProps,
    Theme,

} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { sidebarStyles } from "./SideBarStyles";
import { MenuItem } from "shared/types/common"

interface SidebarProps {
    topItems: MenuItem[];
    bottomItems?: MenuItem[];
}

export default function Sidebar({ topItems, bottomItems }: SidebarProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:1210px)");

    const getSelectedItemFromPath = (pathname: string) => {
        const allItems = bottomItems ? [...topItems, ...bottomItems] : [...topItems];
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
            backgroundColor: "white",
            color: "#6F2D7A",
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
                    disablePadding

                    sx={sidebarStyles.menuItem(isSelected, isSmallScreen)}
                >
                    <ListItemButton onClick={() => handleItemClick(item)}>
                        <ListItemIcon sx={sidebarStyles.menuIcon(isSelected)}>
                            {
                                isSelected ? React.createElement(item.icon, {
                                    color: "white"
                                }) : React.createElement(item.icon, {
                                    color: "#4B5563"
                                })
                            }

                        </ListItemIcon>
                        {!isSmallScreen && (
                            <ListItemText
                                primary={item.text}
                                sx={sidebarStyles.menuText(
                                    isSelected,
                                    isSmallScreen
                                )}
                            />
                        )}
                    </ListItemButton>
                </ListItem>
            );
        });

    return (
        <Box sx={sidebarStylesRoot(theme)}>
            <List>{renderMenu(topItems)}</List>
            {
                bottomItems && <Box>
                    <List>{renderMenu(bottomItems)}</List>
                </Box>
            }

        </Box>
    );
}
