let list = document.querySelectorAll('.list');
let itembox = document.querySelectorAll('.itembox');

for(let i = 0; i < list.length; i++){
    
    list[i].addEventListener('click' , function(){
        for(let j = 0; j < list.length; j++){
           list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        // console.log(dataFilter);

    
        for( var k = 0; k < itembox.length; k++){

            
            if(itembox[k].getAttribute('data-filter') == dataFilter || dataFilter == "All" ){
                console.log(itembox[k]);
                itembox[k].classList.add('active'); 
                itembox[k].classList.remove('hide');
                 
            }else {
                itembox[k].classList.remove('active');  
                itembox[k].classList.add('hide');
            }
            
           
        }

    })
}

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 0

});

// document.getElementById("menutoggleid").addEventListener("click", abc);

// function abc() {
//     document.getElementById("header").classList.toggle("open");
// }

const divopen = document.getElementById('nav-menu');
const addBtn = document.getElementById('menutoggleid');


addBtn.addEventListener('click',()=>{

    if (divopen.classList.contains('open')) {
        divopen.classList.remove('open');
    } else {
        divopen.classList.add('open');
    }
});



function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}



