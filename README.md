# Micro-sqlserver

Micro servicio que conecta a una base de datos sqlserver
y expone un api rest para ejecutar query, procedures o funciones y extraer del proyecto un monolito que realize conecciones a la base de datos.

## Comenzando 🚀

### Pre-requisitos 📋

instalacion de Nodejs en linux lo hacemos a traves de Node Version Manager

```
#install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

#despues de la instalacion ejecutamos
~/.bashrc

#listamos las versiones de Nodejs disponibles
nvm list-remote

#Instalamos la ultima version con LTS
nvm install v16.13.1
```

### Instalación 🔧

# Express:

Proporciona mecanismos para: Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).

```
npm i express
```

# mssql:

cliente de Microsoft SQL Server para Nodejs

```
npm i mssql
```

# Morgan:

middleware de registro de solicitudes HTTP para Node.js. Simplifica el proceso de registro de solicitudes en su aplicación.

```
npm i morgan
```

# Dotenv

Una forma muy eficiente de manejar tus variables de entorno es usando una herramienta externa dotenv

```
npm i dotenv
```

# Cors

CORS significa Cross-Origin Resource Sharing, y es una política a nivel de navegador web que se aplica para prevenir que el dominio A evite acceder a recursos del dominio B usando solicitudes del tipo AJAX como cuando usamos fetch() o XMLHttpRequest.

```
npm i cors
```

# @hapi/boom

boom es parte del ecosistema hapi y fue diseñado para funcionar a la perfección con el marco web hapi y sus otros componentes (pero funciona muy bien por sí solo o con otros marcos).

```
npm i @hapi/boom
```

## Despliegue 📦

Para descargar el proyecto a su computadora y ejecutar, clone el proyecto, instale las dependencias y correr el proyecto con el comando npm run dev.

```
git clone git@github.com:hackchan/micro-sqlserver.git
cd micro-sqlserver
npm install

#desarrollo
npm run dev

#produccion
npm run build
npm run start
```

## Construido con 🛠️

- [Nodejs](https://nodejs.org/es/) - es un entorno de ejecución para JavaScript construido con V8

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/hackchan/micro-sqlserver/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/hackchan/micro-sqlserver/tags).

## Autores ✒️

- **Fabio Rojas** - Fullstack Development - [hackchan](https://github.com/hackchan)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/hackchan/micro-sqlserver/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE) para detalles

## Expresiones de Gratitud 🎁

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- etc.

---

⌨️ con ❤️ por [hackchan](https://github.com/hackchan) 😊
