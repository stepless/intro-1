let html = document.querySelector('#html');
let style = document.querySelector('#style');
let txtArea = document.querySelector('.txtArea');
let n = 0;
let str = `/*我是一个前端小白
*接下来要展示一下我的学习成果
*为大家制作一个太极
**/
#dome{
    outline:1px solid #999;
    transform:translateX(-50%);
    border-radius:50%;
    width:300px;
    height:300px;
}
/*
*易经系辞：“是故易有太极，是生两仪”。
*两仪即为太极的阴、阳二仪。
**/
#dome{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
*太极阴阳两分而合和。
*太极，外表现为阴阳合和之大一，内表现为阴阳两分。
*一分为二又合二而一。
*两个元素之间相互矛盾又相互依存，须臾不可分离。
*合则生，散则死。
**/
#dome::before{
    left:50%;
    top:0;
    border-radius:50%;
    width:150px;
    height:150px;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)
}
#dome::after{
    left:50%;
    bottom:0;
    border-radius:50%;
    width:150px;
    height:150px;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
let str2 = '';
function realize(){
    setTimeout(()=>{

        if(str[n] === '\n'){
            str2 += '<br>';
        }else if(str[n] === ' '){
            str2 += '&nbsp';
        }else{
            str2 += str[n];
        }
        
        n += 1;
        html.innerHTML = str2;
        style.innerHTML = str.substring(0,n);
        if(n < str.length){
            realize();
        }
    },30)
    txtArea.scrollTo(0,8888);
}
setTimeout(()=>{
    realize();
},1000)
