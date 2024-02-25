import { request } from './requests';
import { GlobalUnit } from './globalunit';
import { endsWith, isWeAPP } from './utils';

export { GlobalUnit, isWeAPP };

function simple_get<T>(
  type: new (obj: Object) => T,
  api_url: string,
  params: any,
  isshow: boolean,
  callback: any
) {
  request('get', api_url, params).then((result) => {
    if (GlobalUnit.EndLoading != null) {
      GlobalUnit.EndLoading();
    }
    if (result.ok) {
      const myObject: { [key: string]: any } = result.json();

      if (myObject['errcode'] > 0) {
        if (GlobalUnit.HttpErr != null && isshow == true) {
          GlobalUnit.HttpErr(myObject['errcode'], myObject['errmsg']);
        } else {
          let response = new type(myObject);
          if (callback != null) {
            callback(response);
          }
        }
      } else {
        let response = new type(myObject);
        if (callback != null) {
          callback(response);
        }
      }
    } else {
      if (GlobalUnit.HttpFailed != null) {
        if (typeof result.statusText == 'object') {
          let statusText: { [key: string]: any } = result.statusText;
          GlobalUnit.HttpFailed(result.ok, result.status, statusText['errno']);
        } else {
          GlobalUnit.HttpFailed(result.ok, result.status, 'ECONNREFUSED');
        }
      }
    }
  });
}

function simple_post<T>(
  type: new (obj: Object) => T,
  api_url: string,
  params: any,
  isshow: boolean,
  callback: any
) {
  request('post', api_url, params, params).then((result) => {
    if (GlobalUnit.EndLoading != null) {
      GlobalUnit.EndLoading();
    }
    if (result.ok) {
      const myObject: { [key: string]: any } = result.json();

      if (myObject['errcode'] > 0) {
        if (GlobalUnit.HttpErr != null && isshow == true) {
          GlobalUnit.HttpErr(myObject['errcode'], myObject['errmsg']);
        } else {
          let response = new type(myObject);
          if (callback != null) {
            callback(response);
          }
        }
      } else {
        let response = new type(myObject);
        if (callback != null) {
          callback(response);
        }
      }
    } else {
      if (GlobalUnit.HttpFailed != null) {
        if (typeof result.statusText == 'object') {
          let statusText: { [key: string]: any } = result.statusText;
          GlobalUnit.HttpFailed(result.ok, result.status, statusText['errno']);
        } else {
          GlobalUnit.HttpFailed(result.ok, result.status, 'ECONNREFUSED');
        }
      }
    }
  });
}

/* 权限管理服务的请求结构类定义 */

export class GetRbacCheckrolecodeResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class GetRbacDelroleResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class GetRbacDelrouteResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class GetRbacDeluserResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class GetRbacGetcodeResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacGetCodeDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacGetCodeDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class RbacGetCodeDataObject {
  /**
   *    验证码
   */

  code: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.code = myObject['code'];
    }
  }

  toMap() {
    let m: any = {};

    m.code = this.code;

    return m;
  }
}

export class GetRbacGetrolebyuseridResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacGetRoleDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacGetRoleDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class RbacGetRoleDataObject {
  /**
   *    用户信息
   */

  role?: RbacGetRoleObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.role = new RbacGetRoleObject(myObject['role']);
    }
  }

  toMap() {
    let m: any = {};

    if (this.role != null) {
      m.role = this.role.toMap();
    }

    return m;
  }
}

export class RbacGetRoleObject {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    角色code
   */

  role_code: string = '';

  /**
   *    角色名称
   */

  role_name: string = '';

  /**
   *    描述
   */

  description: string = '';

  /**
   *    创建时间
   */

  created_at: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.id = myObject['id'];

      this.role_code = myObject['role_code'];

      this.role_name = myObject['role_name'];

      this.description = myObject['description'];

