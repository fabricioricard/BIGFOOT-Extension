# BIGFOOT Connect - Extension

![BIGFOOT Logo](icons/icon128.png)

**BIGFOOT** é uma extensão para o navegador que permite compartilhar sua internet ociosa e ganhar recompensas na rede DAG Nano. Com uma interface simples e funcionalidade intuitiva, você pode contribuir com largura de banda não utilizada e ser recompensado por isso.

## Funcionalidades

- **Compartilhamento de Internet**: Ative ou desative o compartilhamento com um clique.
- **Recompensas**: Ganhe tokens na DAG Nano pelo uso da sua banda ociosa (em desenvolvimento).
- **Interface Amigável**: Controle tudo diretamente pelo popup da extensão.
- **Monitoramento**: Veja o status do compartilhamento em tempo real.

## Instalação

### Pré-requisitos
- Arquivos da extensão disponíveis neste repositório.

### Passos
1. **Clone ou Baixe o Repositório**:
   - Clique em "Code" e selecione "Download ZIP" ou use o comando:
     ```
     git clone https://github.com/seu-usuario/bigfoot-extension.git
     ```
2. **Carregue a Extensão no Navegador**:
   - Abra por exemplo o Chrome e vá até `chrome://extensions/`.
   - Ative o "Modo Desenvolvedor" no canto superior direito.
   - Clique em "Carregar sem compactação" e selecione a pasta `bigfoot-extension`.

3. **Verifique os Ícones**:
   - Certifique-se de que a pasta `icons/` contém os arquivos `icon16.png`, `icon32.png`, `icon48.png` e `icon128.png`.

4. **Teste**:
   - Clique no ícone da extensão na barra do Chrome para abrir o popup e ativar/desativar o compartilhamento.

## Uso

- **Ativar/Desativar Compartilhamento**: Clique no ícone da extensão e use o botão no popup para iniciar ou parar o compartilhamento.
- **Atalho de Teclado**: Pressione `Ctrl+Shift+S` (ou `Command+Shift+S` no Mac) para alternar rapidamente.
- **Recompensas**: (Em breve) Veja suas recompensas acumuladas no popup.

## Estrutura do Projeto

bigfoot-extension/

├── background.js       # Script principal em segundo plano

├── manifest.json       # Configuração da extensão

├── popup.html          # Interface do popup

├── popup.js            # Lógica do popup

└── icons/              # Ícones da extensão

    ├── icon16.png
    
    ├── icon32.png
    
    ├── icon48.png
    
    └── icon128.png
   

## Contribuindo

Quer ajudar a melhorar o BIGFOOT? Siga esses passos:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m "Adicionando minha feature"`).
4. Envie para o seu fork (`git push origin minha-feature`).
5. Abra um Pull Request.

### Tarefas Pendentes
- Implementar conexão real com servidor proxy.
- Integrar API para recompensas na DAG Nano.
- Adicionar página de opções para configurações avançadas.

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Dúvidas ou sugestões? Abra uma issue ou entre em contato comigo em [fabricioricard23@gmail.com](mailto:fabricioricard23@gmail.com).

---

Desenvolvido com 💻 por [Fabrício Ricard](https://github.com/fabricioricard).
