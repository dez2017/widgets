class App {
    constructor() {
        this.button = new Button("Say Hello");

        this.dropdown = new DropDown();
        this.dropdown.add("Key 1", "Option 1");
        this.dropdown.add("Key 2", "Option 2");
        this.dropdown.add("Key 3", "Option 3");

        this.dropdown.onChange = function() {
            console.log("Selection Changed", this.selected);
        }.bind(this.dropdown);


        this.button.onClick = function () {
            console.log("Clicked");
        };

        this.button.onDoubleClick = function () {
            console.log("Double-clicked");
        };
    }

    load() {
        console.log("Application loading");
        document.body.appendChild(this.button.element);

        this.button.addClass("a");
        this.button.addClass("b");

        this.button.removeClass("c");
        this.button.removeClass("a");
        this.button.removeClass("b");

        document.body.appendChild(this.dropdown.element);
    }
}

var app = new App();