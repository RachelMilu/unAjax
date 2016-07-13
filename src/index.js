;(function (window) {

    function ajax() {
        /*notice that the arguments may be [customOption] or [method, url, data, dataType]*/
        var options = formatOptions(arguments)
        return new Promise(function (resolve, reject) {
            /*check if the dataType is jsonp*/
            if ('jsonp' == options.dataType) {
                jsonp(options.url, resolve, reject)
                return
            }

            var xmlhttp = window.XMLHttpRequest ? (new XMLHttpRequest()) : (new ActiveXObject('Microsoft.XMLHTTP'))
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    var result
                    if ((xmlhttp.status >= 200 && xmlhttp.status < 300) || xmlhttp.status == 304 || (xmlhttp.status == 0 && protocol == 'file:')) {
                        //todo distinguish different code type
                        result = xmlhttp.responseText
                        resolve(result)
                    } else {
                        result = xmlhttp
                        reject(xmlhttp)
                    }
                }
            }
            xmlhttp.onerror = function (err) {
                //options.error && options.error(xmlhttp.responseText)
                reject(xmlhttp)
            }
            console.log(options)
            xmlhttp.open(options.method, options.url, options.async)

            /*set headers*/
            var headers = options.headers
            if (headers) {
                for (var headerKey in headers) {
                    xmlhttp.setRequestHeader(headerKey, headers[headerKey])
                }
            }

            if (options.contentType || (options.headers && options.headers['Content-Type']) || (options.contentType !== false && options.data && options.method.toUpperCase() != 'GET'))
                xmlhttp.setRequestHeader('Content-Type', options.contentType || (options.headers && options.headers['Content-Type']) || 'application/x-www-form-urlencoded')


            /*set xhrFields*/
            var xhrFields = options.xhrFields
            if (xhrFields) {
                for (var fieldKey in xhrFields) {
                    xmlhttp[fieldKey] = xhrFields[fieldKey]
                }
            }

            xmlhttp.send(options.data || '')

        })
    }

    function get(url, dataType) {
        return ajax('GET', url, null, dataType)
    }

    function post(url, data, dataType) {
        return ajax('POST', url, data, dataType)
    }

    function jsonp(url, resolve, reject) {
        var callbackName = 'callback' + Math.random().toString().slice(2, 8)
        window[callbackName] = function (data) {
            resolve(data)
            window[callbackName] = null
        }
        var script = document.createElement('script')
        script.setAttribute('src', url + '&callback=' + callbackName)
        script.addEventListener('load', function () {
            document.body.removeChild(script)
        })
        script.addEventListener('error', function (e) {
            console.log('script load error')
            reject(e)
        })
        document.body.appendChild(script)
    }

    function formatOptions() {
        var options = {
            method: 'GET',
            url: '',
            async: true,
            dataType: 'json',
            timeout: 0,
            callbackName: ''
        }
        var param = arguments[0]
        var firstParam = param[0]
        if (typeof firstParam == "object") {
            for (var key in firstParam) {
                options[key] = firstParam[key]
            }
        } else {
            options.method = param[0]
            options.url = param[1]
            options.data = param[2] ? param[2] : ""
            options.dataType = param[3] ? param[3] : ""
        }
        var method = String.prototype.toUpperCase.apply(options.method)
        if (method == 'GET' || options.dataType == 'jsonp') {
            options.url = formatConnector(options.url)
        }
        return options
    }

    function formatConnector(url) {
        return (url.indexOf('?') != -1) ? url : (url + "?")
    }

    if (typeof module !== 'undefined' && module.exports) {
        exports.ajax = ajax
        exports.get = get
        exports.post = post
        exports.jsonp = jsonp
    } else {
        window.unAjax = {
            ajax:ajax,
            get:get,
            post:post,
            jsonp:jsonp
        };
    }

})(window)