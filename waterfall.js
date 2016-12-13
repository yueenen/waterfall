/**
 * Created by yueenen on 12/13/16 02:09.
 * 你不会的原因是想的太多，写得太少。
 */
/*
 * 4.1 往jQuery的原型中添加一个瀑布流方法
 * 4.2 定义好padding, 获取屏幕宽度
 * 4.3 获取item的个数
 * 4.4 获取items的宽度
 * 4.5 定义好列数: 总宽度/item的宽度
 * 4.6 声明item高度
 * 4.7 创建数组存储制定列数的高度值
 * 4.8 用each遍历每一个item(返回index和value),给每一个item设置定位
 * 4.8.1 瀑布流第一行,就是通过计算列数范围内的值(小于总列数),给其设置top和left值
 * 4.8.2 瀑布流其它行: 设置最小高度的列数是第0列, 遍历所有列数,找到最终高度最小的列(index)
 * 4.8.3 设置 top: 最小高度 + padding
 * 4.8.4 设置 left: padding + (padding + itemWidth) * index
 * 4.9 tips 提示条: 遍历获取最大高度 maxHeight, 设置 items 的高度为 maxHeight + padding
 * */

$.fn.waterfall = function () {
    var pad = 20;

    var totalWidth = $(this).width();

    var items = $(this).children();

    var itemWidth = items.width();

    var cols = Math.floor(totalWidth / itemWidth);

    var itemHeight;

    var itemY = [];

    items.each(function (index, value) {

        itemHeight = $(value).height();

        //console.log("aa");

        if (index < cols) {
            $(value).css({
                top: 0,
                left: pad + (pad + itemWidth) * index
            });

            itemY[index] = itemHeight;
        } else {
            var minCol = 0;
            var minHeight = itemY[minCol];

            for (var i = 0; i < cols; i++) { //??????
                if (minHeight > itemY[i]) {
                    minCol = i;
                    minHeight = itemY[i];
                }
            }
            $(value).css({

                top: minHeight + pad,

                left: pad + (pad + itemWidth) * minCol

            });

            itemY[minCol] = itemY[minCol] + pad + itemHeight;
        }

    });

    var maxCol = 0;

    var maxHeight = itemY[maxCol];

    for (var i = 1; i < cols; i++) {

        if (maxHeight < itemY[i]) {
            maxCol = i;
            maxHeight = itemY;
        }
    }
    $(".items").height(maxHeight + pad);
};