import React, { useState, useCallback, useMemo } from 'react';
import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    TextField,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    IconButton,
    Button,
    SelectChangeEvent
} from '@mui/material';
import {
    Close as CloseIcon,
} from '@mui/icons-material';
import AddNewUser from "@assets/icons/AddNewUserWhite.svg"
import AccountInfo from "@assets/icons/AccountInfo.svg"
import RolesAndPermissionsIcon from '@assets/icons/RolesAndPermissions.svg';
import AccountSettings from "@assets/icons/AccountSettings.svg";
import PersonalInfo from "@assets/icons/PersonalInfo.svg";
// Types
interface AdditionalPermissions {
    viewReports: boolean;
    exportData: boolean;
    manageUsers: boolean;
    systemSettings: boolean;
}

interface AccountSettings {
    sendWelcomeEmail: boolean;
    requirePasswordChange: boolean;
    enableTwoFactor: boolean;
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    username: string;
    department: string;
    jobTitle: string;
    primaryRole: string;
    additionalPermissions: AdditionalPermissions;
    accountStatus: string;
    accessLevel: string;
    accountSettings: AccountSettings;
}

interface AddNewUserModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit?: (userData: FormData) => void;
}

// Constants
const DEPARTMENTS = [
    'Administration',
    'Client Services',
    'Support',
    'Management'
] as const;

const PRIMARY_ROLES = [
    'Admin',
    'Client Coordinator',
    'Client Manager',
    'Support Worker'
] as const;

const ACCOUNT_STATUSES = [
    'Active',
    'Inactive',
    'Suspended'
] as const;

const ACCESS_LEVELS = [
    'Standard',
    'Limited',
    'Full'
] as const;

const INITIAL_FORM_DATA: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    username: '',
    department: '',
    jobTitle: '',
    primaryRole: '',
    additionalPermissions: {
        viewReports: false,
        exportData: false,
        manageUsers: false,
        systemSettings: false
    },
    accountStatus: 'Active',
    accessLevel: 'Standard',
    accountSettings: {
        sendWelcomeEmail: true,
        requirePasswordChange: false,
        enableTwoFactor: false
    }
};

