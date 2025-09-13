import React from "react";
import { Chip, useTheme } from "@mui/material";

const StatusChip = ({ label, colorKey, border = false }: { label: string; colorKey: string, border?: boolean }) => {
    const theme = useTheme();

    return (
        <Chip
            label={label}
            sx={{
                backgroundColor: theme.palette.chipColors[colorKey]?.bg,
                color: theme.palette.chipColors[colorKey]?.text,
                borderColor: border ? `1px solid ${theme.palette.chipColors[colorKey]?.text}` : '1px solid transparent',
                fontWeight: 400,
                width: "fit-content",
            }}
        />
    );
};

export default StatusChip;
