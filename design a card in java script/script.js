function createcard(title,Cname,views,monthsOld,duration,thumbnail){
    if (views < 1000) {
        views = views
    }
    else if(views > 1000000){
        views = views/1000000 + M
    }
    else(
        views = views/1000 + K
    )
    let HTML = `<div class="container">
        <div class="image">
            <img src= "${thumbnail}">    
        </div>
        <div class="text">"${title}"</div> <p class="Cname">
    </div>
    <ul class="container3">
        <li class="li1">"${Cname}"</li>
        <li>${views}views</li>
        <li>${monthsOld}</li>
    </ul>
    <div class="capsule">"${duration}"</div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + HTML
}
createcard("Basic Stucture of an HTML Website | Sigma Web Develeopment Course -Tutorial # 5","CodeWithHarry",727000,7,"31:33")