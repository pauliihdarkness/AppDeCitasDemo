import CustomLink from '../CustomLink/CustomLink';
import './DashNavigationBar.css';

const DashNavigationBar = ({ title }) => {
    return (
        <nav className='dash-navigation-bar'>
            <h1>{title}</h1>
            <CustomLink to='/'>
                <button className='back-to-home'>Atras</button>
            </CustomLink>
        </nav>
    )
}

export default DashNavigationBar