      this.created_at = myObject['created_at'];
    }
  }

  toMap() {
    let m: any = {};

    m.id = this.id;

    m.role_code = this.role_code;

    m.role_name = this.role_name;

    m.description = this.description;

    m.created_at = this.created_at;

    return m;
  }
}

export class GetRbacGetroutelistResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacGetRouteListDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacGetRouteListDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class RbacGetRouteListDataObject {
  /**
   *    用户信息
   */

  routes?: RbacGetRouteListRouteList[];

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.routes = [];
      if (myObject['routes'] != null) {
        for (let entry of myObject['routes']) {
          this.routes.push(new RbacGetRouteListRouteList(entry));
        }
      }
    }
  }

  toMap() {
    let m: any = {};

    m.routes = [];
    if (this.routes != null) {
      for (let entry of this.routes) {
        m.routes.push(entry.toMap());
      }
    }

    return m;
  }
}

export class RbacGetRouteListRouteList {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    父级ID
   */

  parent_id: string = '';

  /**
   *    菜单类型
   */

  menu_type: number = 0;

  /**
   *    名称
   */

  name: string = '';

  /**
   *    标题
   */

  title: string = '';

  /**
   *    icon
   */

  icon: string = '';

  /**
   *    排序
   */

  sort: number = 0;

  /**
   *    组件
   */

  component: string = '';

  /**
   *    跳转路由
   */

  redirect: string = '';

  /**
   *    授权标识
   */

  perms: string = '';

  /**
   *    权限策略
   */

  perms_type: number = 0;

  /**
   *    按钮权限状态
   */

  btn_status: number = 0;

  /**
   *    PATH
   */

  path: string = '';

  /**
   *    是否显示面包屑
   */

  hideInBread: number = 0;

  /**
   *    是否隐藏菜单
   */

  hideInMenu: number = 0;

  /**
   *    是否缓存
   */

  notCache: number = 0;

  /**
   *    是否微应用
   */

  isMmin: number = 0;

  /**
   *    下级菜单
   */

  children?: RbacGetRouteListChildrenList[];

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

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
    let m: any = {};

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

export class RbacGetRouteListChildrenList {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    父级ID
   */

  parent_id: string = '';

  /**
   *    菜单类型
   */

  menu_type: number = 0;

  /**
   *    名称
   */

  name: string = '';

  /**
   *    标题
   */

  title: string = '';

  /**
   *    icon
   */

  icon: string = '';

  /**
   *    排序
   */

  sort: number = 0;

  /**
   *    组件
   */

  component: string = '';

  /**
   *    跳转路由
   */

  redirect: string = '';

  /**
   *    授权标识
   */

  perms: string = '';

  /**
   *    权限策略
   */

  perms_type: number = 0;

  /**
   *    PATH
   */

  path: string = '';

  /**
   *    按钮权限状态
   */

  btn_status: number = 0;

  /**
   *    是否显示面包屑
   */

  hideInBread: number = 0;

  /**
   *    是否隐藏菜单
   */

  hideInMenu: number = 0;

  /**
   *    是否缓存
   */

  notCache: number = 0;

  /**
   *    是否微应用
   */

  isMmin: number = 0;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

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
    let m: any = {};

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

export class GetRbacGetroutesbyroleidResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacGetRoleRoutesDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacGetRoleRoutesDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class RbacGetRoleRoutesDataObject {
  /**
   *    用户信息
   */

  routes?: RbacGetRoleRoutesRouteList[];

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.routes = [];
      if (myObject['routes'] != null) {
        for (let entry of myObject['routes']) {
          this.routes.push(new RbacGetRoleRoutesRouteList(entry));
        }
      }
    }
  }

  toMap() {
    let m: any = {};

    m.routes = [];
    if (this.routes != null) {
      for (let entry of this.routes) {
        m.routes.push(entry.toMap());
      }
    }

    return m;
  }
}

export class RbacGetRoleRoutesRouteList {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    父级ID
   */

  parent_id: string = '';

  /**
   *    标题
   */

