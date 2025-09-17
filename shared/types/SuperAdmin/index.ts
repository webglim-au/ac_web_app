export interface QuickActionItem {
    icon: string;
    heading: string;
    subheading: string;
    onClick?: () => void;
    color?: string; // <-- NEW
}


export interface QuickActionsProps {
    title?: string;
    actions?: QuickActionItem[];
}
export type AlertSeverity = 'error' | 'warning' | 'success';
export interface SystemAlert {
    id: string;
    title: string;
    message: string;
    severity: AlertSeverity;
    timestamp: string;
    textHeadingColor: string;
    textMessageColor: string;
    textTimestampColor: string;
}

export interface SystemAlertsProps {
    title?: string;
    alerts?: SystemAlert[];
    onViewAll?: () => void;
    bgColor?: string;

}

export interface RoleDistribution {
    role: string;
    count: number;
    color: string;
}

export interface UserDistributionProps {
    title?: string;
    data?: RoleDistribution[];
}

export type ActivityType = 'login' | 'logout' | 'create' | 'update' | 'delete' | 'security' | 'settings';
export type ChipType = 'success' | 'warning' | 'error';

export interface ActivityItem {
    id: string;
    user: {
        name: string;
        avatar?: string;
        role: string;
        image?: string; // PNG image URL
    };
    action: string;
    type: ActivityType;
    timestamp: string;
    details?: string;
    chipType: ChipType;
    chipLabel: string;
}

export interface RecentActivityProps {
    title?: string;
    activities?: ActivityItem[];
    maxHeight?: number;
}

export interface UserFilters {
    searchTerm: string;
    roleFilter: string;
    statusFilter: string;
}

export interface UserTableProps {
    filters: UserFilters;
}

export interface RoleCardProps {
    icon: string;
    title: string;
    subtitle: string;
    totalUsers: number;
    permissions: string[];
    moreCount?: number;
    bgColor: string;
    color: string;
    border: string;
}
export interface RoleTabsProps {
    activeTab: number;
    handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
    defaultRolesCount: number;
    filteredCount: number;
}

export interface SearchFilterProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    statusFilter: string;
    setStatusFilter: (value: string) => void;
}
export interface TabContentProps {
    activeTab: number;
    defaultRoles: RoleCardProps[];
}