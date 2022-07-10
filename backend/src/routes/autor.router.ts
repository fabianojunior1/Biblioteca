import { Router } from 'express';

const autorRoutes = Router();

autorRoutes.get('/', (req, res) => {
    return res.send('index autor')
})

export default autorRoutes