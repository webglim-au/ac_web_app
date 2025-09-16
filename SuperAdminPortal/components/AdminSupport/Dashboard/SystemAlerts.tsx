// SystemAlerts.tsx
import { Box, Typography, Card, CardContent } from "@mui/material";
import styles from "./SystemAlertsStyles";
import { SystemAlertsProps } from "shared/types/SuperAdmin";
import { defaultAlerts } from "@utils/DummyData";
import { getAlertBackgroundColor, getAlertBorderColor, getAlertColor, getAlertIcon } from "@utils/Constants";

export function SystemAlerts({
    title = "System Alerts",
    alerts = defaultAlerts,
    onViewAll,
    bgColor = '#ffffff',

}: SystemAlertsProps) {

    const handleViewAll = () => {
        if (onViewAll) {
            onViewAll();
        } else {
            alert('Viewing all system alerts...');
        }
    };

    return (
        <Box sx={styles.container}>
            <Card sx={styles.card(bgColor)}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={styles.header}>
                        <Typography sx={styles.title}>
                            {title}
                        </Typography>
                        <Typography
                            sx={styles.viewAllButton}
                            onClick={handleViewAll}
                        >
                            View All
                        </Typography>
                    </Box>

                    <Box sx={styles.alertsList}>
                        {alerts.length === 0 ? (
                            <Box sx={styles.emptyState}>
                                No system alerts at this time
                            </Box>
                        ) : (
                            alerts.map((alert) => (
                                <Box
                                    key={alert.id}
                                    sx={styles.alertItem(getAlertBackgroundColor(alert.severity), getAlertBorderColor(alert.severity))}
                                >
                                    <Box
                                        sx={{
                                            ...styles.alertIconContainer,
                                            backgroundColor: getAlertBorderColor(alert.severity),
                                            color: getAlertColor(alert.severity)
                                        }}
                                    >

                                        <Box src={getAlertIcon(alert.severity)} component="img" />

                                    </Box>

                                    <Box sx={styles.alertContent}>
                                        <Typography sx={styles.alertTitle(alert.textHeadingColor)}>
                                            {alert.title}
                                        </Typography>
                                        <Typography sx={styles.alertMessage(alert.textMessageColor)}>
                                            {alert.message}
                                        </Typography>
                                        <Typography sx={styles.alertTimestamp(alert.textTimestampColor)}>
                                            {alert.timestamp}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        )}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}