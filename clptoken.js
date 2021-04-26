const CLToken = artifacts.require("CLToken");

module.exports = async function(callback){
    let meta = await CLToken.deployed();

    let name = await meta.name();

    let balance = await meta.balanceOf("0xB7105487e854422F3753E5ED26754E42A4b3Fb76");

    let totalSupply = await meta.totalSupply();

    console.log(meta.address);
    console.log(name);
    console.log(balance.toNumber());
    console.log(totalSupply.toNumber());

    callback();
}