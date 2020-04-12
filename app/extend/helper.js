/**
 * helper方法实现统一响应格式 
 * Helper 函数用来提供一些实用的 utility 函数。
 * 它的作用在于我们可以将一些常用的动作抽离在 helper.js 里面成为一个独立的函数，
 * 这样可以用 JavaScript 来写复杂的逻辑，避免逻辑分散各处。
 * 另外还有一个好处是 Helper 这样一个简单的函数，可以让我们更容易 编写测试用例。
 * 框架内置了一些常用的 Helper 函数。我们也可以编写自定义的 Helper 函数。
 */

const moment = require('moment') // 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')

// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
    ctx.body = {
        code: 0,
        data: res,
        msg
    }
    ctx.status = 200
}