  title: string = '';

  /**
   *    是否选择
   */

  checked: number = 0;

  /**
   *    下级菜单
   */

  children?: RbacGetRoleRoutesChildrenList[];

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

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
    let m: any = {};

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

export class RbacGetRoleRoutesChildrenList {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    父级ID
   */

  parent_id: string = '';

  /**
   *    标题
   */

  title: string = '';

  /**
   *    是否选择
   */

  checked: number = 0;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.id = myObject['id'];

      this.parent_id = myObject['parent_id'];

      this.title = myObject['title'];

      this.checked = myObject['checked'];
    }
  }

  toMap() {
    let m: any = {};

    m.id = this.id;

    m.parent_id = this.parent_id;

    m.title = this.title;

    m.checked = this.checked;

    return m;
  }
}

export class GetRbacGetuserpermissionResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacPermissionDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacPermissionDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class RbacPermissionDataObject {
  /**
   *    用户信息
   */

  routes?: RbacPermissionRouteList[];

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.routes = [];
      if (myObject['routes'] != null) {
        for (let entry of myObject['routes']) {
          this.routes.push(new RbacPermissionRouteList(entry));
        }
      }
    }
  }

  toMap() {
    let m: any = {};

    m.routes = [];
    if (this.routes != null) {
      for (let entry of this.routes) {
        m.routes.push(entry.toMap());
      }
    }

    return m;
  }
}

export class RbacPermissionRouteList {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    父级ID
   */

  parent_id: string = '';

  /**
   *    菜单类型
   */

  menu_type: number = 0;

  /**
   *    名称
   */

  name: string = '';

  /**
   *    标题
   */

  title: string = '';

  /**
   *    icon
   */

  icon: string = '';

  /**
   *    排序
   */

  sort: number = 0;

  /**
   *    组件
   */

  component: string = '';

  /**
   *    跳转路由
   */

  redirect: string = '';

  /**
   *    授权标识
   */

  perms: string = '';

  /**
   *    权限策略
   */

  perms_type: number = 0;

  /**
   *    按钮权限状态
   */

  btn_status: number = 0;

  /**
   *    PATH
   */

  path: string = '';

  /**
   *    是否选择
   */

  is_choose: string = '';

  /**
   *    meta数据
   */

  meta?: RbacPermissionRouteMetaObj;

  /**
   *    下级菜单
   */

  children?: RbacPermissionRouteChildrenList[];

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

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
    let m: any = {};

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

export class RbacPermissionRouteMetaObj {
  /**
   *    标题
   */

  title: string = '';

  /**
   *    图标
   */

  icon: string = '';

  /**
   *    是否显示面包屑
   */

  hideInBread?: Bool;

  /**
   *    是否隐藏菜单
   */

  hideInMenu?: Bool;

  /**
   *    是否缓存
   */

  notCache?: Bool;

  /**
   *    是否微应用
   */

  isMmin?: Bool;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.title = myObject['title'];

      this.icon = myObject['icon'];

      this.hideInBread = new Bool(myObject['hideInBread']);

      this.hideInMenu = new Bool(myObject['hideInMenu']);

      this.notCache = new Bool(myObject['notCache']);

      this.isMmin = new Bool(myObject['isMmin']);
    }
  }

  toMap() {
    let m: any = {};

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

export class Bool {
  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;
    }
  }

  toMap() {
    let m: any = {};

    return m;
  }
}

export class RbacPermissionRouteChildrenList {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    父级ID
   */

  parent_id: string = '';

  /**
   *    菜单类型
   */

  menu_type: number = 0;

  /**
   *    名称
   */

  name: string = '';

  /**
   *    标题
   */

  title: string = '';

  /**
   *    icon
   */

  icon: string = '';

  /**
   *    排序
   */

  sort: number = 0;

  /**
   *    组件
   */

  component: string = '';

  /**
   *    跳转路由
   */

  redirect: string = '';

