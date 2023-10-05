function solution(n)
{
    var ans = 0;
    while(n !== 0){
        if(n%2 === 0){
            n/=2
        } else {
            ans+=1
            n = Math.floor(n/2)
        }
        //console.log(ans, n)
    }
    return ans;
}