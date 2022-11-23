import LayoutHeaderContainer from '../components/Layout/LayoutHeaderContainer';
import { Outlet } from 'react-router-dom';
import color from '../lib/styles/color';

const PageLayout = () => {
    return (
        <div style={{ 
            backgroundColor: `${color.redBackground}`, 
            height: "auto", 
            paddingBottom: "30px",
            minHeight: "96.8%"
        }}
        >
            <LayoutHeaderContainer />
            <Outlet />
        </div>
    )
}

export default PageLayout;