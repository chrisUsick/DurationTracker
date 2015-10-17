module.exports = function(server) {
  var User = server.models.User;
  var Submission = server.models.Submission;
  var ACL = server.models.ACL;
  // User.hasMany(Submission, {as:'submissions', foreignKey:''});
  // ACL.create({
  //   accessType: ACL.ALL,
  //   permission: ACL.ALLOW,
  //   principalType: ACL.ROLE,
  //   principalId: '$owner',
  //   model: 'User',
  //   property: '__get__submissions'
  // });
  // ACL.create({
  //   accessType: ACL.ALL,
  //   permission: ACL.ALLOW,
  //   principalType: ACL.ROLE,
  //   principalId: '$owner',
  //   model: 'User',
  //   property: '__create__submissions'
  // });
}
