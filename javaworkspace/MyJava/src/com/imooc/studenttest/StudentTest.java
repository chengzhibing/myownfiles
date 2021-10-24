package com.imooc.studenttest;

import com.imooc.profession.Profession;
import com.imooc.student.Student;

public class StudentTest {
    public static void main(String[] args) {
        Profession profession1 = new Profession("�������ѧ��Ӧ��", "A012345", 4);
        Student student1 = new Student("����", "A0122", 19, "��", profession1);
        System.out.println(student1.studentInfo());

    }
}
