import {
    Box,
    TextField,
    Typography,
    useTheme,
    IconButton,
    Menu,
    MenuItem,
    Divider,
} from "@mui/material";
import { Logo } from "@sharedComponents/common/Logo";
import { Search } from "@mui/icons-material";
import Notifications from "@assets/icons/HeaderNotification.svg";
import HeaderArrow from "@assets/icons/headerArrow.svg";
import { headerStyles } from "./HeaderStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path: string) => {
        handleCloseMenu();
        navigate(path);
    };

    return (
        <>
            <Box sx={headerStyles.root(theme)}>
                {/* Logo */}
                <Box sx={headerStyles.logoContainer}>
                    <Logo height={50} />
                </Box>

                {/* Desktop Search */}
                <Box sx={headerStyles.searchContainer}>
                    <TextField
                        placeholder="Search here"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <Box sx={headerStyles.searchButton}>
                                    <Search sx={headerStyles.searchIcon} />
                                </Box>
                            ),
                        }}
                        sx={headerStyles.searchField}
                    />
                </Box>

                {/* User Section */}
                <Box sx={headerStyles.userSection}>
                    <Box sx={headerStyles.userContainer}>
                        {/* Mobile Search Icon */}
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
                            <IconButton onClick={() => setShowMobileSearch(true)}>
                                <Search sx={{ fontSize: 24, color: "#6F2D7A" }} />
                            </IconButton>
                        </Box>

                        {/* Notification */}
                        <Box
                            src={Notifications}
                            component="img"
                            sx={headerStyles.notificationIcon}
                        />

                        {/* Inline name + role (sm+) */}
                        <Box
                            sx={{
                                ...headerStyles.userInfo,
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            <Typography sx={headerStyles.userName}>
                                Hi, Olivia Rhye
                            </Typography>
                            <Typography sx={headerStyles.userRole}>HR Manager</Typography>
                        </Box>

                        {/* Dropdown Arrow */}
                        <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                            <Box
                                src={HeaderArrow}
                                component="img"
                                sx={headerStyles.dropdownArrow}
                            />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* Mobile Search Overlay */}
            {showMobileSearch && (
                <Box sx={headerStyles.mobileSearchOverlay}>
                    <TextField
                        autoFocus
                        placeholder="Search here"
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <Box
                                    sx={headerStyles.searchButton}
                                    onClick={() => setShowMobileSearch(false)}
                                >
                                    <Search sx={headerStyles.searchIcon} />
                                </Box>
                            ),
                        }}
                    />
                </Box>
            )}

            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
                {/* User info (xs only) */}
                <MenuItem disabled sx={{ display: "flex" }}>
                    <Box>
                        <Typography sx={headerStyles.userName}>Hi, Olivia Rhye</Typography>
                        <Typography sx={headerStyles.userRole}>HR Manager</Typography>
                    </Box>
                </MenuItem>

                <Divider />

                {/* Settings */}
                <MenuItem onClick={() => handleNavigate("/settings")}>
                    Settings
                </MenuItem>

                {/* Logout */}
                <MenuItem onClick={() => handleNavigate("/logout")}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}
