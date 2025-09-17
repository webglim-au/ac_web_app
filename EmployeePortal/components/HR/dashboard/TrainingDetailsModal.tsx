import {
    Dialog,
    DialogContent,
    Button,
    Typography,
    Box,
    TextField,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";
import { trainingModalStyles } from "./TrainingDetailsModelStyles";

interface Training {
    date: string;
    title: string;
    time: string;
    location: string;
    trainer: string;
    description: string;
}

interface TrainingDetailsModalProps {
    open: boolean;
    onClose: () => void;
    training: Training | null;
}

interface FieldConfig {
    label: string;
    value: string;
    type?: 'text' | 'select';
    options?: { value: string; label: string }[];
    multiline?: boolean;
    rows?: number;
    fullWidth?: boolean;
}

export default function TrainingDetailsModal({
    open,
    onClose,
    training,
}: TrainingDetailsModalProps) {
    const fieldConfigs: FieldConfig[] = [
        { label: "Training Title", value: training?.title || "" },
        {
            label: "Training Type", value: "certification", type: "select", options: [
                { value: "certification", label: "Certification" },
                { value: "workshop", label: "Workshop" },
                { value: "seminar", label: "Seminar" }
            ]
        },
        { label: "Date", value: training?.date || "" },
        { label: "Duration", value: training?.time || "" },
        { label: "Location", value: training?.location || "" },
        { label: "Trainer", value: training?.trainer || "" },
        {
            label: "Status", value: "upcoming", type: "select", options: [
                { value: "upcoming", label: "Upcoming" },
                { value: "completed", label: "Completed" },
                { value: "cancelled", label: "Cancelled" }
            ]
        },
        { label: "Max Participants", value: "25" },
        { label: "Current Enrolled", value: "18" },
        {
            label: "Priority Level", value: "high", type: "select", options: [
                { value: "low", label: "Low" },
                { value: "medium", label: "Medium" },
                { value: "high", label: "High" }
            ]
        },
        { label: "Cost per Person", value: "$150" },
        {
            label: "Department", value: "safety", type: "select", options: [
                { value: "safety", label: "Safety" },
                { value: "hr", label: "Human Resources" },
                { value: "operations", label: "Operations" }
            ]
        },
        { label: "Prerequisites", value: "None" },
        { label: "Certification Valid", value: "2 Years" },
        { label: "Created By", value: "Admin User" },
        { label: "Created Date", value: "12 Mar 2024" },
        { label: "Description", value: training?.description || "", multiline: true, rows: 3, fullWidth: true },
    ];

    const renderField = (config: FieldConfig, index: number) => {
        const fieldStyle = config.fullWidth ? trainingModalStyles.descriptionField : trainingModalStyles.textField;

        return (
            <Box
                key={index}
                sx={{
                    width: config.fullWidth ? '100%' : '48%',
                    marginBottom: 2,
                    ...(config.fullWidth ? undefined : trainingModalStyles.fieldContainer)
                }}
            >
                <Typography variant="body2" sx={trainingModalStyles.fieldLabel}>
                    {config.label}
                </Typography>
                {config.type === "select" ? (
                    <FormControl sx={fieldStyle} size="small">
                        <Select value={config.value} displayEmpty>
                            {config.options?.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                ) : (
                    <TextField
                        sx={fieldStyle}
                        value={config.value}
                        variant="outlined"
                        size="small"
                        multiline={config.multiline}
                        rows={config.rows}
                        InputProps={{ readOnly: true }}
                    />
                )}
            </Box>
        );
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            {/* Header Section */}
            <Box sx={trainingModalStyles.header}>
                <Typography sx={trainingModalStyles.headerTitle}>
                    Training Details
                </Typography>
            </Box>

            <DialogContent sx={trainingModalStyles.dialogContent}>
                {/* Training Information Section */}
                <Box sx={trainingModalStyles.trainingInfoSection}>
                    <Typography variant="h6" sx={trainingModalStyles.sectionTitle}>
                        Training Information
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            gap: 1
                        }}
                    >
                        {fieldConfigs.map((config, index) => renderField(config, index))}
                    </Box>
                </Box>

                {/* Action Buttons */}
                <Box sx={trainingModalStyles.actionsContainer}>
                    <Button
                        onClick={onClose}
                        variant="outlined"
                        sx={trainingModalStyles.actionButton}
                    >
                        Close
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={trainingModalStyles.actionButton}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        sx={trainingModalStyles.actionButton}
                    >
                        Delete
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}