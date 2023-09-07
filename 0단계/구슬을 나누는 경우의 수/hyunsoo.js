function solution(balls, share) {
    const facto = (num) => (num === 0 ? 1 : num * facto(num - 1));
    return Math.round(facto(balls) / facto(balls - share) / facto(share));
}