// Styled components using sx prop patterns
const styles = {
    dialog: {
        borderRadius: 2,
        maxHeight: '90vh'
    },
    header: {
        p: 3,
        borderBottom: '1px solid #E5E7EB',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconContainer: {

        borderRadius: "8px",
        backgroundColor: '#6F2D7A',
        padding: "10px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionIcon: {
        color: '#6F2D7A',
        fontSize: 18
    },
    sectionTitle: {
        fontWeight: 400,
        fontSize: 18,
        color: '#111827'
    },
    modalTitle: {
        fontWeight: 400,
        fontSize: 20,
        color: '#111827'
    },
    modalSubheading: {
        fontWeight: 400,
        fontSize: 14,
        color: '#4B5563'
    },
    fieldRow: {
        display: 'flex',
        gap: 2,
        mb: 2
    },
    checkBoxRow: {
        display: 'flex',
        gap: 2,
        marginLeft: 1

    },
    footer: {
        p: 3,
        borderTop: '1px solid #E5E7EB',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cancelButton: {
        color: '#374151',
        borderColor: '#D1D5DB',
        '&:hover': {
            borderColor: '#9CA3AF',
            backgroundColor: '#F9FAFB'
        }
    },
    createButton: {
        backgroundColor: '#6F2D7A',
        '&:hover': {
            backgroundColor: '#5B2468'
        }
    }
} as const;

const AddNewUserModal: React.FC<AddNewUserModalProps> = ({
    open,
    onClose,
    onSubmit
}) => {
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

    // Memoized validation
    const isFormValid = useMemo(() => {
        const requiredFields = ['firstName', 'lastName', 'email', 'username', 'primaryRole'];
        return requiredFields.every(field =>
            formData[field as keyof FormData] &&
            String(formData[field as keyof FormData]).trim() !== ''
        );
    }, [formData]);

    // Optimized handlers with useCallback
    const handleInputChange = useCallback((field: keyof FormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(prev => ({
                ...prev,
                [field]: event.target.value
            }));
        }, []
    );

    const handleSelectChange = useCallback((field: keyof FormData) =>
        (event: SelectChangeEvent) => {
            setFormData(prev => ({
                ...prev,
                [field]: event.target.value
            }));
        }, []
    );

    const handleCheckboxChange = useCallback((
        section: 'additionalPermissions' | 'accountSettings',
        field: string
    ) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: event.target.checked
            }
        }));
    }, []);

    const handleSubmit = useCallback(() => {
        if (!isFormValid) return;

        onSubmit?.(formData);
        setFormData(INITIAL_FORM_DATA); // Reset form
        onClose();
    }, [formData, isFormValid, onSubmit, onClose]);

    const handleClose = useCallback(() => {
        setFormData(INITIAL_FORM_DATA); // Reset form on close
        onClose();
    }, [onClose]);

    // Render helper components
    const SectionHeader: React.FC<{ icon: any; title: string }> = ({ icon, title }) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Box component={"img"} src={icon} sx={styles.sectionIcon} />

            <Typography variant="h6" sx={styles.sectionTitle}>
                {title}
            </Typography>
        </Box>
    );

    const FormField: React.FC<{
        label: string;
        required?: boolean;
        children: React.ReactNode;
        fullWidth?: boolean;
    }> = ({ label, required = false, children, fullWidth = false }) => (
        <Box sx={fullWidth ? { mb: 2 } : { flex: 1 }}>
            <Typography fontWeight={400} fontSize={14} color={"#374151"} sx={{ mb: 0.5 }}>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </Typography>
            {children}
        </Box>
    );

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            PaperProps={{ sx: styles.dialog }}
        >
            <DialogContent sx={{ p: 0 }}>
                {/* Header */}
                <Box sx={styles.header}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box component={"img"} src={AddNewUser} sx={styles.iconContainer}>
                            {/* <AddNewUser sx={{ color: '#6B7280' }} /> */}
                        </Box>
                        <Box>
                            <Typography sx={styles.modalTitle}>
                                Add New User
                            </Typography>
                            <Typography sx={styles.modalSubheading}>
                                Create a new user account with role assignment
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton onClick={handleClose} sx={{ color: '#6B7280' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ p: 3 }}>
                    {/* Personal Information */}
                    <Box sx={{ mb: 4 }}>
                        <SectionHeader icon={PersonalInfo} title="Personal Information" />

                        <Box sx={styles.fieldRow}>
                            <FormField label="First Name" required>
                                <TextField
                                    fullWidth
                                    value={formData.firstName}
                                    onChange={handleInputChange('firstName')}
                                    placeholder="Enter first name"
                                    size="small"
                                />
                            </FormField>
                            <FormField label="Last Name" required>
                                <TextField
                                    fullWidth
                                    value={formData.lastName}
                                    onChange={handleInputChange('lastName')}
                                    placeholder="Enter last name"
                                    size="small"
                                />
                            </FormField>
                        </Box>

                        <FormField label="Email Address" required fullWidth>
                            <TextField
                                fullWidth
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange('email')}
                                placeholder="user@company.com"
                                size="small"
                            />
                        </FormField>

                        <FormField label="Phone Number" fullWidth>
                            <TextField
                                fullWidth
                                value={formData.phoneNumber}
                                onChange={handleInputChange('phoneNumber')}
                                placeholder="+61 4XX XXX XXX"
                                size="small"
                            />
                        </FormField>
                    </Box>

                    {/* Account Information */}
                    <Box sx={{ mb: 4 }}>
                        <SectionHeader icon={AccountInfo} title="Account Information" />

                        <Box sx={styles.fieldRow}>
                            <FormField label="Username" required>
                                <TextField
                                    fullWidth
                                    value={formData.username}
                                    onChange={handleInputChange('username')}
                                    placeholder="john.doe"
                                    size="small"
                                />
                            </FormField>
                            <FormField label="Department">
                                <Select
                                    fullWidth
                                    size="small"
                                    value={formData.department}
                                    onChange={handleSelectChange('department')}
                                    displayEmpty
                                >
                                    <MenuItem value="" disabled>
                                        <span style={{ color: '#9CA3AF' }}>Select department</span>
                                    </MenuItem>
                                    {DEPARTMENTS.map(dept => (
                                        <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                                    ))}
                                </Select>
                            </FormField>
                        </Box>

                        <FormField label="Job Title" fullWidth>
                            <TextField
                                fullWidth
                                value={formData.jobTitle}
                                onChange={handleInputChange('jobTitle')}
                                placeholder="e.g., Senior Client Manager"
                                size="small"
                            />
                        </FormField>
                    </Box>

                    {/* Roles and Permissions */}
                    <Box sx={{ mb: 4 }}>
                        <SectionHeader icon={RolesAndPermissionsIcon} title="Roles and Permissions" />

                        <FormField label="Primary Role" required fullWidth>
                            <Select
                                fullWidth
                                size="small"
                                value={formData.primaryRole}
                                onChange={handleSelectChange('primaryRole')}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    <span style={{ color: '#9CA3AF' }}>Select primary role</span>
                                </MenuItem>
                                {PRIMARY_ROLES.map(role => (
                                    <MenuItem key={role} value={role}>{role}</MenuItem>
                                ))}
                            </Select>
                            <Typography sx={{ color: '#6B7280', mt: 1, fontSize: 12, lineHeight: "16px" }}>
                                This determines the user's base permissions
                            </Typography>
                        </FormField>
                        {/* <Typography color='#374151' fontSize={14} fontWeight={400} mb={1}>Additional Permissions</Typography>
                      
                        {[
                            ['viewReports', 'ViewReports', 'exportData', 'Export Data'],
                            ['manageUsers', 'Manage Users', 'systemSettings', 'System Settings']
                        ].map((row, index) => (
                            <Box key={index} sx={styles.fieldRow}>

                                <Box sx={{ flex: 1, border: "1px solid #E5E7EB", borderRadius: "8px", paddingLeft: "8px", }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={formData.additionalPermissions[row[0] as keyof AdditionalPermissions]}
                                                onChange={handleCheckboxChange('additionalPermissions', row[0])}
                                                size="small"
                                            />
                                        }
                                        label={<Typography variant="body2">{row[1]}</Typography>}
                                    />
                                </Box>
                                {row[2] && (
                                    <Box sx={{ flex: 1, border: "1px solid #E5E7EB", borderRadius: "8px", paddingLeft: "8px", }}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={formData.additionalPermissions[row[2] as keyof AdditionalPermissions]}
                                                    onChange={handleCheckboxChange('additionalPermissions', row[2])}
                                                    size="small"
                                                />
                                            }
                                            label={<Typography variant="body2">{row[3]}</Typography>}
                                        />
                                    </Box>
                                )}
                            </Box>
                        ))} */}
                    </Box>

                    {/* Account Settings */}
                    <Box sx={{ mb: 4 }}>
                        <SectionHeader icon={AccountSettings} title="Account Settings" />

                        <Box sx={styles.fieldRow}>
                            <FormField label="Account Status">
                                <Select
                                    fullWidth
                                    size="small"
                                    value={formData.accountStatus}
                                    onChange={handleSelectChange('accountStatus')}
                                >
                                    {ACCOUNT_STATUSES.map(status => (
                                        <MenuItem key={status} value={status}>{status}</MenuItem>
                                    ))}
                                </Select>
                            </FormField>
                            <FormField label="Access Level">
                                <Select
                                    fullWidth
                                    size="small"
                                    value={formData.accessLevel}
                                    onChange={handleSelectChange('accessLevel')}
                                >
                                    {ACCESS_LEVELS.map(level => (
                                        <MenuItem key={level} value={level}>{level}</MenuItem>
                                    ))}
                                </Select>
                            </FormField>
                        </Box>

                        {/* Settings Checkboxes */}
                        {[
                            ['sendWelcomeEmail', 'Send welcome email to user'],
                            ['requirePasswordChange', 'Require password change on first login'],
                            ['enableTwoFactor', 'Enable two-factor authentication']
                        ].map(([key, label]) => (
                            <Box key={key} sx={styles.checkBoxRow}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.accountSettings[key as keyof AccountSettings]}
                                            onChange={handleCheckboxChange('accountSettings', key)}
                                            //size="small"
                                            sx={{
                                                // border: '0.5px solid black',
                                                borderRadius: '4px',
                                                padding: '3px',
                                                color: 'black', // base (unchecked) state
                                                '&.Mui-checked': {
                                                    color: 'black',        // tick color
                                                    backgroundColor: 'white', // keep background white
                                                    //border: '0.5px solid black'
                                                },
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 18, // optional: controls tick icon size
                                                }
                                            }}
                                        />

                                    }
                                    label={
                                        <Typography
                                            sx={{
                                                color: '#374151',
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                marginLeft: 1,
                                            }}
                                        >
                                            {label}
                                        </Typography>
                                    }
                                />

                            </Box>
                        ))}

                    </Box>
                </Box>

                {/* Footer */}
                <Box sx={styles.footer}>
                    <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.875rem' }}>
                        Fields marked with <span style={{ color: 'red' }}>*</span> are required
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={handleClose}
                            sx={styles.cancelButton}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={!isFormValid}
                            sx={styles.createButton}
                        >
                            Create User
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddNewUserModal;