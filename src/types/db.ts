export interface Usuario {
  id: number;
  email: string;
  senha: string;
}

export interface Sessao {
  sessionId: string;
  email: string;
}

export interface DataBase {
  usuarios: Usuario[];
  sessions: Sessao[];
}
