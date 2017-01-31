class Clickable {
    static apply(subject) {
        subject.click = function () {
            subject.element.click();
        };

        subject.onClick = null;

        subject.element.addEventListener("click", function () {
            if (subject.onClick)
                subject.onClick();
        });
    }
}



class DoubleClickable {
    static apply(subject) {
        subject.doubleClick = function () {
            subject.element.dblclick();
        };

        subject.onDoubleClick = null;

        subject.element.addEventListener("dblclick", function () {
            if (subject.onDoubleClick)
                subject.onDoubleClick();
        });
    }
}