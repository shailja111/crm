
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; // For "About"
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'; // For "Contact"
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined'; // For "FAQ"
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'; // For "Login"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; // For "Profile"
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'; // For "Report Bug"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'; // For "Search"
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'; // For "History"

export const SidebarData = [
    
    {
        title: "General",
        icon: <InfoOutlinedIcon />, // Use an icon for General
        childrens: [
            {
                title: "Home",
                icon: <HomeOutlinedIcon />,
                path: "/"
            },
            {
                title: "About",
                icon: <InfoOutlinedIcon />,
                path: "/about"
            },
            {
                title: "Contact",
                icon: <PhoneInTalkOutlinedIcon />,
                childrens: [
                    {
                        title: "Facebook",
                        icon: <InfoOutlinedIcon /> // You can replace this with a specific social icon if needed
                    },
                    {
                        title: "Twitter",
                        icon: <InfoOutlinedIcon />
                    },
                    {
                        title: "Instagram",
                        icon: <InfoOutlinedIcon />
                    }
                ]
            },
            {
                title: "FAQ",
                icon: <QuestionMarkOutlinedIcon />
            }
        ]
    },
    {
        title: "Account",
        icon: <InfoOutlinedIcon />,
        childrens: [
            {
                title: "Login",
                path: "/login",
                icon: <LoginOutlinedIcon />
            },
            {
                title: "Register",
                path: "/register",
                icon: <PersonOutlineOutlinedIcon />
            },
            {
                title: "Forgot Password",
                path: "/forgot-password",
                icon: <InfoOutlinedIcon />
            },
            {
                title: "Reset Password",
                path: "/reset-password",
                icon: <InfoOutlinedIcon />
            }
        ]
    },
    {
        title: "Profile",
        icon: <PersonOutlineOutlinedIcon />,
        childrens: [
            {
                title: "Profile",
                path: "/profile",
                icon: <PersonOutlineOutlinedIcon />
            },
            {
                title: "Settings",
                childrens: [
                    {
                        title: "Account",
                        path: "/settings/account",
                        icon: <InfoOutlinedIcon />
                    },
                    {
                        title: "Billing",
                        childrens: [
                            {
                                title: "Payment",
                                path: "/settings/billing/payment",
                                icon: <InfoOutlinedIcon />
                            },
                            {
                                title: "Subscription",
                                path: "/settings/billing/subscription",
                                icon: <InfoOutlinedIcon />
                            }
                        ]
                    },
                    {
                        title: "Notifications",
                        path: "/settings/notifications",
                        icon: <InfoOutlinedIcon />
                    }
                ]
            },
            {
                title: "Logout",
                path: "/logout",
                icon: <InfoOutlinedIcon />
            }
        ]
    },
    {
        title: "Advance",
        icon: <InfoOutlinedIcon />,
        childrens: [
            {
                title: "Search",
                path: "/search",
                icon: <SearchOutlinedIcon />
            },
            {
                title: "History",
                path: "/history",
                icon: <HistoryOutlinedIcon />
            }
        ]
    },
    {
        title: "Support",
        icon: <InfoOutlinedIcon />,
        path: "/support"
    },
    {
        title: "Report Bug",
        icon: <BugReportOutlinedIcon />,
        path: "/report-bug"
    }
];
