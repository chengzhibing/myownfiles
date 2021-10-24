package protectedpackage;
class Art {
    Art() {
        System.out.println("Art Constructor");
    }
}
class Drawing extends Art {
    Drawing(){
        System.out.println("Drawing constructor");
    }
}
public class BaseAndSubClass extends Drawing{
//    public BaseAndSubClass() {
//        System.out.println("BaseAndSubClass constuctor");
//    }
    public static void main(String args[]) {
       //BaseAndSubClass baseAndSubClass = new BaseAndSubClass();
    }
}
