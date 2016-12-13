function init() {

    let button = document.querySelector('#new');
    button.addEventListener('click', function() {

        let child = document.createElement('li');

        let image = document.createElement('img');
        image.src = 'https://randomuser.me/api/portraits/men/90.jpg';
        child.appendChild(image);

        let heading = document.createElement('h2');
        heading.textContent = 'Jimothy Gramble';
        child.appendChild(heading);        

        let like = document.createElement('button');
        child.appendChild(like);
        like.textContent = 'Like';
        like.addEventListener('click', function(){
            console.log('Likes ' + heading.textContent)
            child.classList.add('faded');
        })

        let nope = document.createElement('button');
        child.appendChild(nope);
        nope.textContent = 'Nope';
            nope.addEventListener('click', function(){
                console.log(heading.textContent + ' has been noped')
                child.classList.add('faded');
            })

        let parent = document.querySelector('#bio');
        parent.appendChild(child);

    });


} 

window.addEventListener('load', init);