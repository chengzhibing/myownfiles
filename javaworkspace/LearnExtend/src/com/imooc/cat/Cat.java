package com.imooc.cat;

import com.imooc.animal.Animal;

public class Cat extends Animal {
    public Cat() {

    }

    //è���ֶ��������
    public void run() {
        System.out.println("��");
    }

    public String catInfo() {
        return "���ֶ�������ֽУ�\n" + this.getAnimalNama() + "\n���ֶ������";
    }
}
