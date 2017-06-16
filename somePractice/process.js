process.on('exit', function(code){

    setTimeout(function(){
        console.log('定时器');
    },1000);

    // 进程退出
    console.log('code:'+code);
});

process.stdout.write('Hello world'+'\n');

process.argv.forEach(function(val, index, array){
    console.log(index + ':' + val);
});

console.log(process.execPath);

// console.log(process.config);

console.log('当期目录:' + process.cwd());

console.log('__filename:' + __filename);

console.log('dirName:'+__dirname);

console.log('当前版本：' + process.version);

console.log('内存使用情况');

console.log(process.memoryUsage());


console.log('程序运行结束');