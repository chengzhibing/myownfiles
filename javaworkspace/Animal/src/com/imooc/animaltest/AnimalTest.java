package com.imooc.animaltest;

import com.imooc.animal.Animal;
import com.imooc.cat.Cat;
import com.imooc.dog.Dog;

public class AnimalTest {
    public static void main(String[] args) {
        Animal generateAnimal = new Animal();
        Cat cat = new Cat();
        //���� ת�ͣ��Զ�ת�ͣ�����ת��
        Dog dog = new Dog();
        generateAnimal.eat();
        cat.eat();
        dog.eat();
    }

}
