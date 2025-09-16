import DashboardIcon from "@sharedComponents/common/IconComponents/DashboardIcon";
import ChatIcon from "@sharedComponents/common/IconComponents/ChatIcon";
import InventoryManagementIcon from "@sharedComponents/common/IconComponents/InventroyManagementIcon";
import EmailIcon from "@sharedComponents/common/IconComponents/EmailIcon";
import RecruitmentIcon from "@sharedComponents/common/IconComponents/RecruitmentIcon";
import PropertyInspectionIcon from "@sharedComponents/common/IconComponents/PropertyInspectionIcon";
import StaffManagementIcon from "@sharedComponents/common/IconComponents/StaffManagementIcon";
import TrainingsIcon from "@sharedComponents/common/IconComponents/TrainingsIcon";
import FormsIcon from "@sharedComponents/common/IconComponents/FormsIcon";
import SettingsIcon from "@sharedComponents/common/IconComponents/SettingsIcon";
import LogoutIcon from "@sharedComponents/common/IconComponents/LogoutIcon";
import MaintenanceRequestIcon from "@sharedComponents/common/IconComponents/MaintainenceRequestIcon";
import SiteConcernsIcon from "@sharedComponents/common/IconComponents/SiteConcernsIcon";
import RolesAndPermissionsIcon from "@sharedComponents/common/IconComponents/RolesAndPermissions";
import { MenuItem } from "shared/types/common";
export const AdminTopItems: MenuItem[] = [
  { text: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { text: "User Management", icon: StaffManagementIcon, path: "/user-management" },
  { text: "Roles & Permission", icon: RolesAndPermissionsIcon, path: "/roles" },
  { text: "Feature Permission", icon: InventoryManagementIcon, path: "/feature-permission" },
  { text: "Error Logs & Monitoring", icon: SiteConcernsIcon, path: "/logs" },
  { text: "Feature Usage Logs", icon: MaintenanceRequestIcon, path: "/feature-usage" },
];

// HR Sidebar Items
export const HRTopItems: MenuItem[] = [
  { text: "Dashboard", icon: DashboardIcon, path: "/hr/dashboard" },
  { text: "Chat", icon: ChatIcon, path: "/hr/chat" },
  { text: "Email", icon: EmailIcon, path: "/hr/email" },
  { text: "Recruitment", icon: RecruitmentIcon, path: "/hr/recruitment" },
  { text: "Trainings", icon: TrainingsIcon, path: "/hr/trainings" },
  { text: "Staff Management", icon: StaffManagementIcon, path: "/hr/staff-management" },
  { text: "Property Inspection", icon: PropertyInspectionIcon, path: "/hr/property-inspection" },
  { text: "Forms", icon: FormsIcon, path: "/hr/forms" },
];

export const HRBottomItems: MenuItem[] = [
  { text: "Settings", icon: SettingsIcon, path: "/hr/settings" },
  { text: "Logout", icon: LogoutIcon, path: "/login" },
];




