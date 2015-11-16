module.exports = function(router){
  router.get('/', function*(next) {
    try {
      var key = util.hashKey(this.params.license);
      this.body = yield licenseService.getLicenseByHash(key);
    } catch (error) {
      throw error;
    }
  });
};
