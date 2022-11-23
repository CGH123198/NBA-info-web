import CLIENT from './client';

/** export const getPlayersByName = playerName => CLIENT.get(`/players`,{
    params: { search: `${playerName}` },
})

export const getPlayersByCountry = country => CLIENT.get(`/players`,{
    params: { country: `${country}` },
})
*/
export const getPlayersList = ({value, criteria}) => {
    if(criteria === "lastName") {
        return CLIENT.get(`/players`,{
            params: { search: `${value}` },
        })
    }

    if(criteria === "country") {
        return CLIENT.get(`/players`,{
            params: { country: `${value}` },
        })
    }
}