  /**
   *    授权标识
   */

  perms: string = '';

  /**
   *    权限策略
   */

  perms_type: number = 0;

  /**
   *    PATH
   */

  path: string = '';

  /**
   *    是否选择
   */

  is_choose: string = '';

  /**
   *    按钮权限状态
   */

  btn_status: number = 0;

  /**
   *    meta数据
   */

  meta?: RbacPermissionRouteChildrenMetaObj;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

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
    let m: any = {};

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

export class RbacPermissionRouteChildrenMetaObj {
  /**
   *    标题
   */

  title: string = '';

  /**
   *    图标
   */

  icon: string = '';

  /**
   *    是否显示面包屑
   */

  hideInBread?: Bool;

  /**
   *    是否隐藏菜单
   */

  hideInMenu?: Bool;

  /**
   *    是否缓存
   */

  notCache?: Bool;

  /**
   *    是否微应用
   */

  isMmin?: Bool;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.title = myObject['title'];

      this.icon = myObject['icon'];

      this.hideInBread = new Bool(myObject['hideInBread']);

      this.hideInMenu = new Bool(myObject['hideInMenu']);

      this.notCache = new Bool(myObject['notCache']);

      this.isMmin = new Bool(myObject['isMmin']);
    }
  }

  toMap() {
    let m: any = {};

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

export class GetRbacGetusersbyroleidResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacUserListDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacUserListDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class RbacUserListDataObject {
  /**
   *    数量
   */

  count: number = 0;

  /**
   *    用户信息
   */

  users?: RbacUserListDataUserList[];

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

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
    let m: any = {};

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

export class RbacUserListDataUserList {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    账户
   */

  username: string = '';

  /**
   *    头像
   */

  avatar: string = '';

  /**
   *    真实姓名
   */

  realname: string = '';

  /**
   *    是否有效
   */

  disable: string = '';

  /**
   *    管理类型
   */

  root: number = 0;

  /**
   *    创建时间
   */

  created_at: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

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
    let m: any = {};

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

export class PostRbacCreateroleResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class PostRbacCreaterouteResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class PostRbacDelrolebindResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class PostRbacGetrolesResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacGetRoleListDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacGetRoleListDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class RbacGetRoleListDataObject {
  /**
   *    数量
   */

  count: number = 0;

  /**
   *    用户信息
   */

  roles?: RbacGetRoleList[];

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

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
    let m: any = {};

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

export class RbacGetRoleList {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    角色code
   */

  role_code: string = '';

  /**
   *    角色名称
   */

  role_name: string = '';

  /**
   *    描述
   */

  description: string = '';

  /**
   *    创建时间
   */

  created_at: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.id = myObject['id'];

      this.role_code = myObject['role_code'];

      this.role_name = myObject['role_name'];

      this.description = myObject['description'];

      this.created_at = myObject['created_at'];
    }
  }

  toMap() {
    let m: any = {};

    m.id = this.id;

    m.role_code = this.role_code;

    m.role_name = this.role_name;

    m.description = this.description;

    m.created_at = this.created_at;

    return m;
  }
}

export class PostRbacGetuserlistResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacUserListDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacUserListDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class PostRbacLoginResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacLoginDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacLoginDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class RbacLoginDataObject {
  /**
   *    用户信息
   */

  user?: RbacLoginUserObject;

  /**
   *    jwt
   */

  jwt: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.user = new RbacLoginUserObject(myObject['user']);

      this.jwt = myObject['jwt'];
    }
  }

  toMap() {
    let m: any = {};

    if (this.user != null) {
      m.user = this.user.toMap();
    }

    m.jwt = this.jwt;

    return m;
  }
}

export class RbacLoginUserObject {
  /**
   *    用户ID
   */

  id: string = '';

  /**
   *    账户
   */

  username: string = '';

  /**
   *    头像
   */

  avatar: string = '';

  /**
   *    真实姓名
   */

  realname: string = '';

