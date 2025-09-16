export const HR_REC_JOB_APP_TABLE_COLUMNS = [
    { id: 'ApplicationNo', label: 'Application No.' },
    { id: 'appliedDate', label: 'Date' },
    { id: 'source', label: 'Source' },
    { id: 'Applicant', label: 'Applicant' },
    { id: 'position', label: 'Position Applied' },
    { id: 'experience', label: 'Experience' },
    { id: 'location', label: 'Location' },
    { id: 'status', label: 'Actions' }
] as const;

export const HR_REC_ARCHIVED_TABLE_COLUMNS = [
    { id: 'ApplicationNo', label: 'Application No.' },
    { id: 'appliedDate', label: 'Date' },
    { id: 'source', label: 'Source' },
    { id: 'Applicant', label: 'Applicant' },
    { id: 'position', label: 'Position Applied' },
    { id: 'experience', label: 'Experience' },
    { id: 'location', label: 'Location' },
    { id: 'actions', label: 'Status' },
    { id: 'status', label: 'Actions' }
] as const;


export const ADMIN_DASHBOARD_COLUMNS = [
    { id: 'timestamp', label: 'Timestamp' },
{ id: 'participantName', label: 'Participant Name/Purpose' },
    { id: 'visitorName', label: 'Visitor Full Name' },
    { id: 'contactNumber', label: 'Contact Number' },
    { id: 'relationship', label: 'Relationship' },
    { id: 'purpose', label: 'Purpose of Visit' },
    { id: 'actions', label: 'Actions' },
] as const;