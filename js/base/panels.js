/**
 * 
 * 
 * 
 */
class Panel extends Widget {
    constructor() {
        super("div");
        this.widgets = [];

        Visible.apply(this);
    }

    add(widget) {
        this.widgets.add(widget);
        this.element.appendChild(widget.element);
    }

    remove(widget) {
        this.widgets.remove(widget);
        this.element.remove(widget.element);
    }
}
