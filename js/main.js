(() => {

    console.log('JS seems to be working');

    let container = document.querySelector('.dynamic');

    let stuff = [
        {
            name: 'item1',
            desc: 'item 1 stuff'
        },

        {
            name: 'item2',
            desc: 'item 2 stuff'
        },

        {
            name: 'item3',
            desc: 'item 3 stuff'
        },

    ]

    function addStuff() {
        let myNewStuff = new DocumentFragment();

        stuff.forEach(thing => {
            let theHeading = document.createElement('h2');
            theHeading.textContent = thing.name;

            let theDesc = document.createElement('p');
            theDesc.textContent = thing.desc;

            myNewStuff.appendChild(theHeading);
            myNewStuff.appendChild(theDesc);
        })

        // for (thing of stuff) {
        //     let newContent = `
        //     <div>
        //         <p>${thing.name}</p>
        //         <p>${thing.desc}</p>
        //     </div>`;

        //     myNewStuff.innerHTML += newContent;
        // }

        container.appendChild(myNewStuff);
    }

    addStuff();
})();