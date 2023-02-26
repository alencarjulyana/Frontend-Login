export abstract class IMensagem {

    abstract usuariocadastrado(mensagem: string): void;
    
    abstract logincomsucesso(mensagem: string): void;
  
    abstract registrocomsucesso(mensagem: string): void;
  
}