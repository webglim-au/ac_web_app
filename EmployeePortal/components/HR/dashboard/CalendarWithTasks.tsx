import { useState } from 'react';
import {
    Box,
    Typography,
    Checkbox,
    Divider,
    Link
} from '@mui/material';
import { LocalizationProvider, DateCalendar, PickersDay } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, isSameDay } from 'date-fns';
import { calendarWithTasksStyles } from './CalendarWithTasksStyles';

interface Task {
    id: number;
    title: string;
    time: string;
    description: string;
    completed: boolean;
    date: Date;
}

const CalendarWithTasks = () => {
    const [allTasks] = useState<Task[]>([
        {
            id: 1,
            title: "Team Meeting",
            time: "8:30 PM",
            description: "This is to notify you that you will be attending the weekly team sync meeting",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 2,
            title: "Project Review",
            time: "9:00 PM",
            description: "Review quarterly project deliverables and milestones with stakeholders",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 3,
            title: "Team Meeting",
            time: "8:30 PM",
            description: "This is to notify you that you will be attending the weekly team sync meeting",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 4,
            title: "Project Review",
            time: "9:00 PM",
            description: "Review quarterly project deliverables and milestones with stakeholders",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 5,
            title: "Team Meeting",
            time: "8:30 PM",
            description: "This is to notify you that you will be attending the weekly team sync meeting",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 6,
            title: "Project Review",
            time: "9:00 PM",
            description: "Review quarterly project deliverables and milestones with stakeholders",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 7,
            title: "Team Meeting",
            time: "8:30 PM",
            description: "This is to notify you that you will be attending the weekly team sync meeting",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 8,
            title: "Project Review",
            time: "9:00 PM",
            description: "Review quarterly project deliverables and milestones with stakeholders",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 9,
            title: "Team Meeting",
            time: "8:30 PM",
            description: "This is to notify you that you will be attending the weekly team sync meeting",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 10,
            title: "Project Review",
            time: "9:00 PM",
            description: "Review quarterly project deliverables and milestones with stakeholders",
            completed: false,
            date: new Date(2025, 8, 12) // Sep 12, 2025
        },
        {
            id: 11,
            title: "Client Call",
            time: "1:30 PM",
            description: "Follow-up call with client regarding new requirements and timeline",
            completed: true,
            date: new Date(2025, 8, 15) // Sep 15, 2025
        },
        {
            id: 12,
            title: "Training Session",
            time: "3:30 PM",
            description: "Attend mandatory compliance training session for all employees",
            completed: false,
            date: new Date(2025, 8, 15) // Sep 15, 2025
        },
        {
            id: 13,
            title: "Code Review",
            time: "2:00 PM",
            description: "Review pull requests and provide feedback",
            completed: false,
            date: new Date(2025, 8, 15) // Sep 15, 2025
        },
        {
            id: 14,
            title: "Sprint Planning",
            time: "10:00 AM",
            description: "Plan next sprint activities",
            completed: false,
            date: new Date(2025, 8, 18) // Sep 18, 2025
        }
    ]);

    const [selectedDate, setSelectedDate] = useState(new Date(2025, 8, 12));
    const [tasks, setTasks] = useState<Task[]>(allTasks);

    const handleTaskToggle = (taskId: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const getTasksForDate = (date: Date): Task[] => {
        return tasks.filter(task => isSameDay(task.date, date));
    };

    const getTaskDotsForDate = (date: Date): number => {
        const dayTasks = getTasksForDate(date);
        return Math.min(dayTasks.length, 3); // Show max 3 dots
    };

    const selectedDateTasks = getTasksForDate(selectedDate);

    const CustomDay = (props: any) => {
        const { day, selected, ...other } = props;
        const taskCount = getTaskDotsForDate(day);

        return (
            <PickersDay
                {...other}
                day={day}
                selected={selected}
                sx={calendarWithTasksStyles.customDay(selected)}
            >
                {format(day, 'd')}
                {/* {taskCount > 0 && (
                    <Box sx={calendarWithTasksStyles.taskDots}>
                        {Array.from({ length: taskCount }).map((_, index) => (
                            <Box
                                key={index}
                                sx={calendarWithTasksStyles.taskDot(selected)}
                            />
                        ))}
                    </Box>
                )} */}
            </PickersDay>
        );
    };

    return (
        <Box sx={calendarWithTasksStyles.container}>
            {/* Calendar */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateCalendar
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    slots={{
                        day: CustomDay,
                        leftArrowIcon: ChevronLeft,
                        rightArrowIcon: ChevronRight
                    }}
                    sx={calendarWithTasksStyles.calendar}
                    views={['day']}
                    openTo="day"
                />
            </LocalizationProvider>

            {/* Tasks Section */}
            <Box sx={calendarWithTasksStyles.tasksContainer}>
                {/* Header */}
                <Box sx={calendarWithTasksStyles.tasksHeader}>
                    <Typography sx={calendarWithTasksStyles.tasksTitle}>
                        Upcoming Tasks
                    </Typography>
                    <Link
                        href="#"
                        sx={calendarWithTasksStyles.viewAllLink}
                    >
                        View All ({allTasks.length})
                    </Link>
                </Box>

                {/* Divider */}
                <Divider sx={calendarWithTasksStyles.divider} />

                {/* Tasks List */}
                {selectedDateTasks.length === 0 ? (
                    <Box sx={calendarWithTasksStyles.noTasksContainer}>
                        <Typography sx={calendarWithTasksStyles.noTasksText}>
                            No tasks scheduled for this date
                        </Typography>
                    </Box>
                ) : (
                    <Box sx={calendarWithTasksStyles.tasksList}>
                        {selectedDateTasks.map((task) => (
                            <Box key={task.id}>
                                {/* Task Header Row */}
                                <Box sx={calendarWithTasksStyles.taskHeader}>
                                    <Box sx={calendarWithTasksStyles.taskTitleContainer}>
                                        <Checkbox
                                            size="small"
                                            checked={task.completed}
                                            color="default"
                                            onChange={() => handleTaskToggle(task.id)}
                                            sx={calendarWithTasksStyles.taskCheckbox}
                                        />
                                        <Typography sx={calendarWithTasksStyles.taskTitle(task.completed)}>
                                            {task.title}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="caption"
                                        sx={calendarWithTasksStyles.taskTime}
                                    >
                                        {task.time}
                                    </Typography>
                                </Box>

                                {/* Description Row */}
                                <Typography
                                    align="left"
                                    sx={calendarWithTasksStyles.taskDescription}
                                >
                                    {task.description}
                                </Typography>
                                <Divider sx={calendarWithTasksStyles.taskDivider} />
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default CalendarWithTasks;