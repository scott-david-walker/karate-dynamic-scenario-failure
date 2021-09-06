
function fn(){

    karate.configure('connectTimeout', 60000);
    karate.configure('readTimeout', 60000);
    karate.configure('logPrettyResponse', true);
    karate.configure('report',{ showLog: true } );
    karate.configure('ssl', true);

    var config =
    {
    }
    return config;
}

