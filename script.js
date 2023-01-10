var time = moment();
var containerEl = document.getElementById('row');
var dateEl = document.getElementById('currentDay');
dateEl.textContent = time.format('dddd, MMMM YYYY');
var currentHour= time.format('HH')

// fill in any local storage
for(var i = 0;i<9;i++){
    let txt = localStorage.getItem(`${i+1}`)
    if(txt){
        console.log(txt)
        console.log(containerEl.children[i].children[1].value = txt)
    }
}
// check for time to change color
for (var i = 0;i < 9; i++ ){
    if(9+i > currentHour){
        containerEl.children[i].children[1].setAttribute('style','background-color: green')
    }else if(9+i<currentHour){
        containerEl.children[i].children[1].setAttribute('style','background-color: red')
        
    }else{
        containerEl.children[i].children[1].setAttribute('style','background-color: grey')

    }
}

// save to local storage
function save(id) {
    console.log(id);
    var inputEl = document.getElementById(`${id}`)
    console.log(inputEl);
    localStorage.setItem(`${id}`,inputEl.value)
  }

// createChart();