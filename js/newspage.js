
//newproduct
function $id(id){  //$id("btnLeft")
    return document.getElementById(id);  //document.getElementById("btnLeft")
}


window.addEventListener("load", function(){

    let wrap = document.querySelector(".nitemgroupcenter");
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