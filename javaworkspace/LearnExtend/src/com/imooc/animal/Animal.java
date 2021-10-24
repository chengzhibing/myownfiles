package com.imooc.animal;

public class Animal {
    private String animalName;
    private int animalAge;
    private String animalSex;

    public Animal() {

    }

    public void setAnimalName(String animalName) {
        this.animalName = animalName;
    }

    public String getAnimalNama() {
        return this.animalName;
    }

    public void setAnimalAge(int animalAge) {
        this.animalAge = animalAge;
    }

    public int getAnimalAge() {
        return this.animalAge;
    }

    public void setAnimalSex(String animalSex) {
        this.animalSex = animalSex;
    }

    public String getAnimalSex() {
        return animalSex;
    }
}
