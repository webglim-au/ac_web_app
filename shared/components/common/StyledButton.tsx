import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

interface CustomButtonProps extends Omit<ButtonProps, "children"> {
    text: string;
    bgColor?: string;
    borderColor?: string;
    color?: string;
    disabled?: boolean;
    onClick?: () => void;
    startIcon?: React.ReactNode; // ✅ NEW
    fontWeight?: string | number;
    fontSize?: string | number;
    endIcon?: React.ReactNode; // ✅ NEW
    textAlign?: string;
    justifyContent?: string;
    hoverBgColor?: string;
}

const StyledButton = styled(Button, {
    shouldForwardProp: (prop) =>
        prop !== "bgColor" && prop !== "borderColor",
})<CustomButtonProps>(({ bgColor, borderColor, disabled, color, fontWeight, fontSize, hoverBgColor, textAlign, justifyContent }) => ({
    textTransform: "none",
    fontWeight: fontWeight ? fontWeight : 500,
    fontSize: fontSize ? fontSize : "14px",
    justifyContent: justifyContent ? justifyContent : "flex-start", // ✅ Align content left
    borderRadius: "4px",
    boxShadow: "none",
    textAlign: "left",
    backgroundColor: bgColor === "transparent" ? bgColor : disabled ? "#CBC8C8" : bgColor || "transparent",
    color: (bgColor === "transparent" && disabled) ? "#8C8C8D" : bgColor === "disabled" ? "#fff !important" : color ? color : "#000",
    border: borderColor ? `1px solid ${borderColor}` : "none",
    "&:hover": {
        backgroundColor: hoverBgColor ? hoverBgColor : disabled
            ? "#9e9e9e"
            : borderColor === "none" ? "transparent " : bgColor === "transparent" ? "transparent" : bgColor
                ? darkenColor(bgColor)
                : "transparent",
        boxShadow: "none",
    },
}));

// helper to darken hover color
const darkenColor = (color: string) => {
    try {
        let c = color.replace("#", "");
        if (c.length === 3) {
            c = c.split("").map((ch) => ch + ch).join("");
        }
        const num = parseInt(c, 16);
        const r = Math.max(0, (num >> 16) - 30);
        const g = Math.max(0, ((num >> 8) & 0x00ff) - 30);
        const b = Math.max(0, (num & 0x0000ff) - 30);
        return `rgb(${r},${g},${b})`;
    } catch {
        return color;
    }
};

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, startIcon, endIcon, ...props }) => {
    return (
        <StyledButton disableRipple onClick={onClick}
            startIcon={startIcon} // ✅ pass icon here
            endIcon={endIcon} // ✅ pass icon here
            {...props}>
            {text}
        </StyledButton>
    );
};

export default CustomButton;
