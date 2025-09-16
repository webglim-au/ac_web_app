import { TextField, } from "@mui/material";
import { styled } from "@mui/material/styles";
// Styled components - moved outside to prevent recreation
const BorderlessTextFieldPrescreening = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        border: "none",
        "& fieldset": { border: "none" },
        "&:hover fieldset": { border: "none" },
        "&.Mui-focused fieldset": { border: "none" },
        backgroundColor: "white",
    },
    "& .MuiInputBase-input": {
        fontSize: "14px",
        padding: "8px 8px",
    },
    "& input[type='date']::-webkit-calendar-picker-indicator, \
     & input[type='time']::-webkit-calendar-picker-indicator": {
        opacity: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        right: 0,
        cursor: "pointer",
    },
});

export default BorderlessTextFieldPrescreening;