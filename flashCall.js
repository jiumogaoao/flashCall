function thisMovie(movieName) {
         if (navigator.appName.indexOf("Microsoft") != -1) {
             return window[movieName];
         } else {
             return document[movieName];
         }
     }//判断浏览器
function flashCall(obj){
         thisMovie(obj.name)[obj.fn](obj.value);
}