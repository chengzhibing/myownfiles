package com.imooc.dog;

import com.imooc.animal.Animal;

public class Dog extends Animal {
    private String animalSex;

    public Dog() {

    }

    public Dog(String animalName, int animalMonth, String animalSex) {
        super(animalName, animalMonth);
        this.setAnimalSex(animalSex);
    }

    public String getAnimalSex() {
        return animalSex;
    }

    public void setAnimalSex(String animalSex) {
        this.animalSex = animalSex;
    }

    public void run() {
        System.out.println("С�������");
    }

    public void eat() {
        System.out.println("С���Թ�ͷ");
    }

    public void eat(String animalName) {
        System.out.println(animalName + "�Թ�ͷ");
    }

    public void sleep() {
        System.out.println("С����˯��");
    }


}