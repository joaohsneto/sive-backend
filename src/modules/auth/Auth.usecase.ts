import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '@/database/prisma-client';

export class AuthUseCase {
  async login(login: string, senha: string) {
    const usuario = await prisma.usuario.findUnique({ where: { login } });

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    const senhaValida = await compare(senha, usuario.senha);
    if (!senhaValida) {
      throw new Error('Senha incorreta');
    }

    const token = jwt.sign(
      {
        sub: usuario.usuario_id,
        funcao: usuario.funcao,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    return {
      token,
      usuario: {
        id: usuario.usuario_id,
        nome: usuario.nome_usuario,
        funcao: usuario.funcao,
        email: usuario.email,
      },
    };
  }
}
