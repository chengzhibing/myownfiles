package protectedpackage;

public class SubClassOne extends BaseClassZero{
    public SubClassOne() {
        super();
        System.out.println("SubClassO");
    }
    public SubClassOne(int i) {
        super(i);
        System.out.println("SubClassOne()");
    }
}
