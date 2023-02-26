let api = "https://fakestoreapi.com"
let products_url = "products"
let categories = "categories"
let loader = document.getElementById("img")
let category = "category"
let card =  document.getElementById("card")


let promise = new Promise ((res,rej)=>{
   fetch(`${api}/${products_url}`)
   .then((data)=>{
      if(data!=null){
        res(data.json())
      }
      else{
        rej("no get data")
      }

   })


})
promise
.then((data)=>{
   
    console.log(data)
  
  loader.style.display="none"    
    data.map((v,i)=>{
          card.innerHTML+=`
          <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <div class="card" style="height:400px;overflow:hidden" >
    <img src=${v.image} class="card-img-top" alt="..." style="object-fit: contain;height:200px">
    <div class="card-body">
      <h6 class="card-title">${v.title}</h6>
      <p class="card-text">${"Rs:"+ v.price}</p>
     <button type="button" class="btn btn-outline-primary" style="width: 100px;">Order Now</button>
    </div>
  </div>
  </div>


          `
          
    })

})
.catch((e)=>{
    console.log(e)
})


let promise2 = new Promise ((res,rej)=>{
fetch(`${api}/${products_url}/${categories}`)
.then((data1)=>{
if(data1!=null){
    res(data1.json())
    // console.log(data1.json())
}
else{
    rej("no get data")
}

})

})
promise2
.then((data1)=>{
console.log(data1)
let btn = document.getElementById("btn")
data1.map((v,i)=>{
    btn.innerHTML+=`
    <button type="button" class="btn btn-outline-primary"  style="width: 100px;" onclick="get_product(this)" >${v}</button>
    `
})

})
.catch((e)=>{
    console.log(e)
})


let get_product = (e) =>{
card.innerHTML = ""
loader.style.display="block"
let category_promise = new Promise ((res,rej)=>{
fetch(`${api}/${products_url}/${category}/${e.innerText}`)
.then((data)=>{
if(data!=null){
res(data.json() )
}
else{
    rej("not get data")
}

})


})
category_promise
.then((data)=>{
    console.log(data)
    loader.style.display="none"
data.map((v,i)=>{
card.innerHTML+=`
<div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
<div class="card" style="height:400px;overflow:hidden" >
<img src=${v.image} class="card-img-top" alt="..." style="object-fit: contain;height:200px">
<div class="card-body">
<h6 class="card-title">${v.title}</h6>
<p class="card-text">${"Rs:"+ v.price}</p>
<button type="button" class="btn btn-outline-primary" style="width: 100px;">Order Now</button>
</div>
</div>
</div>


`



})

})
.catch((e)=>{
console.log(e)

})

}




let all_data = () =>{
card.innerHTML=""
loader.style.display="block"


let promise = new Promise ((res,rej)=>{
    fetch(`${api}/${products_url}`)
    .then((data)=>{
       if(data!=null){
         res(data.json())
       }
       else{
         rej("no get data")
       }
 
    })
 
 
 })
 promise
 .then((data)=>{
    
     console.log(data)
   
   loader.style.display="none"    
     data.map((v,i)=>{
           card.innerHTML+=`
           <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
           <div class="card" style="height:400px;overflow:hidden" >
     <img src=${v.image} class="card-img-top" alt="..." style="object-fit: contain;height:200px">
     <div class="card-body">
       <h6 class="card-title">${v.title}</h6>
       <p class="card-text">${"Rs:"+ v.price}</p>
       <button type="button" class="btn btn-outline-primary" style="width: 100px;">Order Now</button>
     </div>
   </div>
   </div>
 
 
           `
           
     })
 
 })
 .catch((e)=>{
     console.log(e)
 })

}