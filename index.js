// let taskContainer = container for tasks

fetch('http://localhost:3000/tasks')
    .then( response => response.json())
    .then( data => {
        data.forEach(task => {
            let div = document.createElement('div');
            // Oscylowanie stylu + dodawanie kolejnych elementów
            console.log(data)
        });
});