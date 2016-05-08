module.exports = {
    setUp: function (appId, callback) {
        cordova.exec(
            callback,
            function (errMsg) {
                console.log("ERROR:", errMsg);
            },
            "VunglePlugin",
            "setUp", [appId]
        );
    },
    adPlayable: function (callback) {
        cordova.exec(
            callback,
            function (errMsg) {
                console.log("ERROR:", errMsg);
            },
            "VunglePlugin",
            "adPlayable", []
        );
    },
    playAd: function (callback) {
        cordova.exec(
            callback,
            function (errMsg) {
                console.log("ERROR:", errMsg);
            },
            "VunglePlugin",
            "playAd", []
        );
    }
};