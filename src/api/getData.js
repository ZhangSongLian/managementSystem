import fetch from "@utils/fetch"

//登录
export const login = data => fetch('/admin/login',data,'POST')