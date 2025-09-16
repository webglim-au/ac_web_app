import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import CorrectImage from "@assets/images/Correct.png";
import IncorrectImage from "@assets/images/Incorrect.png";
import styles from "@sharedPages/Auth/AuthStatusPageStyles"
import { AuthStatusPageProps } from "../../types/Auth"
const AuthStatusPage = ({
    status,

}: AuthStatusPageProps) => {
    const navigate = useNavigate();
    return (
        <Box sx={styles.container}>
            {/* Status Image */}
            <Box
                component="img"
                src={status ? CorrectImage : IncorrectImage}
                alt={status ? "Success" : "Error"}
                sx={styles.image}
            />

            {/* Status Heading */}
            <Typography
                sx={styles.heading}
            >
                {status ? "Password Successfully Updated!" : "Password Recovery Failed!"}
            </Typography>

            {/* Action Button */}
            <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/login")}
                sx={styles.button}
            >
                {status ? "Back to Login" : "Try Again"}
            </Button>
        </Box>
    );
};

export default AuthStatusPage;