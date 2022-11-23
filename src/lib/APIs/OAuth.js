import axios from 'axios';

const REST_API_KEY = "d5101fbfb6eeec8d591ca85b20c3b904";
const REDIRECT_URI = "http://localhost:3000/oauth/callback";
const BASE_URL = "https://kauth.kakao.com"

export const KAKAO_OAUTH_URL = `${BASE_URL}/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const KAKAO_OAUTH_CLIENT = axios.create({
    baseURL: `${BASE_URL}`,
})

export const dataEncoding = data => { 
    return Object.keys(data)
    .map(k => encodeURIComponent(k) + "=" + encodeURI(data[k])) 
    .join("&");
}

export const getKakaoLoginToken = code => {
    const data = {
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code
    }
    const queryString = dataEncoding(data);
    
    return KAKAO_OAUTH_CLIENT.post(`/oauth/token`, queryString, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
    });
}


/**
 * Host: kauth.kakao.com
 * GET
 * /oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
 * 
 */