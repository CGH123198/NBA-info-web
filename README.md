# NBA 2015 - 2022 Information

## 발생했던 문제들
1) KAKAO 로그인 구현 시, axios로 인가코드 요청하면 CORS에러 발생.
- /oauth/authorize는 리다이렉트 URI로 302리다이렉트를 해야하기 때문에 Ajax호출 안됨.
    > ### 해결책<br> 302 redirection => redirect로 sript 혹은 html 태그를 이용한 redirection<br>a href로 링크 혹은 location 내장객체 사용.
<br>

2) 인가코드를 받고 토큰을 요청하는 과정에서 비동기 요청 두 번 발생
- 같은 인가코드로 두 번 요청 하게 되어 토큰을 발급 받은 뒤에 곧바로 400 error.
    > ### 해결책<br> saga함수를 takeLatest에서 takeLeading으로 바꿔서 첫 번째 요청이 끝날때까지 두 번째 요청을 못하게함.<br>첫번째 요청이 끝나면 두번째 요청을 하기 전에 바로 location.pathname이 '/'로 돌아오게 함.<br>조금 더 찾아보니 throttle함수로 쓰로틀링 해주는 것도 하나의 방법인 것 같다.
<br>

3) 토큰을 받아서 로그인까지 성공했으나, axios로 사용자 정보를 요청하자 CORS 발생.
    > ### 해결책<br> KAKAO API의 javascript SDK를 설치하여 해결.