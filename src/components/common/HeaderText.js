import styled from 'styled-components';

const TitleText = styled.h1`
    color: white;
    font-weight: 700;
    position: relative;
    font-size: 45px;
    margin: 30px 50px;

    animation-name: title-position;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;

    @keyframes title-position {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

const TitleH1 = ({children}) => {
    return (
        <TitleText>
            {children}
        </TitleText>
    )
}

export default TitleH1;