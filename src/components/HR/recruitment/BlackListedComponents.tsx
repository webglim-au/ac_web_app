
import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import ContentSection from '@components/HR/recruitment/ContentSection';
import RecruitmentApplicationsIcon from '@components/common/IconComponents/RecruitmentApplications';
import RecruitmentJobPositionIcon from '@components/common/IconComponents/RecruitmentJobPosition';
import RecruitmentOpenPositionsIcon from '@components/common/IconComponents/RecruitmentOpenPositions';
import RecruitmentOfferLetterIcon from '@components/common/IconComponents/RecruitmentOfferLetter';

export function BlacklistedComponent() {

    const [tabs, setTabs] = useState([
        {
            label: 'Applications',
            icon: <RecruitmentApplicationsIcon />,
            selected: true,
            selectedSubTabIndex: 0 // Default to "Job Applications"
        },
        {
            label: 'Job Position',
            icon: <RecruitmentJobPositionIcon />,
            selected: false,
            selectedSubTabIndex: 0
        },
        {
            label: 'Open Positions',
            icon: <RecruitmentOpenPositionsIcon />,
            selected: false,
            selectedSubTabIndex: 0
        },
        {
            label: 'Offer Letter',
            icon: <RecruitmentOfferLetterIcon />,
            selected: false,
            selectedSubTabIndex: 0
        }
    ]);
    const [applicationsData] = useState([
        {
            id: 1,
            name: 'John Doe',
            position: 'Software Engineer',
            email: 'john.doe@email.com',
            phone: '+1 234-567-8900',
            status: 'Under Review',
            appliedDate: '2024-01-15'
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'Product Manager',
            email: 'jane.smith@email.com',
            phone: '+1 234-567-8901',
            status: 'Interview Scheduled',
            appliedDate: '2024-01-14'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            position: 'UX Designer',
            email: 'mike.johnson@email.com',
            phone: '+1 234-567-8902',
            status: 'Rejected',
            appliedDate: '2024-01-13'
        },
        {
            id: 4,
            name: 'Sarah Wilson',
            position: 'Data Analyst',
            email: 'sarah.wilson@email.com',
            phone: '+1 234-567-8903',
            status: 'Hired',
            appliedDate: '2024-01-12'
        },
        {
            id: 5,
            name: 'David Brown',
            position: 'Software Engineer',
            email: 'david.brown@email.com',
            phone: '+1 234-567-8904',
            status: 'Under Review',
            appliedDate: '2024-01-11'
        }
    ]);
    // Define table columns
    const columns = [
        { id: 'name', label: 'Name', minWidth: 150 },
        { id: 'position', label: 'Position', minWidth: 150 },
        { id: 'email', label: 'Email', minWidth: 200 },
        { id: 'phone', label: 'Phone', minWidth: 150 },
        { id: 'status', label: 'Status', minWidth: 120, align: 'center' as const },
        { id: 'appliedDate', label: 'Applied Date', minWidth: 120, align: 'center' as const }
    ];

    const handleSearch = (searchTerm: string) => {
        console.log('Searching for:', searchTerm);
        // You can implement custom search logic here if needed
        // The component already handles basic filtering
    };
    // const handleTabClick = (index: number) => {
    //     setTabs(tabs.map((tab, i) => ({
    //         ...tab,
    //         selected: i === index
    //     })));
    // };

    // const handleSubTabClick = (tabIndex: number, subTabIndex: number) => {
    //     setTabs(tabs.map((tab, i) =>
    //         i === tabIndex
    //             ? { ...tab, selectedSubTabIndex: subTabIndex }
    //             : tab
    //     ));
    // };


    return (

        <Box sx={{ padding: '20px', marginTop: "20px" }}>
            <Typography >Black Listed Applicants to be implemented</Typography>
            {/* <ContentSection
                title="Blacklisted Applicants"
                columns={columns}
                data={applicationsData}
                searchPlaceholder="Search applications..."
                onSearch={handleSearch}
                rowsPerPage={3} // Small number for demo purposes
            /> */}
        </Box>

    );
}

