import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface TabItem {
    label: string;
    icon: React.ReactElement;
    selected: boolean;
    selectedSubTabIndex?: number;

}

interface MainTabProps {
    tabs: TabItem[];
    onTabClick: (index: number) => void;
    onSubTabClick?: (tabIndex: number, subTabIndex: number) => void;
    fontSize?: string;
}

const MainTab: React.FC<MainTabProps> = ({ tabs, onTabClick, onSubTabClick, fontSize }) => {
    const theme = useTheme();

    // Define sub-tabs for each main tab
    const getSubTabs = (tabLabel: string): string[] => {
        switch (tabLabel) {
            case 'Applications':
                return ['Job Applications', 'Prescreening', 'Interview', 'References', 'Blacklisted Applicants', 'Archived'];
            case 'Job Description':
                return ['Active Positions', 'Draft Positions', 'Closed Positions'];
            case 'Open Positions':
                return ['Published', 'Pending Review', 'Expired'];
            case 'Offer Letter':
                return ['Pending Offers', 'Accepted Offers', 'Rejected Offers'];
            default:
                return [];
        }
    };

    const selectedTabIndex = tabs.findIndex(tab => tab.selected);
    const selectedTab = tabs[selectedTabIndex];
    const currentSubTabs = selectedTab ? getSubTabs(selectedTab.label) : [];
    const selectedSubTabIndex = selectedTab?.selectedSubTabIndex || 0;

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                border: '1px solid #CED4DA',
                borderRadius: '6px',
                padding: 2
            }}
        >
            {/* Main Tabs */}
            <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                {tabs.map((tab, index) => {
                    const iconWithColor = tab.selected
                        ? React.cloneElement(tab.icon, {

                            color: 'white'

                        })
                        : tab.icon;

                    return (
                        <Button
                            key={index}
                            variant="contained"
                            onClick={() => onTabClick(index)}
                            sx={{
                                backgroundColor: tab.selected
                                    ? theme.palette.primary.main
                                    : '#ece2ee',
                                color: tab.selected ? 'white' : 'black',
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: "4px",
                                fontWeight: "400",
                                fontSize: fontSize ? fontSize : "16px",
                                boxShadow: "0px 1px 3px 0px #0000001A",

                                gap: 1,
                                '&:hover': {
                                    backgroundColor: tab.selected
                                        ? "theme.palette.primary.dark"
                                        : "theme.palette.secondary.dark",
                                },
                            }}
                            startIcon={iconWithColor}
                        >
                            {tab.label}
                        </Button>

                    );
                })}
            </Box>

            {/* Sub Tabs */}
            {currentSubTabs.length > 0 && (
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', }}>
                    {currentSubTabs.map((subTabLabel, subIndex) => (
                        <Typography
                            key={subIndex}
                            onClick={() => onSubTabClick && onSubTabClick(selectedTabIndex, subIndex)}
                            sx={{
                                color: subIndex === selectedSubTabIndex ? "#6F2D7A" : "#747474",
                                cursor: 'pointer',
                                fontSize: '17px',
                                borderBottom: subIndex === selectedSubTabIndex ? "2px solid #6F2D7A" : "0px solid red",
                                fontWeight: subIndex === selectedSubTabIndex ? 600 : 500,
                                '&:hover': {
                                    color: theme.palette.primary.main,
                                },
                                transition: 'color 0.2s ease'
                            }}
                        >
                            {subTabLabel}
                        </Typography>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default MainTab;