// StatsCard.tsx
import { Box, Typography, Card, CardContent } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material"; // ✅ trend icons

import styles from "./StatsCardsAdminStyles";
interface StatsCardProps {
    title: string;
    value: string;
    label: string;
    icon: string;
    color: string;
    bgColor: string;
    trend?: "up" | "down"; // optional prop
}

export function StatsCard({ title, value, label, icon, color, bgColor, trend }: StatsCardProps) {
    return (
        <Box sx={styles.cardContainer}>
            <Card sx={styles.card}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={styles.mainContent}>
                        {/* Left side: Title, Value, Label */}
                        <Box sx={styles.textContent}>
                            <Typography fontSize={14} align="left" color="#6B7280">
                                {title}
                            </Typography>

                            <Typography fontWeight={400} align="left" fontSize={30} sx={styles.value}>
                                {value}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                {trend === "up" && <ArrowDropUp sx={{ color: "green", fontSize: 32 }} />}
                                {trend === "down" && <ArrowDropDown sx={{ color: "red", fontSize: 32 }} />}
                                <Typography fontSize={14} align="left" fontWeight={400} sx={styles.label(color)}>
                                    {label}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Right side: Centered Icon */}
                        <Box sx={styles.iconContainer(bgColor)}>
                            <Box src={icon} component="img" sx={styles.icon} />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
