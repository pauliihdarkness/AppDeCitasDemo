import CustomLink from '../CustomLink/CustomLink';
import './DashTabBar.css';

const DashTabBar = ({ links = [] }) => {

    return (
        <div className='dash-tabbar'>
            <ul className='tabbar-list-item'>
                {links.map(({ to, label, icon }, index) => (
                    <li key={index} className='tabbar-item'>
                        <CustomLink to={to}>
                            {icon && <span className='tabbar-icon'>{icon}</span>}
                            {label}
                        </CustomLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default DashTabBar
