## Trabalho ESP32

### Cronograma do Projeto

#### 14/09/2023
- No dia **14/09/2023**, iniciamos a realização do trabalho. Começamos configurando o ambiente de trabalho, instalando as IDEs e os frameworks necessários. Escolhemos a Arduino IDE e os respectivos frameworks para o seu funcionamento.
- Como objetivo inicial, decidimos por um projeto mais simples: o controle de LEDs via Bluetooth. Para isso, adicionamos as extensões **ArduinoBLE** e o pacote de drivers **Expressif** para o ESP32.
- Infelizmente, enfrentamos alguns obstáculos relacionados à compatibilidade de softwares, o que nos atrasou um pouco.

#### 18/09/2023
- No dia **18/09/2023**, superamos os desafios e conseguimos finalizar o projeto do LED Bluetooth. A solução foi simples: substituir o cabo que estava causando incompatibilidade com o ESP32.
- Componentes Utilizados:
  - Placa ESP32
  - LED
  - Cabos de conexão
  - Cabo Micro USB
  - Protoboard
  - Resistor
- Em relação ao software, mantivemos a Arduino IDE, agora configurada para o ESP32. Para a interação via smartphone, optamos pelo aplicativo **Serial Bluetooth** no Android.
- Com esse progresso, já começamos a planejar o projeto final.

#### 20/09/2023
- No dia **20/09/2023**, passamos o equipamento para outro membro da equipe testar em casa. O sensor até mostrou sinais de atividade, mas encontramos um problema: o sensor não estava sendo reconhecido pelo ESP32.

#### 21/09/2023
- De volta à sala de aula no **21/09/2023**, focamos no sensor. Mesmo após várias tentativas, ele não colaborou. Observamos que outro grupo conseguiu um resultado diferente usando o mesmo sensor. Tentamos replicar o método deles, mas sem sucesso. Com a autorização da professora, decidi levar o equipamento para casa e tentar mais um pouco.

#### 25/09/2023
- No dia **25/09/2023**, após muita dedicação e pesquisa, finalmente conseguimos fazer o sensor DHT11 funcionar! Com esse avanço, estávamos prontos para avançar para a etapa final do projeto.

#### 28/09/2023
- Com a autorização da professora, levei o ESP32 para casa no **28/09/2023**. O objetivo era montar o site e dar os toques finais no projeto. Após muita dedicação, conseguimos finalizar. O site estava funcionando perfeitamente, exibindo os dados do sensor em tempo real. 

#### Especificação do Projeto Final (extraído do Classroom)
- 🌡 A atividade propõe a criação de uma estação meteorológica usando o ESP32. Esta estação deve coletar dados de temperatura e umidade e exibir essas informações em tempo real em uma página web.
  - Componentes Necessários:
    - Placa de desenvolvimento ESP32
    - Sensor DHT11 ou DHT22
    - Protoboard e jumpers
    - Cabo USB
    - Computador com Arduino IDE
  - Apresentação dos Dados:
    - Desenvolvimento de uma página web em HTML/CSS.
    - Atualização automática dos dados, sem necessidade de atualização manual.
    - Representação gráfica das leituras, mostrando tendências ao longo do tempo.
    - Design responsivo, adaptável a diferentes dispositivos.
  - Implementação completa com a placa garante 2 pontos extras.
- **Entrega**:
  - Criação de um projeto no GitHub com código e especificações.
  - Formulário preenchido com nome do grupo e link do GitHub.
  - Apresentação dos resultados ao professor nas datas estipuladas.
  - Atividade em grupos de quatro estudantes, desenvolvida durante as aulas.

### 🛠 Descrição do Código e Tecnologias Usadas

**1. HTML & CSS**
- Estruturamos a página com **HTML5**, definindo blocos visuais.
- Utilizamos **UIKit** para estilização.
- **AOS** adiciona animações suaves.
- Ícones do **FontAwesome** para interface visual.

**2. JavaScript**
- `script.js` atualiza dados e gráfico.
- **Chart.js** para gráficos.
- Funções para conversões de temperatura.

**3. Backend (Python)**
- Desenvolvido com **Flask**.
- **flask_cors** para CORS.
- API com rota `/data` para GET e POST.

**4. Firmware (C++)**
- Código para ESP32.
- Biblioteca **DHT** para o sensor DHT11.
- Conexão Wi-Fi e envio de leituras via HTTP POST.
- Função `loop` atualiza dados a cada 2s.

**Componentes e Bibliotecas:**
- **ESP32**: Microcontrolador.
- **DHT11**: Sensor de temperatura e umidade.
- **WiFi.h**, **HTTPClient.h**, **ArduinoJson.h**.

# Agradecimentos Especiais
- Gostaria de agradecer a essa oportunidade à professora **Raquel Cabral** por proporcionar essa experiência incrivel.
- e ao Gustavo
