const czConfig = require('./.cz-config.js');

const typeEnum = czConfig.types.map(type => type.value);

module.exports = {
    rules: {
        'body-leading-blank': [1, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 72],
        'scope-case': [2, 'always', 'lower-case'],
        'scope-enum': [2, 'always', czConfig.scopes],
        'scope-empty': [2, 'never'],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [2, 'always', typeEnum]
    }
};
