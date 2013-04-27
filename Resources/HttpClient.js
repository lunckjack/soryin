function HttpClient() {}

HttpClient.req = function(options, params, success, error) {
    var serverURL = options.url, method = options.method, timeout = options.timeout;
    var xhr = Ti.Network.createHTTPClient();
    xhr.setTimeout(timeout);
    var json;
    xhr.onload = function() {
        Ti.API.info("Status Code: " + xhr.status);
        Ti.API.info("Set-Cookie: " + xhr.getResponseHeader("Set-Cookie"));
        Ti.API.info("responseText: " + xhr.responseText);
        try {
            if (200 == xhr.status) {
                if (this.responseText) {
                    json = JSON.parse(this.responseText);
                    success(json);
                }
            } else {
                Ti.API.error("Error code received from server: " + xhr);
                error(xhr);
            }
        } catch (e) {
            Ti.API.error("Exception processing response: " + e);
            error(xhr);
        }
    };
    xhr.onerror = function() {
        Ti.API.error("Login Request Error:");
        Ti.API.error("Status Code: " + xhr.status);
        Ti.API.error("Set-Cookie: " + xhr.getResponseHeader("Set-Cookie"));
        Ti.API.error("responseText: " + xhr.responseText);
        error(xhr);
        alert("requ error");
    };
    xhr.open(method, serverURL, false);
    xhr.send(params);
};

module.exports = HttpClient;