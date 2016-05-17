function validateEmail(mail) {
    "use strict";
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(mail);
}
function validate(formData) {
    "use strict";
    var isMailValid = formData.mail !== undefined && formData.mail !== "" && validateEmail(formData.mail);
    var isMessageValid = formData.message !== undefined && formData.message !== "";
    var isNameValid = formData.name !== undefined && formData.name !== "";
    return isMailValid && isMessageValid && isNameValid;
}
exports.validate = validate;
;
