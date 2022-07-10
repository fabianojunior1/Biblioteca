//importa o Router do express e todas as rotas das classes criadas
import { Router } from 'express';
import livroRoutes from './livro.router';
import autorRoutes from './autor.router';

//cria-se uma instância do método Router para iniciar o gerenciamento das rotas
const router = Router();

//mostra uma mensagem quando chama o diretório "/"
router.get('/', (req, res) => {
    return res.send('biblioteca index');
})

router.use('/livros', livroRoutes)
router.use('/autores', autorRoutes)

export default router;