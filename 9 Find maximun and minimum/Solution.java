//You may need to run the code using Java IDE
import java.util.*;

public class Solution {
    public static void main(String args[]){
        System.out.println("Please inter 6 integer: ");
        int []arr = new int[6];
        Scanner sc = new Scanner(System.in);
        for(int i=0;i<arr.length;i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("The numeric array is: ");
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]+"");
        }
        System.out.println();
        int max = arr[0], min = arr[arr.length-1];
        int j=0;
        int k=arr.length-1;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>max){
                max =arr[i];
                j=i;
            }
        }
        for(int i=0;i<arr.length;i++){
            if(arr[i]<min){
                min=arr[i];
                k=i;
            }
        }
        int num = arr[j];
        arr[j]=arr[k];
        arr[k]=num;
        System.out.println("Swapped: ");
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]+"");
        }
    }
}