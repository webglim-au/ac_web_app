// AdminDashboardPage.tsx
import { Box } from "@mui/material";
import ScreenTemplate from "@sharedComponents/common/ScreenTemplate";
import { StatsCard } from "@adminComponents/AdminSupport/Dashboard/StatsCardsAdmin";
import { QuickActions } from "@adminComponents/AdminSupport/Dashboard/QuickActions";
import { SystemAlerts } from "@adminComponents/AdminSupport/Dashboard/SystemAlerts";
import { UserDistributionByRole } from "@adminComponents/AdminSupport/Dashboard/UserDistributionByRole";
import { RecentActivity } from "@adminComponents/AdminSupport/Dashboard/RecentActivity";
import { statsCards } from "@utils/Constants";
import styles from "./AdminDashboardPageStyles";

export function AdminDashboardPage() {
    return (
        <ScreenTemplate>
            <Box sx={styles.pageContainer}>
                {/* Stats Cards Row */}
                <Box sx={styles.cardsContainer}>
                    <Box sx={styles.cardsWrapper}>
                        {statsCards.map((card, index) => (
                            <StatsCard
                                key={index}
                                title={card.title}
                                value={card.value}
                                label={card.label}
                                icon={card.icon}
                                color={card.color}
                                bgColor={card.bgColor}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Quick Actions Section */}
                <QuickActions
                    title="Quick Actions"

                />

                {/* Two Column Row: System Alerts & User Distribution */}
                <Box sx={styles.twoColumnRow}>
                    <Box sx={styles.columnHalf}>
                        <SystemAlerts
                            title="System Alerts"

                        />
                    </Box>
                    <Box sx={styles.columnHalf}>
                        <UserDistributionByRole
                            title="User Distribution By Role"
                        />
                    </Box>
                </Box>

                {/* Full Width Row: Recent Activity */}
                <RecentActivity
                    title="Recent Activity"
                    maxHeight={400}
                />
            </Box>
        </ScreenTemplate>
    );
}