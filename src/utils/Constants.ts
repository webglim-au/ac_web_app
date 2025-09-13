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
    { title: "CEO Dashboard", path: "/dashboard/ceo" },
    { title: "Director’s Dashboard", path: "/dashboard/director" },
    { title: "HR Manager Dashboard", path: "/dashboard" },
    { title: "Admin Dashboard", path: "/dashboard/admin" },
    { title: "Accounts Dashboard", path: "/dashboard/accounts" },
    { title: "Client Service Manager", path: "/dashboard/client-service" },
    { title: "Business Development Manager", path: "/dashboard/business-dev" },
    { title: "Client Coordinator", path: "/dashboard/client-coordinator" },
];