// Operations and numbers
// screen
const screen = document.querySelector('.screen');
console.log(screen);
// recup ddata
const buttons = Array.from(document.getElementsByTagName('button'));
console.log(buttons);
// stock array html collection
// foreach => map
buttons.map(button => {
    console.log(button);
    // pour chaque boutton je dois l'afficher sur mon screen
    button.addEventListener('click', (event) => {

        // to screen all the data
        switch (event.target.innerText) {
            case 'AC':
                screen.innerText = "";
                break;

            case '=':
                try {
                    // eval évalue du js
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = "Error";
                }
                break;

            case '←':
                if (screen.innerText) {screen.innerText = display.innerText.slice(0, -1);
                }
                break;
        
            default:
                screen.innerText += event.target.innerText;
                break;
        }

    });
});
    

