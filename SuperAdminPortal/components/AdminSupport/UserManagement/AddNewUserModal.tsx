import React, { useState } from 'react';
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
    Grid
} from '@mui/material';
import {
    Close as CloseIcon,
    Person as PersonIcon,
    AccountCircle as AccountIcon,
    Security as SecurityIcon,
    Settings as SettingsIcon
} from '@mui/icons-material';

interface AddNewUserModalProps {
    open: boolean;
    onClose: () => void;
}

const AddNewUserModal: React.FC<AddNewUserModalProps> = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        username: '',
        department: '',
        jobTitle: '',
        primaryRole: '',
        additionalPermissions: {
            canCreateReports: false,
            canManageClients: false,
            canAccessBilling: false,
            canModifySettings: false
        },
        accountStatus: 'Active',
        accessLevel: 'Standard',
        accountSettings: {
            sendWelcomeEmail: true,
            requirePasswordChange: false,
            enableTwoFactor: false
        }
    });

    const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    };

    const handleSelectChange = (field: string) => (event: any) => {
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    };

    const handleCheckboxChange = (section: string, field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [section]: {
                ...(formData[section as keyof typeof formData] as any),
                [field]: event.target.checked
            }
        });
    };

    const handleSubmit = () => {
        console.log('User data:', formData);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    maxHeight: '90vh'
                }
            }}
        >
            <DialogContent sx={{ p: 0 }}>
                {/* Header */}
                <Box sx={{
                    p: 3,
                    borderBottom: '1px solid #E5E7EB',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 1,
                            backgroundColor: '#F3F4F6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <PersonIcon sx={{ color: '#6B7280' }} />
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
                                Add New User
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#6B7280' }}>
                                Create a new user account with roles and permissions
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton onClick={onClose} sx={{ color: '#6B7280' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ p: 3 }}>
                    {/* Personal Information */}
                    <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <PersonIcon sx={{ color: '#6F2D7A', fontSize: 20 }} />
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
                                Personal Information
                            </Typography>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>First Name *</Typography>
                                <TextField
                                    fullWidth
                                    value={formData.firstName}
                                    onChange={handleInputChange('firstName')}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Last Name *</Typography>
                                <TextField
                                    fullWidth
                                    value={formData.lastName}
                                    onChange={handleInputChange('lastName')}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Email *</Typography>
                                <TextField
                                    fullWidth
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange('email')}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Phone Number</Typography>
                                <TextField
                                    fullWidth
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange('phoneNumber')}
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Account Information */}
                    <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <AccountIcon sx={{ color: '#6F2D7A', fontSize: 20 }} />
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
                                Account Information
                            </Typography>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Username *</Typography>
                                <TextField
                                    fullWidth
                                    value={formData.username}
                                    onChange={handleInputChange('username')}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Department</Typography>
                                <Select
                                    fullWidth
                                    size="small"
                                    value={formData.department}
                                    onChange={handleSelectChange('department')}
                                >
                                    <MenuItem value="Administration">Administration</MenuItem>
                                    <MenuItem value="Client Services">Client Services</MenuItem>
                                    <MenuItem value="Support">Support</MenuItem>
                                    <MenuItem value="Management">Management</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Job Title</Typography>
                                <TextField
                                    fullWidth
                                    value={formData.jobTitle}
                                    onChange={handleInputChange('jobTitle')}
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Roles and Permissions */}
                    <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <SecurityIcon sx={{ color: '#6F2D7A', fontSize: 20 }} />
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
                                Roles and Permissions
                            </Typography>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>Primary Role *</Typography>
                                <Select
                                    fullWidth
                                    size="small"
                                    value={formData.primaryRole}
                                    onChange={handleSelectChange('primaryRole')}
                                >
                                    <MenuItem value="Admin">Admin</MenuItem>
                                    <MenuItem value="Client Coordinator">Client Coordinator</MenuItem>
                                    <MenuItem value="Client Manager">Client Manager</MenuItem>
                                    <MenuItem value="Support Worker">Support Worker</MenuItem>
                                </Select>
                                <Typography variant="body2" sx={{ color: '#6B7280', mt: 1 }}>
                                    Note: This determines the user's base permissions
                                </Typography>
                            </Grid>
                        </Grid>

                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#111827', mt: 3, mb: 2 }}>
                            Additional Permissions
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.additionalPermissions.canCreateReports}
                                            onChange={handleCheckboxChange('additionalPermissions', 'canCreateReports')}
                                            size="small"
                                        />
                                    }
                                    label={<Typography variant="body2">Can Create Reports</Typography>}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.additionalPermissions.canManageClients}
                                            onChange={handleCheckboxChange('additionalPermissions', 'canManageClients')}
                                            size="small"
                                        />
                                    }
                                    label={<Typography variant="body2">Can Manage Clients</Typography>}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.additionalPermissions.canAccessBilling}
                                            onChange={handleCheckboxChange('additionalPermissions', 'canAccessBilling')}
                                            size="small"
                                        />
                                    }
                                    label={<Typography variant="body2">Can Access Billing</Typography>}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.additionalPermissions.canModifySettings}
                                            onChange={handleCheckboxChange('additionalPermissions', 'canModifySettings')}
                                            size="small"
                                        />
                                    }
                                    label={<Typography variant="body2">Can Modify Settings</Typography>}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                {/* Footer */}
                <Box sx={{
                    p: 3,
                    borderTop: '1px solid #E5E7EB',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.875rem' }}>
                        * Fields marked with * are required
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={onClose}
                            sx={{
                                color: '#374151',
                                borderColor: '#D1D5DB',
                                '&:hover': {
                                    borderColor: '#9CA3AF',
                                    backgroundColor: '#F9FAFB'
                                }
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{
                                backgroundColor: '#6F2D7A',
                                '&:hover': {
                                    backgroundColor: '#5B2468'
                                }
                            }}
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
