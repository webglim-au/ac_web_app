// RecruitmentPage.tsx
import { useState } from 'react';
import { Box, useTheme } from "@mui/material";
import ScreenTemplate from "@employeeComponents/common/ScreenTemplate";
import ScreenHeading from "@employeeComponents/common/ScreenHeading";
import MainTab from '@employeeComponents/HR/recruitment/mainTab';

import RecruitmentApplicationsIcon from '@sharedComponents/common/IconComponents/RecruitmentApplications';
import RecruitmentJobPositionIcon from '@sharedComponents/common/IconComponents/RecruitmentJobPosition';
import RecruitmentOpenPositionsIcon from '@sharedComponents/common/IconComponents/RecruitmentOpenPositions';
import RecruitmentOfferLetterIcon from '@sharedComponents/common/IconComponents/RecruitmentOfferLetter';

// Subtab Components
import { JobApplicationsComponent } from '@employeeComponents/HR/recruitment/JobApplicationsComponent';
import { BlacklistedComponent } from '@employeeComponents/HR/recruitment/BlackListedComponents';
import { ArchivedComponent } from '@employeeComponents/HR/recruitment/ArchivedComponent';
import { InterviewsComponent } from '@employeeComponents/HR/recruitment/InterviewsComponent';
import { PrescreeningComponent } from '@employeeComponents/HR/recruitment/PrescreeningComponent';
import { ReferencesComponent } from '@employeeComponents/HR/recruitment/ReferencesComponent';
import { HRTopItems, HRBottomItems } from "@utils/sidebarMenuItems";
export function RecruitmentPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const theme = useTheme();
    const [tabs, setTabs] = useState([
        {
            label: 'Applications',
            icon: <RecruitmentApplicationsIcon />,
            selected: true,
            selectedSubTabIndex: 0
        },
        {
            label: 'Offer Letter',
            icon: <RecruitmentOfferLetterIcon />,
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
            label: 'Job Description',
            icon: <RecruitmentJobPositionIcon />,
            selected: false,
            selectedSubTabIndex: 0
        },


    ]);

    const handleTabClick = (index: number) => {
        setTabs(tabs.map((tab, i) => ({
            ...tab,
            selected: i === index
        })));
    };

    const handleSubTabClick = (tabIndex: number, subTabIndex: number) => {
        setTabs(tabs.map((tab, i) =>
            i === tabIndex
                ? { ...tab, selectedSubTabIndex: subTabIndex }
                : tab
        ));
    };

    // --- DYNAMIC RENDER LOGIC ---
    const renderContent = () => {
        const selectedTab = tabs.find(tab => tab.selected);
        if (!selectedTab) return null;

        if (selectedTab.label === "Applications") {
            switch (selectedTab.selectedSubTabIndex) {
                case 0: return <JobApplicationsComponent />;
                case 1: return <PrescreeningComponent />;
                case 2: return <InterviewsComponent />;
                case 3: return <ReferencesComponent />;
                case 4: return <BlacklistedComponent />;
                case 5: return <ArchivedComponent />;
                default: return null;
            }
        }

        if (selectedTab.label === "Job Position") {
            return <div>Job Position Components go here</div>;
        }

        if (selectedTab.label === "Open Positions") {
            return <div>Open Positions Components go here</div>;
        }

        if (selectedTab.label === "Offer Letter") {
            return <div>Offer Letter Components go here</div>;
        }

        return null;
    };

    return (
        <ScreenTemplate topItems={HRTopItems} bottomItems={HRBottomItems}>

            {/* <ScreenHeading title="Recruitment" /> */}
            <Box sx={{

                marginLeft: "165px", // or whatever width your sidebar has
                [theme.breakpoints.down(1210)]: {
                    marginLeft: "40px"
                },
                [theme.breakpoints.down(850)]: {
                    width: "100%",
                    margin: "auto",
                    pl: 3,
                },


            }}>
                <MainTab
                    tabs={tabs}
                    onTabClick={handleTabClick}
                    onSubTabClick={handleSubTabClick}
                    fontSize={theme.breakpoints.down(1210) ? "12px" : theme.breakpoints.down(850) ? "10px" : "14px"}
                />

                <Box sx={{
                    flexGrow: 1, backgroundColor: "white", overflow: "auto", height: "calc(100vh - 235px)", mt: "5px", borderRadius: "6px", boxShadow: "0px 10px 60px 0px #E2ECF980",



                }}>
                    {renderContent()}
                </Box>
            </Box>

        </ScreenTemplate>
    );
}
