/**
 * Created by yueenen on 12/13/16 02:09.
 * 你不会的原因是想的太多，写得太少。
 */

$.fn.waterfall = function () {
    var pad = 20;

    var totalWidth = $(this).width();

    var items = $(this).children();

    var itemWidth = items.width();

    var cols = Math.floor(totalWidth/itemWidth);

    var itemHeight;

    var itemY = [];

    items.each(function (index,value) {

        itemHeight = $(value).height();
        
        //console.log("aa");

        if(index < cols){
            $(value).css({
                top : 0,
                left: pad + (pad +itemWidth)*index
            });

            itemY[index] = itemHeight;
        }else {
            var minCol = 0;
            var minHeight = itemY[minCol];

            for(var i = 0; i < cols; i ++){ //??????
                if(minHeight > itemY[i]){
                    minCol = i;
                    minHeight = itemY[i];
                }
            }
            $(value).css({

                top: minHeight + pad,

                left: pad + (pad + itemWidth)*minCol

            });

            itemY[minCol] = itemY[minCol]+pad + itemHeight;
        }

    });

    var maxCol = 0;

    var maxHeight = itemY[maxCol];

    for(var i = 1; i < cols; i++){

        if(maxHeight< itemY[i]){
            maxCol = i;
            maxHeight = itemY;
        }
    }
    $(".items").height(maxHeight+pad);
};