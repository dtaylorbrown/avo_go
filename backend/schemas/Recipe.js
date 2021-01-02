const { Text, Relationship, Slug } = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');

module.exports = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
        },
        url: {
            type: Slug,
            from: 'name'
        },
        category: {
            type: Relationship,
            ref: 'Category',
            isRequired: true,
        },
        ingredients: {
            type: Relationship,
            ref: 'Ingredient',
            many: true,
            isRequired: true,
        },
        method: {
            type: Markdown,
            isRequired: true,
        },
        tags: {
            type: Relationship,
            ref: 'Tag',
            many: true,
            isRequired: true,
        },
        createdBy: {
            type: Relationship,
            ref: 'User',
        }
    }
}