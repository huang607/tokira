
function changeToAll(){
    //先取得要操作的標籤
    let allDiv=document.querySelector(".all-info");
    let productDiv=document.querySelector(".product-info");
    let activityDiv=document.querySelector(".activity-info");
    let storeDiv=document.querySelector(".store-info");
    let pageDiv=document.querySelector(".page");
    let allMenu=document.querySelector(".all-menu>span");
    let productMenu=document.querySelector(".product-menu>span");
    let activityMenu=document.querySelector(".activity-menu>span");
    let storeMenu=document.querySelector(".store-menu>span");

    //在對標籤做操作
    allDiv.style.display="block";
    productDiv.style.display="none";
    activityDiv.style.display="none";
    storeDiv.style.display="none";
    pageDiv.style.display="block";

    allMenu.style.color="#FE793E";
    productMenu.style.color="#3A3A3A";
    activityMenu.style.color="#3A3A3A";
    storeMenu.style.color="#3A3A3A";
}

function changeToProduct(){
    //先取得要操作的標籤
    let allDiv=document.querySelector(".all-info");
    let productDiv=document.querySelector(".product-info");
    let activityDiv=document.querySelector(".activity-info");
    let storeDiv=document.querySelector(".store-info");
    let pageDiv=document.querySelector(".page");
    let allMenu=document.querySelector(".all-menu>span");
    let productMenu=document.querySelector(".product-menu>span");
    let activityMenu=document.querySelector(".activity-menu>span");
    let storeMenu=document.querySelector(".store-menu>span");


    //在對標籤做操作
    allDiv.style.display="none";
    productDiv.style.display="block";
    activityDiv.style.display="none";
    storeDiv.style.display="none";
    pageDiv.style.display="none";
    allMenu.style.color="#3A3A3A";
    productMenu.style.color="#FE793E";
    activityMenu.style.color="#3A3A3A";
    storeMenu.style.color="#3A3A3A";
}

function changeToActivity(){
    //先取得要操作的標籤
    let allDiv=document.querySelector(".all-info");
    let productDiv=document.querySelector(".product-info");
    let activityDiv=document.querySelector(".activity-info");
    let storeDiv=document.querySelector(".store-info");
    let pageDiv=document.querySelector(".page");
    let allMenu=document.querySelector(".all-menu>span");
    let productMenu=document.querySelector(".product-menu>span");
    let activityMenu=document.querySelector(".activity-menu>span");
    let storeMenu=document.querySelector(".store-menu>span");

    //在對標籤做操作
    allDiv.style.display="none";
    productDiv.style.display="none";
    activityDiv.style.display="block";
    storeDiv.style.display="none";
    pageDiv.style.display="none";
    allMenu.style.color="#3A3A3A";
    productMenu.style.color="#3A3A3A";
    activityMenu.style.color="#FE793E";
    storeMenu.style.color="#3A3A3A";
}

function changeToStore(){
    //先取得要操作的標籤
    let allDiv=document.querySelector(".all-info");
    let productDiv=document.querySelector(".product-info");
    let activityDiv=document.querySelector(".activity-info");
    let storeDiv=document.querySelector(".store-info");
    let pageDiv=document.querySelector(".page");
    let allMenu=document.querySelector(".all-menu>span");
    let productMenu=document.querySelector(".product-menu>span");
    let activityMenu=document.querySelector(".activity-menu>span");
    let storeMenu=document.querySelector(".store-menu>span");


    //在對標籤做操作
    allDiv.style.display="none";
    productDiv.style.display="none";
    activityDiv.style.display="none";
    storeDiv.style.display="block";
    pageDiv.style.display="none";
    allMenu.style.color="#3A3A3A";
    productMenu.style.color="#3A3A3A";
    activityMenu.style.color="#3A3A3A";
    storeMenu.style.color="#FE793E";
}

