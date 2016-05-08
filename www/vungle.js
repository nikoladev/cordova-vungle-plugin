var Vungle = {};

Vungle.setUp = function (appId, callback) {
    cordova.exec(
        callback,
        function (errMsg) {
            console.log("ERROR:", errMsg);
        },
        "VunglePlugin",
        "setUp",
        [appId]
    );
};

Vungle.adPlayable = function (callback) {
    cordova.exec(
        callback,
        function (errMsg) {
            console.log("ERROR:", errMsg);
        },
        "VunglePlugin",
        "adPlayable",
        []
    );
};

window.Vungle.playAd = function (callback) {
    cordova.exec(
        callback,
        function (errMsg) {
            console.log("ERROR:", errMsg);
        },
        "VunglePlugin",
        "playAd",
        []
    );
};

module.exports = Vungle;