---
---

var currentUrl = window.location.href;
const url = new URL(currentUrl);
var path = url.pathname;
console.log(path);
if (path == '/en' || path == '/fr') { // Do we need to change the language?
    console.log('No change required');
} else {
    console.log('Change needed');
    var userLang = navigator.language || navigator.userLanguage; // Check browser language
    userLang = userLang.substr(0,2); // Pick out language first 2 chars
    console.log("Initial language: ",userLang);
    if (userLang != 'en' && userLang != 'fr') { // Set to default if not French or English
    userLang = 'en'; // Set default language to English
    }
    console.log("Current language: ",userLang);

    var urls = {
        'fr': '/fr',
        'en': '/en',
    };
    var rootUrl = '{{ site.url }}'; // Pick up root URL from config.yml

    var newUrl = urls[userLang] ?? rootUrl;
    console.log("NewURL: ", newUrl);

    console.log("CurrentURL: ", currentUrl);
    if (currentUrl != newUrl) { // Redirect only if needed
        window.location.href = newUrl;
    }
}
