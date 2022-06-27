let list = document.querySelectorAll('.list');
let itembox = document.querySelectorAll('.itembox');

for(let i = 0; i < list.length; i++){
    
    list[i].addEventListener('click' , function(){
        for(let j = 0; j < list.length; j++){
           list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for( let k = 0; k < itembox.length; k++){

            if(itembox[k].getAttribute('data-filter') == dataFilter || dataFilter == "all" ){
                itembox[k].classList.remove('hide');
                itembox[k].classList.add('active');   
            }
            
            itembox[k].classList.remove('active');  
            itembox[k].classList.add('hide');
        }

    })
}