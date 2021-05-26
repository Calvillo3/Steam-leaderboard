const baseURL = 'https://cs396-hw3-cjc0786.herokuapp.com';


fetch('https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/uno/gamer/Huskerrs/profile/type/wz', {
    method: 'get',
    headers: new Headers {
        'Cookie': 'ACT_SSO_COOKIE=Set by test scripts; ACT_SSO_COOKIE_EXPIRY=1591153892430; atkn=Set by test scripts;'
    }
})

