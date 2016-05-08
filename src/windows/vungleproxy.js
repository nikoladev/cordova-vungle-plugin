cordova.commandProxy.add("VunglePlugin", {
    /**
     * Pass app ID to Vungle. Should only be called once.
     * @param {Function} successCallback - callback when function succeeds. Not used here.
     * @param {Function} errorCallback - callback when function fails.
     * @param {String} appID - Vungle Application ID, found in the Vungle Dashboard
     */
    setUp: function (successCallback, errorCallback, appId) {
    	if (typeof appId !== 'string') {
    		errorCallback("appId should be of type String.");
    		return;
    	}
        VungleComponent.Vungle.setUp(appId);
    },
    adPlayable: function (successCallback, errorCallback) {
        var res = VungleComponent.Vungle.adPlayable;
        console.log(res);
        if (res)
            successCallback(res);
        else
            errorCallback("no ad yet playable, adPlayable === " + res);
        return res;
    },
    playAd: function (successCallback, errorCallback) {
        VungleComponent.Vungle.playAd();
    }
});

/*
cordova.commandProxy.add("EchoPlugin",{
    echo:function(successCallback, errorCallback, strInput) {
        var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
        if(res.indexOf("Error") == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    }
});
*/