package Goods;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;

public class GoodsHashMap {

    public static void main(String[] args) {
        //������Ʒ��Ϣ
        Scanner consolel = new Scanner(System.in);
        Map<String, Good> hashMap = new HashMap<>();
        System.out.println("��������Ʒ��Ϣ��");
        int i = 0;
        while (i < 3) {
            System.out.println("�������" + (i + 1) + "����Ʒ��Ϣ��");
            System.out.println("��������Ʒid��");
            String goodsId = consolel.next();
            System.out.println("��������Ʒ���ƣ�");
            String goodsName = consolel.next();
            System.out.println("��������Ʒ�۸�");
            double goodsPrice = consolel.nextDouble();
            Good goods = new Good(goodsId, goodsName, goodsPrice);
            hashMap.put(goodsId, goods);
            i++;
        }
        //��ȡ��Ʒ��Ϣ
        Iterator<Good> iterGoods = hashMap.values().iterator();
        while (iterGoods.hasNext()) {
            Good goodsInfo = iterGoods.next();
            System.out.println(goodsInfo);
        }
    }

}
