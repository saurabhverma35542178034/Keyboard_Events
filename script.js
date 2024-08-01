let check="INDIA";
let str="";

document.addEventListener('keydown', function(event) {
    // console.log(event.key);
    const keyElement = document.getElementById('output');
    
    const keyCodeElement = document.getElementById('keyCode');
    
    str=str+event.key;
    const upperCaseString =str.toUpperCase();
    

    // just to provide name to  keys
    if (event.code === 'Space') {
        keyElement.innerHTML = 'Key: space';
       keyCodeElement.innerHTML = `KeyCode: ${event.keyCode}`;
    } else{
        keyElement.innerHTML = `Key: ${event.key}`;
        keyCodeElement.innerHTML = `KeyCode: ${event.keyCode}`;

    }

    if(upperCaseString.includes(check))
        {
            document.getElementById('india').innerHTML="I Love My India";
            const audio = document.getElementById('notificationSound');
                audio.play();
                

        //         const pauseButton = document.createElement('button');
        // pauseButton.id = 'pauseButton';
        // pauseButton.innerText = 'Pause Audio';
        // indiaDiv.appendChild(pauseButton);
                

            setTimeout(function(){
                //
                str="";
                document.getElementById('india').innerHTML="";
            }, 5000);
        }
    
});

