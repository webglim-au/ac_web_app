import { RoleDistribution, SystemAlert,ActivityItem} from "shared/types/SuperAdmin";
import img from "@assets/images/img.png";
export const defaultAlerts: SystemAlert[] = [
    {
        id: '1',
        title: 'Authentication Error',
        message: 'Multiple failed login attempts detected',
        severity: 'error',
        timestamp: '2 minutes ago',
        textHeadingColor: "#7F1D1D",
        textMessageColor: "#B91C1C",
        textTimestampColor: "#DC2626"
    },
    {
        id: '2',
        title: 'Backup Complete',
        message: 'Database response time increased',
        severity: 'success',
        timestamp: '4 hours ago',



        textHeadingColor: "#14532D",
        textMessageColor: "#15803D",
        textTimestampColor: "#16A34A",
    },
    {
        id: '3',
        title: 'Performance Warning',
        message: 'Daily system backup successful',
        severity: 'warning',
        timestamp: '6 hours ago',
        textHeadingColor: "#713F12",
        textMessageColor: "#A16207",
        textTimestampColor: "#CA8A04"

    },
];
export const defaultData: RoleDistribution[] = [
    {
        role: 'Admin',
        count: 234,
        color: '#6F2D7A'
    },
    {
        role: 'Manager',
        count: 24,
        color: '#10B981'
    },
    {
        role: 'Employee',
        count: 34,
        color: '#F59E0B'
    }
];



export const defaultActivities: ActivityItem[] = [
    {
        id: '1',
        user: {
            name: 'John Doe',
            role: 'Admin',
            avatar: 'JD',
            image: img,
        },
        action: 'Created new user account',
        type: 'create',
        timestamp: '2 minutes ago',
        details: 'User: jane.smith@company.com',
        chipType: 'success',
        chipLabel: 'Completed'
    },
    {
        id: '2',
        user: {
            name: 'Sarah Wilson',
            role: 'Manager',
            avatar: 'SW',
            image: img,
        },
        action: 'Updated user permissions',
        type: 'update',
        timestamp: '15 minutes ago',
        details: 'Modified role: Employee → Manager',
        chipType: 'warning',
        chipLabel: 'Pending'
    },
    {
        id: '3',
        user: {
            name: 'Mike Johnson',
            role: 'Employee',
            avatar: 'MJ',
            image: img,
        },
        action: 'Logged into system',
        type: 'login',
        timestamp: '32 minutes ago',
        details: 'IP: 192.168.1.105',
        chipType: 'error',
        chipLabel: 'Active'
    },

];

// Sample data
export const mockUsersManagement = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@company.com',
        role: 'Client Client Coordinator',
        lastLogin: '2 minutes ago',
        status: 'Active',
        image: img,
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.johnson@company.com',
        role: 'Client Coordinator',
        lastLogin: '1 hour ago',
        status: 'Active',
        image: img,
    },
    {
        id: 3,
        name: 'Mike Chen',
        email: 'mike.chen@company.com',
        role: 'Admin',
        lastLogin: '3 days ago',
        status: 'Away',
        image: img,
    },
    {
        id: 4,
        name: 'Emily Rodriguez',
        email: 'emily.rodriguez@company.com',
        role: 'Support Worker',
        lastLogin: '1 week ago',
        status: 'Suspended',
        image: img,
    },
    {
        id: 5,
        name: 'David Wilson',
        email: 'david.wilson@company.com',
        role: 'Client Coordinator',
        lastLogin: '5 minutes ago',
        status: 'Active',
        image: img,
    }
];


import { Applicant, PrescreeningApplicant,ArchivedApplicant} from '@shared/types/HR';
export const INITIAL_APPLICATIONS_DATA: Applicant[] = [
    {
        id: 1,
        ApplicationNo: '234',
        Applicant: "John Doe",
        position: 'Software Engineer',
        source: "LinkedIn",
        location: "Adelaide",
        email: 'john.doe@email.com',
        phone: '+1 234-567-8900',
        experience: "5 Years",
        status: 'to send',
        appliedDate: '2024-01-15'
    },
    {
        id: 2,
        ApplicationNo: '123',
        Applicant: "Jane Smith",
        position: 'Product Manager',
        location: "Adelaide",
        email: 'jane.smith@email.com',
        phone: '+1 234-567-8901',
        experience: "5 Years",
        source: "Company Website",
        status: 'to send',
        appliedDate: '2024-01-14'
    },
    {
        id: 3,
        ApplicationNo: '675',
        Applicant: "Mike Johnson",
        position: 'UX Designer',
        email: 'mike.johnson@email.com',
        phone: '+1 234-567-8902',
        status: 'sent',
        experience: "5 Years",
        source: "LinkedIn",
        location: "Adelaide",
        appliedDate: '2024-01-13'
    },
    {
        id: 4,
        ApplicationNo: '176',
        position: 'Data Analyst',
        Applicant: "Sarah Wilson",
        location: "Adelaide",
        email: 'sarah.wilson@email.com',
        phone: '+1 234-567-8903',
        source: "LinkedIn",
        experience: "5 Years",
        status: 'to send',
        appliedDate: '2024-01-12'
    },
    {
        id: 5,
        ApplicationNo: '876',
        Applicant: "David Brown",
        position: 'Software Engineer',
        email: 'david.brown@email.com',
        phone: '+1 234-567-8904',
        status: 'sent',
        source: "LinkedIn",
        experience: "5 Years",
        location: "Adelaide",
        appliedDate: '2024-01-11'
    }
];

