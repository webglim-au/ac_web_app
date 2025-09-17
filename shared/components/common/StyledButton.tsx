import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";
import type { Property } from "csstype";

interface CustomButtonProps extends Omit<ButtonProps, "color"> {
    text?: string;                          // optional text prop
    children?: React.ReactNode;             // allow children
    textColor?: string;                     // custom text color
    bgColor?: string;
    borderColor?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fontWeight?: string | number;
    fontSize?: string | number;
    textAlign?: Property.TextAlign;
    justifyContent?: Property.JustifyContent;
    hoverBgColor?: string;
}

const StyledButton = styled(Button, {
    shouldForwardProp: (prop) =>
        ![
            "bgColor",
            "borderColor",
            "hoverBgColor",
            "textColor",
            "textAlign",
            "justifyContent",
            "fontWeight",
            "fontSize",
        ].includes(prop as string),
})<CustomButtonProps>(
    ({
        bgColor,
        borderColor,
        disabled,
        textColor,
        fontWeight,
        fontSize,
        hoverBgColor,
        textAlign,
        justifyContent,
    }) => ({
        textTransform: "none",
        fontWeight: fontWeight ?? 500,
        fontSize: fontSize ?? "14px",
        justifyContent: justifyContent ?? "flex-start",
        borderRadius: "4px",
        boxShadow: "none",
        textAlign: textAlign ?? "left",
        backgroundColor:
            bgColor === "transparent"
                ? bgColor
                : disabled
                    ? "#CBC8C8"
                    : bgColor ?? "transparent",
        color:
            bgColor === "transparent" && disabled
                ? "#8C8C8D"
                : bgColor === "disabled"
                    ? "#fff !important"
                    : textColor ?? "#000",
        border: borderColor ? `1px solid ${borderColor}` : "none",
        "&:hover": {
            backgroundColor: hoverBgColor
                ? hoverBgColor
                : disabled
                    ? "#9e9e9e"
                    : borderColor === "none"
                        ? "transparent"
                        : bgColor === "transparent"
                            ? "transparent"
                            : bgColor
                                ? darkenColor(bgColor)
                                : "transparent",
            boxShadow: "none",
        },
    })
);

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

const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    children,
    onClick,
    startIcon,
    endIcon,
    ...props
}) => {
    return (
        <StyledButton
            disableRipple
            onClick={onClick}
            startIcon={startIcon}
            endIcon={endIcon}
            {...props}
        >
            {text ?? children}
        </StyledButton>
    );
};

export default CustomButton;
