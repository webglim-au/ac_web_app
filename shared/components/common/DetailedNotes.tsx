import React, { CSSProperties, ReactNode } from "react";

// --------------------
// Props Interfaces
// --------------------
interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    sx?: CSSProperties;
    display?: CSSProperties["display"];
}

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    flexWrap?: CSSProperties["flexWrap"];
    style?: CSSProperties;
}

interface TextFieldProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    multiline?: boolean;
    rows?: number;
    fullWidth?: boolean;
}

interface NoteWrapperProps {
    children: ReactNode;
    sx?: CSSProperties;
}

// --------------------
// Components
// --------------------
const Box = ({ children, sx = {}, display = "block", ...props }: BoxProps) => (
    <div
        style={{
            display,
            ...sx,
        }}
        {...props}
    >
        {children}
    </div>
);

const Typography = ({
    children,
    flexWrap = "nowrap",
    style = {},
    ...props
}: TypographyProps) => (
    <p
        style={{
            margin: "8px 0",
            flexWrap,
            fontSize: "14px",
            lineHeight: "1.4",
            ...style,
        }}
        {...props}
    >
        {children}
    </p>
);

const TextField = ({
    placeholder,
    multiline,
    rows = 1,
    fullWidth,
    ...props
}: TextFieldProps) => (
    <textarea
        placeholder={placeholder}
        rows={rows}
        style={{
            width: fullWidth ? "100%" : "300px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontFamily: "inherit",
            fontSize: "14px",
            resize: "vertical",
            minHeight: rows ? `${rows * 20}px` : "auto",
            backgroundColor: "white",
        }}
        {...props}
    />
);

const NoteWrapper = ({ children, sx = {} }: NoteWrapperProps) => (
    <div
        style={{
            backgroundColor: "#FEF9C3", // Yellow-200
            borderRadius: "6px",
            padding: "16px",
            minHeight: "120px",
            borderLeft: "4px solid #FDE047", // Yellow left border
            position: "relative",
            cursor: "default",
            transition: "all 0.2s ease",
            ...sx,
        }}
        onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
            el.style.zIndex = "2";
        }}
        onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.boxShadow = "none";
            el.style.zIndex = "1";
        }}
    >
        {children}
    </div>
);

// --------------------
// Main Component
// --------------------
export default function DetailedNotes() {
    const evaluationData = [
        {
            criteria: "Punctuality and reliability (Completion of set tasks on time)*",
            response: "Excellent",
        },
        {
            criteria: "Demonstrate respect for all (empathy)**",
            response: "Neutral",
        },
        {
            criteria: "Teamwork and Collaboration*",
            response: "Neutral",
        },
        {
            criteria: "Time management**",
            response: "Good",
        },
    ];

    return (
        <Box sx={{ display: "inline-block", margin: "8px" }}>
            <NoteWrapper>
                <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                    <Box
                        display="flex"
                        sx={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            gap: "20px",
                        }}
                    >
                        {/* First Column - Criteria */}
                        <Box
                            sx={{
                                flexDirection: "column",
                                justifyContent: "space-between",
                                textAlign: "left",
                                flex: 2,
                            }}
                        >
                            {evaluationData.map((item, index) => (
                                <Typography key={index}>{item.criteria}</Typography>
                            ))}
                        </Box>

                        {/* Second Column - Ratings */}
                        <Box
                            sx={{
                                flexDirection: "column",
                                justifyContent: "space-between",
                                textAlign: "left",
                                flex: 1,
                            }}
                        >
                            {evaluationData.map((item, index) => (
                                <Typography key={index}>{item.response}</Typography>
                            ))}
                        </Box>

                        {/* Third Column - Additional Info */}
                        <Box
                            sx={{
                                flexDirection: "column",
                                justifyContent: "space-between",
                                textAlign: "left",
                                flex: 2,
                            }}
                        >
                            <Box sx={{ flexDirection: "column", marginBottom: "20px" }}>
                                <Typography
                                    style={{ marginBottom: "10px", fontWeight: "bold" }}
                                >
                                    Are you aware of any formal complaint, disciplinary or legal
                                    action against candidate*
                                </Typography>
                                <Typography style={{ marginLeft: "10px", color: "#666" }}>
                                    Yes
                                </Typography>
                            </Box>

                            <Box>
                                <Typography>Comments *</Typography>
                                <TextField
                                    multiline
                                    rows={4}
                                    fullWidth
                                    placeholder="Please add comments about the candidate's performance, specific examples, areas for improvement, or any additional observations..."
                                />
                            </Box>
                        </Box>
                    </Box>
                </div>
            </NoteWrapper>
        </Box>
    );
}
