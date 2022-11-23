import { KAKAO_OAUTH_CLIENT } from "./OAuth";
import { dataEncoding } from "./OAuth";

export const getKakaoUserInfo = access_token => (
    KAKAO_OAUTH_CLIENT.get('/v2/user/me',{
        headers: {
            "Authorization": `Bearer ${access_token}`,
            //'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
)

export const getKakaoUserInfo_SDK = async (access_token) => {
    const JAVASCIPRT_KEY = `25c81419ac90c9afd1552f7fedd09258`;
    window.Kakao.init(JAVASCIPRT_KEY);
    console.log("KakaoSDK_Init: ", window.Kakao.isInitialized());
    window.Kakao.Auth.setAccessToken(access_token);
    
    return window.Kakao.API.request({
        url: '/v2/user/me',
    });
}

export const KakaoLogoutRequest = (access_token) => (
    KAKAO_OAUTH_CLIENT.post('/v1/user/logout',{
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
)