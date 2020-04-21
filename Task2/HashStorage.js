
function HashStorage() {
    this.store = {};            // хранилище для значений
}

//добавляю методы класса в прототипы, что б для каждого
//экземпляра не создавался свой метод и экономилать память

HashStorage.prototype.addValue = function (key, value) {
    this.store[key] = value;             //сохраняет указанное значение под указанным ключом;
};

HashStorage.prototype.getValue = function (key) {
    return this.store[key];                       //возвращает значение по указанному ключу либо undefined
};

HashStorage.prototype.deleteValue = function (key) {    //удаляет значение с указанным ключом
    delete this.store[key];
};

HashStorage.prototype.getKeys = function () {
    return Object.keys(this.store);           //возвращает массив, состоящий из одних ключей
};