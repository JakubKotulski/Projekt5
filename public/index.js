let taskContainer = document.getElementById('task-container');

fetch('http://localhost:3000/tasks')
    .then( response => response.json())
    .then( data => {
        const status = data.map(task => task.status);
        const title = data.map(task => task.title);
        const status2 = data.map(task => task.status2);

        data.forEach(element => {
            let div = document.createElement('div');
            div.classList.add('container-fluid', 'font-montserrat');

            // title of task
            let taskThemeContainer = document.createElement('div');
            taskThemeContainer.classList.add('task-theme', 'flex-1-5')
            let themeCollapse = document.createElement('div');
            themeCollapse.classList.add('collaps');
            let themeText = document.createElement('span');
            themeText.innerHTML = element.title;
            themeText.classList.add('task-theme-text', 'font-montserrat');
            taskThemeContainer.append(themeCollapse, themeText);

            // status like pending etc
            let statusContainer = document.createElement('div');
            statusContainer.classList.add('flex-0-5');
            let statusContent = document.createElement('div');
            statusContent.innerHTML = element.status;
            if(statusContent.innerHTML == 'Pending'){
                statusContent.classList.add('status-first', 'status-first-orange');
            }else if(statusContent.innerHTML == 'Completed'){
                statusContent.classList.add('status-first', 'status-first-green');
            }else if(statusContent.innerHTML == 'In progress'){
                statusContent.classList.add('status-first', 'status-first-blue');
            }else{
                statusContent.classList.add('status-first', 'status-first-red');
            }
            statusContainer.append(statusContent);
            
            // status2 like minor etc
            let status2Container = document.createElement('div');
            status2Container.classList.add('flex-0-5', 'status-second');
            let status2Text = document.createElement('div');
            status2Text.classList.add('status-second-text', 'status-second-color');
            status2Text.innerHTML = element.status2;
            let status2Collapse = document.createElement('div');
            if(status2Text.innerHTML == 'Minor'){
                status2Collapse.classList.add('status-second-collaps', 'status-second-collaps-green')
            }else if(status2Text.innerHTML == 'Critical'){
                status2Collapse.classList.add('status-second-collaps', 'status-second-collaps-red')
            }else if(status2Text.innerHTML == 'Normal'){
                status2Collapse.classList.add('status-second-collaps', 'status-second-collaps-orange')
            }
            status2Container.append(status2Collapse, status2Text);

            // spectators
            let spectatorsBox = document.createElement('div');
            spectatorsBox.classList.add('spectators', 'flex-0-5');
            let spectatorFirst = document.createElement('div');
            spectatorFirst.classList.add('oval', 'position-first');
            let imgFirst = document.createElement('img');
            imgFirst.setAttribute('src', 'person1.png');
            spectatorFirst.append(imgFirst);
            let spectatorSecond = document.createElement('div');
            spectatorSecond.classList.add('oval', 'position-second');
            let imgSecond = document.createElement('img');
            imgSecond.setAttribute('src', 'person2.png');
            spectatorSecond.append(imgSecond);
            let spectatorThird = document.createElement('div');
            spectatorThird.classList.add('oval', 'position-third');
            let imgThird = document.createElement('img');
            imgThird.setAttribute('src', 'person3.png');
            spectatorThird.append(imgThird);
            spectatorsBox.append(spectatorFirst, spectatorSecond, spectatorThird);

            // "more" element
            let moreElement = document.createElement('div');
            moreElement.classList.add('text-window', 'oval');
            imgDot1 = document.createElement('img');
            imgDot1.setAttribute('src', 'dot.png')
            imgDot1.classList.add('dot-img');
            imgDot2 = document.createElement('img');
            imgDot2.setAttribute('src', 'dot.png')
            imgDot2.classList.add('dot-img');
            imgDot3 = document.createElement('img');
            imgDot3.setAttribute('src', 'dot.png')
            imgDot3.classList.add('dot-img');
            moreElement.append(imgDot1, imgDot2, imgDot3);

            // hr
            let hr = document.createElement('hr');

            div.append(taskThemeContainer, statusContainer, status2Container, spectatorsBox, moreElement);

            taskContainer.append(div, hr);
        });
    });
