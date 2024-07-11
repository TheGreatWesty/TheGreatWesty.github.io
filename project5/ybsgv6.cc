input.ng-invalid {
    background: linear-gradient(360deg,
            rgba(196, 16, 16, 0.1),
            rgba(0, 128, 128, 0.01));
}

input.ng-valid {
    background: inherit;
}

input::placeholder {
    color: rgba(196, 16, 16);
}


input[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin-left: 4px;
    margin-right: 10px;
}

ul li {
    background: linear-gradient(130deg,
            rgba(0, 128, 128, 0.212),
            rgba(0, 128, 128, 0.493));
    margin: 5px;
}

h3 {
    background: white;
    margin-top: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-shadow: 3px 3px 3px lightgrey;
    text-align: center;
}

img {
    max-height: 50px;
}


#appForm p {
    margin: 0px;
    color: white;
}

#appForm input {
    border: none;
    border-bottom: solid black 1px;
    font-family: monospace;
}

#propCalc input {
    background: inherit;
    border: none;
    border-bottom: solid black 1px;
    font-family: monospace;
    width: 150px;
}

#propCalc span {
    background: rgba(255, 255, 255, 0.5);
    font-family: monospace;
    width: 150px;
    padding: 2px;
}

.nav-tabs a {
    color: white;
    padding: 2px;
    margin: 2px;
}

/* aligns checkbox inputs with text */
.aligned {
    display: flex;
    align-items: center;
}

/* justifies content space between */
.just-between {
    display: flex;
    justify-content: space-between;
}


/* HEADER STYLES */

.header-main-container {
    display: flex;
    min-height: 150px;
    background: teal;
    color: white;
    padding: 0px;
    margin: 0px;
}

.header-button-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px;
    font-family: 'Expert Sans Light',
        Verdana, sans-serif;
}

.header-variations-main-container {
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background: linear-gradient(270deg,
            rgb(27, 160, 160),
            rgb(59, 145, 145));
    border-radius: 4px;
}

.header-Variation {
    display: flex;
    padding: 5px;
    justify-content: space-around;
    align-items: baseline;
    flex-wrap: wrap;
    background: linear-gradient(270deg,
            teal,
            rgb(1, 104, 104),
            rgb(1, 104, 104));
    border-radius: 5px 5px 0px 0px;
}

.header-Account {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(270deg,
            teal,
            teal,
            rgb(1, 104, 104));
    padding: 5px;
    border-radius: 0px 0px 5px 5px;
}

/* MAIN CONTENT STYLES */


/* NOTE PAD */

/* DRAGGABLE */
/* pulled from a tutorial at w3schools.com | https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable */
#draggable {
    position: absolute;
    top: 35%;
    left: 12%;
    z-index: 9;
    text-align: center;
}

#draggableItem {
    cursor: move;
    z-index: 10;
    background: rgba(128, 128, 128, 0.6);
    padding: 10px;
}

.notepad-button {
    background: rgb(3, 109, 109);
    color: white;
    font-family: monospace;
    font-weight: bold;
}
