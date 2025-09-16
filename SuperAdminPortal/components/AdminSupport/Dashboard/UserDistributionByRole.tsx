// UserDistributionByRole.tsx
import { Box, Typography, Card, CardContent } from "@mui/material";
import styles from "./UserDistributionByRoleStyles";
import { UserDistributionProps } from "shared/types/SuperAdmin";
import { defaultData } from "@utils/DummyData";

export function UserDistributionByRole({
    title = "User Distribution By Role",
    data = defaultData
}: UserDistributionProps) {

    return (
        <Box sx={styles.container}>
            <Card sx={styles.card}>
                <CardContent sx={styles.cardContent}>
                    <Typography sx={styles.title}>
                        {title}
                    </Typography>

                    <Box sx={styles.rolesList}>
                        {data.map((role, index) => (
                            <Box key={index} sx={styles.roleItem}>
                                <Box sx={styles.roleInfo}>
                                    <Box sx={styles.dot(role.color)} />
                                    <Typography sx={styles.roleName}>
                                        {role.role}
                                    </Typography>
                                </Box>

                                <Typography sx={styles.userCount}>
                                    {role.count} users
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}