(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // library properties:
    var runend = true;
    lib.properties = {
        width: 640,
        height: 1213,
        fps: 14,
        color: "#FFFFFF",
        manifest: [{
            src: "images/quan.png",
            id: "圈"
        }, {
            src: "images/shou.png",
            id: "手"
        }, {
            src: "images/tuxing.png",
            id: "图形"
        }, {
            src: "images/tuxing2.png",
            id: "图形2"
        }, {
            src: "images/h_bg.jpg",
            id: "背景"
        }]
    };
    (lib.圈 = function() {
        this.initialize(img.圈);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 99, 104);

    (lib.手 = function() {
        this.initialize(img.手);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 383, 518);


    (lib.图形 = function() {
        this.initialize(img.图形);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 603, 435);

    (lib.图形2 = function() {
        this.initialize(img.图形2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 603, 435);


    (lib.背景 = function() {
        this.initialize(img.背景);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 641, 1013);

    (lib.guangYuanJian = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.圈();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 99, 104);
    (lib.元件1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.guangYuanJian();
        this.instance.setTransform(49.5, 52, 1, 1, 0, 0, 0, 49.5, 52);
        this.instance.cache(-2, -2, 103, 108);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            rotation: 24,
            y: 52.1
        }, 0).wait(1).to({
            rotation: 48
        }, 0).wait(1).to({
            rotation: 72
        }, 0).wait(1).to({
            rotation: 96,
            y: 52
        }, 0).wait(1).to({
            rotation: 120
        }, 0).wait(1).to({
            rotation: 144
        }, 0).wait(1).to({
            rotation: 168
        }, 0).wait(1).to({
            rotation: 192
        }, 0).wait(1).to({
            rotation: 216
        }, 0).wait(1).to({
            rotation: 240
        }, 0).wait(1).to({
            rotation: 264
        }, 0).wait(1).to({
            rotation: 288
        }, 0).wait(1).to({
            rotation: 312
        }, 0).wait(1).to({
            rotation: 336
        }, 0).wait(1).to({
            rotation: 360
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 99, 104);
    (lib.guang = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.元件1();
        this.instance.setTransform(49.5, 52, 1, 1, 0, 0, 0, 49.5, 52);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            alpha: 0.875
        }, 0).wait(1).to({
            alpha: 0.75
        }, 0).wait(1).to({
            alpha: 0.625
        }, 0).wait(1).to({
            alpha: 0.5
        }, 0).wait(1).to({
            alpha: 0.375
        }, 0).wait(1).to({
            alpha: 0.25
        }, 0).wait(1).to({
            alpha: 0.125
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(1).to({
            alpha: 0.1
        }, 0).wait(1).to({
            alpha: 0.2
        }, 0).wait(1).to({
            alpha: 0.3
        }, 0).wait(1).to({
            alpha: 0.4
        }, 0).wait(1).to({
            alpha: 0.5
        }, 0).wait(1).to({
            alpha: 0.6
        }, 0).wait(1).to({
            alpha: 0.7
        }, 0).wait(1).to({
            alpha: 0.8
        }, 0).wait(1).to({
            alpha: 0.9
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: 0.889
        }, 0).wait(1).to({
            alpha: 0.778
        }, 0).wait(1).to({
            alpha: 0.667
        }, 0).wait(1).to({
            alpha: 0.556
        }, 0).wait(1).to({
            alpha: 0.444
        }, 0).wait(1).to({
            alpha: 0.333
        }, 0).wait(1).to({
            alpha: 0.222
        }, 0).wait(1).to({
            alpha: 0.111
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(1).to({
            alpha: 0.111
        }, 0).wait(1).to({
            alpha: 0.222
        }, 0).wait(1).to({
            alpha: 0.333
        }, 0).wait(1).to({
            alpha: 0.444
        }, 0).wait(1).to({
            alpha: 0.556
        }, 0).wait(1).to({
            alpha: 0.667
        }, 0).wait(1).to({
            alpha: 0.778
        }, 0).wait(1).to({
            alpha: 0.889
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 99, 104);



    (lib.手_1 = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.手();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 383, 518);

    // 图层 3

    // stage content:
    (lib.html = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // timeline functions:

        this.frame_66 = function() {

            this.stop();
            if (runend) {
                $(".digits").html("");
                $(".digits").countdown({
                    image: "images/time2.png",
                    format: "mm:ss",
                    startTime: "00:30",
                    digitImages: 1,
                    digitWidth: 25,
                    digitHeight: 40,
                    timerEnd: function() {
                        window.location.href = "http://www.webenergy.com.cn/demo/hna2014/weixin_61_demo/xuezhongfei/jxcome.php";
                        //   alert("游戏结束");
                    }
                });
                runend = false;
            }


            index_hua = 0;
            var timeline = this;

            function handleTouchEvent(event) {
                //只跟踪一次触摸
                if (event.touches.length == 1) {}

                var output = document.getElementById("output");
                switch (event.type) {
                    case "touchstart":
                        break;
                    case "touchend":
                        // output.innerHTML = "Touch ended (" + event.changedTouches[0].clientX + "," + event.changeTouches[0].clientY + ")";
                        // touchList.push({x:event.touches[0].clientX,y:event.touches[0].clientY} );
                        if (index_dian > 16) {
                            window.location.href = "http://www.webenergy.com.cn/demo/hna2014/weixin_61_demo/xuezhongfei/invitation.php?inid=201412181404052792&uid=18821188869";
                        } else {
                            // alert("error"+index_dian);
                            timeline.gotoAndStop(33);
                        }
                        index_dian = 0;
                        break;
                    case "touchmove":
                        event.preventDefault(); //阻止滚动
                        var dianList = [{
                            x: 70,
                            y: 635
                        }, {
                            x: 32,
                            y: 560
                        }, {
                            x: 42,
                            y: 525
                        }, {
                            x: 97,
                            y: 422
                        }, {
                            x: 153,
                            y: 368
                        }, {
                            x: 209,
                            y: 333
                        }, {
                            x: 286,
                            y: 348
                        }, {
                            x: 386,
                            y: 355
                        }, {
                            x: 534,
                            y: 280
                        }, {
                            x: 624,
                            y: 213
                        }, {
                            x: 572,
                            y: 329
                        }, {
                            x: 439,
                            y: 534
                        }, {
                            x: 331,
                            y: 553
                        }, {
                            x: 252,
                            y: 600
                        }, {
                            x: 200,
                            y: 554
                        }, {
                            x: 161,
                            y: 543
                        }, {
                            x: 68,
                            y: 592
                        }];
                        var td = dianList[index_dian];
                        if (td) {
                            var h = 1113 / $(window).height();
                            // alert(event.touches[0].clientX +","+event.touches[0].clientY+h);



                            if (Math.abs(event.touches[0].clientX - td.x) < 40 && Math.abs(event.touches[0].clientY * h - td.y) < 40) {
                                index_dian = index_dian + 1;

                                if (index_dian < 11) {
                                    timeline.gotoAndStop(35 + Math.floor(index_dian * 1.6));
                                } else {
                                    timeline.gotoAndStop(35 + Math.floor(index_dian * 1.9));
                                }

                            }

                        }
                        // touchList.push({x:event.touches[0].clientX,y:event.touches[0].clientY} );
                        // output.innerHTML = "Touch moved (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                        break;
                }

            }
            document.addEventListener("touchstart", handleTouchEvent, false);
            document.addEventListener("touchend", handleTouchEvent, false);
            document.addEventListener("touchmove", handleTouchEvent, false);
        }

        this.instance5 = new lib.guang();
        this.instance5.setTransform(81.1, 641.7, 1, 1, 0, 0, 0, 49.5, 52);
        this.instance5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance5).wait(32).to({
            _off: false
        }, 0).wait(2).to({
            alpha: 0
        }).wait(1));

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_66).wait(1));


        // 图层 4
        this.instance = new lib.手_1("synched", 0);
        this.instance.setTransform(82.1, 639.3, 1, 1, 0, 0, 0, 147.5, 74);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            guide: {
                path: [82.2, 639.2, 77.4, 637.7, 70.7, 634, 57.3, 626.7, 47.6, 616, 16.6, 581.4, 34.1, 525.1, 44.1, 493.1, 66.1, 459.1, 85.7, 428.9, 113, 399.8, 137.6, 373.5, 164.3, 352.6, 189.3, 332.9, 209.2, 323.1, 211.7, 324.1, 223.8, 330.6, 236.4, 337.3, 246.9, 341.5, 281.9, 355.4, 322.1, 354.2, 446.4, 350.6, 622.1, 209.3, 576.6, 260, 564.7, 306.3, 552.2, 354.3, 580.1, 385, 497.4, 393, 464.3, 442.1, 451.2, 461.6, 445.3, 488.1, 440.9, 507.9, 440, 535.2, 383.2, 523, 322.8, 550, 298.6, 560.8, 277.4, 576.5, 258.3, 590.6, 246.2, 605.2, 238.4, 584.2, 219.8, 567.5, 200.1, 549.8, 175.8, 544, 148.6, 537.6, 122.3, 548.3, 93.1, 560, 68.5, 591.5]
            }
        }, 29).to({
            _off: true
        }, 1).wait(4));

        // 图层 7
        this.instance_1 = new lib.手_1("synched", 0);
        this.instance_1.setTransform(68.4, 591.5, 1, 1, 0, 0, 0, 147.5, 74);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({
            _off: false
        }, 0).wait(1).to({
            regX: 191.5,
            regY: 259,
            x: 112.4,
            y: 776.5,
            alpha: 0.667
        }, 0).wait(1).to({
            alpha: 0.333
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(68));

        // 图层 6 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AhxA+QgLgVABgpQAAhOAngaQAhgWAzATQAvARAmAmQAnAnAAAfQAAAlgYAaQghAjhDAAQhWAAgbg2g");
        var mask_graphics_1 = new cjs.Graphics().p("ABLD+IAAgBQgpgXg+gsQiPhigcg2QgJgSgKgnIgQhFQgGgcgnghQgjgdAAgbQAAg/AmgXQAigWA0APQAzAQAsArQAvAvARA+QAKAiAtAtQAWAUBIA4QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_2 = new cjs.Graphics().p("ACDI5IAAgBQgpgXhAgsQiMhigcg2QgGgNgHgWQgxgig1hYQhHh3gRhVQgWh1AAjvIgDg4QgBgzAHgmQAUh1BcAIQBiAJAABkQgBAXgIBBQgIA3AEAaQADAbAFBxQAEBaANA3QADAPAvBJQAcAQAZAZQAtAvARA+QALAiAuAtQAWAUBIA6QApAhAcAcIADABQAvARAnAnQAnAnAAAgQAAAmgZAaQghAjhDAAQhYAAgbg3g");
        var mask_graphics_3 = new cjs.Graphics().p("ACMMwIAAgBQgpgXg/gsQiNhigcg2QgGgNgHgXQgwghg2hZQhHh2gRhXQgUhvgCjYQgKgOgFgTQgGgWAAgbIABgXQAAh7AahzQAah2A3h4QANgbAzhYIAJgPIAUgFQBegcB6gfQgIA0AABBIgDAsQgCAxAFAqQADAaAHAVQgQAegGAZQgKAngJBiQgIBTgTAyIAAHAQgFAbgQAWQgNAQgQALQAZAPAXAXQAuAvAQA9QALAjAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAmAAAhQAAAmgZAaQggAihEAAQhXAAgcg2g");
        var mask_graphics_4 = new cjs.Graphics().p("AB6RrIgBgBQgogXhAgsQiNhigcg3QgGgMgGgXQgxghg2hZQhHh2gQhXQgVhvgCjaQgJgOgGgTQgGgWAAgbIABgXQAAh5Aah0QAah1A4h4IADgGIgBgMIAAgVQAAgQCIjkICHjjQCCgcBpiJQAtg7AghEIAKgWQBMAiANBMQAJA1gNBqIAABJQgBA8gJAgIgTBVQgMApgdAfQgJALhYBFQhMA7gMAaIgKAbQgLAcgPAWQglA4gxAKIAHAeQgQAegFAZQgJAngKBiQgJBRgTAyIAAHCQgFAagQAWQgNARgQAKQAZAPAYAYQAvAvAPA9QAKAjAvAsQAWAVBIA6QApAhAcAcIACABQAwARAmAmQAnAnAAAhQAAAlgYAaQghAjhEAAQhXAAgbg2g");
        var mask_graphics_5 = new cjs.Graphics().p("Ag1VRIAAgBQgpgXg/gsQiPhigcg3QgGgMgHgXQgwghg2hZQhHh2gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgbIABgXQAAh7Aah0QAahzA3h4IAEgGIgBgMIAAgVQAAgQCIjkIBbiZIgCgEQgPgbAAgdQAAgXB+inQCIi2CNiXQCvi9Bog3QB+hDAACSQAAApgUAnQAMAOAJAWQATAqAAArQAABsgoCCQhBDUiHAAQgSAAgPgDQgXANgYAAQgXAAgRgHIAAAwQgCA8gIAgIgTBVQgNApgcAfQgJALhYBFQhLA7gLAaIgKAbQgMAcgOAWQglA4gyAKIAIAeQgQAcgGAZQgKAngLBiQgIBTgTAyIAAHCQgFAagQAWQgNARgQAKQAZAPAXAYQAwAvAQA9QALAjAvAsQAVAVBIA6QAoAhAcAcIACABQAwARAmAmQAnAnAAAhQAAAlgZAaQggAjhEAAQhVAAgcg2g");
        var mask_graphics_6 = new cjs.Graphics().p("AjpXkIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgKIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCti9Bog3QAMgGAKgEQBPhyBphZQB0hhBMgGQAXgCASAHQAuALAPBRQAGAfAABeQAABRgpBiQgnBdhBBUQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgLAogcAgQgJAKhYBFQhNA8gLAaIgKAbQgMAZgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAlAnAAAgQAAAmgXAaQggAjhEAAQhXAAgcg3g");
        var mask_graphics_7 = new cjs.Graphics().p("An8abIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBNhyBphZQB0hhBMgGIAOAAQBLg8Bog9QBqhqBghBQA8gnApgKQAmguA0AnQAdAVAWAoQAVAmAAAXQAAA9gzCbQgjBpggBKQgQApkPCTQicBVhCAiQgdA0gnAyQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiFAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask_graphics_8 = new cjs.Graphics().p("AsAabIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBPhyBphZQByhhBMgGIAOAAQBLg8Bog9QBqhqBghBQA8gnApgKQAmguA0AnQAcAUAVAlQAdANAnAVIBhA2QCDA6CcAmQAxARAUAXQAWAaAAA0QAAAohICIQhPCWgxAAQggAAgagWQgegfgZgRQgPgLhQgOQhLgNgiAAQhqAChGgLQhHAyihBXQicBVhCAiQgdA0gnAyQhABVhFAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask_graphics_9 = new cjs.Graphics().p("AwxabIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBPhyBphZQB0hhBMgGIAOAAQBLg8Bmg9QBqhqBghBQA8gnApgKQAmguA0AnQAcAUAVAlQAdANAnAVIBhA2QCDA6CcAmQAbAKASALQA4gYAoBIIHMAFQA4AKAaAhQASAZAAAgQAAAegXAdQgWAbACAxQADAlAABaQAAALAEAoQACApgGAdQgQBXheAAQgbAAjLgkQjugpiLgmIh0geQg6gPgcgMQhHgeAAhEQAAgMAMgNQhLgNgiAAQhqAChGgLQhHAyihBXQiaBVhCAiQgdA0gnAyQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask_graphics_10 = new cjs.Graphics().p("A1YabIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBPhyBphZQB0hhBMgGIAOAAQBLg8Bog9QBqhqBghBQA8gnAngKQAmguA0AnQAcAUAVAlQAdANAnAVIBhA2QCDA6CcAmQAbAKASALQA4gYAoBIIHMAFIABAAQAlgXA3gKQAOgCCcgIQCVgHAVgFQAagHAfgPQArgTATgHQBCgYApAtQAfAiAAAmQAAAMgLAWQgLAVAAAMQAAANALAbQALAbAAAMQAAAwgoA5QgoA7hFAyQinB4jRAAQg6AAgrgLIgEAYQgQBXheAAQgbAAjLgkQjugpiLgmIh0geQg6gPgcgMQhHgeAAhEQAAgMAMgNQhLgNgiAAQhqAChEgLQhHAyihBXQicBVhCAiQgdA0gnAyQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask_graphics_11 = new cjs.Graphics().p("A6iabIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBPhyBphZQB0hhBMgGIAOAAQBLg8Bog9QBqhqBghBQA8gnApgKQAmguA0AnQAcAUAVAlQAdANAnAVIBhA2QCBA6CcAmQAbAKASALQA4gYAoBIIHMAFIABAAQAlgXA3gKQAOgCCcgIQCVgHAVgFQAagHAfgPQArgTATgHQA/gXAnAnQAggWA9gSIB+gkQAYgHB6gsQBkglA4gMQCvgmAACDQAAAcgbAiQgdAlgEArQgDAXgCAxQgDArgKAcQgOAqgOAUQgYAkgvAYQh5A/k4AAQhJAAgqgaQgjAogxAkQinB4jRAAQg6AAgrgLIgEAYQgQBXheAAQgbAAjLgkQjugpiLgmIh0geQg6gPgcgMQhFgeAAhEQAAgMAMgNQhLgNgiAAQhqAChGgLQhHAyihBXQicBVhCAiQgdA0gnAyQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask_graphics_12 = new cjs.Graphics().p("A+hcLIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiYIgCgDQgPgbAAgeQABgWB+inQCKi2CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CZAmQAbAKASALQA5gYAnBIIHMAFIABAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBehCA3gdQDChmAAC1QABARhAB2QhCB+gdARQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhdAAQgcAAjLgkQjugpiJgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBUQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_13 = new cjs.Graphics().p("EgiWAexIAAgBQgpgXhAgsQiPhigcg3QgFgMgHgXQgxghg2hZQhHh2gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgbIABgXQAAh7Aah0QAah1A3h4IADgGIgBgMIAAgVQAAgQCIjkIBbiZIgCgEQgPgbAAgbQABgXB+inQCKi2CMiXQCvi9Bog3QAMgHALgEQBOhxBphZQB0hhBNgGIANAAQBMg9Bng8QBqhrBhhAQA8goApgJQAmguA0AmQAbAUAVAlQAeANAnAVIBhA2QCDA7CbAmQAbAJASALQA5gXAnBHIHKAFIABABQAlgYA3gJQAPgDCbgHQCWgIAUgFQAagHAggOQArgTATgHQA+gXAoAmQAggWA8gSIB+gjQAZgIB5gsQBkgkA5gMQAPgEAOgBQBJgoCMg1QAPgGBVg7QBchBA3gdIAUgRQAggZBnhJQBqhKBJg6QDxi+BNBsQAaAkAGBIQACAWAABLQAAAohDBLQhCBJhmBKQjgCmiaAOQgWAfgNAIQhPAxiFBDQiGBDhHAVIAAACQgEAsgJAbQgOArgOAUQgYAkgvAYQh5A+k5AAQhJAAgpgZQgkAogxAjQimB4jRAAQg6AAgsgKIgDAXQgRBXhdAAQgcAAjLgjQjsgqiLgmIh0gdQg5gPgcgMQhHgeAAhFQgBgLAMgNQhKgNgjAAQhpAChGgLQhIAxigBYQidBVhCAhQgdA1gmAyQhBBUhGAzQg2AngvAKQgIAjgMAlQhBDUiHAAQgSAAgPgDQgXANgYAAQgWAAgRgHIAAAwQgCA6gIAgIgUBVQgMApgcAfQgKALhYBFQhMA7gMAaIgKAbQgLAcgPAWQgkA4gyAKIAHAeQgQAegGAZQgKAngKBiQgJBTgSAyIAAHCQgGAagQAWQgMARgRAKQAZAPAYAYQAvAvARA9QAKAjAvAsQAWAVBIA6QApAhAcAcIACABQAwARAmAmQAnAnAAAhQAAAlgYAaQghAjhEAAQhXAAgbg2g");
        var mask_graphics_14 = new cjs.Graphics().p("Egl3AhUIAAgBQgpgXhAgsQiPhigcg3QgFgMgHgXQgxghg2hZQhHh2gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgbIABgXQAAh7Aah0QAah1A3h4IADgGIgBgMIAAgVQAAgQCIjkIBbiZIgCgEQgPgbAAgdQABgXB+ilQCKi2CMiXQCvi9Bog3QAMgHALgEQBOhxBphZQB0hhBNgGIANAAQBMg9Bng8QBqhrBhhAQA8goApgJQAmguA0AmQAbAUAVAlQAeANAnAVIBhA2QCDA7CbAmQAbAJASALQA5gXAnBHIHKAFIABABQAlgYA3gJQAPgDCbgHQCWgIAUgFQAagHAggOQArgTATgHQA+gXAoAmQAggWA8gSIB+gjQAZgIB5gsQBkgkA5gMQAPgEAOgBQBJgoCMg1QAPgGBVg7QBchBA3gdIAUgRQAggZBnhJQBqhKBJg6QB9hjBRgSQANgFAOgFIgBgIQABgFBHhMQBVhaBKg6QCRh0A2AuQBSgdAjAtQAYAfgBBBQAADQlyCYQgEArghAgQgUATgaALQgMAlg0A6QhCBJhmBKQjgCmiaAOQgWAfgNAIQhPAxiFBDQiGBDhHAVIAAACQgEAsgJAbQgOArgOAUQgYAkgvAYQh5A+k5AAQhJAAgpgZQgkAogxAjQimB4jRAAQg6AAgsgKIgDAXQgRBXhdAAQgcAAjJgjQjugqiLgmIh0gdQg5gPgcgMQhHgeAAhFQgBgLAMgNQhKgNgjAAQhpAChGgLQhIAxigBYQidBVhCAhQgdA1gmAyQhBBUhGAzQg2AngvAKQgIAjgMAlQhBDSiHAAQgSAAgPgDQgXANgYAAQgWAAgRgHIAAAwQgCA8gIAgIgUBVQgMApgcAfQgKALhYBFQhMA7gMAaIgKAbQgLAcgPAWQgkA4gyAKIAHAeQgQAegGAZQgKAngKBiQgJBTgSAyIAAHCQgGAagQAWQgMARgRAKQAZAPAYAYQAvAvARA9QAKAjAvAsQAWAVBIA6QApAhAcAcIACABQAwARAmAmQAnAnAAAhQAAAlgYAaQghAjhEAAQhXAAgbg2g");
        var mask_graphics_15 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgtA2g6A0QhhBVhVAjQhQCEkABqQgEAqghAgQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_16 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTQgpBMgPAZQgZAngdANQgfAPhCAAQhGAAgVg+QgIgUAAgZIAAgXQAAgpADgqIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_17 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQhOBmhwAAQh6AAgfhJQgKgXABgeIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_18 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAfBbAABnQABBMgyBDQhEBah/AAQhyAAgViCQgIgpADg0IAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_19 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQjDAAgPhGQgEgRAIgsQAGgngKgSQgSgihEgVQhEgWgDgGQgSghgBg8QAAhkEKiXQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_20 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIhuBhQiaCAhLAAQhaAAgThkQgGgfADgnIACgjQAAipARhDQAkiOB9g3QBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_21 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTQhEAxgdAoQgGAIgZA+QgeBJgWAsQhTCehWAAQhUAAgQiKQgFgrABg0IAEgrQgBj1BYjLQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_22 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgEgoAMg/QAMhCgBgKQgEhBACiAIACiFQgHh1AIhoQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_23 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQhYAAgThOQgHgYABgfIADgbQgBh1AVhyQApjhBsgYIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_24 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQh7AAgrgjQgigaABhAQgBhNA4icQBBi3BIgqQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_25 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQj4DAgpAAQhkAAgjhOQgLgYgEgdIgBgZQAAgcBTiuQBai8AwgiQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_26 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQhrBThEAvIgUAiQgYA1iPA7QicBCiNAAQigAAgehzQgKglADgxQAGgtABgIQgBgmAHh1QAIiWAKhRQAHgrBUgaQBWgbA9AaQAgAOAnAiQAkAgAFACQBAAXA/gKQAYgEAcgGQAuhUAfgVQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_27 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQhrBThEAvIgUAiQgYA1iPA7QicBCiNAAQigAAgehzQgKglADgxQAGgtABgIQgBgmAHh1IADgyQgigfgZgUQiHhuivAAQhTAAgRhkQgFgfABgmIAEggQAAgoANhEQARhUAbg2QBPicB5C0QAgAvBTAyQATAMCHBIQBdAzAqAkQAiAeAOAeIANAFQAgAOAnAiQAkAgAFACQBAAXA/gKQAYgEAcgGQAuhUAfgVQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_28 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQhrBThEAvIgUAiQgYA1iPA7QicBCiNAAQigAAgehzQgKglADgxQAGgtABgIQgBgmAHh1IADgyQgigfgZgUQiHhuivAAQhTAAgRhkQgFgfABgmIAEggQAAgoANhEQARhUAbg2QBPicB5C0QAgAvBTAyQATAMCHBIQBdAzAqAkQAiAeAOAeIANAFQAgAOAnAiQAkAgAFACQBAAXA/gKQAYgEAcgGQAuhUAfgVQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_29 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQhrBThEAvIgUAiQgYA1iPA7QicBCiNAAQigAAgehzQgKglADgxQAGgtABgIQgBgmAHh1IADgyQgigfgZgUQiHhuivAAQhTAAgRhkIgCgJIkZABQiLgJhuA+Qg3AfhOBMQgOAOhRBaQhUBUg4AAQhDAAgdgvQgPgaAAgbQABivDqikQDLiPGdicQCagXBlAUQBEg8BeCKQAgAvBTAyQATAMCHBIQBdAzAqAkQAiAeAOAeIANAFQAgAOAnAiQAkAgAFACQBAAXA/gKQAYgEAcgGQAuhUAfgVQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask_graphics_30 = new cjs.Graphics().p("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");

        this.timeline.addTween(cjs.Tween.get(mask).to({
                graphics: mask_graphics_0,
                x: 80.5,
                y: 639.4
            }).wait(1).to({
                graphics: mask_graphics_1,
                x: 61.5,
                y: 620.2
            }).wait(1).to({
                graphics: mask_graphics_2,
                x: 55.9,
                y: 588.7
            }).wait(1).to({
                graphics: mask_graphics_3,
                x: 55,
                y: 564
            }).wait(1).to({
                graphics: mask_graphics_4,
                x: 56.8,
                y: 532.5
            }).wait(1)
            .to({
                graphics: mask_graphics_5,
                x: 74.5,
                y: 509.5
            }).wait(1)
            .to({
                graphics: mask_graphics_6,
                x: 92.5,
                y: 494.8
            }).wait(1)
            .to({
                graphics: mask_graphics_7,
                x: 120,
                y: 476.5
            }).wait(1)
            .to({
                graphics: mask_graphics_8,
                x: 146,
                y: 476.5
            }).wait(1)
            .to({
                graphics: mask_graphics_9,
                x: 176.5,
                y: 476.5
            }).wait(1).to({
                graphics: mask_graphics_10,
                x: 206,
                y: 476.5
            }).wait(1).to({
                graphics: mask_graphics_11,
                x: 239,
                y: 476.5
            }).wait(1).to({
                graphics: mask_graphics_12,
                x: 264.5,
                y: 465.3
            }).wait(1).to({
                graphics: mask_graphics_13,
                x: 289,
                y: 448.7
            }).wait(1).to({
                graphics: mask_graphics_14,
                x: 311.5,
                y: 432.4
            }).wait(1).to({
                graphics: mask_graphics_15,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_16,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_17,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_18,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_19,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_20,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_21,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_22,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_23,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_24,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_25,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_26,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_27,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_28,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_29,
                x: 326,
                y: 425.1
            }).wait(1).to({
                graphics: mask_graphics_30,
                x: 326,
                y: 425.1
            }).wait(34));
        var mask2 = new cjs.Shape();
        mask2._off = true;
        var mask2_graphics_0 = new cjs.Graphics().p("AhxA+QgLgVABgpQAAhOAngaQAhgWAzATQAvARAmAmQAnAnAAAfQAAAlgYAaQghAjhDAAQhWAAgbg2g");
        var mask2_graphics_1 = new cjs.Graphics().p("ABLD+IAAgBQgpgXg+gsQiPhigcg2QgJgSgKgnIgQhFQgGgcgnghQgjgdAAgbQAAg/AmgXQAigWA0APQAzAQAsArQAvAvARA+QAKAiAtAtQAWAUBIA4QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_2 = new cjs.Graphics().p("ACDI5IAAgBQgpgXhAgsQiMhigcg2QgGgNgHgWQgxgig1hYQhHh3gRhVQgWh1AAjvIgDg4QgBgzAHgmQAUh1BcAIQBiAJAABkQgBAXgIBBQgIA3AEAaQADAbAFBxQAEBaANA3QADAPAvBJQAcAQAZAZQAtAvARA+QALAiAuAtQAWAUBIA6QApAhAcAcIADABQAvARAnAnQAnAnAAAgQAAAmgZAaQghAjhDAAQhYAAgbg3g");
        var mask2_graphics_3 = new cjs.Graphics().p("ACMMwIAAgBQgpgXg/gsQiNhigcg2QgGgNgHgXQgwghg2hZQhHh2gRhXQgUhvgCjYQgKgOgFgTQgGgWAAgbIABgXQAAh7AahzQAah2A3h4QANgbAzhYIAJgPIAUgFQBegcB6gfQgIA0AABBIgDAsQgCAxAFAqQADAaAHAVQgQAegGAZQgKAngJBiQgIBTgTAyIAAHAQgFAbgQAWQgNAQgQALQAZAPAXAXQAuAvAQA9QALAjAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAmAAAhQAAAmgZAaQggAihEAAQhXAAgcg2g");
        var mask2_graphics_4 = new cjs.Graphics().p("AB6RrIgBgBQgogXhAgsQiNhigcg3QgGgMgGgXQgxghg2hZQhHh2gQhXQgVhvgCjaQgJgOgGgTQgGgWAAgbIABgXQAAh5Aah0QAah1A4h4IADgGIgBgMIAAgVQAAgQCIjkICHjjQCCgcBpiJQAtg7AghEIAKgWQBMAiANBMQAJA1gNBqIAABJQgBA8gJAgIgTBVQgMApgdAfQgJALhYBFQhMA7gMAaIgKAbQgLAcgPAWQglA4gxAKIAHAeQgQAegFAZQgJAngKBiQgJBRgTAyIAAHCQgFAagQAWQgNARgQAKQAZAPAYAYQAvAvAPA9QAKAjAvAsQAWAVBIA6QApAhAcAcIACABQAwARAmAmQAnAnAAAhQAAAlgYAaQghAjhEAAQhXAAgbg2g");
        var mask2_graphics_5 = new cjs.Graphics().p("Ag1VRIAAgBQgpgXg/gsQiPhigcg3QgGgMgHgXQgwghg2hZQhHh2gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgbIABgXQAAh7Aah0QAahzA3h4IAEgGIgBgMIAAgVQAAgQCIjkIBbiZIgCgEQgPgbAAgdQAAgXB+inQCIi2CNiXQCvi9Bog3QB+hDAACSQAAApgUAnQAMAOAJAWQATAqAAArQAABsgoCCQhBDUiHAAQgSAAgPgDQgXANgYAAQgXAAgRgHIAAAwQgCA8gIAgIgTBVQgNApgcAfQgJALhYBFQhLA7gLAaIgKAbQgMAcgOAWQglA4gyAKIAIAeQgQAcgGAZQgKAngLBiQgIBTgTAyIAAHCQgFAagQAWQgNARgQAKQAZAPAXAYQAwAvAQA9QALAjAvAsQAVAVBIA6QAoAhAcAcIACABQAwARAmAmQAnAnAAAhQAAAlgZAaQggAjhEAAQhVAAgcg2g");
        var mask2_graphics_6 = new cjs.Graphics().p("AjpXkIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgKIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCti9Bog3QAMgGAKgEQBPhyBphZQB0hhBMgGQAXgCASAHQAuALAPBRQAGAfAABeQAABRgpBiQgnBdhBBUQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgLAogcAgQgJAKhYBFQhNA8gLAaIgKAbQgMAZgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAlAnAAAgQAAAmgXAaQggAjhEAAQhXAAgcg3g");
        var mask2_graphics_7 = new cjs.Graphics().p("An8abIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBNhyBphZQB0hhBMgGIAOAAQBLg8Bog9QBqhqBghBQA8gnApgKQAmguA0AnQAdAVAWAoQAVAmAAAXQAAA9gzCbQgjBpggBKQgQApkPCTQicBVhCAiQgdA0gnAyQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiFAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask2_graphics_8 = new cjs.Graphics().p("AsAabIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBPhyBphZQByhhBMgGIAOAAQBLg8Bog9QBqhqBghBQA8gnApgKQAmguA0AnQAcAUAVAlQAdANAnAVIBhA2QCDA6CcAmQAxARAUAXQAWAaAAA0QAAAohICIQhPCWgxAAQggAAgagWQgegfgZgRQgPgLhQgOQhLgNgiAAQhqAChGgLQhHAyihBXQicBVhCAiQgdA0gnAyQhABVhFAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask2_graphics_9 = new cjs.Graphics().p("AwxabIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBPhyBphZQB0hhBMgGIAOAAQBLg8Bmg9QBqhqBghBQA8gnApgKQAmguA0AnQAcAUAVAlQAdANAnAVIBhA2QCDA6CcAmQAbAKASALQA4gYAoBIIHMAFQA4AKAaAhQASAZAAAgQAAAegXAdQgWAbACAxQADAlAABaQAAALAEAoQACApgGAdQgQBXheAAQgbAAjLgkQjugpiLgmIh0geQg6gPgcgMQhHgeAAhEQAAgMAMgNQhLgNgiAAQhqAChGgLQhHAyihBXQiaBVhCAiQgdA0gnAyQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask2_graphics_10 = new cjs.Graphics().p("A1YabIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBPhyBphZQB0hhBMgGIAOAAQBLg8Bog9QBqhqBghBQA8gnAngKQAmguA0AnQAcAUAVAlQAdANAnAVIBhA2QCDA6CcAmQAbAKASALQA4gYAoBIIHMAFIABAAQAlgXA3gKQAOgCCcgIQCVgHAVgFQAagHAfgPQArgTATgHQBCgYApAtQAfAiAAAmQAAAMgLAWQgLAVAAAMQAAANALAbQALAbAAAMQAAAwgoA5QgoA7hFAyQinB4jRAAQg6AAgrgLIgEAYQgQBXheAAQgbAAjLgkQjugpiLgmIh0geQg6gPgcgMQhHgeAAhEQAAgMAMgNQhLgNgiAAQhqAChEgLQhHAyihBXQicBVhCAiQgdA0gnAyQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask2_graphics_11 = new cjs.Graphics().p("A6iabIAAgBQgpgXg/gsQiPhigcg2QgGgNgHgWQgwgig2hYQhHh3gRhXQgUhvgCjaQgKgOgFgTQgGgWAAgaIABgXQAAh8AahzQAah1A3h5IAEgGIgBgMIAAgUQAAgQCIjiIBbiaIgCgDQgPgbAAgeQAAgWB+inQCKi2CNiYQCvi9Bog3QAMgGAKgEQBPhyBphZQB0hhBMgGIAOAAQBLg8Bog9QBqhqBghBQA8gnApgKQAmguA0AnQAcAUAVAlQAdANAnAVIBhA2QCBA6CcAmQAbAKASALQA4gYAoBIIHMAFIABAAQAlgXA3gKQAOgCCcgIQCVgHAVgFQAagHAfgPQArgTATgHQA/gXAnAnQAggWA9gSIB+gkQAYgHB6gsQBkglA4gMQCvgmAACDQAAAcgbAiQgdAlgEArQgDAXgCAxQgDArgKAcQgOAqgOAUQgYAkgvAYQh5A/k4AAQhJAAgqgaQgjAogxAkQinB4jRAAQg6AAgrgLIgEAYQgQBXheAAQgbAAjLgkQjugpiLgmIh0geQg6gPgcgMQhFgeAAhEQAAgMAMgNQhLgNgiAAQhqAChGgLQhHAyihBXQicBVhCAiQgdA0gnAyQhABVhHAyQg2AnguALQgJAjgLAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgXAAgRgHIAAAvQgCA9gIAfIgTBWQgNAogcAgQgJAKhYBDQhNA8gLAaIgKAbQgMAbgOAWQglA4gyALIAIAdQgQAegGAZQgKAngLBiQgIBUgTAxIAAHCQgFAbgQAWQgNARgQAKQAZAPAXAXQAwAvAQA+QALAiAvAtQAVAUBIA6QAqAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgZAaQggAjhEAAQhXAAgcg3g");
        var mask2_graphics_12 = new cjs.Graphics().p("A+hcLIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiYIgCgDQgPgbAAgeQABgWB+inQCKi2CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CZAmQAbAKASALQA5gYAnBIIHMAFIABAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBehCA3gdQDChmAAC1QABARhAB2QhCB+gdARQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhdAAQgcAAjLgkQjugpiJgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDUiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBUQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_13 = new cjs.Graphics().p("EgiWAexIAAgBQgpgXhAgsQiPhigcg3QgFgMgHgXQgxghg2hZQhHh2gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgbIABgXQAAh7Aah0QAah1A3h4IADgGIgBgMIAAgVQAAgQCIjkIBbiZIgCgEQgPgbAAgbQABgXB+inQCKi2CMiXQCvi9Bog3QAMgHALgEQBOhxBphZQB0hhBNgGIANAAQBMg9Bng8QBqhrBhhAQA8goApgJQAmguA0AmQAbAUAVAlQAeANAnAVIBhA2QCDA7CbAmQAbAJASALQA5gXAnBHIHKAFIABABQAlgYA3gJQAPgDCbgHQCWgIAUgFQAagHAggOQArgTATgHQA+gXAoAmQAggWA8gSIB+gjQAZgIB5gsQBkgkA5gMQAPgEAOgBQBJgoCMg1QAPgGBVg7QBchBA3gdIAUgRQAggZBnhJQBqhKBJg6QDxi+BNBsQAaAkAGBIQACAWAABLQAAAohDBLQhCBJhmBKQjgCmiaAOQgWAfgNAIQhPAxiFBDQiGBDhHAVIAAACQgEAsgJAbQgOArgOAUQgYAkgvAYQh5A+k5AAQhJAAgpgZQgkAogxAjQimB4jRAAQg6AAgsgKIgDAXQgRBXhdAAQgcAAjLgjQjsgqiLgmIh0gdQg5gPgcgMQhHgeAAhFQgBgLAMgNQhKgNgjAAQhpAChGgLQhIAxigBYQidBVhCAhQgdA1gmAyQhBBUhGAzQg2AngvAKQgIAjgMAlQhBDUiHAAQgSAAgPgDQgXANgYAAQgWAAgRgHIAAAwQgCA6gIAgIgUBVQgMApgcAfQgKALhYBFQhMA7gMAaIgKAbQgLAcgPAWQgkA4gyAKIAHAeQgQAegGAZQgKAngKBiQgJBTgSAyIAAHCQgGAagQAWQgMARgRAKQAZAPAYAYQAvAvARA9QAKAjAvAsQAWAVBIA6QApAhAcAcIACABQAwARAmAmQAnAnAAAhQAAAlgYAaQghAjhEAAQhXAAgbg2g");
        var mask2_graphics_14 = new cjs.Graphics().p("Egl3AhUIAAgBQgpgXhAgsQiPhigcg3QgFgMgHgXQgxghg2hZQhHh2gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgbIABgXQAAh7Aah0QAah1A3h4IADgGIgBgMIAAgVQAAgQCIjkIBbiZIgCgEQgPgbAAgdQABgXB+ilQCKi2CMiXQCvi9Bog3QAMgHALgEQBOhxBphZQB0hhBNgGIANAAQBMg9Bng8QBqhrBhhAQA8goApgJQAmguA0AmQAbAUAVAlQAeANAnAVIBhA2QCDA7CbAmQAbAJASALQA5gXAnBHIHKAFIABABQAlgYA3gJQAPgDCbgHQCWgIAUgFQAagHAggOQArgTATgHQA+gXAoAmQAggWA8gSIB+gjQAZgIB5gsQBkgkA5gMQAPgEAOgBQBJgoCMg1QAPgGBVg7QBchBA3gdIAUgRQAggZBnhJQBqhKBJg6QB9hjBRgSQANgFAOgFIgBgIQABgFBHhMQBVhaBKg6QCRh0A2AuQBSgdAjAtQAYAfgBBBQAADQlyCYQgEArghAgQgUATgaALQgMAlg0A6QhCBJhmBKQjgCmiaAOQgWAfgNAIQhPAxiFBDQiGBDhHAVIAAACQgEAsgJAbQgOArgOAUQgYAkgvAYQh5A+k5AAQhJAAgpgZQgkAogxAjQimB4jRAAQg6AAgsgKIgDAXQgRBXhdAAQgcAAjJgjQjugqiLgmIh0gdQg5gPgcgMQhHgeAAhFQgBgLAMgNQhKgNgjAAQhpAChGgLQhIAxigBYQidBVhCAhQgdA1gmAyQhBBUhGAzQg2AngvAKQgIAjgMAlQhBDSiHAAQgSAAgPgDQgXANgYAAQgWAAgRgHIAAAwQgCA8gIAgIgUBVQgMApgcAfQgKALhYBFQhMA7gMAaIgKAbQgLAcgPAWQgkA4gyAKIAHAeQgQAegGAZQgKAngKBiQgJBTgSAyIAAHCQgGAagQAWQgMARgRAKQAZAPAYAYQAvAvARA9QAKAjAvAsQAWAVBIA6QApAhAcAcIACABQAwARAmAmQAnAnAAAhQAAAlgYAaQghAjhEAAQhXAAgbg2g");
        var mask2_graphics_15 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgtA2g6A0QhhBVhVAjQhQCEkABqQgEAqghAgQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_16 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTQgpBMgPAZQgZAngdANQgfAPhCAAQhGAAgVg+QgIgUAAgZIAAgXQAAgpADgqIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_17 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQhOBmhwAAQh6AAgfhJQgKgXABgeIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_18 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAfBbAABnQABBMgyBDQhEBah/AAQhyAAgViCQgIgpADg0IAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_19 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQjDAAgPhGQgEgRAIgsQAGgngKgSQgSgihEgVQhEgWgDgGQgSghgBg8QAAhkEKiXQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_20 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIhuBhQiaCAhLAAQhaAAgThkQgGgfADgnIACgjQAAipARhDQAkiOB9g3QBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_21 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTQhEAxgdAoQgGAIgZA+QgeBJgWAsQhTCehWAAQhUAAgQiKQgFgrABg0IAEgrQgBj1BYjLQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_22 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgEgoAMg/QAMhCgBgKQgEhBACiAIACiFQgHh1AIhoQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_23 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQhYAAgThOQgHgYABgfIADgbQgBh1AVhyQApjhBsgYIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_24 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQh7AAgrgjQgigaABhAQgBhNA4icQBBi3BIgqQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_25 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQj4DAgpAAQhkAAgjhOQgLgYgEgdIgBgZQAAgcBTiuQBai8AwgiQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_26 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQhrBThEAvIgUAiQgYA1iPA7QicBCiNAAQigAAgehzQgKglADgxQAGgtABgIQgBgmAHh1QAIiWAKhRQAHgrBUgaQBWgbA9AaQAgAOAnAiQAkAgAFACQBAAXA/gKQAYgEAcgGQAuhUAfgVQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_27 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQhrBThEAvIgUAiQgYA1iPA7QicBCiNAAQigAAgehzQgKglADgxQAGgtABgIQgBgmAHh1IADgyQgigfgZgUQiHhuivAAQhTAAgRhkQgFgfABgmIAEggQAAgoANhEQARhUAbg2QBPicB5C0QAgAvBTAyQATAMCHBIQBdAzAqAkQAiAeAOAeIANAFQAgAOAnAiQAkAgAFACQBAAXA/gKQAYgEAcgGQAuhUAfgVQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_28 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQhrBThEAvIgUAiQgYA1iPA7QicBCiNAAQigAAgehzQgKglADgxQAGgtABgIQgBgmAHh1IADgyQgigfgZgUQiHhuivAAQhTAAgRhkQgFgfABgmIAEggQAAgoANhEQARhUAbg2QBPicB5C0QAgAvBTAyQATAMCHBIQBdAzAqAkQAiAeAOAeIANAFQAgAOAnAiQAkAgAFACQBAAXA/gKQAYgEAcgGQAuhUAfgVQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_29 = new cjs.Graphics().p("EgoIAidIAAgBQgpgXhAgsQiPhigcg2QgFgNgHgWQgxgig2hYQhHh3gQhXQgVhvgCjaQgJgOgGgTQgFgWAAgaIABgXQAAh8AahzQAah1A3h5IADgGIgBgMIAAgUQAAgQCIjkIBbiaIgCgDQgPgbAAgeQABgWB+inQCKi0CMiYQCvi9Bog3QAMgGALgEQBOhyBphZQB0hhBNgGIANAAQBMg8Bng9QBqhqBhhBQA8gnApgKQAmguA0AnQAbAUAVAlQAeANAnAVIBhA2QCDA6CbAmQAbAKASALQA5gYAnBIIHLAFIAAAAQAlgXA3gKQAPgCCbgIQCWgHAUgFQAagHAggPQArgTATgHQA+gXAoAnQAggWA8gSIB+gkQAZgHB5gsQBkglA5gMQAPgDAOgCQBJgnCMg1QAPgGBVg7QBchBA3gdIAUgRQAggaBnhIQBqhLBJg5QB9hjBRgSQANgGAOgEIgBgIQABgFBHhMQBVhbBKg6QB7hiA5ASQBMhFBogsQBvgvBKANQBVAPAABZQAAANgoAxQgkAsgtAqQgDBUgcA2QgPAbh8CqQg5BPguBTIgvBWIABATQAAAogaBkQgZBkAAAcQAAALAQAeQAPAeAAAPQgBAQgOAiQgSAqgbAkQgNAQgNAOQAHAQAHATQAIAaAHAbQApANAiBTQAiBXAWCYQAQB0AABGQAACVhpBjQiZCPlcAAQh3AAg0gaIicBYQgWANg6AyIgvAqQgMAagaAaQgiAjhKAxIh+BTIgRANQAJAdgBAkQgDBZADAMQAKAzAtCuQAOA3AAB1QABCxgVBeQgwDjiXAAQgZAAgjgUQgkgUgxAAQi+AAgPiBQgCgOABgRIiMAAQgygXh/BJQggATg6AjQguAagQAAQgsAAgbgUQh3BDh5AAQgCAAhPA+QhSA9gjAAQg5AAgogHIhTBBQhrBThEAvIgUAiQgYA1iPA7QicBCiNAAQigAAgehzQgKglADgxQAGgtABgIQgBgmAHh1IADgyQgigfgZgUQiHhuivAAQhTAAgRhkIgCgJIkZABQiLgJhuA+Qg3AfhOBMQgOAOhRBaQhUBUg4AAQhDAAgdgvQgPgaAAgbQABivDqikQDLiPGdicQCagXBlAUQBEg8BeCKQAgAvBTAyQATAMCHBIQBdAzAqAkQAiAeAOAeIANAFQAgAOAnAiQAkAgAFACQBAAXA/gKQAYgEAcgGQAuhUAfgVQDLiRCBguQAdgsAfgSQBPgtB8gqQCKguAigRQBTgpBBgIQAXgWAdgGIGTgDIAZgGQgEhcAHhUQALiFAngvQATiaA6iHQBKiqB3hoQBkhZBTgEQAQgJASgIQBBgdCJhDQBFggA0gVQA6hOCxhkQBXgyBjgtIAZgMIAAgnIAFgyQgCg0AAghQAAg8ALgqIAEgMQgGgUABgYIABghQAAjcBDiZQArhhA9g2IADgzIgBAAQgUAUgaAKQgMAlg0A6QhCBJhmBLQjgCmiaAOQgWAegNAIQhPAyiFBDQiGBDhHAUIAAADQgEArgJAcQgOAqgOAUQgYAkgvAYQh5A/k5AAQhJAAgpgaQgkAogxAkQimB4jRAAQg6AAgsgLIgDAYQgRBXhbAAQgcAAjLgkQjugpiLgmIh0geQg5gPgcgMQhHgeAAhEQgBgMAMgNQhKgNgjAAQhpAChGgLQhIAyigBXQidBVhCAiQgdA0gmAyQhBBVhGAyQg2AngvALQgIAjgMAlQhBDSiHAAQgSAAgPgEQgXAOgYAAQgWAAgRgHIAAAvQgCA9gIAfIgUBWQgMAogcAgQgKAKhYBFQhMA8gMAaIgKAbQgLAbgPAWQgkA4gyALIAHAdQgQAegGAZQgKAngKBiQgJBUgSAxIAAHCQgGAbgQAWQgMARgRAKQAZAPAYAXQAvAvARA+QAKAiAvAtQAWAUBIA6QApAhAcAcIACABQAwARAmAnQAnAnAAAgQAAAmgYAaQghAjhEAAQhXAAgbg3g");
        var mask2_graphics_30 = new cjs.Graphics().p("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");

        this.timeline.addTween(cjs.Tween.get(mask2).wait(0).to({     graphics:
        mask2_graphics_0,     x: 80.5,     y: 639.4 }).wait(37).to({
        graphics: mask2_graphics_1,     x: 61.5,     y: 620.2 }).wait(1).to({
        graphics: mask2_graphics_2,     x: 55.9,     y: 588.7 }).wait(1).to({
        graphics: mask2_graphics_3,     x: 55,     y: 564 }).wait(1).to({
        graphics: mask2_graphics_4,     x: 56.8,     y: 532.5 }).wait(1).to({
        graphics: mask2_graphics_5,     x: 74.5,     y: 509.5 }).wait(1).to({
        graphics: mask2_graphics_6,     x: 92.5,     y: 494.8 }).wait(1).to({
        graphics: mask2_graphics_7,     x: 120,     y: 476.5 }).wait(1).to({
        graphics: mask2_graphics_8,     x: 146,     y: 476.5 }).wait(1).to({
        graphics: mask2_graphics_9,     x: 176.5,     y: 476.5 }).wait(1).to({
        graphics: mask2_graphics_10,     x: 206,     y: 476.5 }).wait(1).to({
        graphics: mask2_graphics_11,     x: 239,     y: 476.5 }).wait(1).to({
        graphics: mask2_graphics_12,     x: 264.5,     y: 465.3
        }).wait(1).to({     graphics: mask2_graphics_13,     x: 289,     y:
        448.7 }).wait(1).to({     graphics: mask2_graphics_14,     x: 311.5,
        y: 432.4 }).wait(1).to({     graphics: mask2_graphics_15,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_16,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_17,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_18,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_19,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_20,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_21,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_22,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_23,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_24,     x: 326,
        y: 425.1 }).wait(1).to({     graphics: mask2_graphics_25,     x: 326,






















            
            y: 425.1
        }).wait(1).to({
            graphics: mask2_graphics_26,
            x: 326,
            y: 425.1
        }).wait(1).to({
            graphics: mask2_graphics_27,
            x: 326,
            y: 425.1
        }).wait(1).to({
            graphics: mask2_graphics_28,
            x: 326,
            y: 425.1
        }).wait(1).to({
            graphics: mask2_graphics_29,
            x: 326,
            y: 425.1
        }).wait(1).to({
            graphics: mask2_graphics_30,
            x: 326,
            y: 425.1
        }).wait(4));

        // 图形
        this.instance_4 = new lib.图形2();
        this.instance_4.setTransform(23, 206);
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68));

        this.instance_4.mask = mask2;

        this.instance_2 = new lib.图形();
        this.instance_2.setTransform(23, 206);

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68));
        // 图层 2
        this.instance_3 = new lib.背景();

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(255.1, 506.5, 706.5, 1083.3);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;