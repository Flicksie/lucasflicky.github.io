function ImageLoader(){
    var _count = 0;
    var _container = document.createElement('load');
    _container.style.display = 'none';
    document.head.appendChild(_container);

    function isObject(variable){
        return variable instanceof Object && !(variable instanceof Array) && typeof variable !== 'function';
    }

    this.getCount = function(){
        return _count;
    }

    this.getContainer = function(){
        return _container;
    }

    this.isLoaded = function(){
        return _count === 0 ? true : false;
    }

    this.onload = function(callback, interval){
        if(typeof callback === 'undefined'){
            console.warn("The onload method requires a callback, use isLoaded instead of onload!");
            return this.isLoaded();
        }else if(typeof callback === 'function'){
            interval = typeof interval == 'number' ? interval : 100;
            var event_callback = function(){
                if(_count === 0){
                    callback();
                }else {
                    setTimeout(event_callback, interval);
                }
            }
            event_callback();
        }else{
            throw new Error("Invalid callback!");
        }
    }

    this.load = function(_url, attr){
        attr = attr || {};
        _count++;
        var img = document.createElement('img');
        if(isObject(attr)){
            var j = 0;
            var keys = Object.keys(attr);
            for(i in attr){
                img.setAttribute(keys[j], attr[i]);
                j++;
            }
        }else{
            console.warn(
                '%s%c%s%c%s%s%s%c%s',
                'The attributes argument must be an ',
                'color:#159',
                'object',
                'color:none','!',
                '\nImage: ' + _url,
                '\nAttributes: ',
                'color:#f22', attr
            );
        }
        img.src = _url;
        _container.appendChild(img);
        img.onload = function(){
            _container.removeChild(img);
            _count--;
            this.onload = undefined;
        }
        return img;
    }
}