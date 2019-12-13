import {GET, POST} from './http'

/**
 * @description: 获取xxx
 * @param {id}
 * @return:
 */
export function getDetail(data) {
  return GET('/page1/detail', data)
}

/**
 * @description: 提交xxx
 * @param {id}
 * @return:
 */
export function submitForm(data) {
  return POST('/page1/submit', data)
}