import { Box, Card, CardContent, Typography } from "@mui/material";
import Alerts from "@assets/icons/alerts.svg";
import Leave from "@assets/icons/leave.svg";
import Staff from "@assets/icons/staff.svg";
import Upcoming from "@assets/icons/upcoming.svg";
import { styles } from "./DashboardCardsStyles";


export default function DashboardCards() {
    const cardData = [
        { title: "Total Staff", value: 150, svg: Staff, color: "#DBEAFE", borderColor: "#E5E7EB" },
        { title: "Leave Requests", value: 3, svg: Leave, color: "#DCFCE7", borderColor: "#E5E7EB" },
        { title: "Upcoming Trainings", value: 15, svg: Upcoming, color: '#FEF9C3', borderColor: "#E5E7EB" },
        { title: "Alerts", value: 13, svg: Alerts, color: '#F3E8FF', borderColor: "#E5E7EB" },
    ];

    return (
        <Box sx={styles.container}>
            {cardData.map((item) => (
                <Card key={item.title} sx={styles.card}>
                    <CardContent>
                        <Box sx={styles.cardHeader}>
                            <Typography sx={styles.cardTitle}>
                                {item.title}
                            </Typography>
                            <Box sx={styles.iconContainer(item.color, item.borderColor)}>
                                <Box
                                    src={item.svg}
                                    alt={`${item.title} icon`}
                                    sx={styles.icon}
                                    component={"img"}
                                />
                            </Box>
                        </Box>
                        <Typography sx={styles.cardValue}>
                            {item.value}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}