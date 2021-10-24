package com.imooc.student;

import com.imooc.profession.Profession;

public class Student {
    private String studentName;
    private String studentOrderId;
    private int studentAge;
    private String studentSex;
    private Profession profession1;

    /**
     *
     */
    public Student() {

    }

    /**
     * ���캯��������ѧ�������� ���䣬ѧ�ţ��Ա�רҵ��Ϣ��
     *
     * @param studentName    ѧ������
     * @param studentOrderId ѧ����ѧ��
     * @param studentAge     ѧ��������
     * @param studengSex     ѧ�����Ա�
     * @param profession1    ѧ����רҵ��Ϣ
     */
    public Student(String studentName, String studentOrderId, int studentAge, String studengSex, Profession profession1) {
        this.setStudentName(studentName);
        this.setStudentAge(studentAge);
        this.setStudentOrderId(studentOrderId);
        this.setStudentSex(studengSex);
        this.setProfession1(profession1);
    }

    /**
     * ����ѧ����Ϣ�Ĺ��캯��
     *
     * @param studentName    ѧ������
     * @param studentOrderId ѧ��
     * @param studentAge     ѧ������
     * @param studengSex     ѧ���Ա�
     */
    public Student(String studentName, String studentOrderId, int studentAge, String studengSex) {
        this.setStudentName(studentName);
        this.setStudentAge(studentAge);
        this.setStudentOrderId(studentOrderId);
        this.setStudentSex(studengSex);
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentOrderId() {
        return studentOrderId;
    }

    public void setStudentOrderId(String studentOrderId) {
        this.studentOrderId = studentOrderId;
    }

    public int getStudentAge() {
        return studentAge;
    }

    public void setStudentAge(int studentAge) {
        if (studentAge < 10 || studentAge > 100)
            this.studentAge = 18;
        else
            this.studentAge = studentAge;
    }

    public String getStudentSex() {
        return studentSex;
    }

    public void setStudentSex(String studentSex) {
        this.studentSex = studentSex;
    }

    public Profession getProfession1() {
        return profession1;
    }

    public void setProfession1(Profession profession1) {
        if (profession1 == null)
            this.profession1 = new Profession();
        else
            this.profession1 = profession1;
    }

    public String studentInfo() {
        return "ѧ���Ļ�����Ϣ\nѧ��������" + this.getStudentName() + "\nѧ�����䣺" + this.getStudentAge() + "\nѧ��ѧ�ţ�" + this.getStudentOrderId() + "\nѧ�����Ա�" + this.getStudentSex() + "\n��ѧרҵ���ƣ�" + this.getProfession1().getProfessionName() + "\n��ѧרҵ���ޣ�" + this.getProfession1().getYears();
    }
}
