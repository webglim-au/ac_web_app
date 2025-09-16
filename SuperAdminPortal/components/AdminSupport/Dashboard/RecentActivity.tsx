// RecentActivity.tsx
import { Box, Typography, Card, CardContent, Chip } from "@mui/material";
import { RecentActivityProps, } from "shared/types/SuperAdmin";
import { defaultActivities } from "@utils/DummyData";
import styles from "./RecentActivityStyles";
import { getChipStyles } from "@utils/Constants";

export function RecentActivity({
    title = "Recent Activity",
    activities = defaultActivities,
    maxHeight = 500
}: RecentActivityProps) {

    const handleViewAllClick = () => {
        alert('View All clicked');
    };

    return (
        <Box sx={styles.container}>
            <Card sx={styles.card}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={styles.header}>
                        <Typography sx={styles.title}>
                            {title}
                        </Typography>
                        <Typography
                            sx={styles.viewAllButton}
                            onClick={handleViewAllClick}
                        >
                            View All
                        </Typography>
                    </Box>

                    <Box sx={{
                        ...styles.activitiesList,
                        maxHeight: maxHeight
                    }}>
                        {activities.length === 0 ? (
                            <Box sx={styles.emptyState}>
                                No recent activity to display
                            </Box>
                        ) : (
                            activities.map((activity) => (
                                <Box key={activity.id} sx={styles.activityItem}>
                                    <img
                                        src={activity.user.image || 'https://via.placeholder.com/40x40.png'}
                                        alt={activity.user.name}
                                        style={styles.userImage}
                                    />

                                    <Box sx={styles.activityContent} >
                                        <Typography sx={styles.userName}>
                                            {activity.action}
                                        </Typography>

                                        <Typography sx={styles.userDetails}>
                                            {activity.timestamp}
                                        </Typography>
                                    </Box>

                                    <Chip
                                        label={activity.chipLabel}
                                        sx={{
                                            ...styles.statusChip,
                                            ...getChipStyles(activity.chipType)
                                        }}
                                    />
                                </Box>
                            ))
                        )}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}