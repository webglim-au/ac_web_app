import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../shared/assets/images/Logo.png";
import styles from "./DashboardAccessStyles";
import { dashboardsRoutes } from "@utils/Constants"

export default function DashboardAccess() {
    const navigate = useNavigate();

    return (
        <Box sx={styles.root}>
            {/* Header */}
            <Box sx={styles.header}>
                <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    sx={styles.logo}
                    onClick={() => navigate("/")}
                />
            </Box>

            {/* Main Content */}
            <Box sx={styles.main}>
                <Box sx={styles.contentWrapper}>
                    <Typography sx={styles.title}>NDIS CRM DASHBOARD ACCESS</Typography>

                    {/* Flex container for 2 per row */}
                    <Box sx={styles.cardContainer}>
                        {dashboardsRoutes.map((item) => (
                            <Box key={item.title} sx={styles.cardBox}>
                                <Card sx={styles.card}>
                                    <CardActionArea onClick={() => navigate(item.path)}>
                                        <CardContent>
                                            <Typography sx={styles.cardText}>{item.title}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Footer */}
            <Box sx={styles.footer}>{/* Empty for now */}</Box>
        </Box>
    );
}
