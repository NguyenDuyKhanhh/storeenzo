fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data =>{
      var cardProducts = document.querySelector(".card-products");
    function render(){

            cardProducts.innerHTML ='';
            data.forEach((item,index) => {
                let newProduct = document.createElement('div');
                newProduct.classList.add("product");
                newProduct.innerHTML =`<img src="${item.image}" alt="">
                                            <div class="infor">
                                                <p>${item.title}</p>
                                                <small>Rate: ${item.rating.rate}</small>
                                                <span>Price: ${item.price}$</span>                           
                                            </div>
                                            <button>Detail</button>`
                                        cardProducts.appendChild(newProduct)
                                                                     
                                    });
                                   
                                renderProduct();
                               
    }
      render();
function searchProduct(){
 var valueInput = document.getElementById("input-search")
        valueInput.addEventListener('input',(e)=>{ 
            var currentSearch = e.target.value.trim().toLowerCase()     
            var productDom = document.querySelectorAll(".product");
            var searchBtn = document.querySelector("button")
            var i = 0;
            productDom.forEach((item)=>{
                searchBtn.addEventListener('click',()=>{
                  
                       if(item.innerText.toLowerCase().includes(currentSearch)){
                    item.style.display = 'flex';
                  
               }
                        else{
                    item.style.display = 'none';
                  
                     
               }    
         
            })
              

        })     
             
    })
}
searchProduct()  
    function renderProduct(){
          var btns = document.querySelectorAll(".product button");
     var store = document.querySelector(".store")
     var cardSearch = document.querySelector(".card-search")
     var picture = document.querySelectorAll(".product img")
     var nameProduct = document.querySelectorAll(".product .infor")
   
    btns.forEach((btn,index)=>{
       btn.addEventListener('click',()=>{
        
       cardProducts.innerHTML = `<div class="show-detail">
        <i class='bx bx-arrow-back'></i>
       <img src ="${picture[index].currentSrc}">
       <div class="detail-infor">
        ${nameProduct[index].innerHTML}
       </div>
       <button>Buy now!!!</button>
       </div>
       `
        var backTab = document.querySelector(".show-detail i")
        backTab.addEventListener('click',()=>{
          render();
        })
       })

    })
    
    }
    renderProduct()
    
    
})





