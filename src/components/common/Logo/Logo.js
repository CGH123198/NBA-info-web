import { ReactComponent as Logos } from '../../../assets/nba-6.svg';
import './Logo.scss';

const Logo = ({...rest}) => {
    return (
        <div className="logo-image" {...rest}>
            <Logos />
        </div>
    )
};

export default Logo;