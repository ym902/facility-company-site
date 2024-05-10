'use strict'

// メインビジュアル スライドショー .mainvisual
// ※swiper => スライダーが簡単に作れるJavaScriptライブラリのこと
const swiper1 = new Swiper(".js-swiper1",{
    slidesPerView: 1,  //一度に表示するスライドの数
    spaceBetween: 0,   //スライド間の余白
    loop: true,        //ループさせるか
    speed: 1000,       //速度
    effect: "fade",    //フェードで切り替え

    autoplay:{
    delay: 3000, //再生時間
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true //ページネーションクリックでページ切り替え
    },
});


// ヘッダーメニュー スクロール .header-menu
const targetScroll = document.getElementsByClassName("header-menu");

const targetHmA = document.querySelectorAll(".header-menu > h1 > a");

const targetHmLiA = document.querySelectorAll(".header-nav > ul > li > a");

const targetHmHn = document.querySelectorAll(".header-menu > nav");
console.log(targetHmHn);

window.addEventListener("scroll", function(){
    // console.log("縦スクロール：" + window.scrollY);
    if(400 < window.scrollY){
        targetScroll[0].style.padding = "5px 35px";
        targetScroll[0].style.background = "white";
        targetScroll[0].style.transitionDuration = "0.4s";
        targetScroll[0].style.boxShadow = "0 3px 8px -3px rgba(0, 0, 0, 0.15)";
        targetHmA[0].style.color = "black";
        targetHmLiA[0].style.color = "black";
        targetHmLiA[1].style.color = "black";
        targetHmLiA[2].style.color = "black";
        targetHmLiA[3].style.color = "black";
        targetHmLiA[4].style.color = "black";
        targetHmLiA[4].style.border = "1px solid black";
        targetHmLiA[4].addEventListener("mouseover", function(){
            this.style.color = "white";
            this.style.background = "black";
        });
        targetHmLiA[4].addEventListener("mouseleave", function(){
            this.style.color = "black";
            this.style.background = "white";
        });
        targetHmHn[0].classList.remove("header-nav");
        targetHmHn[0].classList.add("header-nav-scroll");

    }else{
        targetScroll[0].style.padding = "25px 35px";
        targetScroll[0].style.background = "none";
        targetScroll[0].style.boxShadow = "none";
        targetHmA[0].style.color = "white";
        targetHmLiA[0].style.color = "white";
        targetHmLiA[1].style.color = "white";
        targetHmLiA[2].style.color = "white";
        targetHmLiA[3].style.color = "white";
        targetHmLiA[4].style.color = "white";
        targetHmLiA[4].style.border = "1px solid white";
        targetHmLiA[4].addEventListener("mouseover", function(){
            this.style.color = "black";
            this.style.background = "white";
        });
        targetHmLiA[4].addEventListener("mouseleave", function(){
            this.style.color = "white";
            this.style.background = "none";
        });
        targetHmHn[0].classList.remove("header-nav-scroll");
        targetHmHn[0].classList.add("header-nav");
    }
});


// 施工実績 ホバー時画像サイズ変更 .js-swiper2
const targetHover = document.getElementsByClassName("works-lists");
console.log(targetHover);

targetHover[0].addEventListener("mouseover", function(){
    this.style.transform = "scale(.97)";
    this.style.transitionDuration = "0.4s";
});

targetHover[1].addEventListener("mouseover", function(){
    this.style.transform = "scale(.97)";
    this.style.transitionDuration = "0.4s";
});

targetHover[2].addEventListener("mouseover", function(){
    this.style.transform = "scale(.97)";
    this.style.transitionDuration = "0.4s";
});

targetHover[3].addEventListener("mouseover", function(){
    this.style.transform = "scale(.97)";
    this.style.transitionDuration = "0.4s";
});

targetHover[4].addEventListener("mouseover", function(){
    this.style.transform = "scale(.97)";
    this.style.transitionDuration = "0.4s";
});

targetHover[5].addEventListener("mouseover", function(){
    this.style.transform = "scale(.97)";
    this.style.transitionDuration = "0.4s";
});

targetHover[0].addEventListener("mouseleave", function(){
    this.style.transform = "scale(1)";
});

targetHover[1].addEventListener("mouseleave", function(){
    this.style.transform = "scale(1)";
});

targetHover[2].addEventListener("mouseleave", function(){
    this.style.transform = "scale(1)";
});

targetHover[3].addEventListener("mouseleave", function(){
    this.style.transform = "scale(1)";
});

targetHover[4].addEventListener("mouseleave", function(){
    this.style.transform = "scale(1)";
});

targetHover[5].addEventListener("mouseleave", function(){
    this.style.transform = "scale(1)";
});


// 施工実績 スライダー .js-swiper2
const swiper2 = new Swiper(".js-swiper2", {
    loop: true,           //繰り返す
    centeredSlides: true, //アクティブなスライドを中央に表示
    slidesPerView: 3.5,   //画面にスライド何枚表示するか
    spaceBetween: 3,      //スライド間の距離 単位:px
    speed: 600,           //スライドの推移時間 単位:ms

    autoplay:{
        delay: 4000,      //再生時間
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
});