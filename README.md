# ajax

## Intro
A light ajax library with Promise usage


## version

**0.0.1**


## APIS


### ajax()

#### params
* object: a setting object

#### sample

````
    var url = 'some url here...';
       var data = "a=b&c=d"
       ajax({
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


### get()

#### params
* url: srting
* dataType: string, can be "json" or "jsonp"

#### sample

````
    var url = 'some url here...'
    get(url).then(function(rs){
        console.log('get',rs)
    })
````


### post()

#### params
* url: srting
* data: object or string
* dataType: string, can be "json" or "jsonp"

#### sample

````
    var url = 'some url here...'
    var data = "a=b&c=d"
    post(url,data).then(function(rs){
        console.log('post',rs)
    })
````

### jsonp()

#### params
* url: srting
* dataType: string, can be "json" or "jsonp"

#### sample

````
     var url = 'some url here...';
        get(url,'jsonp').then(function(rs){
            console.log('jsonp then',rs)
        }).catch(function(rs){
            console.log('jsonp catch',rs)
        })
````








