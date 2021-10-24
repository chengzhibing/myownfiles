package com.imooc.cat;

import com.imooc.animal.Animal;

public class Cat extends Animal {
    private double animalWeight;

    public Cat() {

    }

    public Cat(String animalName, int animalMonth, double animalWeight) {
        super(animalName, animalMonth);
        this.setAnimalWeight(animalWeight);
    }

    public double getAnimalWeight() {
        return animalWeight;
    }

    public void setAnimalWeight(double animalWeight) {
        this.animalWeight = animalWeight;
    }

    public void eat() {
        System.out.println("è����");
    }

    public void run() {
        System.out.println("Сè����");
    }

}
