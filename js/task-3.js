class StringBuilder {
     static #value = [];

    constructor (initialValue) {
        this.initialValue = initialValue;
        StringBuilder.#value.push(initialValue);

    }

    getValue() {
        return StringBuilder.#value;
    }

    padEnd(str) {
        StringBuilder.#value += str;
    }

    padStart(str) {
        StringBuilder.#value = str + StringBuilder.#value;
    }

    padBoth(str) {
        StringBuilder.#value = str + StringBuilder.#value + str;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

