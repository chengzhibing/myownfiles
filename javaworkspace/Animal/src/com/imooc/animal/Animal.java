package com.imooc.animal;

public class Animal {
    private String animalName;
    private int animalMonth;

    public Animal() {

    }

    //�в����Ĺ��췽����animalMonth,animalName��
    public Animal(String animalName, int animalMonth) {
        this.setAnimalMonth(animalMonth);
        this.setAnimalName(animalName);
    }

    public void setAnimalName(String animalName) {
        this.animalName = animalName;
    }

    public void setAnimalMonth(int animalMonth) {
        this.animalMonth = animalMonth;
    }

    public String getAnimalName() {
        return this.animalName;
    }

    public int getAnimalMonth() {
        return this.animalMonth;
    }

    public void eat() {
        System.out.println("���ﶼ�гԶ���������");
    }
}
