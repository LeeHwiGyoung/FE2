class TextManager {
  #value = { data: "hello Ormis" };

  get value() {
    return this.#value.data;
  }

  set value(newValue) {
    this.#value.data = newValue;
  }
}
