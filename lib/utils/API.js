import { BEARER_TOKEN } from "../const";
export default class API {
    constructor(auth, cookie) {
        this.auth = auth;
        this.cookie = cookie;
    }
    async fetch(url, method, params) {
        const headers = {
            authorization: `Bearer ${BEARER_TOKEN}`,
            cookie: this.cookie.getCookieExtensionStr()
        };
        this.installCsrfToken(headers);
        const urlParams = new URLSearchParams();
        for (const key in params) {
            urlParams.set(key, JSON.stringify(params[key]));
        }
        const response = await fetch(`${url}?${urlParams.toString()}`, {
            method,
            headers
        });
        if (!response.ok) {
            console.log('failed to fetch', await response.text());
        }
        return response.json();
    }
    async fetchAnonymous(url, method, params) {
        const headers = {
            authorization: `Bearer ${BEARER_TOKEN}`,
            'x-guest-token': this.auth.getGuestToken()
        };
        const urlParams = new URLSearchParams();
        for (const key in params) {
            urlParams.set(key, JSON.stringify(params[key]));
        }
        const response = await fetch(`${url}?${urlParams.toString()}`, {
            method,
            headers
        });
        if (!response.ok) {
            console.log('failed to fetch', await response.text());
        }
        return response.json();
    }
    installCsrfToken(headers) {
        const ct0 = this.cookie.getExtByKey('ct0');
        if (ct0) {
            headers['x-csrf-token'] = ct0;
        }
    }
}
