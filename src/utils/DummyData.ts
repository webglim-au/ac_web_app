import { Applicant, PrescreeningApplicant,ArchivedApplicant} from '../types/HR';
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
