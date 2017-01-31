
/**
 * This aspect manages whether a widget can be enabled/disabled.
 */
class Able {
    static apply(subject) {
        subject.enabled = function () {
            return !subject.element.disabled;
        };

        subject.enable = function () {
            subject.element.disabled = false;
        };

        subject.disable = function () {
            subject.element.disabled = true;
        };

        subject.toggleEnabled = function () {
            subject.element.disabled = !subject.element.disabled;
        };
    }
}