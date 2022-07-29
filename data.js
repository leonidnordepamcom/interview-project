const inputExample = [{
    name: 'John',
    age: 14
}, {
    name: 'John',
    age: 22
}, {
    name: 'Hanna',
    age: 13
}, {
    name: 'Hanna',
    age: 41
}, {
    name: 'Hanna',
    age: 25
}, {
    name: 'Peter',
    age: 16
}];

const outputExample = [{
    name: 'John',
    groupItems: [{
        name: 'John',
        age: 14
    }, {
        name: 'John',
        age: 22
    }]
}, {
    name: 'Hanna',
    groupItems: [{
        name: 'Hanna',
        age: 13
    }, {
        name: 'Hanna',
        age: 25
    }, {
        name: 'Hanna',
        age: 41
    }]
}, {
    name: 'Peter',
    groupItems: [{
        name: 'Peter',
        age: 16
    }]
}];

module.exports = {inputExample, outputExample};