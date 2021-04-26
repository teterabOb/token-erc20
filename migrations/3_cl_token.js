const CLToken = artifacts.require("CLToken");

module.exports = function (deployer) {
  deployer.deploy(CLToken);
};
