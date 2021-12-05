const dailyButton = document.querySelector('.daily');
const weeklyButton = document.querySelector('.weekly');
const monthlyButton = document.querySelector('.monthly');
const currentWork = document.querySelector('.current-work');
const previousWork = document.querySelector('.previous-work');
const currentPlay = document.querySelector('.current-play');
const previousPlay = document.querySelector('.previous-play');
const currentStudy = document.querySelector('.current-study');
const previousStudy = document.querySelector('.previous-study');
const currentExercice = document.querySelector('.current-exercice');
const previousExercice = document.querySelector('.previous-exercice');
const currentSocial = document.querySelector('.current-social');
const previousSocial = document.querySelector('.previous-social');
const currentSelfCare = document.querySelector('.current-self-care');
const previousSelfCare = document.querySelector('.previous-self-care');

function loadDailyInfo() {

    dailyButton.classList.add('selected');
    weeklyButton.classList.remove('selected');
    monthlyButton.classList.remove('selected');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const data = JSON.parse(this.responseText);

            // daily time frames for work
            const dailyItemsWork = data
                .filter(item => item.title === 'Work')
                .map(item => item.timeframes.daily);
            
            dailyItemsWork.forEach(element => {
                currentWork.innerHTML = `${element.current}hrs`;
                previousWork.innerHTML = `Yesturday - ${element.previous}hrs`;
            });
                
            // daily time frames for play
            const dailyItemsPlay = data
                .filter(item => item.title === 'Play')
                .map(item => item.timeframes.daily);

            dailyItemsPlay.forEach(element => {
                currentPlay.innerHTML = `${element.current}hrs`;
                previousPlay.innerHTML = `Yesturday - ${element.previous}hrs`;
            });
            
            // daily time frames for study
            const dailyItemsStudy = data
                .filter(item => item.title === 'Study')
                .map(item => item.timeframes.daily);
            
            dailyItemsStudy.forEach(element => {
                currentStudy.innerHTML = `${element.current}hrs`;
                previousStudy.innerHTML = `Yesturday - ${element.previous}hrs`;
            });

            // daily time frames for exercice
            const dailyItemsExercice = data
                .filter(item => item.title === 'Exercise')
                .map(item => item.timeframes.daily);

            dailyItemsExercice.forEach(element => {
                currentExercice.innerHTML = `${element.current}hrs`;
                previousExercice.innerHTML = `Yesturday - ${element.previous}hrs`;
            });

            // daily time frames for social
            const dailyItemsSocial = data
                .filter(item => item.title === 'Social')
                .map(item => item.timeframes.daily);
            
            dailyItemsSocial.forEach(element => {
                currentSocial.innerHTML = `${element.current}hrs`;
                previousSocial.innerHTML = `Yesturday - ${element.previous}hrs`;
            });

            // daily time frames for self care
            const dailyItemsSelfCare = data
                .filter(item => item.title === 'Self Care')
                .map(item => item.timeframes.daily);
            
            dailyItemsSelfCare.forEach(element => {
                currentSelfCare.innerHTML = `${element.current}hrs`;
                previousSelfCare.innerHTML = `Yesturday - ${element.previous}hrs`;
            });
        }
    }
    xhr.send();
}

