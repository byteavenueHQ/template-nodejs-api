import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerRouter = express.Router();

const swaggerDocument = YAML.load('./src/docs/swagger.yml');

swaggerRouter.use('/api-docs', swaggerUI.serve);
swaggerRouter.get('/api-docs', swaggerUI.setup(swaggerDocument));

export default swaggerRouter;
