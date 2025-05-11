const fs = require('fs');
const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true, strict: false });

// Load the schema and data
const schema = JSON.parse(fs.readFileSync('./models.schema.json', 'utf8'));
const data = JSON.parse(fs.readFileSync('../models.json', 'utf8'));

// Compile and validate
const validate = ajv.compile(schema);
const valid = validate(data);

if (valid) {
    console.log('✅ JSON is valid!');
} else {
    console.error('❌ JSON validation errors:');
    console.error(validate.errors);
}