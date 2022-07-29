import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import MovieIcon from '@mui/icons-material/Movie';
import LogoutIcon from '@mui/icons-material/Logout';
export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'User',
        router: 'user',
    },
    {
        id: 1,
        icon: <MovieIcon />,
        label: 'Movie',
        router: 'movie',
    },
    {
        id: 2,
        icon: <SettingsIcon />,
        label: 'Dashboard',
        router: 'dash-board',
    },
    {
        id: 3,
        icon: <LogoutIcon/>,
        label: 'Log out',
        router: 'log-out',
    },
    {
        id: 4,
        icon: '',
        label: '',
        router: 'edit-movie',
    },
    {
        id: 5,
        icon: '',
        label: '',
        router: 'add-movie',
    },
    {
        id: 6,
        icon: '',
        label: '',
        router: 'show-time',
    },
]