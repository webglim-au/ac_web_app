import { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

import TrainingDetailsModal from "./TrainingDetailsModal";
import { upcomingTrainingsStyles } from "./UpcomingTrainingsStyles";

import trainingTime from "@assets/icons/trainingTime.svg";
import trainingLocation from "@assets/icons/trainingLocation.svg";
import trainingUser from "@assets/icons/trainingUser.svg";

interface Training {
    date: string;
    title: string;
    time: string;
    location: string;
    trainer: string;
    description: string;
}

interface TrainingDetailRowProps {
    icon: string;
    text: string;
    alt: string;
}

export default function UpcomingTrainings() {
    const [open, setOpen] = useState(false);
    const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);

    const trainings: Training[] = [
        {
            date: "15 Apr",
            title: "First Aid Certification",
            time: "10:00 AM (6 hours)",
            location: "Melbourne Training Center",
            trainer: "Emma Davis",
            description:
                "A comprehensive training on First Aid techniques including CPR, wound treatment, and emergency response.",
        },
        {
            date: "15 Apr",
            title: "First Aid Certification",
            time: "10:00 AM (6 hours)",
            location: "Melbourne Training Center",
            trainer: "Emma Davis",
            description:
                "A comprehensive training on First Aid techniques including CPR, wound treatment, and emergency response.",
        },
        {
            date: "15 Apr",
            title: "First Aid Certification",
            time: "10:00 AM (6 hours)",
            location: "Melbourne Training Center",
            trainer: "Emma Davis",
            description:
                "A comprehensive training on First Aid techniques including CPR, wound treatment, and emergency response.",
        },
        {
            date: "15 Apr",
            title: "First Aid Certification",
            time: "10:00 AM (6 hours)",
            location: "Melbourne Training Center",
            trainer: "Emma Davis",
            description:
                "A comprehensive training on First Aid techniques including CPR, wound treatment, and emergency response.",
        },
        {
            date: "18 Apr",
            title: "First Aid Certification",
            time: "10:00 AM (6 hours)",
            location: "Melbourne Training Center",
            trainer: "Emma Davis",
            description:
                "This session covers advanced First Aid scenarios with hands-on practice.",
        },
        {
            date: "18 Apr",
            title: "First Aid Certification",
            time: "10:00 AM (6 hours)",
            location: "Melbourne Training Center",
            trainer: "Emma Davis",
            description:
                "This session covers advanced First Aid scenarios with hands-on practice.",
        },
        {
            date: "18 Apr",
            title: "First Aid Certification",
            time: "10:00 AM (6 hours)",
            location: "Melbourne Training Center",
            trainer: "Emma Davis",
            description:
                "This session covers advanced First Aid scenarios with hands-on practice.",
        },
    ];

    const handleOpen = (training: Training) => {
        setSelectedTraining(training);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedTraining(null);
    };

    const TrainingDetailRow = ({ icon, text, alt }: TrainingDetailRowProps) => (
        <Box sx={upcomingTrainingsStyles.detailRow}>
            <img src={icon} alt={alt} width={16} height={16} />
            <Typography sx={upcomingTrainingsStyles.detailText}>
                {text}
            </Typography>
        </Box>
    );

    return (
        <Box sx={upcomingTrainingsStyles.container}>
            {/* Header */}
            <Box sx={upcomingTrainingsStyles.header}>
                <Typography gutterBottom sx={upcomingTrainingsStyles.headerTitle}>
                    Upcoming Trainings
                </Typography>
                <Typography gutterBottom sx={upcomingTrainingsStyles.viewAllText}>
                    View All Trainings
                </Typography>
            </Box>

            {/* Training Cards */}
            {trainings.map((training, index) => (
                <Card key={index} sx={upcomingTrainingsStyles.trainingCard}>
                    <CardContent sx={upcomingTrainingsStyles.cardContent}>
                        <Box sx={upcomingTrainingsStyles.trainingMainContent}>
                            {/* Date Badge */}
                            <Box sx={upcomingTrainingsStyles.dateBadge}>
                                {training.date}
                            </Box>

                            {/* Training Details */}
                            <Box sx={upcomingTrainingsStyles.trainingDetails}>
                                <Typography sx={upcomingTrainingsStyles.trainingTitle}>
                                    {training.title}
                                </Typography>

                                <TrainingDetailRow
                                    icon={trainingTime}
                                    text={training.time}
                                    alt="time"
                                />
                                <TrainingDetailRow
                                    icon={trainingLocation}
                                    text={training.location}
                                    alt="location"
                                />
                                <TrainingDetailRow
                                    icon={trainingUser}
                                    text={training.trainer}
                                    alt="trainer"
                                />
                            </Box>
                        </Box>

                        {/* Details Button */}
                        <Button
                            variant="contained"
                            color="primary"
                            sx={upcomingTrainingsStyles.detailsButton}
                            onClick={() => handleOpen(training)}
                        >
                            Details
                        </Button>
                    </CardContent>
                </Card>
            ))}

            {/* Training Details Modal */}
            <TrainingDetailsModal
                open={open}
                onClose={handleClose}
                training={selectedTraining}
            />
        </Box>
    );
}