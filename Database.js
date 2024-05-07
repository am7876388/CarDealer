var Send = document.getElementById("Sends");
Send.addEventListener('click',function(){
    const Name = document.getElementById('IP1').value;
    const Email = document.getElementById('IP02').value;
    const Subject = document.getElementById('IP2').value;
    const Note = document.getElementById('IP3').value;
    const data = {
        name: Name,
        email: Email,
        subject: Subject,
        notes: Note
    }
    fetch("http://localhost:3000/insert-data", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(result => {
        console.log('Data inserted successfully:', result);
    })
    .catch(error => {
        console.error('Error in server:', error);
    });
    
});