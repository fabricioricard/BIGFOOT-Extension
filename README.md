# BIGFOOT Connect - Extensão para Navegador 🇧🇷 / BIGFOOT Connect - Browser Extension 🇺🇸

![BIGFOOT Logo](icons/icon128.png)

**BIGFOOT** (Bandwidth Internet Gateway For Optimal Online Transactions) é uma extensão de navegador que permite compartilhar sua internet ociosa e ganhar recompensas na rede DAG Nano. Com uma interface simples e funcionalidade intuitiva, você pode contribuir com largura de banda não utilizada e ser recompensado por isso. 🇧🇷  

**BIGFOOT** (Bandwidth Internet Gateway For Optimal Online Transactions) is a browser extension that allows you to share your idle internet and earn rewards on the DAG Nano network. With a simple interface and intuitive functionality, you can contribute unused bandwidth and get rewarded for it. 🇺🇸  

---

## 🇧🇷 Funcionalidades | 🇺🇸 Features

- **🛠️ Compartilhamento de Internet / Internet Sharing**: Ative ou desative o compartilhamento com um clique. / Activate or disable sharing with one click.
- **🌟 Recompensas / Rewards**: Ganhe tokens DAG Nano pelo uso da sua banda ociosa (em desenvolvimento). / Earn DAG Nano tokens for the use of your idle band (under development).
- **🔍 Interface Amigável / User-Friendly Interface**: Controle tudo diretamente pelo popup da extensão. / Control everything directly by the extension popup.
- **⏳ Monitoramento / Monitoring**: Veja o status do compartilhamento em tempo real. / See the status of sharing in real time.

---

## 🇧🇷 Instalação | 🇺🇸 Installation

### 🇧🇷 Pré-requisitos | 🇺🇸 Prerequisites
- Arquivos da extensão disponíveis neste repositório. / Extension files available in this repository.

### 📝 Passos | 🌟 Steps
1. **Clone ou Baixe o Repositório / Clone or Download the Repository**
   ```sh
   git clone https://github.com/seu-usuario/bigfoot-extension.git
   ```
2. **Carregue a Extensão no Navegador / Load the Extension in the Browser**
   - Chrome: Acesse `chrome://extensions/`.
   - Ative o "Modo Desenvolvedor". / Activate the "Developer Mode".
   - Clique em "Carregar sem compactação" e selecione a pasta `bigfoot-extension`. / Click "Load without compaction" and select the `bigfoot-extension` folder.

3. **Verifique os Ícones / Check the Icons**
   - Certifique-se de que a pasta `icons/` contém `icon16.png`, `icon32.png`, `icon48.png` e `icon128.png`. / Make sure the `icons/` contains `icon16.png`,` icon32.png`, `icon48.png` and` icon128.png`.

4. **Teste / Test**
   - Clique no ícone da extensão na barra do navegador para abrir o popup e ativar/desativar o compartilhamento. / Click the extension icon on the browser bar to open the popup and activate/disable sharing.

---

## 🇧🇷 Uso | 🇺🇸 Use

- **Ativar/Desativar Compartilhamento / Enable/Disable Sharing**: Clique no ícone da extensão e use o botão no popup. / Click on the extension icon and use the button on the popup.
- **Atalho de Teclado / Keyboard Shortcut**: Pressione `Ctrl+Shift+S` (`Command+Shift+S` no Mac) para alternar rapidamente. / Press `Ctrl+Shift+S` (`Command+Shift+S` in Mac) to switch quickly.
- **Recompensas / Rewards**: (Em breve) Veja suas recompensas acumuladas no popup. / See your accumulated rewards in the popup.

---

## 🇧🇷 Estrutura do Projeto | 🇺🇸 Project Structure

```
bigfoot-extension/
├── background.js       # Script principal / Main background script
├── manifest.json       # Configuração da extensão / Extension configuration
├── popup.html          # Interface do popup / Popup interface
├── popup.js            # Lógica do popup / Popup logic
└── icons/              # Ícones da extensão / Extension icons
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

---

## 🇧🇷 Contribuindo | 🇺🇸 Contributing

Quer ajudar a melhorar o BIGFOOT? 🌟 / Want to help improve BIGFOOT? 🌟  

1. **Fork este repositório / Fork this repository**.
2. **Crie uma branch / Create a branch**:
   ```sh
   git checkout -b minha-feature # my-feature
   ```
3. **Commit suas mudanças / Commit your changes**:
   ```sh
   git commit -m "Adicionando minha feature" # Adding my feature
   ```
4. **Envie para o fork / Push to your fork**:
   ```sh
   git push origin minha-feature # my-feature
   ```
5. **Abra um Pull Request / Open a Pull Request**.

---

## 🛠️ 🇧🇷 Tarefas Pendentes | 🌟 🇺🇸 Pending Tasks

- 🔗 Implementar conexão real com servidor proxy / Implement real connection with proxy server.
- 🌐 Integrar API para recompensas na DAG Nano / Integrate API for rewards into DAG Nano.
- 🔧 Adicionar página de opções para configurações avançadas / Add options page for advanced settings.

---

## 📝 🇧🇷 Licença | 🌟 🇺🇸 License

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.  
This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for more details.

---

## 📧 🇧🇷 Contato | 🌟 🇺🇸 Contact

Dúvidas ou sugestões? Abra uma issue ou entre em contato comigo:  
Questions or suggestions? Open an issue or contact me:

[Email: fabricioricard23@gmail.com](mailto:fabricioricard23@gmail.com)

---

**Desenvolvido com 💻 por [Fabrício Ricard](https://github.com/fabricioricard).** 🇧🇷  
**Developed with 💻 by [Fabrício Ricard](https://github.com/fabricioricard).** 🇺🇸
