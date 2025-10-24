import { Outlet, useLocation } from "react-router-dom";
import DashNavigationBar from "../Components/DashNavigationBar/DashNavigationBar";
import DashTabBar from "../Components/DashTabBar/DashTabBar";

function DashboardLayout() {
    const location = useLocation();

    const tabLinks = [
        { to: '/encounters', label: 'Encuentros', icon: '💫' },
        { to: '/connections', label: 'Chats', icon: '🤝' },
        { to: '/likesyou', label: 'Likes', icon: '❤️' },
        { to: '/notifications', label: 'Notificaciones', icon: '🔔' }, 
        { to: '/profile', label: 'Perfil', icon: '👤' },

    ]

    const currentTab = tabLinks.find(link => location.pathname.startsWith(link.to));
    const pageTitle = currentTab
        ? `${currentTab.icon} ${currentTab.label}`
        : '📊 Dashboard';

    return (
        <>
            <DashNavigationBar title={pageTitle} />
            <Outlet />
            <DashTabBar links={tabLinks} />
        </>
    );
}

export default DashboardLayout;