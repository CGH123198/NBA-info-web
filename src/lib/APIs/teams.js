import CLIENT from './client';

export const getTeamInfo = teamName => CLIENT.get(`/teams`, {
    params: { search: teamName },
})