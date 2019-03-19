import ajax from './ajax'

const BASE = 'https://api.github.com'
// 请求搜索的api
export const reqSearch = searchName => ajax(`${BASE}/search/users?q=${searchName}`)
