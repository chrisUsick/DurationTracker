module.exports = function(Submission) {
    Submission.beforeRemote('create', function(ctx, modelInstance, next) {
    // add the userId to the Submission
    ctx.args.data.userId = ctx.req.accessToken.userId;
    next();
  });
};