  /**
   *    是否有效
   */

  disable: string = '';

  /**
   *    创建时间
   */

  created_at: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.id = myObject['id'];

      this.username = myObject['username'];

      this.avatar = myObject['avatar'];

      this.realname = myObject['realname'];

      this.disable = myObject['disable'];

      this.created_at = myObject['created_at'];
    }
  }

  toMap() {
    let m: any = {};

    m.id = this.id;

    m.username = this.username;

    m.avatar = this.avatar;

    m.realname = this.realname;

    m.disable = this.disable;

    m.created_at = this.created_at;

    return m;
  }
}

export class PostRbacRegisterResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  /**
   *    数据字段
   */

  data?: RbacCreateUserDataObject;

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];

      this.data = new RbacCreateUserDataObject(myObject['data']);
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    if (this.data != null) {
      m.data = this.data.toMap();
    }

    return m;
  }
}

export class RbacCreateUserDataObject {
  /**
   *    用户ID
   */

  id: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.id = myObject['id'];
    }
  }

  toMap() {
    let m: any = {};

    m.id = this.id;

    return m;
  }
}

export class PostRbacRolebindrouteResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class PostRbacRolebinduserResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class PostRbacUpdateroleResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class PostRbacUpdaterouteResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class PostRbacUpdateuserResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

export class PostRbacUserbindroleResponse {
  /**
   *    0:表示没有任何错误，非0表示有错误
   */

  errcode: number = 0;

  /**
   *    错误信息，当errcode为0时，此只为空
   */

  errmsg: string = '';

  constructor(jsonObj: Object) {
    //定义构造函数
    if (jsonObj != null) {
      const myObject: { [key: string]: any } = jsonObj;

      this.errcode = myObject['errcode'];

      this.errmsg = myObject['errmsg'];
    }
  }

  toMap() {
    let m: any = {};

    m.errcode = this.errcode;

    m.errmsg = this.errmsg;

    return m;
  }
}

/**
 * 权限管理服务器服务接口
 */
export class Rbac {
  /**
   *检查角色code是否重复
   *
   * @param role_code 角色code
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacCheckrolecode(
    role_code: string /*角色code*/,
    callback?: (response: GetRbacCheckrolecodeResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      role_code: role_code,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/checkRoleCode';

    //调用接口

    simple_get(GetRbacCheckrolecodeResponse, api_url, params, isshow, callback);
  }

  /**
   *删除角色
   *
   * @param role_id 角色id
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacDelrole(
    role_id: string /*角色id*/,
    callback?: (response: GetRbacDelroleResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      role_id: role_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/delRole';

    //调用接口

    simple_get(GetRbacDelroleResponse, api_url, params, isshow, callback);
  }

  /**
   *删除路由
   *
   * @param route_id 路由id
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacDelroute(
    route_id: string /*路由id*/,
    callback?: (response: GetRbacDelrouteResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      route_id: route_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/delRoute';

    //调用接口

    simple_get(GetRbacDelrouteResponse, api_url, params, isshow, callback);
  }

  /**
   *删除账号
   *
   * @param user_id 账户ID
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacDeluser(
    user_id: string /*账户ID*/,
    callback?: (response: GetRbacDeluserResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      user_id: user_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/delUser';

    //调用接口

    simple_get(GetRbacDeluserResponse, api_url, params, isshow, callback);
  }

  /**
   *获取验证码
   *
   * @param _t 时间轴
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacGetcode(
    _t: string /*时间轴*/,
    callback?: (response: GetRbacGetcodeResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      _t: _t,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/getcode';

    //调用接口

    simple_get(GetRbacGetcodeResponse, api_url, params, isshow, callback);
  }

  /**
   *增通过用户id获取角色
   *
   * @param user_id 用户id
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacGetrolebyuserid(
    user_id: string /*用户id*/,
    callback?: (response: GetRbacGetrolebyuseridResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      user_id: user_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/getRoleByUserId';

    //调用接口

    simple_get(
      GetRbacGetrolebyuseridResponse,
      api_url,
      params,
      isshow,
      callback
    );
  }

