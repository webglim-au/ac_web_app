import TotalUsersSVG from "@assets/icons/TotalUsersSVG.svg";
import ActiveRolesSVG from "@assets/icons/ActiveRolesSVG.svg";
import RecentErrorsSVG from "@assets/icons/RecentErrorsSVG.svg";
import ActiveUsersSVG from "@assets/icons/ActiveUsersSVG.svg"
import ErrorIcon from "@assets/icons/ErrorIcon.svg";
import WarningError from "@assets/icons/WarningError.svg";
import SuccessIcon from "@assets/icons/SuccessIcon.svg";
import {  AlertSeverity, ChipType } from "shared/types/SuperAdmin";
export const statsCards = [
    {
        title: "Total Users",
        value: "2847",
        label: "+12% from last month",
        icon: TotalUsersSVG,
        color: "#10B981",
        bgColor: "#6F2D7A1A"
        , trend: "up"
    },
    {
        title: "Active Roles",
        value: "47",
        label: "- No Change",
        icon: ActiveRolesSVG,
        color: "#6B7280",
        bgColor: "#10B9811A"
    },
    {
        title: "Recent Errors",
        value: "3",
        label: "+5 from yesterday",
        icon: RecentErrorsSVG,
        color: "#EF4444",
        bgColor: "#EF44441A",
        trend: "up"
    },
    {
        title: "Active users",
        value: "15",
        label: "✓ All systems operational",
        icon: ActiveUsersSVG,
        color: "#10B981",
        bgColor: "#10B9811A"
    }
];
export 
const PRESCREENING_STATUSES = [
    { label: "Police Clearance | Willing to obtain", colorKey: "mustard" as const },
    { label: "NDIS Screening", colorKey: "maroon" as const },
    { label: "Unrestricted Driving License", colorKey: "purple" as const }
];
// Skills and documents data
export const skillsData = [
    { label: "Police Check", colorKey: "purple" },
    { label: "WWCC", colorKey: "purple" },
    { label: "WWCC Screening", colorKey: "purple" },
    { label: "Unrestricted Driving License", colorKey: "purple" },
  ];
  
  export 
  const documentsData = [
    { label: "Resume", colorKey: "green" },
    { label: "Portfolio", colorKey: "grey" },
    { label: "References", colorKey: "grey" },
  ];

  export const dashboardsRoutes = [
    { title: "CEO Dashboard", path: "/login" },
    { title: "Director’s Dashboard", path: "/director/dashboard" },
    { title: "HR Manager Dashboard", path: "/hr/dashboard" },
    { title: "Admin Dashboard", path: "/admin/dashboard" },
    { title: "Accounts Dashboard", path: "/accounts/dashboard" },
    { title: "Client Service Manager", path: "/client-service/dashboard/" },
    { title: "Business Development Manager", path: "/business-dev/dashboard" },
    { title: "Client Coordinator", path: "/client-coordinator/dashboard/" },
];


// severity helpers
export const getAlertIcon = (severity: AlertSeverity) => {
    switch (severity) {
        case 'error': return ErrorIcon;
        case 'warning': return WarningError;
        case 'success': return SuccessIcon;
        //  case 'info': return <InfoIcon />;
        default: return SuccessIcon;
    }
};

export const getAlertColor = (severity: AlertSeverity) => {
    switch (severity) {
        case 'error': return '#DC2626';
        case 'warning': return '#CA8A04 ';
        case 'success': return '#16A34A';

        default: return '#2196f3';
    }
};

export const getAlertBackgroundColor = (severity: AlertSeverity) => {
    switch (severity) {
        case 'error': return '#FEF2F2';
        case 'warning': return '#FEFCE8';
        case 'success': return '#F0FDF4';

        default: return '#e3f2fd';
    }
};

export  const getAlertBorderColor = (severity: AlertSeverity) => {
    switch (severity) {
        case 'error': return '#FEE2E2';
        case 'warning': return '#FEF9C3';
        case 'success': return '#DCFCE7';

        default: return '#e3f2fd';
    }
};

export const getChipStyles = (chipType: ChipType) => {
    switch (chipType) {
        case 'success':
            return {
                color: '#10B981',
                backgroundColor: '#10B9811A',
                fontSize: '12px'
            };
        case 'warning':
            return {
                color: '#F59E0B',
                backgroundColor: '#F59E0B1A',
                fontSize: '12px'
            };
        case 'error':
            return {
                color: '#EF4444',
                backgroundColor: '#EF44441A',
                fontSize: '12px'
            };
        default:
            return {
                color: '#10B981',
                backgroundColor: '#10B9811A',
                fontSize: '12px'
            };
    }
};
export const getRoleChipColor = (role: string) => {
    switch (role) {
        case 'Client Client Coordinator': return { backgroundColor: '#DBEAFE', color: '#1E40AF' };
        case 'Client Coordinator': return { backgroundColor: '#F3E8FF', color: '#6B21A8' };
        case 'Admin': return { backgroundColor: '#FEE2E2', color: '#991B1B' };
        case 'Support Worker': return { backgroundColor: '#DCFCE7', color: '#166534' };
        default: return { backgroundColor: 'gray', color: 'white' };
    }
};

export const getStatusChipColor = (status: string) => {
    switch (status) {
        case 'Active': return { backgroundColor: '#DCFCE7', color: '#166534' };
        case 'Away': return { backgroundColor: '#FEF9C3', color: '#854D0E' };
        case 'Suspended': return { backgroundColor: '#FEE2E2', color: '#991B1B' };
        default: return { backgroundColor: 'gray', color: 'white' };
    }
};