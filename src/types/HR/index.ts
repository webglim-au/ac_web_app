export interface Applicant {
    id: number;
    ApplicationNo: string;
    Applicant: string;
    position: string;
    source: string;
    location: string;
    email: string;
    phone: string;
    experience: string;
    status: 'to send' | 'sent';
    appliedDate: string;
}

export interface SelectedApplicant extends Applicant {
    rowIndex: number;
}

export interface PrescreeningApplicant {
    id: number;
    ApplicationNo: string;
    Applicant: string;
    position: string;
    source: string;
    location: string;
    email: string;
    phone: string;
    experience: string;
    status: 'to send' | 'sent';
    appliedDate: string;
}

export interface SelectedApplicantPrescreening extends PrescreeningApplicant {
    rowIndex: number;
}
export interface NoteData {
    title: string;
    description: string;
}

export interface ApplicantDetailsProps {
    rowData: PrescreeningApplicant;
    rowIndex: number;
}

export interface ArchivedApplicant {
    id: number;
    ApplicationNo: string;
    Applicant: string;
    position: string;
    source: string;
    location: string;
    email: string;
    phone: string;
    experience: string;
    status: 'pending' | 'active' | 'inactive';
    actions: 'pending' | 'active' | 'inactive';
    appliedDate: string;
}
export 
interface ApplicantDetailsInterviewProps {
  rowData: any;
  rowIndex: number;
}

// Types
export interface Referee {
    id: string;
    name: string;
    title: string;
    company: string;
    phone: string;
    email: string;
    status: 'pending' | 'completed' | 'in-progress' | 'declined';
}

export interface ReferenceComponentApplicant {
    name: string;
    title: string;
    phone: string;
    email: string;
}

export interface RefereeItemProps {
    referee: Referee;
    index: number;
    selectedReference: string | null;
    onViewDetails: (referenceId: string) => void;
}