  /**
   *获取全部路由列表
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacGetroutelist(
    callback?: (response: GetRbacGetroutelistResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/getRouteList';

    //调用接口

    simple_get(GetRbacGetroutelistResponse, api_url, params, isshow, callback);
  }

  /**
   *获取角色授权信息
   *
   * @param role_id 角色id
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacGetroutesbyroleid(
    role_id: string /*角色id*/,
    callback?: (response: GetRbacGetroutesbyroleidResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      role_id: role_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/getRoutesByRoleId';

    //调用接口

    simple_get(
      GetRbacGetroutesbyroleidResponse,
      api_url,
      params,
      isshow,
      callback
    );
  }

  /**
   *获取用户路由权限
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacGetuserpermission(
    callback?: (response: GetRbacGetuserpermissionResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/getUserPermission';

    //调用接口

    simple_get(
      GetRbacGetuserpermissionResponse,
      api_url,
      params,
      isshow,
      callback
    );
  }

  /**
   *获取角色下的用户列表
   *
   * @param role_id 角色id
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static GetRbacGetusersbyroleid(
    role_id: string /*角色id*/,
    callback?: (response: GetRbacGetusersbyroleidResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      role_id: role_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/getUsersByRoleId';

    //调用接口

    simple_get(
      GetRbacGetusersbyroleidResponse,
      api_url,
      params,
      isshow,
      callback
    );
  }

  /**
   *创建角色
   *
   * @param description 描述
   *
   * @param role_code 角色code
   *
   * @param role_name 角色名称
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacCreaterole(
    description: string = '' /*描述*/,
    role_code: string /*角色code*/,
    role_name: string /*角色名称*/,
    callback?: (response: PostRbacCreateroleResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      description: description,

      role_code: role_code,

      role_name: role_name,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/createRole';

    //调用接口

    simple_post(PostRbacCreateroleResponse, api_url, params, isshow, callback);
  }

  /**
   *创建路由
   *
   * @param btn_status 按钮权限状态
   *
   * @param component 组件
   *
   * @param hideInBread 是否展示面包屑
   *
   * @param hideInMenu 是否隐藏菜单
   *
   * @param icon 图标
   *
   * @param isMmin 是否微应用
   *
   * @param ment_type 菜单类型
   *
   * @param name 名称
   *
   * @param notCache 是否缓存
   *
   * @param parent_id 父级ID
   *
   * @param path 路径
   *
   * @param perms 权限参数
   *
   * @param perms_type 权限策略
   *
   * @param redirect 跳转地址
   *
   * @param sort 排序
   *
   * @param title 标题
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacCreateroute(
    btn_status: number /*按钮权限状态*/,
    component: string /*组件*/,
    hideInBread: number /*是否展示面包屑*/,
    hideInMenu: number /*是否隐藏菜单*/,
    icon: string /*图标*/,
    isMmin: number /*是否微应用*/,
    ment_type: number /*菜单类型*/,
    name: string /*名称*/,
    notCache: number /*是否缓存*/,
    parent_id: string /*父级ID*/,
    path: string /*路径*/,
    perms: string /*权限参数*/,
    perms_type: number /*权限策略*/,
    redirect: string /*跳转地址*/,
    sort: number /*排序*/,
    title: string /*标题*/,
    callback?: (response: PostRbacCreaterouteResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
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

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/createRoute';

    //调用接口

    simple_post(PostRbacCreaterouteResponse, api_url, params, isshow, callback);
  }

  /**
   *解除用户角色绑定
   *
   * @param role_id 角色id
   *
   * @param user_id 用户ID
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacDelrolebind(
    role_id: string /*角色id*/,
    user_id: string /*用户ID*/,
    callback?: (response: PostRbacDelrolebindResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      role_id: role_id,

      user_id: user_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/delRoleBind';

    //调用接口

    simple_post(PostRbacDelrolebindResponse, api_url, params, isshow, callback);
  }

