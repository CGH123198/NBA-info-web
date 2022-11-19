import BarLoader from "react-spinners/BarLoader";
import "./Loading.scss";
import color from '../../../styles/color';

const Loading = ({ loading = true }) => {
    return (
        <BarLoader 
            className="loading" 
            color={color.blue} 
            width="100" 
            height="20"
            loading={loading}
        />
    )
}

export default Loading;