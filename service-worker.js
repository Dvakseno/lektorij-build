"use strict";var precacheConfig=[["/index.html","5c220b272fce12d4b13e06459601c1ad"],["/static/css/main.b4cdae99.css","ec623c901856436f8c969464653ebad9"],["/static/js/main.b31a9a0e.js","af143edbf03f1447ae901f6aee89b396"],["/static/media/Andronov.5db7b7be.jpg","5db7b7be510010a1e253793d60df653f"],["/static/media/Arsenov.963b3fe7.jpg","963b3fe79ff0a5099f562849bb73ce12"],["/static/media/Drapiko.6cf236f4.jpg","6cf236f462f27bb7163f5e0a3cce8aed"],["/static/media/Igoshin.cf6e3172.jpg","cf6e317294bd51badd9bc9c042853730"],["/static/media/Motin.0baf48d0.jpg","0baf48d0c61065c4006a7951dbe0315d"],["/static/media/Prokofiev.ae695bc2.jpg","ae695bc20f553e301639499c1e1838bc"],["/static/media/Velichko.d158f158.jpg","d158f1582ada509d9aaef072ae659832"],["/static/media/alergia_remix-black-webfont.21402a07.woff2","21402a07610a98b407548f058f6083c1"],["/static/media/alergia_remix-black-webfont.2e3127a0.woff","2e3127a0ec2482049543f951300daaf4"],["/static/media/alergia_remix-black-webfont.a8ccc97b.ttf","a8ccc97b9b5679f411e99b79087c127d"],["/static/media/alergia_remix-black-webfont.e337f98d.svg","e337f98de7f0ce94510b621a2e1aca11"],["/static/media/alergia_remix-regular-webfont.3e6bd458.woff2","3e6bd4582f53822d8f0e533ab284d476"],["/static/media/alergia_remix-regular-webfont.ccafc3b0.svg","ccafc3b0e2da39b852f5da75c027291c"],["/static/media/alergia_remix-regular-webfont.df8f590e.ttf","df8f590e6b491459932549acce41b382"],["/static/media/alergia_remix-regular-webfont.e1fb5493.woff","e1fb5493cd89286e2e7921c4f3b14766"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});