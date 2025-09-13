import React from "react";
import { Box, Typography } from "@mui/material";

interface IconTextButtonProps {
    icon: React.ReactNode;
    text: string;
    disabled?: boolean;
    onClick?: () => void;
    color?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
}

const IconTextButton: React.FC<IconTextButtonProps> = ({
    icon,
    text,
    disabled = false,
    onClick,
    color,
    fontSize,
    fontWeight,
}) => {
    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            sx={{
                cursor: disabled ? "not-allowed" : "pointer",
                //  opacity: disabled ? 0.6 : 1,
                "&:hover": {
                    opacity: disabled ? 0.6 : 0.85,
                },
            }}
            onClick={!disabled ? onClick : undefined}
        >
            {icon}
            <Typography
                fontSize={fontSize ? fontSize : 16}
                fontWeight={fontWeight ? fontWeight : 500}
                color={disabled ? "#CBC8C8" : color ? color : "#747474"}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default IconTextButton;
