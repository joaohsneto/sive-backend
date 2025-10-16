import fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes/index.routes';
import { prisma } from '@/database/prisma-client';

const app = fastify()
app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
});

const HOST = process.env.HOST
const PORT = process.env.PORT || 3333;

app.register(routes, { prefix: '/api' })


async function DbConnected() {
    try {
        await prisma.$connect()
        console.log('✅ Conectado ao banco de dados PostgreSQL!');
    } catch (error) {
        console.error('❌ Falha ao conectar ao banco de dados:', error);
    }
}

app.listen({ port: Number(PORT), host: HOST }, () => {
    console.log(`🚀 Server rodando em http://${HOST}:${PORT}/api/`);
    DbConnected();
})