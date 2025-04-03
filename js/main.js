function populateData(){
    const allCurrentValues = document.querySelectorAll( ".category-current-value" );
    const allPreviousValues = document.querySelectorAll( ".category-previous-value" );

    allCurrentValues.forEach( (currentValue) => {
        currentValue.innerHTML = `${currentValue.dataset.current}hrs`;
    });

    allPreviousValues.forEach( (previousValue) => {
        previousValue.innerHTML = `Last Week - ${previousValue.dataset.previous}hrs`;
    });
}

populateData();

const ellipsisImgElems = document.getElementsByClassName( "ellipsis-img" );

for( let i=0; i < ellipsisImgElems.length; i++ ){
    let ellipsisImg = ellipsisImgElems[i];

    ellipsisImg.addEventListener( "mouseover", function(e){
       this.parentElement.classList.add( "ellipsis-hovered" );
    });
    
    ellipsisImg.addEventListener( "mouseout", function(e){
       this.parentElement.classList.remove( "ellipsis-hovered" );
    });
}