export const INITIAL_PRESCREENING_DATA: PrescreeningApplicant[] = [
    {
        id: 1,
        ApplicationNo: '432',
        Applicant: "John Doe",
        position: 'Software Engineer',
        source: "LinkedIn",
        location: "Adelaide",
        email: 'john.doe@email.com',
        phone: '+1 234-567-8900',
        experience: "5 Years",
        status: 'to send',
        appliedDate: '2024-01-15'
    },
    {
        id: 2,
        ApplicationNo: '231',
        Applicant: "Jane Smith",
        position: 'Product Manager',
        location: "Adelaide",
        email: 'jane.smith@email.com',
        phone: '+1 234-567-8901',
        experience: "3 Years",
        source: "Company Website",
        status: 'to send',
        appliedDate: '2024-01-14'
    },
    {
        id: 3,
        ApplicationNo: '546',
        Applicant: "Mike Johnson",
        position: 'UX Designer',
        email: 'mike.johnson@email.com',
        phone: '+1 234-567-8902',
        status: 'sent',
        experience: "4 Years",
        source: "LinkedIn",
        location: "Adelaide",
        appliedDate: '2024-01-13'
    },
    {
        id: 4,
        ApplicationNo: '547',
        position: 'Data Analyst',
        Applicant: "Sarah Wilson",
        location: "Adelaide",
        email: 'sarah.wilson@email.com',
        phone: '+1 234-567-8903',
        source: "LinkedIn",
        experience: "2 Years",
        status: 'to send',
        appliedDate: '2024-01-12'
    },
    {
        id: 5,
        ApplicationNo: '987',
        Applicant: "David Brown",
        position: 'Software Engineer',
        email: 'david.brown@email.com',
        phone: '+1 234-567-8904',
        status: 'sent',
        source: "LinkedIn",
        experience: "6 Years",
        location: "Adelaide",
        appliedDate: '2024-01-11'
    }
];

// Constants - moved outside component to prevent recreation
export const INITIAL_ARCHIVED_DATA: ArchivedApplicant[] = [
    {
        id: 1,
        ApplicationNo: '142',
        Applicant: "John Doe",
        position: 'Software Engineer',
        source: "LinkedIn",
        location: "Adelaide",
        email: 'john.doe@email.com',
        phone: '+1 234-567-8900',
        experience: "5 Years",
        status: 'pending',
        actions: 'pending',
        appliedDate: '2024-01-15'
    },
    {
        id: 2,
        ApplicationNo: '165',
        Applicant: "Jane Smith",
        position: 'Product Manager',
        location: "Adelaide",
        email: 'jane.smith@email.com',
        phone: '+1 234-567-8901',
        experience: "3 Years",
        source: "Company Website",
        status: 'active',
        actions: 'active',
        appliedDate: '2024-01-14'
    },
    {
        id: 3,
        ApplicationNo: '342',
        Applicant: "Mike Johnson",
        position: 'UX Designer',
        email: 'mike.johnson@email.com',
        phone: '+1 234-567-8902',
        status: 'inactive',
        actions: 'inactive',
        experience: "4 Years",
        source: "LinkedIn",
        location: "Adelaide",
        appliedDate: '2024-01-13'
    },
];

export const INITIAL_INTERVIEW_DATA = [
    {
      id: 1,
      ApplicationNo: '439',
      Applicant: "John Doe",
      position: 'Software Engineer',
      source: "LinkedIn",
      location: "Adelaide",
      email: 'john.doe@email.com',
      phone: '+1 234-567-8900',
      experience: "5 Years",
      status: 'to send',
      appliedDate: '2024-01-15'
    },
    {
      id: 2,
      ApplicationNo: '543',
      Applicant: "Jane Smith",
      position: 'Product Manager',
      location: "Adelaide",
      email: 'jane.smith@email.com',
      phone: '+1 234-567-8901',
      experience: "3 Years",
      source: "Company Website",
      status: 'to send',
      appliedDate: '2024-01-14'
    },
    {
      id: 3,
      ApplicationNo: '418',
      Applicant: "Mike Johnson",
      position: 'UX Designer',
      email: 'mike.johnson@email.com',
      phone: '+1 234-567-8902',
      status: 'sent',
      experience: "4 Years",
      source: "LinkedIn",
      location: "Adelaide",
      appliedDate: '2024-01-13'
    },
    {
      id: 4,
      ApplicationNo: '431',
      position: 'Data Analyst',
      Applicant: "Sarah Wilson",
      location: "Adelaide",
      email: 'sarah.wilson@email.com',
      phone: '+1 234-567-8903',
      source: "LinkedIn",
      experience: "2 Years",
      status: 'to send',
      appliedDate: '2024-01-12'
    },
    {
      id: 5,
      ApplicationNo: '432',
      Applicant: "David Brown",
      position: 'Software Engineer',
      email: 'david.brown@email.com',
      phone: '+1 234-567-8904',
      status: 'sent',
      source: "LinkedIn",
      experience: "6 Years",
      location: "Adelaide",
      appliedDate: '2024-01-11'
    }
  ];
