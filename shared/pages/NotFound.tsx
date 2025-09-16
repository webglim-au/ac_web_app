// src/pages/NotFound.tsx
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import notFoundStyles from "./NotFoundStyles";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Box sx={notFoundStyles.root}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                404
            </Typography>
            <Typography variant="h6" gutterBottom>
                Oops! The page you’re looking for doesn’t exist.
            </Typography>
            <Button
                variant="contained"
                sx={notFoundStyles.button}
                onClick={() => navigate("/")}
            >
                Go Back Home
            </Button>
        </Box>
    );
}
