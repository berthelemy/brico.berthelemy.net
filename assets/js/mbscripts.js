---
---
var userLang = navigator.language || navigator.userLanguage;
userLang = userLang.substr(0,2);

var urls = {
    'fr': '/fr',
    'en': '/en',
};
var defaultUrl = '{{ site.url }}';

var url = defaultUrl + urls[userLang] ?? defaultUrl;
console.log(url);

//window.location.href = url;