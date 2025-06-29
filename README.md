# Noteap

Repositório monorepo para o Noteap: um sistema completo de anotações com geração automática de conteúdo via IA, sincronização em nuvem e integração com Obsidian.

É um hábito constante, durante meus estudos, registrar anotações sobre os assuntos abordados. Para otimizar esse processo, faço uso de inteligência artificial, o que me permite economizar tempo sem comprometer a qualidade das notas — que continuam sendo detalhadas, organizadas e repletas de exemplos de código, facilitando revisões futuras.

No entanto, mesmo com o suporte da IA, essa atividade ainda exige diversas interações com o teclado e o mouse, o que se torna um fator de fricção para a fluidez do meu fluxo de trabalho. Para resolver isso, desenvolvi uma solução simplificada, baseada em um comando de texto seguido de um único pressionar de tecla.

Com o Noteap, consigo abrir o aplicativo, digitar um título (como “rust-mods”) ou um conceito (como “heap-stack”) e pressionar Enter. Imediatamente, uma mensagem confirmando a criação da nota — “Note {título} added” — é exibida. Sei então que, ao ligar o computador novamente, o cliente Rust, configurado para iniciar automaticamente com o sistema, realizará a sincronização com o servidor, gerará o conteúdo da nota e a salvará diretamente na minha pasta do Obsidian.

Com isso, minha única tarefa restante é organizar as notas manualmente em suas pastas apropriadas — algo que, confesso, ainda estou avaliando como automatizar 😅.

Essa abordagem tem proporcionado um aumento significativo na minha produtividade, tornando o processo de aprendizado mais fluido, prático e menos propenso à procrastinação.

>E, antes que se questione a efetividade do método com frases como “Mas dessa forma você não está realmente aprendendo”, vale esclarecer: para solicitar a geração de uma nota, é necessário, no mínimo, ter consciência da existência daquele conteúdo. Além disso, só faço esse pedido após já ter estudado previamente o assunto. Portanto, o uso da IA não substitui o aprendizado, mas sim o complementa — atuando como uma ferramenta de consolidação e registro estruturado do conhecimento adquirido.

A seguir, apresento um resumo das três principais partes que compõem o **Noteap**. Para uma visão mais detalhada de cada componente, recomenda-se consultar as respectivas pastas disponíveis neste repositório.


## Projetos

- [`noteap-app`](noteap-app/README.md): Aplicativo mobile (React Native + Expo)
- [`noteap-server`](noteap-server/README.md): Servidor Node.js com integração IA e MongoDB
- [`noteap-client`](noteap-client/README.md): Cliente CLI em Rust para baixar e gerenciar notas localmente

---

## noteap-app

Aplicativo de anotações para dispositivos móveis, desenvolvido com React Native e Expo.

- Envio e armazenamento local de mensagens/anotações
- Interface estilizada com Tailwind CSS via NativeWind
- Integração com API remota para geração e registro de notas
- Uso de AsyncStorage para persistência local

Veja detalhes em [`noteap-app/README.md`](noteap-app/README.md).

---

## noteap-server

Servidor Node.js responsável por:

- Receber solicitações de criação de notas (com geração de texto via Google Gemini IA)
- Listar, remover e gerenciar notas em banco MongoDB
- Fornecer API REST para integração com app e cliente CLI

Veja detalhes em [`noteap-server/README.md`](noteap-server/README.md).

---

## noteap-client

Cliente de linha de comando em Rust para:

- Baixar todas as notas do servidor
- Salvar notas como arquivos `.md` (compatível com Obsidian)
- Notificar o usuário sobre progresso e status
- Remover notas do servidor após download

Veja detalhes em [`noteap-client/README.md`](noteap-client/README.md).

---

👾
