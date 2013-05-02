function ArrayList() {}

function add(object) {
    list[list.length] = object;
}

function removeIndex(index) {
    var object = this.list[index];
    this.list.splice(index, 1);
    return object;
}

function remove(object) {
    var i = 0;
    for (;list.length > i; i++) if (list[i] === object) break;
    return i >= list.length ? null : removeIndex(i);
}

function get(index) {
    return list[index];
}

function removeAll() {
    list.splice(0, list.length);
}

function size() {
    return this.list.length;
}

function isEmpty() {
    return 0 == list.length;
}

var list = new Array();