class DropDown extends Widget {
    constructor() {
        super("select");
        SingleChoice.apply(this);
        this.optionsData = {};
    }


    add(key, text) {
        this.remove(key);

        var element = document.createElement("option");
        element.setAttribute("value", key);
        element.textContent = text;
        this.element.appendChild(element);
    }

    remove(key) {
        var data = this.optionsData[key];
        if (!data)
            return;

        subject.element.remove(index);
    }

    selected() {
        var options = this.element.options;
        var index = options.selectedIndex;
        if (index < 0)
            return null;

        var result = {
            key : options[index].value,
            text : options[index].text
        };
        return result;
    }

    // options() {
    //     var options = subject.element.options;
    //     var index = options.selectedIndex;
    //     if (index < 0)
    //         return null;
    //     return options[index].text;
    // }
}