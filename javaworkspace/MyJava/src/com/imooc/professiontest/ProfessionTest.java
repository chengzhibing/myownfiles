package com.imooc.professiontest;

import com.imooc.profession.Profession;

public class ProfessionTest {
    public static void main(String[] args) {
        Profession profession1 = new Profession();
        profession1.setProfessionName("�������ѧ��Ӧ��");
        profession1.setOrderNum("0223");
        profession1.setYears(4);
        String professionName = profession1.getProfessionName();
        String professionOrderNum = profession1.getOrderNum();
        int professionYear = profession1.getYears();
        System.out.println("רҵ���ƣ�" + professionName);
        System.out.println("��ţ�" + professionOrderNum);
        System.out.println("ѧ�ƣ�" + professionYear);
    }
}
