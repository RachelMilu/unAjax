!function(e){function t(){var t=a(arguments);return new Promise(function(n,r){if("jsonp"==t.dataType)return void o(t.url,n,r);var a=e.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");a.onreadystatechange=function(){if(4==a.readyState){var e;a.status>=200&&a.status<300||304==a.status||0==a.status&&"file:"==protocol?(e=a.responseText,n(e)):(e=a,r(a))}},a.onerror=function(e){r(a)},console.log(t),a.open(t.method,t.url,t.async);var d=t.headers;if(d)for(var s in d)a.setRequestHeader(s,d[s]);(t.contentType||t.headers&&t.headers["Content-Type"]||t.contentType!==!1&&t.data&&"GET"!=t.method.toUpperCase())&&a.setRequestHeader("Content-Type",t.contentType||t.headers&&t.headers["Content-Type"]||"application/x-www-form-urlencoded");var i=t.xhrFields;if(i)for(var c in i)a[c]=i[c];a.send(t.data||"")})}function n(e,n){return t("GET",e,null,n)}function r(e,n,r){return t("POST",e,n,r)}function o(t,n,r){var o="callback"+Math.random().toString().slice(2,8);e[o]=function(t){n(t),e[o]=null};var a=document.createElement("script");a.setAttribute("src",t+"&callback="+o),a.addEventListener("load",function(){document.body.removeChild(a)}),a.addEventListener("error",function(e){console.log("script load error"),r(e)}),document.body.appendChild(a)}function a(){var e={method:"GET",url:"",async:!0,dataType:"json",timeout:0,callbackName:""},t=arguments[0],n=t[0];if("object"==typeof n)for(var r in n)e[r]=n[r];else e.method=t[0],e.url=t[1],e.data=t[2]?t[2]:"",e.dataType=t[3]?t[3]:"";var o=String.prototype.toUpperCase.apply(e.method);return"GET"==o||"jsonp"==e.dataType?e.url=d(e.url):e.data=s(e.data),e}function d(e){return e.indexOf("?")!=-1?e:e+"?"}function s(e){var t="";return"string"!=typeof e?t:e}e.ajax=t,e.post=r,e.get=n}(window);