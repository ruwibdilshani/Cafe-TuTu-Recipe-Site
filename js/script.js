let trends = document.querySelectorAll('.trends');

let count = 0;

trends.forEach((curElem, index) => {
    curElem.style.left = `${index * 100}%`;
    })

const myFood =()=>{
    trends.forEach((curImg) => {
        curImg.style.transform= `translateX(-${count * 100}%)`
    })  
}

setInterval(()=>{
    count++;
    if(count > trends.length - 1){
        count = 0;
    }
    myFood();
}, 4000);

//  <div id="trend">
//             <div class="head">
//                 <h1>Trending Foods</h1>
//             </div>
//             <div class="trendFood">
//                 <div class="trends">
//                     <img src="/image/img1.jpeg" alt="">
//                     <img src="/image/img8.jpeg" alt="">
//                     <img src="/image/img3.jpeg" alt="">

//                 </div>
//                 <div class="trends">
//                     <img src="/image/img4.jpeg" alt="">
//                     <img src="/image/img5.jpeg" alt="">
//                     <img src="/image/img6.jpeg" alt="">

//                 </div>
//                 <div class="trends">
//                     <img src="/image/img7.jpeg" alt="">
//                     <img src="/image/img7.jpeg" alt="">
//                     <img src="/image/img8.jpeg" alt="">

//                 </div>
//             </div>
//         </div>

 



    // <div id="trending">
    //         <div class="head">
    //             <h1>Trending Foods</h1>
    //         </div>
            
    //         <div id="trending-Food">
        
    //             <div class="gallery">
        
    //                   <img src="/image/burgur.png" alt="Cinque Terre" width="600" height="400">
    //                 </a>
    //                 <div class="desc">Add a description of the image here</div>
    //               </div>
                  
    //               <div class="gallery">
                   
    //                   <img src="/image/burgur.png" alt="Forest" width="600" height="400">
    //                 </a>
    //                 <div class="desc">Add a description of the image here</div>
    //               </div>
                  
    //               <div class="gallery">
                 
    //                   <img src="/image/burgur.png" alt="Northern Lights" width="600" height="400">
    //                 </a>
    //                 <div class="desc">Add a description of the image here</div>
    //               </div>
                  
    //               <div class="gallery">
                 
    //                   <img src="/image/burgur.png" alt="Mountains" width="600" height="400">
    //                 </a>
    //                 <div class="desc">Add a description of the image here</div>
    //               </div>
    //         </div>
           
    //     </div>