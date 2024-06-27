/// <amd-module name="@scom/scom-twitter-sdk/const.ts" />
declare module "@scom/scom-twitter-sdk/const.ts" {
    const ACTIVATE_GUEST_API = "https://api.twitter.com/1.1/guest/activate.json";
    const GET_USER_BY_SCREENAME = "https://twitter.com/i/api/graphql/G3KGOASz96M-Qu0nwmGXNg/UserByScreenName";
    const GET_TWEETS_BY_USER_ID = "https://twitter.com/i/api/graphql/H8OOoI-5ZE4NxgRr8lfyWg/UserTweets";
    const GET_TWEET_BY_ID = "https://twitter.com/i/api/graphql/DJS3BdhUhcaEpZ7B7irJDg/TweetResultByRestId";
    const GET_FOLLOWERS_BY_USER_ID = "https://twitter.com/i/api/graphql/rRXFSG5vR6drKr5M37YOTw/Followers";
    const GET_FOLLOWING_BY_USER_ID = "https://twitter.com/i/api/graphql/iSicc7LrzWGBgDPL0tM_TQ/Following";
    const SEARCH_TIMELINE = "https://api.twitter.com/graphql/gkjsKepM6gl_HmFWoWKfgg/SearchTimeline";
    const SEARCH_API = "https://twitter.com/i/api/2/search/adaptive.json";
    const BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAFQODgEAAAAAVHTp76lzh3rFzcHbmHVvQxYYpTw%3DckAlMINMjmCwxUcaXbAN4XqJVdgMJaHqNOFgPMK0zN1qLqLQCF";
    export { ACTIVATE_GUEST_API, GET_TWEET_BY_ID, GET_TWEETS_BY_USER_ID, GET_USER_BY_SCREENAME, GET_FOLLOWERS_BY_USER_ID, GET_FOLLOWING_BY_USER_ID, SEARCH_TIMELINE, SEARCH_API, BEARER_TOKEN };
}
/// <amd-module name="@scom/scom-twitter-sdk/utils/validators.ts" />
declare module "@scom/scom-twitter-sdk/utils/validators.ts" {
    export class ParameterError extends Error {
        constructor(...params: any[]);
    }
    export class Validators {
        isFunction(data: any): boolean;
        isNonEmptyString(data: any): boolean;
        isDate(data: any): boolean;
        isEmptyString(data: any): boolean;
        isString(data: any): boolean;
        isObject(data: any): boolean;
        isInstanceStrict(data: any, prototype: any): boolean;
        isInteger(data: any): boolean;
        validate(bool: boolean, cb: any, options?: any): void;
    }
}
/// <amd-module name="@scom/scom-twitter-sdk/utils/cookie.ts" />
declare module "@scom/scom-twitter-sdk/utils/cookie.ts" {
    type CookieObject = {
        domain?: string;
        secure?: boolean;
        httpOnly?: boolean;
        maxAge?: number;
        sameSite?: "strict" | "lax" | "none";
        expires?: Date;
        path?: string;
        extensions?: string[];
    };
    export default class Cookie {
        private cookie;
        private cookieStr;
        updateCookie(cookieStr: string): void;
        getCookie(): CookieObject;
        getCookieExtensionStr(): string;
        getExtByKey(key: string): string;
        private parseCookie;
        private splitCookiesString;
    }
}
/// <amd-module name="@scom/scom-twitter-sdk/utils/auth.ts" />
declare module "@scom/scom-twitter-sdk/utils/auth.ts" {
    import Cookie from "@scom/scom-twitter-sdk/utils/cookie.ts";
    export default class Auth {
        private cookie;
        constructor(cookie: Cookie);
        private guestToken;
        updateGuestToken(): Promise<any>;
        getGuestToken(): string;
        login(username: string, password: string, email?: string, twoFactorSecret?: string): Promise<void>;
        logout(): Promise<void>;
        isLoggedIn(): Promise<boolean>;
        private initLogin;
        private handleJsInstrumentationSubtask;
        private handleEnterUserIdentifierSSO;
        private handleEnterPassword;
        private handleAccountDuplicationCheck;
        private handleEnterAlternateIdentifierSubtask;
        private handleAcid;
        private handleSuccessSubtask;
        private executeFlowTask;
        private installCsrfToken;
    }
}
/// <amd-module name="@scom/scom-twitter-sdk/utils/index.ts" />
declare module "@scom/scom-twitter-sdk/utils/index.ts" {
    const objectToParams: (data: any) => string;
    const paramsToObject: (params: string) => any;
    const sleep: (ms: number) => Promise<void>;
    export { objectToParams, paramsToObject, sleep };
}
/// <amd-module name="@scom/scom-twitter-sdk/utils/parser.ts" />
declare module "@scom/scom-twitter-sdk/utils/parser.ts" {
    export default class Parser {
        htmlToMarkdown(html: string): string;
        reconstructTweetHtml(tweet: any, photos: any, videos: any): any;
        parseVideo(m: any): any;
        parseMediaGroups(media: any): {
            sensitiveContent: any;
            photos: any[];
            videos: any[];
        };
        parseLegacyTweet(user: any, tweet: any): {
            success: boolean;
            err: Error;
            tweet?: undefined;
        } | {
            success: boolean;
            tweet: any;
            err?: undefined;
        };
        parseAndPush(tweets: any, content: any, entryId: any, isConversation?: boolean): void;
        parseTimelineEntryItemContentRaw(content: any, entryId: string, isConversation?: boolean): any;
        parseResult(result: any): {
            success: boolean;
            err: Error;
            tweet?: undefined;
        } | {
            success: boolean;
            tweet: any;
            err?: undefined;
        };
        parseTimelineTweetsV2(timeline: any): {
            tweets: any[];
            next: any;
            previous: any;
        };
        parseRelationshipTimeline(timeline: any): {
            profiles: any[];
            next: any;
            previous: any;
        };
        parseProfile(user: any, isBlueVerified?: boolean): any;
        parseSearchTimelineUsers(timeline: any): {
            tweets: any[];
            next: any;
            previous: any;
        };
        private getAvatarOriginalSizeUrl;
    }
}
/// <amd-module name="@scom/scom-twitter-sdk/utils/API.ts" />
declare module "@scom/scom-twitter-sdk/utils/API.ts" {
    import Auth from "@scom/scom-twitter-sdk/utils/auth.ts";
    import Cookie from "@scom/scom-twitter-sdk/utils/cookie.ts";
    type API_METHOD = 'GET' | 'POST';
    export default class API {
        private auth;
        private cookie;
        constructor(auth: Auth, cookie: Cookie);
        fetch(url: string, method: API_METHOD, params: any): Promise<any>;
        fetchAnonymous(url: string, method: API_METHOD, params: any): Promise<any>;
        private installCsrfToken;
    }
}
/// <amd-module name="@scom/scom-twitter-sdk/utils/interface.ts" />
declare module "@scom/scom-twitter-sdk/utils/interface.ts" {
    interface IAccount {
        username: string;
        password: string;
        emailAddress: string;
    }
    interface IConfig {
        twitterAccounts: IAccount[];
    }
    interface ICredential {
        username: string;
        password: string;
    }
    interface ITweet {
        conversationId: string;
        id: string;
        hashtags: any[];
        likes: number;
        mentions: any[];
        name: string;
        permanentUrl: string;
        photos: any[];
        replies: number;
        retweets: number;
        text: string;
        thread: any[];
        urls: [];
        userId: string;
        username: string;
        videos: any[];
        isQuoted: boolean;
        isReply: boolean;
        isRetweet: boolean;
        isPin: boolean;
        sensitiveContent: boolean;
        timeParsed: Date;
        timestamp: number;
        html: string;
        views: number;
    }
    export { IAccount, ITweet, IConfig, ICredential };
}
/// <amd-module name="@scom/scom-twitter-sdk/managers/scraperManager.ts" />
declare module "@scom/scom-twitter-sdk/managers/scraperManager.ts" {
    import { IConfig, ITweet } from "@scom/scom-twitter-sdk/utils/interface.ts";
    class TwitterManager {
        private parser;
        private auth;
        private cookie;
        private api;
        private _config;
        private _currentAccount;
        private _currentAccountIndex;
        private scraperManager;
        private _browser;
        private _page;
        constructor(config?: IConfig);
        init(): Promise<void>;
        exit(): Promise<void>;
        private hasMoreTweets;
        private enterUserName;
        private enterPassword;
        private enterEmailAddress;
        private login;
        private logout;
        private redirect;
        private useNextTwitterAccount;
        private scrapTweets;
        getTweetsByUserName(username: string, since?: number, maxTweets?: number): Promise<ITweet[]>;
    }
    export { TwitterManager };
}
/// <amd-module name="@scom/scom-twitter-sdk/managers/index.ts" />
declare module "@scom/scom-twitter-sdk/managers/index.ts" {
    import { TwitterManager } from "@scom/scom-twitter-sdk/managers/scraperManager.ts";
    export { TwitterManager };
}
/// <amd-module name="@scom/scom-twitter-sdk" />
declare module "@scom/scom-twitter-sdk" {
    import { TwitterManager } from "@scom/scom-twitter-sdk/managers/index.ts";
    import Parser from "@scom/scom-twitter-sdk/utils/parser.ts";
    export { TwitterManager, Parser };
}
