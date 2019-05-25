# Curso de Chatbot para Developers Circles

En este repositorio encontrarás el proyecto de chatbot que se desarrolla en el curso disponible en units en los distintos grupos de Developers Circles en latinoamerica de forma gratuita, este curso pretende ser un punto de partida a la configuración y creación de distintas experiencias dentro de Messenger Platform.

Para encontrar información sobre todas las posibilidades que ofrece la plataforma así como las actualizaciones y cambios dirígete a la [Documentación oficial de Messenger platform](https://developers.facebook.com/docs/messenger-platform/).
 

# Configura tu chatbot

## Requisitos

- **Página de Facebook:** La experiencia de los Messenger chatbots esta disponible solamente para páginas de Facebook, si no tienes una puedes ir a https://www.facebook.com/pages/create para crear una.
- **Cuenta de Facebook Developer:** Si no tienes cuenta la puedes crear en [Facebook Developers website](https://developers.facebook.com/) y da clic al botón de "Get Started".
- **Facebook App:** Necesitas crear una app dentro del panel de Facebook Developers visita [app dashboard](https://developers.facebook.com/apps).

## Pasos de configuración

Antes de comenzar asegurate que tienes todos los rquisitos previamente descritos.

#### Obten el APP ID y el APP SECRET

1. Ve a las configuraciones basicas de tu aplicación, [Encuentra tu aplicación aquí](https://developers.facebook.com/apps)
2. Guarda el **App ID** y el **App Secret**

#### Otorga permisos en tu Facebook App

1. Ve al dashboard de tu app
2. Debajo de Add Product encuentra Messenger y da clic en Set Up
3. Deberías estar en App Messenger Settings
4. En Access Tokens, da clic en Edit Permissions
5. Selecciona los permisos de **pages_messaging** y aprueba los permisos como administrador de la página.
6. Selecciona la página y el access token debe aparecer
7. Obten tú Page ID desde el page access token usando [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
8. En la sección Built-In NLP, seleccionalo como disponible

# Instalación

Puedes clonar este repositorio con 

```bash
$ git clone https://github.com/Atticusnd/chatbotCourse.git
$ cd chatbotCourse
```

Necesitarás:

- [Node JS](https://nodejs.org/en/) 10.x o superior
- [Localtunnel](https://github.com/localtunnel/localtunnel) ,[Ngrok](https://ngrok.com/) o un servidor de fácil configuración y administración como [Heroku](https://www.heroku.com/) 


## Usando un túnel

#### 1. Instala las dependencias

Puedes utilizar [Yarn](https://yarnpkg.com/en/):

```bash
$ yarn install
```

#### 2. Instala el túnel local o sigue las instrucciones de [Ngrok](https://ngrok.com/)
```bash
npm install -g localtunnel
```

Abre una terminal y coloca el siguiente comando, debes usar el número de puerto en el que funcionará tu servidor
```bash
lt --port 3000
```

#### 3. Crea archivo `.env`

```bash
touch .env
```

 Edita el archivo `.env` y agrega los valores de **App ID** y el **App Secret** 

#### 4. Inicia tu servidor<

```bash
node app.js
```
Tu deberías ver tu aplicación funcionando en tu navegador web con [http://localhost:3000](http://localhost:3000)

#### 5. Configura el webhook

Crea la variable `VERIFY_TOKEN` en tu archivo `.env` y llama a la ruta **/webhook** dentro de la configuración de webhook en el panel de desarrolladores:


#### 6. Prueba que tu app este conectada

Envía un mensaje por Messenger a la página que configuraste anteriormente y tu webhook debería notificar a tu servidor.

## Si usarás Heroku sigue las siguientes instrucciones, toma en cuenta que la URL que generará será distinta cada que creas una APP
#### 1. Regístrate e instala Heroku CLI

Descarga e instala [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

#### 2. crea una app desde el CLI

```bash
git init
heroku apps:create
# Creating app... done, ⬢ mystic-wind-83
# Created http://mystic-wind-83.herokuapp.com/ | git@heroku.com:mystic-wind-83.git
```

#### 3. Deploy 
```bash
git add .
git commit -m "My first commit"
git push heroku master
```

#### 4. Crea tus variables de entorno en Heroku
  En el Heroku App Dashboard [https://dashboard.heroku.com/apps/](https://dashboard.heroku.com/apps/) coloca tus variables en ```.env```

#### 5. Configure your webhook subscription and set the Messenger profile
  Una vez que has confirmado que tu servicio esta funcionando agrega el ```VERIFY_TOKEN``` que creaste en tus variables de entorno y coloca tu endpoint  **/webhook** :


#### 6. Prueba tu chatbot
Envía un mensaje por Messenger a la página que configuraste anteriormente y tu webhook debería notificar a tu servidor.

