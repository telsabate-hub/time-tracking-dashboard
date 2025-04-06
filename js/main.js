let timeframeData;
let selectedTimeframe = "weekly";

function getData(){
    // fetch('/data.json').then((response) => {  
    fetch('./data.json').then((response) => {  
        if(!response.ok) return console.log('Oops! Something went wrong.');
    
        return response.json();
    }).then((data) => {
        timeframeData = data;

        setTimeframes();
    });
}

function setTimeframes(){
    timeframeData.forEach( (category) => {
        let title = category.title;
        let container = document.getElementById( `${title.toLowerCase().replace( ' ', '' )}Container` );
        let currentValueElem = container.querySelector( `.category-current-value` );
        let previousValueElem = container.querySelector( `.category-previous-value` );

        currentValueElem.dataset.current = category.timeframes[ selectedTimeframe ].current;
        previousValueElem.dataset.previous = category.timeframes[ selectedTimeframe ].previous;
    });

    populateData();
}

function populateData(){
    const prefixes = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month"
    };

    const allCurrentValues = document.querySelectorAll( ".category-current-value" );
    const allPreviousValues = document.querySelectorAll( ".category-previous-value" );

    allCurrentValues.forEach( (currentValue) => {
        let currentValueData = currentValue.dataset.current;
        let units = Number(currentValueData) == 1 ? "hr" : "hrs";

        currentValue.innerHTML = `${currentValueData}${units}`;
    });

    allPreviousValues.forEach( (previousValue) => {
        let previousValueData = previousValue.dataset.previous;
        let units = Number(previousValueData) == 1 ? "hr" : "hrs";

        previousValue.innerHTML = `${prefixes[selectedTimeframe]} - ${previousValueData}${units}`;
    });
}

getData();

function clickMenu(e){
    const prevSelected = document.getElementsByClassName( "selected-timeframe" )[0];
    let target = e.target;

    prevSelected.classList.remove( "selected-timeframe" );
    target.classList.add( "selected-timeframe" );
    selectedTimeframe = target.innerHTML.toLowerCase();

    setTimeframes();
}

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

const menuItems = document.getElementById( "menu" ).children;

for( let i=0; i < menuItems.length; i++ ){
    menuItems[i].addEventListener( "click", (e) => { e.preventDefault(); clickMenu(e); });
}