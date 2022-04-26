const featuresList = document.querySelector('.features-li')
const companiesList = document.querySelector('.companies-li')
const features = document.querySelector('.features')
const company = document.querySelector('.companies')
const body = document.querySelector('body')
const arrowf = document.querySelector('.arrow-f')
const arrowc = document.querySelector('.arrow-c')



company.addEventListener('click',()=>{
    if(featuresList.classList.contains('display')){
        featuresList.classList.remove('display')
        companiesList.classList.toggle('display')
        arrowc.classList.add('rotate')
        arrowf.classList.remove('rotate')
    }
    else{
        companiesList.classList.toggle('display')
        arrowc.classList.toggle('rotate')
    }
})


features.addEventListener('click',(e)=>{
    if(companiesList.classList.contains('display')){
        companiesList.classList.remove('display')
        featuresList.classList.toggle('display')
        arrowf.classList.add('rotate')
        arrowc.classList.remove('rotate')

    }
    
    else{
        featuresList.classList.toggle('display')
        arrowf.classList.toggle('rotate')
    }
})



const menuBtn = document.querySelector('.menu')
const cancleMenuBtn = document.querySelector(".cancle")
const sideMenu = document.querySelector('.side-menu')

menuBtn.addEventListener('click',()=>{
    
    sideMenu.style.display = "flex" 

    setTimeout(() => {
    sideMenu.style.transform = "translateX(0)"

        },0);

})

cancleMenuBtn.addEventListener('click',()=>{
    sideMenu.style.transform = "translateX(100%)"

    setTimeout(() => {
    sideMenu.style.display = "none" 
    }, 500);

})


const mCompany = document.querySelector('.m-companies')
const mFeature = document.querySelector('.m-features')
const companyList = document.querySelectorAll('.m-company-li')
const featureList = document.querySelectorAll('.m-feature-li')
const arrowF  = document.querySelector('.down-arrow-f')
const arrowC  = document.querySelector('.down-arrow-c')


mFeature.addEventListener('click',()=>{
    featureList.forEach((e)=>{
      
        e.classList.toggle('m-display')
        sideMenu.classList.add('rotateF')

        if(e.classList.contains('m-display')){
            sideMenu.classList.remove('rotateF')
      
        }
    })
})  


mCompany.addEventListener('click',()=>{
    companyList.forEach((e)=>{
        
        e.classList.toggle('m-display')
        sideMenu.classList.toggle('rotateC')
      
    })
})

