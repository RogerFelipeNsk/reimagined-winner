📜 Changelog
Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato segue o padrão Keep a Changelog, e o versionamento segue o SemVer.

[unreleased] - 2025-03-06

### 🚀 Adicionado
- Suporte a modo offline para acesso a determinados recursos sem internet.

### 🛠️ Alterado
- Ajustada a responsividade do menu lateral em telas menores.

### 🐞 Corrigido
- Resolvido um bug onde algumas configurações do usuário não eram salvas corretamente.


[1.6.3] - 2025-03-06

### 🚀 Adicionado
- Implementado suporte a notificações via Web Push.

### 🛠️ Alterado
- Melhorado o tempo de carregamento da página inicial.

### 🐞 Corrigido
- Corrigido um erro que impedia o logout automático após sessão expirada.


[1.6.2] - 2025-03-06

### 🚀 Adicionado
- Suporte a autenticação via OAuth para integração com serviços de terceiros.

### 🛠️ Alterado
- Ajustada a exibição de datas para o formato local do usuário.

### 🐞 Corrigido
- Corrigido um erro onde filtros avançados não eram aplicados corretamente em algumas buscas.


[1.6.1] - 2025-03-06

### 🚀 Adicionado
- Implementado suporte a múltiplos idiomas na interface do usuário, começando com Espanhol e Francês.
- Criada a funcionalidade de upload e compartilhamento de arquivos diretamente no chat.
- Adicionado um novo painel de análise com métricas de uso detalhadas.
- Introduzido um sistema de cache para melhorar a velocidade de carregamento de dashboards.

### 🛠️ Alterado
- Melhorado o tempo de resposta das requisições API, reduzindo a latência em até 30%.
- Atualizada a versão do framework para melhorar compatibilidade e segurança.
- Refinado o design do modo escuro para maior contraste e acessibilidade.
- Otimizado o carregamento de imagens e recursos estáticos, reduzindo o consumo de banda.

### 🐞 Corrigido
- Resolvido um problema onde algumas notificações de e-mail eram enviadas duplicadas.
- Corrigido um erro que impedia a exclusão de contas em determinadas condições.
- Ajustado um bug na ordenação de registros em tabelas dinâmicas.
- Corrigido o comportamento inesperado de botões em dispositivos móveis.

### 🔐 Segurança
- Melhorada a validação de tokens de autenticação para evitar acessos não autorizados.
- Implementadas novas verificações contra ataques de força bruta na API de login.
- Adicionada criptografia em repouso para dados sensíveis armazenados no banco.

### 📘 Documentação
- Atualizados os guias de integração da API com novos exemplos de uso.
- Melhorada a explicação sobre os parâmetros de configuração no arquivo de ambiente.


[1.6.0] - 2025-03-06

### 🚀 Adicionado
- Implementado suporte a exportação de relatórios em formato CSV e PDF.
- Adicionada a opção de personalização de temas no painel de usuário.

### 🛠️ Alterado
- Melhorado o desempenho da busca global com otimização de índices no banco de dados.
- Atualizada a biblioteca de autenticação para corrigir possíveis falhas de segurança.

### 🐞 Corrigido
- Corrigido um erro onde usuários não conseguiam redefinir senhas via e-mail em algumas condições.
- Resolvido um problema em que notificações push não eram enviadas corretamente para dispositivos iOS.


[1.5.5] - 2025-02-11
🛠️ Alterado
Melhorada a experiência de autenticação em dispositivos móveis com suporte a Touch ID e Face ID.

[1.5.4] - 2025-02-11
🛠️ Alterado
Melhorada a experiência de autenticação em dispositivos móveis com suporte a Touch ID e Face ID.

[1.5.3] - 2025-02-11
🛠️ Alterado
Melhorada a experiência de autenticação em dispositivos móveis com suporte a Touch ID e Face ID.

[1.5.2] - 2025-02-11
🛠️ Alterado
Melhorada a experiência de autenticação em dispositivos móveis com suporte a Touch ID e Face ID.

[1.5.1] - 2025-02-10
🛠️ Alterado
Melhorada a experiência de autenticação em dispositivos móveis com suporte a Touch ID e Face ID.

[1.5.0] - 2024-07-20
🛠️ Alterado
Melhorada a experiência de autenticação em dispositivos móveis com suporte a Touch ID e Face ID.

[1.4.3]
➕ Adicionado:
Implementação de um novo painel de administração para gerenciamento de usuários com recursos de pesquisa avançada e gerenciamento de permissões.

[1.4.2] - 2024-07-20
🛠️ Alterado
Melhorada a experiência de autenticação em dispositivos móveis com suporte a Touch ID e Face ID.

[1.4.1] - 2024-07-15
🆕 Adicionado
Sistema de pesquisa inteligente com suporte a operadores booleanos e filtros avançados.
🛠️ Alterado
Melhorias na otimização de consultas SQL para tornar mais eficientes as buscas em grandes volumes de dados.
🐛 Corrigido
Corrigido problema de renderização de elementos flutuantes em certas resoluções de tela.

[1.4.0] - 2024-07-10
🆕 Adicionado
Novo sistema de notificações em tempo real: Agora os usuários receberão notificações instantâneas para eventos importantes, como mensagens, atualizações de pedidos e mudanças de status.
🛠️ Alterado
Melhorada a experiência de carregamento da página inicial, reduzindo o tempo de resposta em 30%.
🐛 Corrigido
Corrigido problema onde notificações não eram marcadas como lidas ao serem abertas.

[1.3.0] - 2024-06-15
🆕 Adicionado
Suporte para múltiplos usuários na dashboard.
Endpoint /api/health para monitoramento do sistema.
Nova funcionalidade de exportação de relatórios em CSV.
🛠️ Alterado
Melhorias na performance da busca de usuários.
Atualizado o design do botão de login para melhor acessibilidade.
🐛 Corrigido
Corrigido erro ao carregar imagens grandes no perfil do usuário.
Resolvido problema com timezone nas datas dos relatórios.
Ajustado bug na rolagem infinita da página de notificações.

[1.2.0] - 2024-01-15
🆕 Adicionado
Implementado suporte a temas escuros e claros.
Adicionada API de autenticação com OAuth2.
🛠️ Alterado
Melhorada a responsividade do layout no mobile.
Refatorado código da listagem de pedidos para melhorar a legibilidade.
🐛 Corrigido
Corrigido problema com logout automático após inatividade.
Ajustado erro na geração de tokens de recuperação de senha.

[1.1.0] - 2023-12-10
🆕 Adicionado
Funcionalidade de pesquisa avançada com filtros.
Logs detalhados para auditoria de eventos.
🛠️ Alterado
Melhorado o tempo de resposta da API de listagem de usuários.
🐛 Corrigido
Corrigido erro ao salvar configurações do usuário.

[1.0.0] - 2023-11-01
🚀 Lançamento inicial!
Versão estável com funcionalidades básicas:
Autenticação de usuários.
CRUD de produtos.
Integração com sistema de pagamentos.