  /**
   *获取角色列表
   *
   * @param limit 每页条数
   *
   * @param page 页数
   *
   * @param role_code 角色code
   *
   * @param role_name 角色名称
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacGetroles(
    limit: number = 10 /*每页条数*/,
    page: number = 1 /*页数*/,
    role_code: string = '' /*角色code*/,
    role_name: string = '' /*角色名称*/,
    callback?: (response: PostRbacGetrolesResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      limit: limit,

      page: page,

      role_code: role_code,

      role_name: role_name,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/getRoles';

    //调用接口

    simple_post(PostRbacGetrolesResponse, api_url, params, isshow, callback);
  }

  /**
   *获取管理员用户列表
   *
   * @param limit 每页条数
   *
   * @param page 页数
   *
   * @param realname 姓名
   *
   * @param username 账号
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacGetuserlist(
    limit: number = 10 /*每页条数*/,
    page: number = 1 /*页数*/,
    realname: string = '' /*姓名*/,
    username: string = '' /*账号*/,
    callback?: (response: PostRbacGetuserlistResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      limit: limit,

      page: page,

      realname: realname,

      username: username,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/getUserList';

    //调用接口

    simple_post(PostRbacGetuserlistResponse, api_url, params, isshow, callback);
  }

  /**
   *登录
   *
   * @param _t 时间轴
   *
   * @param code 验证码
   *
   * @param password 密码
   *
   * @param username 账号
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacLogin(
    _t: string /*时间轴*/,
    code: string /*验证码*/,
    password: string /*密码*/,
    username: string /*账号*/,
    callback?: (response: PostRbacLoginResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      _t: _t,

      code: code,

      password: password,

      username: username,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/login';

    //调用接口

    simple_post(PostRbacLoginResponse, api_url, params, isshow, callback);
  }

  /**
   *创建账号
   *
   * @param avatar 头像
   *
   * @param password 密码
   *
   * @param realname 真实姓名
   *
   * @param root 管理员类型
   *
   * @param username 账号
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacRegister(
    avatar: string /*头像*/,
    password: string /*密码*/,
    realname: string /*真实姓名*/,
    root: number /*管理员类型*/,
    username: string /*账号*/,
    callback?: (response: PostRbacRegisterResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      avatar: avatar,

      password: password,

      realname: realname,

      root: root,

      username: username,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/register';

    //调用接口

    simple_post(PostRbacRegisterResponse, api_url, params, isshow, callback);
  }

