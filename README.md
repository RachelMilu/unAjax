# unAjax

## Intro
A light ajax library with Promise usage


## version

**0.0.1**


## APIS


### unAjax.ajax()

#### params
* object: a setting object

#### sample

````
    var url = 'some url here...';
       var data = "a=b&c=d"
       unAjax.ajax({
           url:url,
           method:'POST',
           data:data,
           headers:{
               "content-Type":"text/plain"
           },
           xhrFields: {
               withCredentials: true
           }
       }).then(function(rs){
           console.log('ajax',rs)
       })
````


### unAjax.get()

#### params
* url: srting
* dataType: string, can be "json" or "jsonp"

#### sample

````
    var url = 'some url here...'
    unAjax.get(url).then(function(rs){
        console.log('get',rs)
    })
````


### unAjax.post()

#### params
* url: srting
* data: object or string
* dataType: string, can be "json" or "jsonp"

#### sample

````
    var url = 'some url here...'
    var data = "a=b&c=d"
    unAjax.post(url,data).then(function(rs){
        console.log('post',rs)
    })
````

### unAjax.jsonp()

#### params
* url: srting

#### sample

````
     var url = 'some url here...';
        unAjax.get(url).then(function(rs){
            console.log('jsonp then',rs)
        }).catch(function(rs){
            console.log('jsonp catch',rs)
        })
````