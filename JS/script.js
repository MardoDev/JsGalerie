 var items = document.querySelectorAll('.item');
  var logo = document.getElementById("logo");
  var images = document.querySelectorAll('img');
   var para1 = document.getElementById("para1");
   var image_input = document.getElementById("image_input");
    var recharger = document.querySelector("#recharger");
   var cancel = document.getElementById("annuler");
     var uploader_image = "";
     var index = 7;
     recharger.addEventListener('click',()=>{
      index = parseInt(prompt("Entre le numéro de la grille : "));

        
        
 });
var oops = images[5].getAttribute('src');
items.forEach(item => {
    item.addEventListener('click',()=>{
        item.style.transition = "all 10s";
        items[7].style.backgroundImage ="none";
        para1.style.display ="none";  
        // items[7].removeChild(para1);
        if (item != items[7]) {
            for (let i = 0; i < images.length; i++) {
                 if (item.getAttribute('data-ani')==images[i].getAttribute('data-ani')) {
                    
                    oops = images[i].getAttribute('src');
                    images[7].setAttribute('src', oops);
                 }
                
            }
        }
        
    })
});


cancel.addEventListener('click',()=>{
    // item.style.transition = "all 10s";
    items[7].style.backgroundImage ="url(../Photos/océan.jpeg)";
        location.reload();     
})
// Changer la photo

   
document.querySelector("#image_input").addEventListener('change',function () {
    //  console.log(this.files);
       const reader = new FileReader();
       
       reader.addEventListener("load",()=>{
        //    console.log(reader.result);
           localStorage.setItem("recent-image",reader.result);
            
       })
        reader.readAsDataURL(this.files[0]);  
        
   })


    document.addEventListener("DOMContentLoaded",()=>{
        
        const recentImageDataUrl = localStorage.getItem("recent-image");
        if (recentImageDataUrl) {
             document.getElementById("annuler").style.display = "block";
               if (index < 7) {
                images[index].setAttribute("src",recentImageDataUrl);
               }else{
                        images[index].setAttribute("src",       recentImageDataUrl);
                       items[index].style.backgroundImage="none";
               }
           
        }
    })
 
   