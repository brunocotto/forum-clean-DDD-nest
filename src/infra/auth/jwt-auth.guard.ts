import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { IS_PUBLIC_KEY } from './public'
import { Observable } from 'rxjs'

/**
 * Implementa a estratégia de autenticação JWT para proteger rotas.
 * Esta guarda de autenticação extrai e verifica tokens JWT de solicitações HTTP.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Cria uma nova instância de `JwtAuthGuard`.
   * @param {Reflector} reflector - Refletor Nest.js para ler metadados dos controladores e manipuladores.
   */
  constructor(private reflector: Reflector) {
    super()
  }

  /**
   * Determina se a rota é pública ou requer autenticação JWT.
   * @param {ExecutionContext} context - Contexto de execução da solicitação.
   * @returns {boolean} Verdadeiro se a rota for pública, falso se a autenticação JWT for necessária.
   */
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (isPublic) {
      return true
    }

    return super.canActivate(context)
  }
}
