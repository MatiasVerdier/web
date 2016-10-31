+++
date = "2015-11-03T18:36:00-03:00"
title = "Aplicaciones de escritorio multi plataforma con Electron"
Description = ""
Tags = [
  "Electron"
]
+++

![Electron](/images/electron.png)

Hoy les traigo **[Electron](http://electron.atom.io/)**, una herramienta opensource muy útil para la creación de aplicaciones multiplataforma mediante tecnologías web (HTML, CSS, JS), esto permite utilizar los conocimientos que ya posees en dichas tecnologías facilitando la creación de versiones de escritorio para Windows, Mac y Linux.

<!--more-->

Presenta funcionalidades como actualizaciones automáticas de nuestra app, reporte de fallos, generar instaladores, menús nativos y notificaciones entre otras.

### Hecho con Electron

Muchas aplicaciones populares han creado sus versiones de escritorio utilizando Electron, como el editor de texto [Atom](https://atom.io/), [Slack](https://slack.com/), [Visual Studio Code](https://code.visualstudio.com/), entre otras.


![Hecho con electron](/images/hecho-con-electron.png)

### Instalación

Es muy sencillo comenzar a utilizarlo, solo debemos tener instalado **[Node.js](https://nodejs.org)** y ejecutar los siguientes comandos en nuestra consola o terminal.


```sh
# Clonar repositorio de ejemplo
git clone https://github.com/atom/electron-quick-start

# Cambiarse a la carpeta creada
cd electron-quick-start

# Instalar las dependencias y ejecutar
npm install && npm run
```

O si queremos instalarlo de forma global en nuestro sistema

```bash
npm install electron-prebuilt -g
```

### Como seguir

Para información mas detallada visita la [documentación oficial](http://electron.atom.io/docs/v0.34.0/).
Al momento de este post la versión es la **0.34**.

Comenta si te interesa que haga algún tutorial de como crear una aplicación desde cero.

Saludos.
