/*
* 包含了n个操作local数据的工具函数模块
* */
const TODOS_KEY = 'todos_key'

// 获取localStorage中的todos
export const getTodos = function () {
  return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
}

// 设置localStorage中的todos
export const setTodos = function (todo) {
  return localStorage.setItem(TODOS_KEY, JSON.stringify(todo))
}
