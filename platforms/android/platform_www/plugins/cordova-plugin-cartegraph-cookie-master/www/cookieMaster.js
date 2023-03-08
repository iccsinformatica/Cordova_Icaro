cordova.define("cordova-plugin-cartegraph-cookie-master.cookieMaster", function(require, exports, module) {
var cookieMaster = {

    getCookieValue: function(url, cookieName, successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'getCookieValue',
                    [url, cookieName]
        );
    },
    setCookieValue: function (url, cookieName, cookieValue, successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'setCookieValue',
                    [url, cookieName, cookieValue]
        );
    },
    clearCookies: function(successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'clearCookies',
                    []
        );
    },
    clearCookie: function(url, cookieName, successCallback, errorCallback) {
      cordova.exec(successCallback,
                  errorCallback,
                  'CookieMaster', 'clearCookie',
                  [url, cookieName]
      );
    },
};
module.exports = cookieMaster;

});
