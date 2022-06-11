//You may need to run the code using Java IDE
import java.util.Scanner;

public class Solution {
    public static void main(String[]args){
        String str = "abcdefg";
        System.out.println(str);
        StringBuilder build = new StringBuilder(str);
        while(build.length()>0){
            System.out.println("Please enter the index that you want to delete: ");
            Scanner sc = new Scanner(System.in);
            int index = sc.nextInt();
            if(index>str.length()-1){
                System.out.println("Unable to find this character");
            }
              else {
                build.deleteCharAt(index);
                System.out.println("New String: " + build);
            }
        }
    }
}