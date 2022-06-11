//You may need to run the code using Java IDE
public class Solution {
  public static void main(String[]args){
      String str ="abcdefghijklmnopqrstuvwxyz";
      System.out.println(str);
      String result = "";
      for(int i=0;i<str.length();i++){
         if(str.charAt(i)>='a' && str.charAt(i)<='z' || str.charAt(i)>='A'&&str.charAt(i)<='Z'){
             if(str.charAt(i)=='z'){
                 result +='a';
             }
             else if(str.charAt(i)=='Z'){
                 result+='A';
             }
             else{
                 result += (char)(str.charAt(i)+1);
             }
         }
         else{
             result +=(char)(str.charAt(i));
         }
      }
      System.out.println(result);
  }
}