# js-changeip

# JavaScript implementation of ChangeIP Updater
Just a small version of a larger application that used to be available (might still be but I can't offer the url due to copyright)

# Implementation
`var ci = new ChangeIPUpdater('username',password');
var ip = ci.getExternalIP(function(data){
   ci.updateIP('domain',ip,function(data) {
        alert("IP updated.");
    });
});`

Still rough, but I did this quickly :\

