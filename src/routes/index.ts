import express from 'express';
 
import languageRoute from './languages.route';

const routes = express.Router();

 
routes.use('/', languageRoute)


export default routes;