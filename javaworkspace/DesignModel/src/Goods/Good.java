/**
 * @author Administrator
 */
/**
 * @author Administrator
 *
 */
package Goods;

public class Good {
    private String id;
    private String name;
    private double price;

    Good(String id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String toString() {
        return this.getId() + "" + this.getName() + "" + this.getPrice();
    }
}