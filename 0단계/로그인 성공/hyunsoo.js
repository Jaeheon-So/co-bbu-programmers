function solution(id_pw, db) {
    var answer = 'fail';
    const [id, pw] = id_pw
    for(const user of db) {
        if(user[0] === id) {
            if(user[1] === pw) {
                return answer = 'login'
            } else {
                return answer = 'wrong pw'
            }
        }
    }
    return answer;
}