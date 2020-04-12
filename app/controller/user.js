const Controller = require('egg').Controller

/**
* @Controller 用户管理
*/
class UserController extends Controller {
    constructor(ctx) {
        super(ctx) 
    }

    /**
    * @summary 创建用户
    * @description 创建用户，记录用户账户/密码/类型 
    * @router post /api/user
    * @request body createUserRequest *body
    * @response 200 baseResponse 创建成功
    */
    async create() {
        const { ctx, service } = this
        // 测试error_handler中间件
        // abc()
        // ctx.body = 'user ctrl'

        // 校验参数 
        ctx.validate(ctx.rule.createUserRequest)

        // 组装参数
        const payload = ctx.request.body || {}
        // 调用 Service 进行业务处理
        const res = await service.user.create(payload)

        // const res = {data: 'user ctrl'}
        // 设置响应内容和响应状态码 
        ctx.helper.success({ctx, res})
    } 
}

module.exports = UserController