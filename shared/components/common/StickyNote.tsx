import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const StickyNoteWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "#FEF9c3", // Yellow-200
    borderRadius: "6px",
    padding: "16px",
    minHeight: "120px",
    position: "relative",
    transform: "rotate(-0.5deg)", // Slight tilt for realistic look
    transition: "all 0.3s ease",
    cursor: "text",
    borderLeft: "4px solid #FDE047", // Only yellow left border

    "&:hover": {
        transform: "rotate(0deg) scale(1.02)",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        zIndex: 2,
    },

    [theme.breakpoints.down("sm")]: {
        padding: "12px",
        minHeight: "100px",
        transform: "rotate(0deg)",
        "&:hover": {
            transform: "scale(1.01)",
        },
    },
}));

const TransparentTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        border: "none",
        padding: 0,
        background: "transparent",
        "& fieldset": { border: "none" },
        "&:hover fieldset": { border: "none" },
        "&.Mui-focused fieldset": { border: "none" },
    },
    "& .MuiInputBase-input": {
        fontFamily: "inherit",
        backgroundColor: "transparent",
        fontSize: "14px",
        fontWeight: 400,
        color: "black",
        lineHeight: 1.5,
        padding: 0,
    },
});

const TransparentTitleField = styled(TransparentTextField)({
    "& .MuiInputBase-input": {
        fontSize: "16px",
        fontWeight: 600,
        color: "#7f7c61", // dark yellow/brown
        marginBottom: "8px",
    },
});

export default function StickyNote({
    title,
    description,
    onChange,
    sx = {},
    variant = "default",
}) {
    const getVariantStyles = () => {
        switch (variant) {
            case "large":
                return {
                    padding: "24px",
                    minHeight: "160px",
                    "& input": { fontSize: "18px" },
                    "& textarea": { fontSize: "16px" },
                };
            case "small":
                return {
                    padding: "12px",
                    minHeight: "80px",
                    "& input": { fontSize: "14px" },
                    "& textarea": { fontSize: "12px" },
                };
            default:
                return {};
        }
    };

    return (
        <Box sx={{ margin: "8px" }}>
            <StickyNoteWrapper sx={{ ...getVariantStyles(), ...sx }}>
                <TransparentTitleField
                    fullWidth
                    placeholder="Add a title..."
                    value={title}
                    onChange={(e) =>
                        onChange({ title: e.target.value, description })
                    }
                    variant="outlined"
                    InputProps={{ disableUnderline: true }}
                />
                <TransparentTextField
                    fullWidth
                    placeholder="Add a description..."
                    value={description}
                    onChange={(e) =>
                        onChange({ title, description: e.target.value })
                    }
                    variant="outlined"
                    multiline
                    minRows={2}
                    InputProps={{ disableUnderline: true }}
                />
            </StickyNoteWrapper>
        </Box>
    );
}

