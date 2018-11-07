$(function(){
    $('.languages').slideUp(0);
    $('.top-language').click(function (e) { 
        e.preventDefault();
        $('.languages').slideToggle();
    });

    var pp = document.querySelectorAll('.product .sp');
    var page = document.querySelectorAll('.pagea .dropdown-item');
    for (let i = 0; i < page.length; i++) {
        page[i].addEventListener('click', function(){
            event.preventDefault();
            let a = this;
            document.getElementById('page').innerText = a.innerText;

            if(this.innerText == '2 items per page'){
                $('.product .container .sp').removeClass('d-none');
                pageaa(3);
            }
            else if(this.innerText == '4 items per page'){
                $('.product .container .sp').removeClass('d-none');
                pageaa(1);
            }
            else{
                $('.product .container .sp').removeClass('d-none');
            }
        })        
    }

    pageaa = (a) => {
        for (let i = 0; i < pp.length; i++) {
            pp[i].classList.add('d-none');
            if(i==a){
                break;
            }
        }
    }

    sosanh = (b) => {
        if(b.indexOf("col-sm-3")!=-1){
            return "col-sm-3";
        }
        else if(b.indexOf("col-sm-6")!=-1){
            return "col-sm-6";
        }
        else if(b.indexOf("col-sm-2")!=-1){
            return "col-sm-2";
        }
    }

    var pageb = document.querySelectorAll('.pageb .dropdown-item');
    for (let i = 0; i < pageb.length; i++) {
        pageb[i].addEventListener('click', function(){
            event.preventDefault();
            let a = this;
            document.getElementById('cot').innerText = a.innerText;
            var b = $('.product .sp');
            if(this.innerText == '4 Columns'){
                $('.product .container .sp').removeClass(sosanh(b[0].className));
                $('.product .container .sp').addClass('col-sm-3');
            }
            else if(this.innerText == '6 Columns'){
                $('.product .container .sp').removeClass(sosanh(b[0].className));
                $('.product .container .sp').addClass('col-sm-2');
            }
            else{
                $('.product .container .sp').removeClass(sosanh(b[0].className));
                $('.product .container .sp').addClass('col-sm-6');
            }
        })
    }

    new WOW().init();
})


var asdasd = document.querySelectorAll(".product .sp");
console.log(asdasd);
huydn = () => {
    for (let i = 0; i < asdasd.length; i++) {
        asdasd[i].innerHTML = 
        '<div class="tong">'+
        '<div class="anh">'+
        '<img src="images/sp1.jpg" alt="">'+
        '<div class="giua">'+
        '<p>quick view</p>'+
        '</div>'+
        '</div>'+
        '<div class="khoisp">'+
        '<div class="title-product">'+
        '<p>Your Product Title</p>'+
        '<div class="rating">'+
        '<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>'+
        '</div>'+
        '<div class="price">$55.00</div>'+
        '</div>'+
        '<div class="addcart">'+
        '<a href=""><i class="fa fa-cart-plus"></i> add to cart</a>'+
        '<a href=""><i class="fa fa-file-text-o"></i> View detail</a>'+
        '</div>'+
        '</div>'+
        '</div>';
    }
}
huydn();    