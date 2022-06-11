//please test code in Java IDE
package 10 reverse string;

public class Solution {
    public static void main(String[]args){
        String str ="abcdefg";
       StringBuilder build = new StringBuilder();
       build.append(str);
       build.reverse();
       System.out.println(build.toString());
    }
}
