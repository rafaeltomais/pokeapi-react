function isEmptyObject(obj) {
    var name;

    for (name in obj) return false;

    return true;
}

let teste = {
    id: 1,
    name: "teste",
    weight: 2
};

console.log(isEmptyObject(teste));