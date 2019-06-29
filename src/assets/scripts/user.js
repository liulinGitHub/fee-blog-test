//获取当前token
export const getToken = function () {
  let _user = localStorage.getItem('blog_login_token');
  return _user;
};

//清除当前token、rememberMe（当前登录状态）
export const clearToken = function () {
  localStorage.removeItem("blog_login_rememberMe");
  localStorage.removeItem("blog_login_token");
};

//判断是否登录
export const isLogin = function () {

  if (getToken()) {
    return getToken();
  } else {
    // 清除token;
    clearToken();
    return false;
  }
};
