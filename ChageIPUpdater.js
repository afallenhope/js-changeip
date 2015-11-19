/**
* ChangeIPUpdater - used to update IP address at changeip.com 
* Initially written as a PoC but I liked it so I continued the development
*/

var ChangeIPUpdater = function(username, password){
  
  // private properties
  var BASEURL = "https://nic.changeip.com/nic/update?cmd=update&set=%domain%&u=%user%&p=%passwd%";
  var IPUPDATEURL = "http://checkip.dyndns.org";
  // private methods
  function remote_page() {    
     var args = Array.prototype.slice.call(arguments);
     var HTTPREQUEST_METHOD = "GET";
     var save2disk =false;
     var url;

     if (args.length >= 2) {
       url = args[0];
       HTTPREQUEST_METHOD  = args[1] ;       
       params = args[2] | null; 
     }
    
  
    var http = new ActiveXObject('WinHttp.WinHTTPRequest.5.1');
    
    http.Open(HTTPREQUEST_METHOD ,url,false);
    http.Send(params);
    http.WaitForResponse();
    return  http.ResponseText; 
  }
  
  return {
    // public properties
    
    
    // public methods
    
    /**
    * updateIP - function to update dynamic IP.
    * @param domain - domain in which we're updating.
    * @param fn - callback after ip has been updated.
    */
    updateIP : function(domain,ipaddress,callback) {
      // replace domain, username and password
      url = BASEURL.replace("%domain%",this.domain).replace("%user%",username).replace("%passwd%",password);   
      
      // execute our callback
       callback(remote_page(url));
    },
    
    /**
    * getExternalIP - gets computer's external IP
    * @param fn - callback function once the IP has been received    
    */
    getExternalIP : function(callback=function(){}) {
      var resp = remote_page(IPUPDATEURL);
      callback(resp.split(":")[1]);
    }
  };  
};
