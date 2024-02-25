declare type BeginLoading = () => void;
declare type EndLoading = () => void;
declare type HttpFailed = (ok: boolean, status: number, statusText: string) => void;
declare type HttpErr = (errCode: number, errMsg: string) => void;
export declare class GlobalUnit {
    static JWT_STR: string;
    static APP_NAME: string;
    static BASE_URL: string;
    static BeginLoading?: BeginLoading;
    static EndLoading?: EndLoading;
    static HttpFailed?: HttpFailed;
    static HttpErr?: HttpErr;
}
export {};