  /**
   *角色授权
   *
   * @param role_id 角色id
   *
   * @param routes 路由id列表
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacRolebindroute(
    role_id: string /*角色id*/,
    routes: string[] /*路由id列表*/,
    callback?: (response: PostRbacRolebindrouteResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      role_id: role_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    if (true) {
      params.routes = [];

      params.routes = routes;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/roleBindRoute';

    //调用接口

    simple_post(
      PostRbacRolebindrouteResponse,
      api_url,
      params,
      isshow,
      callback
    );
  }

  /**
   *角色批量绑定用户
   *
   * @param role_id 角色id
   *
   * @param users 用户ID列表
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacRolebinduser(
    role_id: string /*角色id*/,
    users: string[] /*用户ID列表*/,
    callback?: (response: PostRbacRolebinduserResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      role_id: role_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    if (true) {
      params.users = [];

      params.users = users;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/roleBindUser';

    //调用接口

    simple_post(
      PostRbacRolebinduserResponse,
      api_url,
      params,
      isshow,
      callback
    );
  }

  /**
   *编辑角色
   *
   * @param description 描述
   *
   * @param role_id 角色id
   *
   * @param role_name 角色名称
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacUpdaterole(
    description: string = '' /*描述*/,
    role_id: string /*角色id*/,
    role_name: string /*角色名称*/,
    callback?: (response: PostRbacUpdateroleResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      description: description,

      role_id: role_id,

      role_name: role_name,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/updateRole';

    //调用接口

    simple_post(PostRbacUpdateroleResponse, api_url, params, isshow, callback);
  }

  /**
   *编辑路由
   *
   * @param btn_status 按钮权限状态
   *
   * @param component 组件
   *
   * @param hideInBread 是否展示面包屑
   *
   * @param hideInMenu 是否隐藏菜单
   *
   * @param icon 图标
   *
   * @param isMmin 是否微应用
   *
   * @param ment_type 菜单类型
   *
   * @param name 名称
   *
   * @param notCache 是否缓存
   *
   * @param parent_id 父级ID
   *
   * @param path 路径
   *
   * @param perms 权限参数
   *
   * @param perms_type 权限策略
   *
   * @param redirect 跳转地址
   *
   * @param route_id 路由id
   *
   * @param sort 排序
   *
   * @param title 标题
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacUpdateroute(
    btn_status: number /*按钮权限状态*/,
    component: string /*组件*/,
    hideInBread: number /*是否展示面包屑*/,
    hideInMenu: number /*是否隐藏菜单*/,
    icon: string /*图标*/,
    isMmin: number /*是否微应用*/,
    ment_type: number /*菜单类型*/,
    name: string /*名称*/,
    notCache: number /*是否缓存*/,
    parent_id: string /*父级ID*/,
    path: string /*路径*/,
    perms: string /*权限参数*/,
    perms_type: number /*权限策略*/,
    redirect: string /*跳转地址*/,
    route_id: string /*路由id*/,
    sort: number /*排序*/,
    title: string /*标题*/,
    callback?: (response: PostRbacUpdaterouteResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
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

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/updateRoute';

    //调用接口

    simple_post(PostRbacUpdaterouteResponse, api_url, params, isshow, callback);
  }

  /**
   *创建账号
   *
   * @param avatar 头像
   *
   * @param realname 真实姓名
   *
   * @param root 管理员类型
   *
   * @param user_id 账户ID
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacUpdateuser(
    avatar: string /*头像*/,
    realname: string /*真实姓名*/,
    root: number /*管理员类型*/,
    user_id: string /*账户ID*/,
    callback?: (response: PostRbacUpdateuserResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      avatar: avatar,

      realname: realname,

      root: root,

      user_id: user_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/updateUser';

    //调用接口

    simple_post(PostRbacUpdateuserResponse, api_url, params, isshow, callback);
  }

  /**
   *用户绑定唯一角色
   *
   * @param role_id 角色id
   *
   * @param user_id 用户ID
   *
   * @param loading 是否显示loading条
   * @param isshow  是否显示errmsg
   * @param callback 请求回调函数
   */
  static PostRbacUserbindrole(
    role_id: string /*角色id*/,
    user_id: string /*用户ID*/,
    callback?: (response: PostRbacUserbindroleResponse) => void,
    loading: boolean = true /*是否显示loading*/,
    isshow: boolean = true /*是否显示errmsg*/
  ) {
    if (GlobalUnit.BeginLoading != null && loading == true) {
      GlobalUnit.BeginLoading();
    }

    let params: any = {
      role_id: role_id,

      user_id: user_id,

      jwt: GlobalUnit.JWT_STR,
    };

    if (GlobalUnit.APP_NAME != null) {
      params.app_name = GlobalUnit.APP_NAME;
    }

    let base_url = GlobalUnit.BASE_URL;

    //如果之前的配置的地址最后是以/结尾的需要去掉
    if (endsWith(base_url, '/')) {
      base_url = base_url.slice(0, -1);
    }
    let api_url = base_url + '/rbac/userBindRole';

    //调用接口

    simple_post(
      PostRbacUserbindroleResponse,
      api_url,
      params,
      isshow,
      callback
    );
  }
}
