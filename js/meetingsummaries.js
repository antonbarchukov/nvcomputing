window.onload = function () {
   //New Cards Go On Top
   var cards = [  
      {
         "title": "Agenda 9/26",
         "description": "Codeforces Registration",
         "img": "agenda926",
         "link": "https://docs.google.com/presentation/d/1B7c5TFj5bM03UEm1P5HLDoj3gzWRtzcaWIc0hQiGEzo/edit#slide=id.g6375b0a41e_0_0",
      },
      {
         "title": "Agenda 9/19",
         "description": "Registration and ACSL Team",
         "img": "agenda919",
         "link": "https://docs.google.com/presentation/d/1ZhoPvxPNKG2ctBEypKe5vpPQImJ-JNB6sBaPbIFoxp8/edit#slide=id.g6375b0a41e_0_0",
      },
      {
         "title": "Agenda 9/12",
         "description": "First Meeting of the Year!",
         "img": "agenda912",
         "link": "https://docs.google.com/presentation/d/1fiZ_e-4rm9CuWl_9iG0qHq-YJpLc0lL_WHZmECFiNhY/edit#slide=id.p",
      },
   ];

   document.getElementById("carouselID").innerHTML += `
   <div class="carousel-item active">
      <a href="`+ cards[0].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[0].img + `.png" alt="First Slide"></a>
      <div class="d-none d-md-block pt-2 carousel-caption-custom">
         <h3>`+ cards[0].title + `</h3>
         <p>`+ cards[0].description + `</p>
      </div>
   </div>
   <div class="carousel-item">
      <a href="`+ cards[1].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[1].img + `.png" alt="Second Slide"></a>
      <div class="d-none d-md-block pt-2 carousel-caption-custom">
         <h3>`+ cards[1].title + `</h3>
         <p>`+ cards[1].description + `</p>
      </div>
   </div>
   <div class="carousel-item">
      <a href="`+ cards[2].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[2].img + `.png" alt="Third Slide"></a>
      <div class="d-none d-md-block pt-2 carousel-caption-custom">
         <h3>`+ cards[2].title + `</h3>
         <p>`+ cards[2].description + `</p>
      </div>
   </div>
   `;

   cards.forEach(function (element) {
      document.getElementById("card-list").innerHTML += `
      <div class="col-md-4 mt-2">
         <div class="card ">
            <a href="`+ element.link +`" target="__blank"><img class="card-img-top" src="img/` + element.img + `.png" alt="Card Image"></a>
            <div class="card-body">
               <h5 class="card-title border-bottom pb-3">` + element.title + `</h5>
               <p class="card-text-custom">` + element.description + `</p>
               <a href="` + element.link + `" class="btn btn-md btn-info float-right" target="__blank">Read more</a>
            </div>
         </div>
      </div>`;
   })
}