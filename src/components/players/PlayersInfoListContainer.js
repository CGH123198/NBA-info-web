import PlayersInfoList from './PlayersInfoList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import players, { getPlayersList } from '../../modules/players';
import { useSearchParams, useLocation } from 'react-router-dom';

const PlayersInfoListContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const { players, loading, error } = useSelector(({ players, loading}) => ({
        players: players.players,
        error: players.error,
        loading: loading['players/PLAYERS_INFO']
    }));

    useEffect( () => {
        if(!location.search) { return; }
        dispatch(getPlayersList(searchParams.get("value"), searchParams.get("criteria")))
    }, [searchParams]);

    return(
        <PlayersInfoList 
            loading={loading} 
            players={players}
            error={error}
        />
    )
}

export default PlayersInfoListContainer;