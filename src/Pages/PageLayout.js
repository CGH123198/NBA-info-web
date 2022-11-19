import LayoutHeader from '../components/Layout/LayoutHeader';
import { Outlet } from 'react-router-dom';
import color from '../styles/color';

const PageLayout = () => {
    return (
        <div style={{ backgroundColor: `${color.redBackground}`}}>
            <LayoutHeader />
            <Outlet />
        </div>
    )
}

export default PageLayout;