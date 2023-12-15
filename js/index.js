//banner
$(function () {
    let divWidth = $('#bannersliderBoard').width()
    let imgCount = $('#banner li').length
    
    for(let i = 0; i < imgCount; i++){
        $('#bannerButton').append(`<li></li>`)
    }
    $('#bannerButton li:first').addClass('clicked')
    
    $('#banner li').width(divWidth)            // li 的寬度
    $('#banner').width(divWidth * imgCount)    // ul 的寬度
    
    let index = 0
    let timer = setInterval(moveToNext, 5000)

    $('#bannerButton li').click(function(){
        clearInterval(timer)
        index = $(this).index()

        $('#banner').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#bannerButton li').not(this).removeClass('clicked')
        
        timer = setInterval(moveToNext, 5000)
    })

    function moveToNext(){
        if(index < imgCount - 1){
            index++
        }else{
            index = 0
        }

        $('#banner').animate({
            left: divWidth * index * -1,
        })

        $(`#bannerButton li:eq(${index})`).addClass('clicked')
        $('#bannerButton li').not(`:eq(${index})`).removeClass('clicked')
    }

});


//newproduct
function $id(id){  //$id("btnLeft")
    return document.getElementById(id);  //document.getElementById("btnLeft")
}


window.addEventListener("load", function(){

    let wrap = document.querySelector(".pitemgroup");
    let curIndex = 0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft").onclick = function(){
        $id("btnLeft").style.display="block";
        curIndex--;
        wrap.style.left = - curIndex * 100 + "%";
        if(curIndex === 0){
            $id("btnLeft").style.display="none";
        }
        $id("btnRight").style.display="block";
    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight").onclick = function(){
        curIndex++;
        if(curIndex === 3){
            // $id("btnRight").disabled = true;
            curIndex = 0;
            $id("btnLeft").style.display="none";
        } else {
            $id("btnLeft").style.display="block";
        }
        wrap.style.left = - curIndex * 100 + "%";
        
        
    }
})


//news
$(function () {
    let divWidth = $('#phnewssliderBoard').width()
    let imgCount = $('#phnews li').length
    
    for(let i = 0; i < imgCount; i++){
        $('#phnewsButton').append(`<li></li>`)
    }
    $('#phnewsButton li:first').addClass('clicked')
    
    $('#phnews li').width(divWidth)            // li 的寬度
    $('#phnews').width(divWidth * imgCount)    // ul 的寬度
    
    let index = 0
    let timer = setInterval(moveToNext, 5000)

    $('#phnewsButton li').click(function(){
        clearInterval(timer)
        index = $(this).index()

        $('#phnews').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#phnewsButton li').not(this).removeClass('clicked')
        
        timer = setInterval(moveToNext, 5000)
    })

    function moveToNext(){
        if(index < imgCount - 1){
            index++
        }else{
            index = 0
        }

        $('#phnews').animate({
            left: divWidth * index * -1,
        })

        $(`#phnewsButton li:eq(${index})`).addClass('clicked')
        $('#phnewsButton li').not(`:eq(${index})`).removeClass('clicked')
    }

});