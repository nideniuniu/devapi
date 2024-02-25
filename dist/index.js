"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requests_1 = require("./requests");
const globalunit_1 = require("./globalunit");
exports.GlobalUnit = globalunit_1.GlobalUnit;
const utils_1 = require("./utils");
exports.isWeAPP = utils_1.isWeAPP;
function simple_get(type, api_url, params, isshow, callback) {
    requests_1.request('get', api_url, params).then((result) => {
        if (globalunit_1.GlobalUnit.EndLoading != null) {
            globalunit_1.GlobalUnit.EndLoading();
        }
        if (result.ok) {
            const myObject = result.json();
            if (myObject['errcode'] > 0) {
                if (globalunit_1.GlobalUnit.HttpErr != null && isshow == true) {
                    globalunit_1.GlobalUnit.HttpErr(myObject['errcode'], myObject['errmsg']);
                }
                else {
                    let response = new type(myObject);
                    if (callback != null) {
                        callback(response);
                    }
                }
            }
            else {
                let response = new type(myObject);
                if (callback != null) {
                    callback(response);
                }
            }
        }
        else {
            if (globalunit_1.GlobalUnit.HttpFailed != null) {
                if (typeof result.statusText == 'object') {
                    let statusText = result.statusText;
                    globalunit_1.GlobalUnit.HttpFailed(result.ok, result.status, statusText['errno']);
                }
                else {
                    globalunit_1.GlobalUnit.HttpFailed(result.ok, result.status, 'ECONNREFUSED');
                }
            }
        }
    });
}
function simple_post(type, api_url, params, isshow, callback) {
    requests_1.request('post', api_url, params, params).then((result) => {
        if (globalunit_1.GlobalUnit.EndLoading != null) {
            globalunit_1.GlobalUnit.EndLoading();
        }
        if (result.ok) {
            const myObject = result.json();
            if (myObject['errcode'] > 0) {
                if (globalunit_1.GlobalUnit.HttpErr != null && isshow == true) {
                    globalunit_1.GlobalUnit.HttpErr(myObject['errcode'], myObject['errmsg']);
                }
                else {
                    let response = new type(myObject);
                    if (callback != null) {
                        callback(response);
                    }
                }
            }
            else {
                let response = new type(myObject);
                if (callback != null) {
                    callback(response);
                }
            }
        }
        else {
            if (globalunit_1.GlobalUnit.HttpFailed != null) {
                if (typeof result.statusText == 'object') {
                    let statusText = result.statusText;
                    globalunit_1.GlobalUnit.HttpFailed(result.ok, result.status, statusText['errno']);
                }
                else {
                    globalunit_1.GlobalUnit.HttpFailed(result.ok, result.status, 'ECONNREFUSED');
                }
            }
        }
    });
}
class GetRbacCheckrolecodeResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.GetRbacCheckrolecodeResponse = GetRbacCheckrolecodeResponse;
class GetRbacDelroleResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.GetRbacDelroleResponse = GetRbacDelroleResponse;
class GetRbacDelrouteResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.GetRbacDelrouteResponse = GetRbacDelrouteResponse;
class GetRbacDeluserResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.GetRbacDeluserResponse = GetRbacDeluserResponse;
class GetRbacGetcodeResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacGetCodeDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.GetRbacGetcodeResponse = GetRbacGetcodeResponse;
class RbacGetCodeDataObject {
    constructor(jsonObj) {
        this.code = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.code = myObject['code'];
        }
    }
    toMap() {
        let m = {};
        m.code = this.code;
        return m;
    }
}
exports.RbacGetCodeDataObject = RbacGetCodeDataObject;
class GetRbacGetrolebyuseridResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacGetRoleDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.GetRbacGetrolebyuseridResponse = GetRbacGetrolebyuseridResponse;
class RbacGetRoleDataObject {
    constructor(jsonObj) {
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.role = new RbacGetRoleObject(myObject['role']);
        }
    }
    toMap() {
        let m = {};
        if (this.role != null) {
            m.role = this.role.toMap();
        }
        return m;
    }
}
exports.RbacGetRoleDataObject = RbacGetRoleDataObject;
class RbacGetRoleObject {
    constructor(jsonObj) {
        this.id = '';
        this.role_code = '';
        this.role_name = '';
        this.description = '';
        this.created_at = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.role_code = myObject['role_code'];
            this.role_name = myObject['role_name'];
            this.description = myObject['description'];
            this.created_at = myObject['created_at'];
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.role_code = this.role_code;
        m.role_name = this.role_name;
        m.description = this.description;
        m.created_at = this.created_at;
        return m;
    }
}
exports.RbacGetRoleObject = RbacGetRoleObject;
class GetRbacGetroutelistResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacGetRouteListDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.GetRbacGetroutelistResponse = GetRbacGetroutelistResponse;
class RbacGetRouteListDataObject {
    constructor(jsonObj) {
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.routes = [];
            if (myObject['routes'] != null) {
                for (let entry of myObject['routes']) {
                    this.routes.push(new RbacGetRouteListRouteList(entry));
                }
            }
        }
    }
    toMap() {
        let m = {};
        m.routes = [];
        if (this.routes != null) {
            for (let entry of this.routes) {
                m.routes.push(entry.toMap());
            }
        }
        return m;
    }
}
exports.RbacGetRouteListDataObject = RbacGetRouteListDataObject;
class RbacGetRouteListRouteList {
    constructor(jsonObj) {
        this.id = '';
        this.parent_id = '';
        this.menu_type = 0;
        this.name = '';
        this.title = '';
        this.icon = '';
        this.sort = 0;
        this.component = '';
        this.redirect = '';
        this.perms = '';
        this.perms_type = 0;
        this.btn_status = 0;
        this.path = '';
        this.hideInBread = 0;
        this.hideInMenu = 0;
        this.notCache = 0;
        this.isMmin = 0;
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.parent_id = myObject['parent_id'];
            this.menu_type = myObject['menu_type'];
            this.name = myObject['name'];
            this.title = myObject['title'];
            this.icon = myObject['icon'];
            this.sort = myObject['sort'];
            this.component = myObject['component'];
            this.redirect = myObject['redirect'];
            this.perms = myObject['perms'];
            this.perms_type = myObject['perms_type'];
            this.btn_status = myObject['btn_status'];
            this.path = myObject['path'];
            this.hideInBread = myObject['hideInBread'];
            this.hideInMenu = myObject['hideInMenu'];
            this.notCache = myObject['notCache'];
            this.isMmin = myObject['isMmin'];
            this.children = [];
            if (myObject['children'] != null) {
                for (let entry of myObject['children']) {
                    this.children.push(new RbacGetRouteListChildrenList(entry));
                }
            }
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.parent_id = this.parent_id;
        m.menu_type = this.menu_type;
        m.name = this.name;
        m.title = this.title;
        m.icon = this.icon;
        m.sort = this.sort;
        m.component = this.component;
        m.redirect = this.redirect;
        m.perms = this.perms;
        m.perms_type = this.perms_type;
        m.btn_status = this.btn_status;
        m.path = this.path;
        m.hideInBread = this.hideInBread;
        m.hideInMenu = this.hideInMenu;
        m.notCache = this.notCache;
        m.isMmin = this.isMmin;
        m.children = [];
        if (this.children != null) {
            for (let entry of this.children) {
                m.children.push(entry.toMap());
            }
        }
        return m;
    }
}
exports.RbacGetRouteListRouteList = RbacGetRouteListRouteList;
class RbacGetRouteListChildrenList {
    constructor(jsonObj) {
        this.id = '';
        this.parent_id = '';
        this.menu_type = 0;
        this.name = '';
        this.title = '';
        this.icon = '';
        this.sort = 0;
        this.component = '';
        this.redirect = '';
        this.perms = '';
        this.perms_type = 0;
        this.path = '';
        this.btn_status = 0;
        this.hideInBread = 0;
        this.hideInMenu = 0;
        this.notCache = 0;
        this.isMmin = 0;
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.parent_id = myObject['parent_id'];
            this.menu_type = myObject['menu_type'];
            this.name = myObject['name'];
            this.title = myObject['title'];
            this.icon = myObject['icon'];
            this.sort = myObject['sort'];
            this.component = myObject['component'];
            this.redirect = myObject['redirect'];
            this.perms = myObject['perms'];
            this.perms_type = myObject['perms_type'];
            this.path = myObject['path'];
            this.btn_status = myObject['btn_status'];
            this.hideInBread = myObject['hideInBread'];
            this.hideInMenu = myObject['hideInMenu'];
            this.notCache = myObject['notCache'];
            this.isMmin = myObject['isMmin'];
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.parent_id = this.parent_id;
        m.menu_type = this.menu_type;
        m.name = this.name;
        m.title = this.title;
        m.icon = this.icon;
        m.sort = this.sort;
        m.component = this.component;
        m.redirect = this.redirect;
        m.perms = this.perms;
        m.perms_type = this.perms_type;
        m.path = this.path;
        m.btn_status = this.btn_status;
        m.hideInBread = this.hideInBread;
        m.hideInMenu = this.hideInMenu;
        m.notCache = this.notCache;
        m.isMmin = this.isMmin;
        return m;
    }
}
exports.RbacGetRouteListChildrenList = RbacGetRouteListChildrenList;
class GetRbacGetroutesbyroleidResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacGetRoleRoutesDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.GetRbacGetroutesbyroleidResponse = GetRbacGetroutesbyroleidResponse;
class RbacGetRoleRoutesDataObject {
    constructor(jsonObj) {
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.routes = [];
            if (myObject['routes'] != null) {
                for (let entry of myObject['routes']) {
                    this.routes.push(new RbacGetRoleRoutesRouteList(entry));
                }
            }
        }
    }
    toMap() {
        let m = {};
        m.routes = [];
        if (this.routes != null) {
            for (let entry of this.routes) {
                m.routes.push(entry.toMap());
            }
        }
        return m;
    }
}
exports.RbacGetRoleRoutesDataObject = RbacGetRoleRoutesDataObject;
class RbacGetRoleRoutesRouteList {
    constructor(jsonObj) {
        this.id = '';
        this.parent_id = '';
        this.title = '';
        this.checked = 0;
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.parent_id = myObject['parent_id'];
            this.title = myObject['title'];
            this.checked = myObject['checked'];
            this.children = [];
            if (myObject['children'] != null) {
                for (let entry of myObject['children']) {
                    this.children.push(new RbacGetRoleRoutesChildrenList(entry));
                }
            }
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.parent_id = this.parent_id;
        m.title = this.title;
        m.checked = this.checked;
        m.children = [];
        if (this.children != null) {
            for (let entry of this.children) {
                m.children.push(entry.toMap());
            }
        }
        return m;
    }
}
exports.RbacGetRoleRoutesRouteList = RbacGetRoleRoutesRouteList;
class RbacGetRoleRoutesChildrenList {
    constructor(jsonObj) {
        this.id = '';
        this.parent_id = '';
        this.title = '';
        this.checked = 0;
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.parent_id = myObject['parent_id'];
            this.title = myObject['title'];
            this.checked = myObject['checked'];
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.parent_id = this.parent_id;
        m.title = this.title;
        m.checked = this.checked;
        return m;
    }
}
exports.RbacGetRoleRoutesChildrenList = RbacGetRoleRoutesChildrenList;
class GetRbacGetuserpermissionResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacPermissionDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.GetRbacGetuserpermissionResponse = GetRbacGetuserpermissionResponse;
class RbacPermissionDataObject {
    constructor(jsonObj) {
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.routes = [];
            if (myObject['routes'] != null) {
                for (let entry of myObject['routes']) {
                    this.routes.push(new RbacPermissionRouteList(entry));
                }
            }
        }
    }
    toMap() {
        let m = {};
        m.routes = [];
        if (this.routes != null) {
            for (let entry of this.routes) {
                m.routes.push(entry.toMap());
            }
        }
        return m;
    }
}
exports.RbacPermissionDataObject = RbacPermissionDataObject;
class RbacPermissionRouteList {
    constructor(jsonObj) {
        this.id = '';
        this.parent_id = '';
        this.menu_type = 0;
        this.name = '';
        this.title = '';
        this.icon = '';
        this.sort = 0;
        this.component = '';
        this.redirect = '';
        this.perms = '';
        this.perms_type = 0;
        this.btn_status = 0;
        this.path = '';
        this.is_choose = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.parent_id = myObject['parent_id'];
            this.menu_type = myObject['menu_type'];
            this.name = myObject['name'];
            this.title = myObject['title'];
            this.icon = myObject['icon'];
            this.sort = myObject['sort'];
            this.component = myObject['component'];
            this.redirect = myObject['redirect'];
            this.perms = myObject['perms'];
            this.perms_type = myObject['perms_type'];
            this.btn_status = myObject['btn_status'];
            this.path = myObject['path'];
            this.is_choose = myObject['is_choose'];
            this.meta = new RbacPermissionRouteMetaObj(myObject['meta']);
            this.children = [];
            if (myObject['children'] != null) {
                for (let entry of myObject['children']) {
                    this.children.push(new RbacPermissionRouteChildrenList(entry));
                }
            }
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.parent_id = this.parent_id;
        m.menu_type = this.menu_type;
        m.name = this.name;
        m.title = this.title;
        m.icon = this.icon;
        m.sort = this.sort;
        m.component = this.component;
        m.redirect = this.redirect;
        m.perms = this.perms;
        m.perms_type = this.perms_type;
        m.btn_status = this.btn_status;
        m.path = this.path;
        m.is_choose = this.is_choose;
        if (this.meta != null) {
            m.meta = this.meta.toMap();
        }
        m.children = [];
        if (this.children != null) {
            for (let entry of this.children) {
                m.children.push(entry.toMap());
            }
        }
        return m;
    }
}
exports.RbacPermissionRouteList = RbacPermissionRouteList;
class RbacPermissionRouteMetaObj {
    constructor(jsonObj) {
        this.title = '';
        this.icon = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.title = myObject['title'];
            this.icon = myObject['icon'];
            this.hideInBread = new Bool(myObject['hideInBread']);
            this.hideInMenu = new Bool(myObject['hideInMenu']);
            this.notCache = new Bool(myObject['notCache']);
            this.isMmin = new Bool(myObject['isMmin']);
        }
    }
    toMap() {
        let m = {};
        m.title = this.title;
        m.icon = this.icon;
        if (this.hideInBread != null) {
            m.hideInBread = this.hideInBread.toMap();
        }
        if (this.hideInMenu != null) {
            m.hideInMenu = this.hideInMenu.toMap();
        }
        if (this.notCache != null) {
            m.notCache = this.notCache.toMap();
        }
        if (this.isMmin != null) {
            m.isMmin = this.isMmin.toMap();
        }
        return m;
    }
}
exports.RbacPermissionRouteMetaObj = RbacPermissionRouteMetaObj;
class Bool {
    constructor(jsonObj) {
        if (jsonObj != null) {
            const myObject = jsonObj;
        }
    }
    toMap() {
        let m = {};
        return m;
    }
}
exports.Bool = Bool;
class RbacPermissionRouteChildrenList {
    constructor(jsonObj) {
        this.id = '';
        this.parent_id = '';
        this.menu_type = 0;
        this.name = '';
        this.title = '';
        this.icon = '';
        this.sort = 0;
        this.component = '';
        this.redirect = '';
        this.perms = '';
        this.perms_type = 0;
        this.path = '';
        this.is_choose = '';
        this.btn_status = 0;
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.parent_id = myObject['parent_id'];
            this.menu_type = myObject['menu_type'];
            this.name = myObject['name'];
            this.title = myObject['title'];
            this.icon = myObject['icon'];
            this.sort = myObject['sort'];
            this.component = myObject['component'];
            this.redirect = myObject['redirect'];
            this.perms = myObject['perms'];
            this.perms_type = myObject['perms_type'];
            this.path = myObject['path'];
            this.is_choose = myObject['is_choose'];
            this.btn_status = myObject['btn_status'];
            this.meta = new RbacPermissionRouteChildrenMetaObj(myObject['meta']);
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.parent_id = this.parent_id;
        m.menu_type = this.menu_type;
        m.name = this.name;
        m.title = this.title;
        m.icon = this.icon;
        m.sort = this.sort;
        m.component = this.component;
        m.redirect = this.redirect;
        m.perms = this.perms;
        m.perms_type = this.perms_type;
        m.path = this.path;
        m.is_choose = this.is_choose;
        m.btn_status = this.btn_status;
        if (this.meta != null) {
            m.meta = this.meta.toMap();
        }
        return m;
    }
}
exports.RbacPermissionRouteChildrenList = RbacPermissionRouteChildrenList;
class RbacPermissionRouteChildrenMetaObj {
    constructor(jsonObj) {
        this.title = '';
        this.icon = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.title = myObject['title'];
            this.icon = myObject['icon'];
            this.hideInBread = new Bool(myObject['hideInBread']);
            this.hideInMenu = new Bool(myObject['hideInMenu']);
            this.notCache = new Bool(myObject['notCache']);
            this.isMmin = new Bool(myObject['isMmin']);
        }
    }
    toMap() {
        let m = {};
        m.title = this.title;
        m.icon = this.icon;
        if (this.hideInBread != null) {
            m.hideInBread = this.hideInBread.toMap();
        }
        if (this.hideInMenu != null) {
            m.hideInMenu = this.hideInMenu.toMap();
        }
        if (this.notCache != null) {
            m.notCache = this.notCache.toMap();
        }
        if (this.isMmin != null) {
            m.isMmin = this.isMmin.toMap();
        }
        return m;
    }
}
exports.RbacPermissionRouteChildrenMetaObj = RbacPermissionRouteChildrenMetaObj;
class GetRbacGetusersbyroleidResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacUserListDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.GetRbacGetusersbyroleidResponse = GetRbacGetusersbyroleidResponse;
class RbacUserListDataObject {
    constructor(jsonObj) {
        this.count = 0;
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.count = myObject['count'];
            this.users = [];
            if (myObject['users'] != null) {
                for (let entry of myObject['users']) {
                    this.users.push(new RbacUserListDataUserList(entry));
                }
            }
        }
    }
    toMap() {
        let m = {};
        m.count = this.count;
        m.users = [];
        if (this.users != null) {
            for (let entry of this.users) {
                m.users.push(entry.toMap());
            }
        }
        return m;
    }
}
exports.RbacUserListDataObject = RbacUserListDataObject;
class RbacUserListDataUserList {
    constructor(jsonObj) {
        this.id = '';
        this.username = '';
        this.avatar = '';
        this.realname = '';
        this.disable = '';
        this.root = 0;
        this.created_at = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.username = myObject['username'];
            this.avatar = myObject['avatar'];
            this.realname = myObject['realname'];
            this.disable = myObject['disable'];
            this.root = myObject['root'];
            this.created_at = myObject['created_at'];
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.username = this.username;
        m.avatar = this.avatar;
        m.realname = this.realname;
        m.disable = this.disable;
        m.root = this.root;
        m.created_at = this.created_at;
        return m;
    }
}
exports.RbacUserListDataUserList = RbacUserListDataUserList;
class PostRbacCreateroleResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.PostRbacCreateroleResponse = PostRbacCreateroleResponse;
class PostRbacCreaterouteResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.PostRbacCreaterouteResponse = PostRbacCreaterouteResponse;
class PostRbacDelrolebindResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.PostRbacDelrolebindResponse = PostRbacDelrolebindResponse;
class PostRbacGetrolesResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacGetRoleListDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.PostRbacGetrolesResponse = PostRbacGetrolesResponse;
class RbacGetRoleListDataObject {
    constructor(jsonObj) {
        this.count = 0;
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.count = myObject['count'];
            this.roles = [];
            if (myObject['roles'] != null) {
                for (let entry of myObject['roles']) {
                    this.roles.push(new RbacGetRoleList(entry));
                }
            }
        }
    }
    toMap() {
        let m = {};
        m.count = this.count;
        m.roles = [];
        if (this.roles != null) {
            for (let entry of this.roles) {
                m.roles.push(entry.toMap());
            }
        }
        return m;
    }
}
exports.RbacGetRoleListDataObject = RbacGetRoleListDataObject;
class RbacGetRoleList {
    constructor(jsonObj) {
        this.id = '';
        this.role_code = '';
        this.role_name = '';
        this.description = '';
        this.created_at = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.role_code = myObject['role_code'];
            this.role_name = myObject['role_name'];
            this.description = myObject['description'];
            this.created_at = myObject['created_at'];
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.role_code = this.role_code;
        m.role_name = this.role_name;
        m.description = this.description;
        m.created_at = this.created_at;
        return m;
    }
}
exports.RbacGetRoleList = RbacGetRoleList;
class PostRbacGetuserlistResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacUserListDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.PostRbacGetuserlistResponse = PostRbacGetuserlistResponse;
class PostRbacLoginResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacLoginDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.PostRbacLoginResponse = PostRbacLoginResponse;
class RbacLoginDataObject {
    constructor(jsonObj) {
        this.jwt = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.user = new RbacLoginUserObject(myObject['user']);
            this.jwt = myObject['jwt'];
        }
    }
    toMap() {
        let m = {};
        if (this.user != null) {
            m.user = this.user.toMap();
        }
        m.jwt = this.jwt;
        return m;
    }
}
exports.RbacLoginDataObject = RbacLoginDataObject;
class RbacLoginUserObject {
    constructor(jsonObj) {
        this.id = '';
        this.username = '';
        this.avatar = '';
        this.realname = '';
        this.disable = '';
        this.created_at = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
            this.username = myObject['username'];
            this.avatar = myObject['avatar'];
            this.realname = myObject['realname'];
            this.disable = myObject['disable'];
            this.created_at = myObject['created_at'];
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        m.username = this.username;
        m.avatar = this.avatar;
        m.realname = this.realname;
        m.disable = this.disable;
        m.created_at = this.created_at;
        return m;
    }
}
exports.RbacLoginUserObject = RbacLoginUserObject;
class PostRbacRegisterResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
            this.data = new RbacCreateUserDataObject(myObject['data']);
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        if (this.data != null) {
            m.data = this.data.toMap();
        }
        return m;
    }
}
exports.PostRbacRegisterResponse = PostRbacRegisterResponse;
class RbacCreateUserDataObject {
    constructor(jsonObj) {
        this.id = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.id = myObject['id'];
        }
    }
    toMap() {
        let m = {};
        m.id = this.id;
        return m;
    }
}
exports.RbacCreateUserDataObject = RbacCreateUserDataObject;
class PostRbacRolebindrouteResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.PostRbacRolebindrouteResponse = PostRbacRolebindrouteResponse;
class PostRbacRolebinduserResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.PostRbacRolebinduserResponse = PostRbacRolebinduserResponse;
class PostRbacUpdateroleResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.PostRbacUpdateroleResponse = PostRbacUpdateroleResponse;
class PostRbacUpdaterouteResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.PostRbacUpdaterouteResponse = PostRbacUpdaterouteResponse;
class PostRbacUpdateuserResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.PostRbacUpdateuserResponse = PostRbacUpdateuserResponse;
class PostRbacUserbindroleResponse {
    constructor(jsonObj) {
        this.errcode = 0;
        this.errmsg = '';
        if (jsonObj != null) {
            const myObject = jsonObj;
            this.errcode = myObject['errcode'];
            this.errmsg = myObject['errmsg'];
        }
    }
    toMap() {
        let m = {};
        m.errcode = this.errcode;
        m.errmsg = this.errmsg;
        return m;
    }
}
exports.PostRbacUserbindroleResponse = PostRbacUserbindroleResponse;
class Rbac {
    static GetRbacCheckrolecode(role_code, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            role_code: role_code,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/checkRoleCode';
        simple_get(GetRbacCheckrolecodeResponse, api_url, params, isshow, callback);
    }
    static GetRbacDelrole(role_id, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            role_id: role_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/delRole';
        simple_get(GetRbacDelroleResponse, api_url, params, isshow, callback);
    }
    static GetRbacDelroute(route_id, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            route_id: route_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/delRoute';
        simple_get(GetRbacDelrouteResponse, api_url, params, isshow, callback);
    }
    static GetRbacDeluser(user_id, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            user_id: user_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/delUser';
        simple_get(GetRbacDeluserResponse, api_url, params, isshow, callback);
    }
    static GetRbacGetcode(_t, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            _t: _t,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/getcode';
        simple_get(GetRbacGetcodeResponse, api_url, params, isshow, callback);
    }
    static GetRbacGetrolebyuserid(user_id, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            user_id: user_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/getRoleByUserId';
        simple_get(GetRbacGetrolebyuseridResponse, api_url, params, isshow, callback);
    }
    static GetRbacGetroutelist(callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/getRouteList';
        simple_get(GetRbacGetroutelistResponse, api_url, params, isshow, callback);
    }
    static GetRbacGetroutesbyroleid(role_id, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            role_id: role_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/getRoutesByRoleId';
        simple_get(GetRbacGetroutesbyroleidResponse, api_url, params, isshow, callback);
    }
    static GetRbacGetuserpermission(callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/getUserPermission';
        simple_get(GetRbacGetuserpermissionResponse, api_url, params, isshow, callback);
    }
    static GetRbacGetusersbyroleid(role_id, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            role_id: role_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/getUsersByRoleId';
        simple_get(GetRbacGetusersbyroleidResponse, api_url, params, isshow, callback);
    }
    static PostRbacCreaterole(description = '', role_code, role_name, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            description: description,
            role_code: role_code,
            role_name: role_name,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/createRole';
        simple_post(PostRbacCreateroleResponse, api_url, params, isshow, callback);
    }
    static PostRbacCreateroute(btn_status, component, hideInBread, hideInMenu, icon, isMmin, ment_type, name, notCache, parent_id, path, perms, perms_type, redirect, sort, title, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            btn_status: btn_status,
            component: component,
            hideInBread: hideInBread,
            hideInMenu: hideInMenu,
            icon: icon,
            isMmin: isMmin,
            ment_type: ment_type,
            name: name,
            notCache: notCache,
            parent_id: parent_id,
            path: path,
            perms: perms,
            perms_type: perms_type,
            redirect: redirect,
            sort: sort,
            title: title,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/createRoute';
        simple_post(PostRbacCreaterouteResponse, api_url, params, isshow, callback);
    }
    static PostRbacDelrolebind(role_id, user_id, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            role_id: role_id,
            user_id: user_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/delRoleBind';
        simple_post(PostRbacDelrolebindResponse, api_url, params, isshow, callback);
    }
    static PostRbacGetroles(limit = 10, page = 1, role_code = '', role_name = '', callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            limit: limit,
            page: page,
            role_code: role_code,
            role_name: role_name,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/getRoles';
        simple_post(PostRbacGetrolesResponse, api_url, params, isshow, callback);
    }
    static PostRbacGetuserlist(limit = 10, page = 1, realname = '', username = '', callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            limit: limit,
            page: page,
            realname: realname,
            username: username,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/getUserList';
        simple_post(PostRbacGetuserlistResponse, api_url, params, isshow, callback);
    }
    static PostRbacLogin(_t, code, password, username, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            _t: _t,
            code: code,
            password: password,
            username: username,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/login';
        simple_post(PostRbacLoginResponse, api_url, params, isshow, callback);
    }
    static PostRbacRegister(avatar, password, realname, root, username, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            avatar: avatar,
            password: password,
            realname: realname,
            root: root,
            username: username,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/register';
        simple_post(PostRbacRegisterResponse, api_url, params, isshow, callback);
    }
    static PostRbacRolebindroute(role_id, routes, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            role_id: role_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        if (true) {
            params.routes = [];
            params.routes = routes;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/roleBindRoute';
        simple_post(PostRbacRolebindrouteResponse, api_url, params, isshow, callback);
    }
    static PostRbacRolebinduser(role_id, users, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            role_id: role_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        if (true) {
            params.users = [];
            params.users = users;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/roleBindUser';
        simple_post(PostRbacRolebinduserResponse, api_url, params, isshow, callback);
    }
    static PostRbacUpdaterole(description = '', role_id, role_name, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            description: description,
            role_id: role_id,
            role_name: role_name,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/updateRole';
        simple_post(PostRbacUpdateroleResponse, api_url, params, isshow, callback);
    }
    static PostRbacUpdateroute(btn_status, component, hideInBread, hideInMenu, icon, isMmin, ment_type, name, notCache, parent_id, path, perms, perms_type, redirect, route_id, sort, title, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            btn_status: btn_status,
            component: component,
            hideInBread: hideInBread,
            hideInMenu: hideInMenu,
            icon: icon,
            isMmin: isMmin,
            ment_type: ment_type,
            name: name,
            notCache: notCache,
            parent_id: parent_id,
            path: path,
            perms: perms,
            perms_type: perms_type,
            redirect: redirect,
            route_id: route_id,
            sort: sort,
            title: title,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/updateRoute';
        simple_post(PostRbacUpdaterouteResponse, api_url, params, isshow, callback);
    }
    static PostRbacUpdateuser(avatar, realname, root, user_id, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            avatar: avatar,
            realname: realname,
            root: root,
            user_id: user_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/updateUser';
        simple_post(PostRbacUpdateuserResponse, api_url, params, isshow, callback);
    }
    static PostRbacUserbindrole(role_id, user_id, callback, loading = true, isshow = true) {
        if (globalunit_1.GlobalUnit.BeginLoading != null && loading == true) {
            globalunit_1.GlobalUnit.BeginLoading();
        }
        let params = {
            role_id: role_id,
            user_id: user_id,
            jwt: globalunit_1.GlobalUnit.JWT_STR,
        };
        if (globalunit_1.GlobalUnit.APP_NAME != null) {
            params.app_name = globalunit_1.GlobalUnit.APP_NAME;
        }
        let base_url = globalunit_1.GlobalUnit.BASE_URL;
        if (utils_1.endsWith(base_url, '/')) {
            base_url = base_url.slice(0, -1);
        }
        let api_url = base_url + '/rbac/userBindRole';
        simple_post(PostRbacUserbindroleResponse, api_url, params, isshow, callback);
    }
}
exports.Rbac = Rbac;
