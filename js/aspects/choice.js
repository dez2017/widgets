/**
 * 
 */
class SingleChoice {
    static apply(subject) {
        subject.element.addEventListener("change", function () {
            var options = this.element.options;
            var index = options.selectedIndex;
            if (index < 0)
                subject.selected = null;
            else
                subject.selected = {
                    key: options[index].value,
                    text: options[index].text
                };

            if (subject.onChange)
                subject.onChange();
        });
    }
}