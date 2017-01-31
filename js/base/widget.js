
/**
 * 
 * 
 */
class Widget {
    constructor(elementType) {
        this.element = document.createElement(elementType);
        this.element.className = " widget ";
    }


    id(value) {
        if (value)
            this.element.id = value;

        return this.element.id;
    }




    hasClass(className) {
        return this.element.className.indexOf(" " + className + " ");
    }

    addClass(className) {
        var token = " " + className + " ";
        if (this.element.className.indexOf(token) >= 0)
            return;

        if (!this.element.className)
            this.element.className = token;
        else
            this.element.className += className + " ";
    }


    removeClass(className) {
        var token = " " + className + " ";
        var index = this.element.className.indexOf(token);
        if (index < 0)
            return;

        var cn = this.element.className;
        this.element.className = cn.substr(0, index) + cn.substr(index + token.length - 1);
    }


    toggleClass(className) {
        if (hasClass(className))
            removeClass(className);
        else
            addClass(className);
    }

}