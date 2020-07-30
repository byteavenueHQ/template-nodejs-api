const express = require('express');

const router = express.Router();
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./src/docs/swagger.yml');

router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));

module.exports = router;
