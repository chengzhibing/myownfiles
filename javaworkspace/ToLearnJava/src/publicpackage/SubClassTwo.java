package publicpackage;

import protectedpackage.SubClassOne;

public class SubClassTwo extends SubClassOne {
    SubClassTwo() {
        super();
        System.out.println("oooooooooooo");
    }
    SubClassTwo(int i) {
        super(i);
    }
    public static void main(String args[]) {
        SubClassTwo subClassTwo = new SubClassTwo();
        SubClassTwo subClassTwo1 = new SubClassTwo(20);
        subClassTwo.returnNum();
    }
}
