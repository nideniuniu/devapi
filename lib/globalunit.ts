// 定义loading处理函数
declare type BeginLoading = () => void;
declare type EndLoading = () => void;

/**
 * 网络异常回调函数
 * @param ok 请求的状态,一直为false
 * @param status 服务器的状态http状态码 ，例如404
 * @param statusText 出现信息
 */
declare type HttpFailed = (
  ok: boolean,
  status: number,
  statusText: string
) => void;
declare type HttpErr = (errCode: number, errMsg: string) => void;

export class GlobalUnit {
  /**
   * JWT字符串
   */
  static JWT_STR: string;
  /**
   * APP_NAME
   */
  static APP_NAME: string;
  /**
   * 接口的基础url路径，不需要包含接口相关路径
   */
  static BASE_URL: string;
  /**
   * 网络请求开始,如果需要显示loading条，在此接口处显示loading
   */
  static BeginLoading?: BeginLoading;
  /**
   * 网络请求结束,再此处关闭loading显示
   */
  static EndLoading?: EndLoading;
  /**
   * 网络请求异常回调接口
   */
  static HttpFailed?: HttpFailed;
  /**
   * 网络请求错误的回调接口
   */
  static HttpErr?: HttpErr;
}
