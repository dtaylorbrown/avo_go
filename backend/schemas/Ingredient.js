const { Text, Float, Select, Relationship } = require('@keystonejs/fields');

module.exports = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
        },
        food: {
            type: Relationship,
            ref: 'Food',
            isRequired: true,
        },
        quantity: {
            type: Float,
        },
        measurement: {
            type: Float,
        },
        unitOfMeasure: {
            type: Select,
            options: 'g, ml, tsp, tbsp, pinch'
        }
    }
}