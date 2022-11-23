import styled from 'styled-components';
import Loading from '../common/Loading/Loading';
import PlayerInfo from './PlayerInfo';
import './PlayersInfoList.scss';

const PlayersInfoList = ({ players, loading, error }) => {
    return (
        <div className="players-info-container">
            <h1>SEARCH RESULT</h1>
            <div className="players-info-table">
                <div className="players-info-header">
                    <div>FirstName</div>
                    <div>LastName</div>
                    <div>Height(m)</div>
                    <div>Weight(kg)</div>
                    <div>Jersey</div>
                    <div>Position</div>
                </div>
                {   players &&
                    players.map(player => ( <PlayerInfo player={player} /> ))
                }
            </div>
            { loading && <Loading />}
            { error &&
                <div className="error-message">
                    {error}
                </div>
            }
        </div>
    )
};

export default PlayersInfoList;