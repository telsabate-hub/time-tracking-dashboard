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