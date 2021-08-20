module.exports = options => {
  return async (ctx, next) => {
    const token = ctx.request.header.token;
    let decode;
    if (ctx.request.originalUrl == '/uploadImg') {
      await next();
    } else if (token) {
      try {
        // 解码token
        decode = ctx.app.jwt.verify(token, options.secret);
        ctx.state.username = decode;
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          message: error.message,
        };
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        message: '没有token',
      };
      return;
    }
  };
};