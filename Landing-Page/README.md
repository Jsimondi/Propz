# Atividade Propz
Este projeto foi criado com o objetivo de desenvolver a atividade proposta pela [Propz](https://propz.com.br) para a vaga de desenvolvedor Front-End. Nele estão contidos um projeto Angular com a **Landing Page** de uma sessão de ofertas de produtos, contendo:
- A página deve ser responsiva (desenvolva baseado no layout mobile
apresentado)
- A lista de ofertas deve ser carregada a partir de um JSON, o formato e método
de carregamento dele ficam a seu critério, apenas lembre-se de incluir todas as
propriedades que são exibidas no layout de exemplo.
- A lista de ofertas deve ser apresentada utilizando um carrossel, que pode estar
presente em ambas as versões (mobile e desktop) ou apenas na versão
mobile.
- As ofertas devem ser clicáveis
- A página deve funcionar em versões recentes dos navegadores Edge, Chrome
e Firefox.

E um arquivo [MJML](https://mjml.io)  **Email de Marketing** contendo:
- O template deve apresentar ao menos 6 ofertas
- As ofertas presentes no exemplo são meramente para ilustrar posicionamento
e formatação. Crie sua própria lista de ofertas.
- As ofertas devem ser clicáveis
- Ele irá ser testando exclusivamente no Gmail, então não precisa se preocupar
com compatibilidade com outros clientes de e-mail.

## Comentários gerais:
As informações para executar o projeto estão logo abaixo. Caso algum problema aconteça estou a disposição para ajudar. Em anexo estão também arquivos que representam o estado de desenvolvimento das páginas (email e landing page) que vou manter atualizados conforme o desenvolvimento.
Minha ideia principal foi executar ambos os projetos focando nas funcionalidades. Por não possuir tanto tempo, acabei não focando na qualidade e tratamento das imagens que representam os produtos.
Infelizmente a biblioteca [Swiper](https://swiperjs.com) acabou me dando mais atrapalhando do que ajudando, na hora de fazer o carrossel. Por isso optei por criar o meu próprio, tomando um pouco mais de tempo.
Tirando este impecílio da biblioteca, o projeto foi bem divertido de implementar e me ajudou a relembrar bastante coisa da "linguagem" MJML, para os templates de email.

### Coisas que ainda pretendo implementar:
- Carrossel de produtos exibindo mais de um produto em layouts de maior tamanho (exibir 2 produtos no modo tablet, 3 produtos para notebook ou maior por exemplo.)
- Índices interativos abaixo das imagens do carrossel, indicando quantos produtos ainda existem na lista (opcional).
- Melhorar a qualidade e tamanho das imagens, para que todas fiquem proporcionais e não seja necessário nenhum truque de css para forçá-las a ter o mesmo tamanho.
- Criar temas de cores e fontes para o projeto. Devido ao pouco tempo, acabei apenas utilizando uma fonte e não consegui criar um padrão de cores utilizando alguma biblioteca (SASS, por exemplo).

### AngularCLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.