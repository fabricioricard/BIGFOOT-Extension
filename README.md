# BIGFOOT Connect - Extensão para Navegador 🇧🇷 / # BIGFOOT Connect - Browser Extension 🇺🇸

![BIGFOOT Logo](icons/icon128.png)

**BIGFOOT**: Bandwidth Internet Gateway For Optimal Online Transactions é uma extensão para o navegador que permite compartilhar sua internet ociosa e ganhar recompensas na rede DAG Nano. Com uma interface simples e funcionalidade intuitiva, você pode contribuir com largura de banda não utilizada e ser recompensado por isso. 🇧🇷 

**BIGFOOT**: Bandwidth Internet Gateway For Optimal Online Transactions is a browser extension that allows you to share your idle internet and earn rewards on the DAG Nano network. With a simple interface and intuitive functionality, you can contribute unused bandwidth and get rewarded for it. 🇺🇸

## Funcionalidades 🇧🇷 / ## Features 🇺🇸

- **Compartilhamento de Internet**: Ative ou desative o compartilhamento com um clique. 🇧🇷 / **Internet Sharing**: Turn sharing on or off with one click. 🇺🇸
- **Recompensas**: Ganhe tokens na DAG Nano pelo uso da sua banda ociosa (em desenvolvimento). 🇧🇷 / **Rewards**: Earn DAG Nano tokens for using your idle bandwidth (in development). 🇺🇸
- **Interface Amigável**: Controle tudo diretamente pelo popup da extensão. 🇧🇷 / **User-Friendly Interface**: Control everything directly from the extension's popup. 🇺🇸
- **Monitoramento**: Veja o status do compartilhamento em tempo real. 🇧🇷 / **Monitoring**: See sharing status in real time. 🇺🇸

## Instalação 🇧🇷 / ## Installation 🇺🇸

### Pré-requisitos 🇧🇷 / ## Prerequisites 🇺🇸
- Arquivos da extensão disponíveis neste repositório. 🇧🇷 / Extension files available in this repository. 🇺🇸

### Passos 🇧🇷 / ## Steps 🇺🇸
1. **Clone ou Baixe o Repositório**: 🇧🇷 / **Clone or Download the Repository**: 🇺🇸
   - Clique em "Code" e selecione "Download ZIP" ou use o comando: 🇧🇷 / Click on "Code" and select "Download ZIP" or use the command: 🇺🇸
     ```
     git clone https://github.com/seu-usuario/bigfoot-extension.git 🇧🇷 / git clone https://github.com/your-username/bigfoot-extension.git 🇺🇸
     ```
2. **Carregue a Extensão no Navegador**: 🇧🇷 / **Load the Extension in the Browser**: 🇺🇸
   - Abra por exemplo o Chrome e vá até `chrome://extensões/`. 🇧🇷 / For example, open Chrome and go to `chrome://extensions/`. 🇺🇸
   - Ative o "Modo Desenvolvedor" no canto superior direito. 🇧🇷 / Enable "Developer Mode" in the top right corner. 🇺🇸
   - Clique em "Carregar sem compactação" e selecione a pasta `bigfoot-extension`. 🇧🇷 / Click "Upload without compression" and select the `bigfoot-extension` folder. 🇺🇸

3. **Verifique os Ícones**: 🇧🇷 / **Check the Icons**: 🇺🇸
   - Certifique-se de que a pasta `icons/` contém os arquivos `icon16.png`, `icon32.png`, `icon48.png` e `icon128.png`. 🇧🇷 / Make sure the `icons/` folder contains the files `icon16.png`, `icon32.png`, `icon48.png`, and `icon128.png`. 🇺🇸

4. **Teste**: 🇧🇷 / **Test**: 🇺🇸
   - Clique no ícone da extensão na barra do Chrome para abrir o popup e ativar/desativar o compartilhamento. 🇧🇷 / Click the extension icon in the Chrome bar to open the popup and enable/disable sharing. 🇺🇸

## Uso 🇧🇷 / ## Use 🇺🇸

- **Ativar/Desativar Compartilhamento**: Clique no ícone da extensão e use o botão no popup para iniciar ou parar o compartilhamento. 🇧🇷 / - **Enable/Disable Sharing**: Click the extension icon and use the button in the popup to start or stop sharing. 🇺🇸
- **Atalho de Teclado**: Pressione `Ctrl+Shift+S` (ou `Command+Shift+S` no Mac) para alternar rapidamente. 🇧🇷 / - **Keyboard Shortcut**: Press `Ctrl+Shift+S` (or `Command+Shift+S` on Mac) to quickly switch. 🇺🇸
- **Recompensas**: (Em breve) Veja suas recompensas acumuladas no popup. 🇧🇷 / - **Rewards**: (Coming soon) View your accumulated rewards in the popup. 🇺🇸

## Estrutura do Projeto 🇧🇷 / ## Project Structure 🇺🇸

bigfoot-extension/

├── background.js       # Script principal em segundo plano 🇧🇷 / # Main script in background 🇺🇸

├── manifest.json       # Configuração da extensão 🇧🇷 / # Extension configuration 🇺🇸

├── popup.html          # Interface do popup 🇧🇷 / # Popup interface 🇺🇸

├── popup.js            # Lógica do popup 🇧🇷 / # Popup logic 🇺🇸

└── icons/              # Ícones da extensão 🇧🇷 / # Extension icons 🇺🇸

    ├── icon16.png
    
    ├── icon32.png
    
    ├── icon48.png
    
    └── icon128.png
   

## Contribuindo 🇧🇷 / ## Contributing 🇺🇸

Quer ajudar a melhorar o BIGFOOT? Siga esses passos: 🇧🇷 / Want to help improve BIGFOOT? Follow these steps: 🇺🇸

1. Faça um fork deste repositório. 🇧🇷 / 1. Fork this repository. 🇺🇸
2. Crie uma branch para sua feature (`git checkout -b minha-feature`). 🇧🇷 / 2. Create a branch for your feature (`git checkout -b my-feature`). 🇺🇸
3. Commit suas mudanças (`git commit -m "Adicionando minha feature"`). 🇧🇷 / 3. Commit your changes (`git commit -m "Adding my feature"`). 🇺🇸
4. Envie para o seu fork (`git push origin minha-feature`). 🇧🇷 / 4. Push to your fork (`git push origin my-feature`). 🇺🇸
5. Abra um Pull Request. 🇧🇷 / 5. Open a Pull Request. 🇺🇸

### Tarefas Pendentes 🇧🇷 / ### Pending Tasks 🇺🇸
- Implementar conexão real com servidor proxy. 🇧🇷 / - Implement real connection with proxy server. 🇺🇸
- Integrar API para recompensas na DAG Nano. 🇧🇷 / - Integrate API for rewards into DAG Nano. 🇺🇸
- Adicionar página de opções para configurações avançadas. 🇧🇷 / - Add options page for advanced settings. 🇺🇸

## Licença 🇧🇷 / ## License 🇺🇸

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes. 🇧🇷 / This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for more details. 🇺🇸

## Contato 🇧🇷 / ## Contact 🇺🇸

Dúvidas ou sugestões? Abra uma issue ou entre em contato comigo em [fabricioricard23@gmail.com](mailto:fabricioricard23@gmail.com). 🇧🇷 / Questions or suggestions? Open an issue or contact me at [fabricioricard23@gmail.com](mailto:fabricioricard23@gmail.com). 🇺🇸

---

Desenvolvido com 💻 por [Fabrício Ricard](https://github.com/fabricioricard). 🇧🇷 / Developed with 💻 by [Fabrício Ricard](https://github.com/fabricioricard). 🇺🇸
