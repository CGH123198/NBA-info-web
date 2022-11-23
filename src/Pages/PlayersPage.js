import SearchFormContainer from "../components/Search/SearchFormContainer";
import PlayersInfoContainer from "../components/players/PlayersInfoListContainer";
const PlayerPage = () => {
    return (
        <div>
            <SearchFormContainer placeholder="Search Players..." page="players"/>
            <PlayersInfoContainer />
        </div>
    )
}

export default PlayerPage;

/**
    SearchPlayers
 */