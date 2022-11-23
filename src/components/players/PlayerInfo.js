import './PlayerInfo.scss';

const PlayersInfo = ({ player }) => {
    return (
        <div className="players-info-body">
            <div>{player.firstname}</div>
            <div>{player.lastname}</div>
            <div>{player.height.meters}</div>
            <div>{player.weight.kilograms}</div>
            <div>{player.leagues[Object.keys(player.leagues)[0]].jersey}</div>
            <div>{player.leagues[Object.keys(player.leagues)[0]].pos}</div>
        </div>
    )
}

export default PlayersInfo;