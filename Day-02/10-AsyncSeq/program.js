function f1Sync(){
    console.log('f1Sync Started');
    console.log('f1Sync Completed');
}

function f2Sync(){
    console.log('f2Sync Started');
    console.log('f2Sync Completed');
}

function f3Sync(){
    console.log('f3Sync Started');
    console.log('f3Sync Completed');
}

function f4Sync(){
    console.log('f4Sync Started');
    console.log('f4Sync Completed');
}

var syncFns = [f1Sync, f2Sync, f3Sync, f4Sync];

module.exports.runSync = function(){
    for(var i=0; i<syncFns.length; i++){
        var fn = syncFns[i];
        fn();
    }

}

function f1Async(next){
    console.log('f1Async Started');
    setTimeout(function(){
        console.log('f1Async Completed');
        if (next) next();
    },3000);
}

function f2Async(next){
    console.log('f2Async Started');
    setTimeout(function(){
        console.log('f2Async Completed');
        if (next) next();
    },3000);
}

function f3Async(next){
    console.log('f3Async Started');
    setTimeout(function(){
        console.log('f3Async Completed');
        if (next) next();
    },3000);
}

function f4Async(next){
    console.log('f4Async Started');
    setTimeout(function(){
        console.log('f4Async Completed');
        if (next) next();
    },3000);
}

var asyncFns = [f1Async, f2Async, f3Async, f4Async]
module.exports.runAsync = function(){
    function run(fns){
        var first = fns[0],
            remaining = fns.slice(1),
            next = function(){
                run(remaining);
            };
        if (first)
            first(next);
    }
    run(asyncFns);
}
