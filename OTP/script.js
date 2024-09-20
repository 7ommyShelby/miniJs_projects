const display = document.querySelector('.display');
const otp = [];
const length = 6;

const populate = (len) => {
    for (let i = 0; i < len; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.inputMode = 'numeric';
        input.maxLength = 1;
        input.classList.add('slot');
        display.appendChild(input);
        otp.push(input);
    }
}

const digit = (value) => {
    return /^\d+$/.test(value);
}

display.addEventListener('keydown', (e) => {
    const target = e.target;
    if (digit(e.key)) {
        target.value = '';
        return;
    }
    if (e.key === 'ArrowLeft') {
        target.previousElementSibling?.focus();
        e.preventDefault();
        e.stopPropagation();
        return;
    }
    if (e.key === 'ArrowRight') {
        target.nextElementSibling?.focus();
        return;
    }

});

display.addEventListener('keyup', e => {
    const target = e.target;
    if (e.key === 'Backspace' || e.key === 'Delete') {
        target.value = '';
        target.previousElementSibling?.focus();
        return;
    }
});

display.addEventListener('input', e => {
    const target = e.target;

    if (!digit(target.value)) {
        target.value = '';
        return;
    }

    if (target.value !== '') {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        } else if (target.parentElement.firstChild.value === '') {
            target.parentElement.firstChild.focus();
        } else {
            target.blur();
        }
    }
});

display.addEventListener('paste', e => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');

    if (typeof (pastedData) === 'string' && pastedData.length === otpLength && digit(pastedData)) {
        otpFields.forEach((field, i) => {
            field.value = pastedData.charAt(i);
        });
    }
});

populate(length);


