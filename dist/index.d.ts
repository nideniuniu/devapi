import { GlobalUnit } from './globalunit';
import { isWeAPP } from './utils';
export { GlobalUnit, isWeAPP };
export declare class GetRbacCheckrolecodeResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class GetRbacDelroleResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class GetRbacDelrouteResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class GetRbacDeluserResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class GetRbacGetcodeResponse {
    errcode: number;
    errmsg: string;
    data?: RbacGetCodeDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetCodeDataObject {
    code: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class GetRbacGetrolebyuseridResponse {
    errcode: number;
    errmsg: string;
    data?: RbacGetRoleDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRoleDataObject {
    role?: RbacGetRoleObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRoleObject {
    id: string;
    role_code: string;
    role_name: string;
    description: string;
    created_at: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class GetRbacGetroutelistResponse {
    errcode: number;
    errmsg: string;
    data?: RbacGetRouteListDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRouteListDataObject {
    routes?: RbacGetRouteListRouteList[];
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRouteListRouteList {
    id: string;
    parent_id: string;
    menu_type: number;
    name: string;
    title: string;
    icon: string;
    sort: number;
    component: string;
    redirect: string;
    perms: string;
    perms_type: number;
    btn_status: number;
    path: string;
    hideInBread: number;
    hideInMenu: number;
    notCache: number;
    isMmin: number;
    children?: RbacGetRouteListChildrenList[];
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRouteListChildrenList {
    id: string;
    parent_id: string;
    menu_type: number;
    name: string;
    title: string;
    icon: string;
    sort: number;
    component: string;
    redirect: string;
    perms: string;
    perms_type: number;
    path: string;
    btn_status: number;
    hideInBread: number;
    hideInMenu: number;
    notCache: number;
    isMmin: number;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class GetRbacGetroutesbyroleidResponse {
    errcode: number;
    errmsg: string;
    data?: RbacGetRoleRoutesDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRoleRoutesDataObject {
    routes?: RbacGetRoleRoutesRouteList[];
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRoleRoutesRouteList {
    id: string;
    parent_id: string;
    title: string;
    checked: number;
    children?: RbacGetRoleRoutesChildrenList[];
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRoleRoutesChildrenList {
    id: string;
    parent_id: string;
    title: string;
    checked: number;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class GetRbacGetuserpermissionResponse {
    errcode: number;
    errmsg: string;
    data?: RbacPermissionDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacPermissionDataObject {
    routes?: RbacPermissionRouteList[];
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacPermissionRouteList {
    id: string;
    parent_id: string;
    menu_type: number;
    name: string;
    title: string;
    icon: string;
    sort: number;
    component: string;
    redirect: string;
    perms: string;
    perms_type: number;
    btn_status: number;
    path: string;
    is_choose: string;
    meta?: RbacPermissionRouteMetaObj;
    children?: RbacPermissionRouteChildrenList[];
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacPermissionRouteMetaObj {
    title: string;
    icon: string;
    hideInBread?: Bool;
    hideInMenu?: Bool;
    notCache?: Bool;
    isMmin?: Bool;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class Bool {
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacPermissionRouteChildrenList {
    id: string;
    parent_id: string;
    menu_type: number;
    name: string;
    title: string;
    icon: string;
    sort: number;
    component: string;
    redirect: string;
    perms: string;
    perms_type: number;
    path: string;
    is_choose: string;
    btn_status: number;
    meta?: RbacPermissionRouteChildrenMetaObj;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacPermissionRouteChildrenMetaObj {
    title: string;
    icon: string;
    hideInBread?: Bool;
    hideInMenu?: Bool;
    notCache?: Bool;
    isMmin?: Bool;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class GetRbacGetusersbyroleidResponse {
    errcode: number;
    errmsg: string;
    data?: RbacUserListDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacUserListDataObject {
    count: number;
    users?: RbacUserListDataUserList[];
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacUserListDataUserList {
    id: string;
    username: string;
    avatar: string;
    realname: string;
    disable: string;
    root: number;
    created_at: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacCreateroleResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacCreaterouteResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacDelrolebindResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacGetrolesResponse {
    errcode: number;
    errmsg: string;
    data?: RbacGetRoleListDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRoleListDataObject {
    count: number;
    roles?: RbacGetRoleList[];
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacGetRoleList {
    id: string;
    role_code: string;
    role_name: string;
    description: string;
    created_at: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacGetuserlistResponse {
    errcode: number;
    errmsg: string;
    data?: RbacUserListDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacLoginResponse {
    errcode: number;
    errmsg: string;
    data?: RbacLoginDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacLoginDataObject {
    user?: RbacLoginUserObject;
    jwt: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacLoginUserObject {
    id: string;
    username: string;
    avatar: string;
    realname: string;
    disable: string;
    created_at: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacRegisterResponse {
    errcode: number;
    errmsg: string;
    data?: RbacCreateUserDataObject;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class RbacCreateUserDataObject {
    id: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacRolebindrouteResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacRolebinduserResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacUpdateroleResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacUpdaterouteResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacUpdateuserResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class PostRbacUserbindroleResponse {
    errcode: number;
    errmsg: string;
    constructor(jsonObj: Object);
    toMap(): any;
}
export declare class Rbac {
    static GetRbacCheckrolecode(role_code: string, callback?: (response: GetRbacCheckrolecodeResponse) => void, loading?: boolean, isshow?: boolean): void;
    static GetRbacDelrole(role_id: string, callback?: (response: GetRbacDelroleResponse) => void, loading?: boolean, isshow?: boolean): void;
    static GetRbacDelroute(route_id: string, callback?: (response: GetRbacDelrouteResponse) => void, loading?: boolean, isshow?: boolean): void;
    static GetRbacDeluser(user_id: string, callback?: (response: GetRbacDeluserResponse) => void, loading?: boolean, isshow?: boolean): void;
    static GetRbacGetcode(_t: string, callback?: (response: GetRbacGetcodeResponse) => void, loading?: boolean, isshow?: boolean): void;
    static GetRbacGetrolebyuserid(user_id: string, callback?: (response: GetRbacGetrolebyuseridResponse) => void, loading?: boolean, isshow?: boolean): void;
    static GetRbacGetroutelist(callback?: (response: GetRbacGetroutelistResponse) => void, loading?: boolean, isshow?: boolean): void;
    static GetRbacGetroutesbyroleid(role_id: string, callback?: (response: GetRbacGetroutesbyroleidResponse) => void, loading?: boolean, isshow?: boolean): void;
    static GetRbacGetuserpermission(callback?: (response: GetRbacGetuserpermissionResponse) => void, loading?: boolean, isshow?: boolean): void;
    static GetRbacGetusersbyroleid(role_id: string, callback?: (response: GetRbacGetusersbyroleidResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacCreaterole(description: string | undefined, role_code: string, role_name: string, callback?: (response: PostRbacCreateroleResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacCreateroute(btn_status: number, component: string, hideInBread: number, hideInMenu: number, icon: string, isMmin: number, ment_type: number, name: string, notCache: number, parent_id: string, path: string, perms: string, perms_type: number, redirect: string, sort: number, title: string, callback?: (response: PostRbacCreaterouteResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacDelrolebind(role_id: string, user_id: string, callback?: (response: PostRbacDelrolebindResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacGetroles(limit?: number, page?: number, role_code?: string, role_name?: string, callback?: (response: PostRbacGetrolesResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacGetuserlist(limit?: number, page?: number, realname?: string, username?: string, callback?: (response: PostRbacGetuserlistResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacLogin(_t: string, code: string, password: string, username: string, callback?: (response: PostRbacLoginResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacRegister(avatar: string, password: string, realname: string, root: number, username: string, callback?: (response: PostRbacRegisterResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacRolebindroute(role_id: string, routes: string[], callback?: (response: PostRbacRolebindrouteResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacRolebinduser(role_id: string, users: string[], callback?: (response: PostRbacRolebinduserResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacUpdaterole(description: string | undefined, role_id: string, role_name: string, callback?: (response: PostRbacUpdateroleResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacUpdateroute(btn_status: number, component: string, hideInBread: number, hideInMenu: number, icon: string, isMmin: number, ment_type: number, name: string, notCache: number, parent_id: string, path: string, perms: string, perms_type: number, redirect: string, route_id: string, sort: number, title: string, callback?: (response: PostRbacUpdaterouteResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacUpdateuser(avatar: string, realname: string, root: number, user_id: string, callback?: (response: PostRbacUpdateuserResponse) => void, loading?: boolean, isshow?: boolean): void;
    static PostRbacUserbindrole(role_id: string, user_id: string, callback?: (response: PostRbacUserbindroleResponse) => void, loading?: boolean, isshow?: boolean): void;
}
