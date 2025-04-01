function populateData(){
    const allCurrentValues = document.querySelectorAll( ".category-current-value" );

    allCurrentValues.forEach( (currentValue) => {
        currentValue.innerHTML = `${currentValue.dataset.current}hrs`;
    });
}

populateData();