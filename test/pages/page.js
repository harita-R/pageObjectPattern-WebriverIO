//page.js

module.exports = class Page {
   
    //to go to a URL 
    open (path) {
        return browser.url(path);
    }
}