function loadWeeklyInfo() {

    dailyButton.classList.remove('selected');
    weeklyButton.classList.add('selected');
    monthlyButton.classList.remove('selected');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const data = JSON.parse(this.responseText);

            const weeklyItemsWork = data
                .filter(item => item.title === 'Work')
                .map(item => item.timeframes.weekly);
            
            weeklyItemsWork.forEach(element => {
                currentWork.innerHTML = `${element.current}hrs`;
                previousWork.innerHTML = `Last Week - ${element.previous}hrs`;
            });
                
            const weeklyItemsPlay = data
                .filter(item => item.title === 'Play')
                .map(item => item.timeframes.weekly);

            weeklyItemsPlay.forEach(element => {
                currentPlay.innerHTML = `${element.current}hrs`;
                previousPlay.innerHTML = `Last Week - ${element.previous}hrs`;
            });
            
            const weeklyItemsStudy = data
                .filter(item => item.title === 'Study')
                .map(item => item.timeframes.weekly);
            
            weeklyItemsStudy.forEach(element => {
                currentStudy.innerHTML = `${element.current}hrs`;
                previousStudy.innerHTML = `Last Week - ${element.previous}hrs`;
            });

            const weeklyItemsExercice = data
                .filter(item => item.title === 'Exercise')
                .map(item => item.timeframes.weekly);
            
            weeklyItemsExercice.forEach(element => {
                currentExercice.innerHTML = `${element.current}hrs`;
                previousExercice.innerHTML = `Last Week - ${element.previous}hrs`;
            });

            const weeklyItemsSocial = data
                .filter(item => item.title === 'Social')
                .map(item => item.timeframes.weekly);
            
            weeklyItemsSocial.forEach(element => {
                currentSocial.innerHTML = `${element.current}hrs`;
                previousSocial.innerHTML = `Last Week - ${element.previous}hrs`;
            });

            const weeklyItemsSelfCare = data
                .filter(item => item.title === 'Self Care')
                .map(item => item.timeframes.weekly);
            
            weeklyItemsSelfCare.forEach(element => {
                currentSelfCare.innerHTML = `${element.current}hrs`;
                previousSelfCare.innerHTML = `Last Week - ${element.previous}hrs`;
            });
        }
    }
    xhr.send();
}

function loadMonthlyInfo() {

    dailyButton.classList.remove('selected');
    weeklyButton.classList.remove('selected');
    monthlyButton.classList.add('selected');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const data = JSON.parse(this.responseText);

            const monthlyItemsWork = data
                .filter(item => item.title === 'Work')
                .map(item => item.timeframes.monthly);
            
            monthlyItemsWork.forEach(element => {
                currentWork.innerHTML = `${element.current}hrs`;
                previousWork.innerHTML = `Last Month - ${element.previous}hrs`;
            });
                
            const monthlyItemsPlay = data
                .filter(item => item.title === 'Play')
                .map(item => item.timeframes.monthly);

            monthlyItemsPlay.forEach(element => {
                currentPlay.innerHTML = `${element.current}hrs`;
                previousPlay.innerHTML = `Last Month - ${element.previous}hrs`;
            });
            
            const monthlyItemsStudy = data
                .filter(item => item.title === 'Study')
                .map(item => item.timeframes.monthly);
            
            monthlyItemsStudy.forEach(element => {
                currentStudy.innerHTML = `${element.current}hrs`;
                previousStudy.innerHTML = `Last Month - ${element.previous}hrs`;
            });

            const monthlyItemsExercice = data
                .filter(item => item.title === 'Exercise')
                .map(item => item.timeframes.monthly);
            
            monthlyItemsExercice.forEach(element => {
                currentExercice.innerHTML = `${element.current}hrs`;
                previousExercice.innerHTML = `Last Month - ${element.previous}hrs`;
            });

            const monthlyItemsSocial = data
                .filter(item => item.title === 'Social')
                .map(item => item.timeframes.monthly);
            
            monthlyItemsSocial.forEach(element => {
                currentSocial.innerHTML = `${element.current}hrs`;
                previousSocial.innerHTML = `Last Month - ${element.previous}hrs`;
            });

            const monthlyItemsSelfCare = data
                .filter(item => item.title === 'Self Care')
                .map(item => item.timeframes.monthly);
            
            monthlyItemsSelfCare.forEach(element => {
                currentSelfCare.innerHTML = `${element.current}hrs`;
                previousSelfCare.innerHTML = `Last Month - ${element.previous}hrs`;
            });
        }
    }
    xhr.send();
}

dailyButton.addEventListener('click', loadDailyInfo);
weeklyButton.addEventListener('click', loadWeeklyInfo);
monthlyButton.addEventListener('click', loadMonthlyInfo);

loadDailyInfo();