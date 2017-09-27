 var topt = document.getElementById("pulltop");//下拉
    var botm = document.getElementById("pullbot");//上拉
    var height = topt.offsetHeight;

    var myScroll = new iScroll("wrapper", {
        topOffset: height,
        onScrollMove: function () {
            if (this.y > 5 && !topt.className.match("flip")) {
                topt.className = "flip";
                topt.querySelector("span").innerHTML = "正在刷新"
            }
            if (this.y < this.maxScrollY && !botm.className.match("flip")) {
                botm.className = "flip";
                botm.querySelector("span").innerHTML = "正在加载";
            }
        },
        onScrollEnd: function () {
            if (topt.className.match("flip")) {
                topt.className = "loading";
                more();
            }
            if (botm.className.match("flip")) {
                botm.className = "loading";
                Product();
            }
        },
        onRefresh: function () {
            if (topt.className.match("loading")) {
                topt.className = "";
                topt.querySelector("span").innerHTML = "下拉刷新";
            }
            if (botm.className.match("loading")) {
                botm.className = "";
                botm.querySelector("span").innerHTML = "加载更多";
            }
        }
    });
    
    function more() {
        console.log("刷新中")
    }
    
   /* var str = "";
    Product();
    function Product() {
        $.ajax({
            url: "data/data.json",
            success: function (result) {
                for (var i = 0; i < result.length; i++) {
                    str += '<dl>' +
                            '<dt><img src="' + result[i].img + '" alt=""></dt>' +
                            '<dd>' +
                            '<p class="text-nowrap">' + result[i].title + '</p>' +
                            '<span class="text-red">' + result[i].price + '</span><b class="text-red">' + result[i].money + '</b>' +
                            '</dd>' +
                            '</dl>'
                }
                $(".top").html(str);
                myScroll.refresh();
            }
        })
    }*/