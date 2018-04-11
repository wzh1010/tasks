var timer;
var div=document.getElementsByTagName("div");
var colors=['#ffdab9','#afeeee','#98fb98','#1D7AD9','#26A26F','B92C28'];//颜色数组


function timer(){
    //还原原始色
    for(var i=0;i<9;i++){
        div[i].style.background="#ffa600";
    };

    var a=ner();
    for(var m=0; m<3; m++){
        div[a[m]].style.background=colors[m];
    };
}

function ner(){
    //声明一个数组
    var a=[];
    //随机抽取三个数
    var sum1=Math.floor(Math.random()*9);
//				console.log(Math.random()*9)
//				console.log(sum1)
    var sum2=Math.floor(Math.random()*9);
    var sum3=Math.floor(Math.random()*9);
    //过滤随机抽取得三个数使其两两不重复
    while(sum2==sum1){
        sum2=Math.floor(Math.random()*9);
    }
    while(sum3==sum2||sum3==sum1){
        sum3=Math.floor(Math.random()*9);
    }
    //把抽取得三个数放进数组里
    a.push(sum1,sum2,sum3);
    return a
}

var times;
var start=document.getElementById('start');
var over=document.getElementById('over');
start.onclick=function(){
    timer();
    //清除时间
    clearInterval(times);
    //设置随机数时间
    times=setInterval(timer,1000);
    over.className='';
    start.className='change';
};
over.onclick=function(){
    over.className='change';
    start.className='';
    //清除开始按钮的时间
    clearInterval(times);

    setTimeout(function(){
        over.className='';
    },1000)
    //还原原始色
    for(var i=0;i<9;i++){
        div[i].style.background="#ffa600";
    };
};