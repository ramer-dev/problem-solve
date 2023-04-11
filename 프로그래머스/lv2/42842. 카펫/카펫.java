class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int term; 
            // Math.sqrt(Math.pow(brown + 4, 2) / 4 - 4 * (brown + yellow));
        
        term = ((int) Math.pow( brown + 4, 2));
        term /= 4;
        term -= 4 * (brown + yellow);
        term = (int) Math.sqrt(term);
        int w = ((brown + 4) / 2 + term) / 2;
        int h = ((brown + 4) / 2 - term) / 2;
        
        answer[0] = w;
        answer[1] = h;
        
        return answer;
    }
}