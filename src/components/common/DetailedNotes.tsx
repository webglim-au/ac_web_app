import React from 'react';

// Simple Material-UI-like components with sticky note styling
const Box = ({ children, sx = {}, display = "block", ...props }) => (
    <div style={{
        display,
        flexDirection: sx.flexDirection || 'row',
        justifyContent: sx.justifyContent || 'flex-start',
        textAlign: sx.textAlign || 'left',
        flexWrap: sx.flexWrap || 'nowrap',
        margin: sx.margin || '0',
        marginTop: sx.marginTop || '0',
        marginBottom: sx.marginBottom || '0',
        padding: sx.padding || '0',
        border: sx.border || 'none',
        borderRadius: sx.borderRadius || '0',
        ...sx
    }} {...props}>
        {children}
    </div>
);

const Typography = ({ children, flexWrap, style = {}, ...props }) => (
    <p style={{
        margin: '8px 0',
        flexWrap: flexWrap || 'nowrap',
        fontSize: '14px',
        lineHeight: '1.4',
        ...style
    }} {...props}>
        {children}
    </p>
);

const TextField = ({ placeholder, multiline, rows, fullWidth, ...props }) => (
    <textarea
        placeholder={placeholder}
        rows={rows || 1}
        style={{
            width: fullWidth ? '100%' : '300px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'inherit',
            fontSize: '14px',
            resize: 'vertical',
            minHeight: rows ? `${rows * 20}px` : 'auto',
            backgroundColor: 'white'
        }}
        {...props}
    />
);

// Styled NoteWrapper component matching your design
const NoteWrapper = ({ children, sx = {} }) => (
    <div style={{
        backgroundColor: "#FEF9C3", // Yellow-200
        borderRadius: "6px",
        padding: "16px",
        minHeight: "120px",
        borderLeft: "4px solid #FDE047", // Only yellow left border
        position: "relative",
        cursor: "default",
        transition: "all 0.2s ease",
        ...sx,
        ':hover': {
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            zIndex: 2,
        }
    }}
        onMouseEnter={(e) => {
            e.target.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
            e.target.style.zIndex = "2";
        }}
        onMouseLeave={(e) => {
            e.target.style.boxShadow = "none";
            e.target.style.zIndex = "1";
        }}
    >
        {children}
    </div>
);

export default function DetailedNotes() {
    const evaluationData = [
        {
            criteria: "Punctuality and reliability (Completion of set tasks on time)*",
            response: "Excellent"
        },
        {
            criteria: "Demonstrate respect for all (empathy)**",
            response: "Neutral"
        },
        {
            criteria: "Teamwork and Collaboration*",
            response: "Neutral"
        },
        {
            criteria: "Time management**",
            response: "Good"
        }
    ];

    return (
        <Box sx={{ display: "inline-block", margin: "8px" }}>
            <NoteWrapper>
                <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                    <Box display="flex" sx={{ flexDirection: "row", justifyContent: "space-between", gap: "20px" }}>

                        {/* First Column - Criteria (More space) */}
                        <Box sx={{ flexDirection: "column", justifyContent: "space-between", textAlign: "left", flex: 2 }}>
                            {evaluationData.map((item, index) => (
                                <Typography key={index}>{item.criteria}</Typography>
                            ))}
                        </Box>

                        {/* Second Column - Ratings */}
                        <Box sx={{ flexDirection: "column", justifyContent: "space-between", textAlign: "left", flex: 1 }}>
                            {evaluationData.map((item, index) => (
                                <Typography key={index}>{item.response}</Typography>
                            ))}
                        </Box>

                        {/* Third Column - Additional Info (More space) */}
                        <Box sx={{ flexDirection: "column", justifyContent: "space-between", textAlign: "left", flex: 2 }}>
                            <Box sx={{ flexDirection: "column", marginBottom: "20px" }}>
                                <Typography style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                                    Are you aware of any formal complaint, disciplinary or legal action against candidate*
                                </Typography>
                                <Typography style={{ marginLeft: '10px', color: '#666' }}>Yes</Typography>
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