import BarLoader from "react-spinners/BarLoader";
import "./Loading.scss";
import color from '../../../lib/styles/color';

const Loading = ({ loading = true }) => {
    return (
        <>
            <BarLoader 
                className="loading" 
                color={color.blue} 
                width="100px" 
                height="20px"
                loading={loading}
            />
            <div style={{
                margin: "0",
                position: "relative",
                color: "white",
                textAlign: "center"
            }}>LOADING...</div>
        </>
    )
}

export default Loading;