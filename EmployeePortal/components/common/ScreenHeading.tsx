// ScreenHeading.tsx
import { Typography, TypographyProps } from "@mui/material";

interface ScreenHeadingProps extends Omit<TypographyProps, 'fontSize' | 'fontWeight' | 'align'> {
    title: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    align?: "left" | "center" | "right" | "justify";
}

export default function ScreenHeading({
    title,
    fontSize = "24px",
    fontWeight = "500",
    align = "left",
    mb = 1,
    ml = 2,
    ...props
}: ScreenHeadingProps) {
    return (
        <Typography
            fontSize={fontSize}
            fontWeight={fontWeight}
            align={align}
            mb={mb}
            ml={ml}
            sx={{
                marginLeft: "170px",
                "@media (max-width: 1210px)": {
                    marginLeft: "45px"
                }
            }}
            {...props}
        >
            {title}
        </Typography>
    );
}