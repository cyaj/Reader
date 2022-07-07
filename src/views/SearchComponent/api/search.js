import axios from '@/utils/request'

/**
 * 搜索小说
 * @param {*} bookName 书名
 * @param {*} pageNum 分页参数
 * @returns
 */
export function getSearchResult(bookName, pageNum = 1) {
  return axios({
    method: 'get',
    url: `searchBook/search.aspx?key=${bookName}&page=${pageNum}&siteid=app2`
  })
}
