

class Button extends Widget {
    constructor(text) {
        super("div");
        this.element.className += "button ";
        this.element.textContent = text;

        Clickable.apply(this);
        DoubleClickable.apply(this);
    }

    text(value) {
        this.element.textContent = value;
    }
}