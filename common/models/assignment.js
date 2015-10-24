var Promise = require('bluebird');
module.exports = function(Assignment) {
  Assignment.observe('loaded', function(ctx, next) {
    if (ctx.instance) {
      var subs = ctx.instance.submissions();
      if (subs) {
        ctx.instance.averageDuration = getAverage(subs);
        next();
      } else {
        ctx.instance.submissions(function(err, subs) {
          ctx.instance.averageDuration = getAverage(subs);
          next();
        })
      }
    }
  });
};

function getAverage(subs) {
  var total = 0;
  subs.forEach(function(sub){
    total += sub.duration;
  })
  return total / subs.length;
}
