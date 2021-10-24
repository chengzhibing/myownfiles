package com.imooc.profession;

public class Profession {
    private String professionName;
    private String orderNum;
    private int years;

    //�޲����Ĺ��캯��
    public Profession() {

    }

    /**
     * ����ȫ�������Ĺ��캯��
     *
     * @param professionName רҵ����
     * @param prderNum       רҵ���
     * @param years          ѧ��
     */
    public Profession(String professionName, String prderNum, int years) {
        this.setProfessionName(professionName);
        this.setOrderNum(prderNum);
        this.setYears(years);
    }

    //
    public String getProfessionName() {
        return professionName;
    }

    public void setProfessionName(String professionName) {
        this.professionName = professionName;
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum;
    }

    public int getYears() {
        return years;
    }

    public void setYears(int years) {
        if (years < 0)
            this.years = 0;
        else
            this.years = years;
    }

}
