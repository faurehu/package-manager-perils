# Paqueteando

![Packages](https://i.imgur.com/6lR9JPB.jpg)

Administracion de sistemas de gestion de paquetes

---

## Quien soy?

![Packages](https://i.imgur.com/fvk1Qhk.jpg)

* Programador Freelancer
* Herramientas.js: React, Typescript, Yoga
* Previamente: Deliveroo, Finimize, Paw, Sandtable
* Temas preferidos: crypto y public policy

---

## Que pasa con los paquetes?
![Packages](https://www.shipsnostalgia.com/gallery/data/523/Hyundai_Fortune_Desktop_Resolution_.JPG)

---

```
{
  "nosname": "gatsby-deck",
  "description": "Create presentations using Gatsby, React & Markdown.",
  "version": "2.0.0",
  "author": "Fabian Schultz <desk@fabianschultz.com>",
  "dependencies": {
    "gatsby": "^2.0.4",
    "gatsby-plugin-layout": "^1.0.1",
    "gatsby-plugin-offline": "^2.0.5",
    "gatsby-plugin-react-helmet": "^3.0.0",
    "gatsby-source-filesystem": "^2.0.1",
    "react": "^16.5.1",
    "react-dom": "^16.5.1",
    "react-helmet": "^6.2.0",
    "react-swipeable": "^4.3.0",
    "react-transition-group": "^2.4.0",
    "remark": "^9.0.0",
    "remark-html": "^8.0.0",
    "remark-preset-lint-recommended": "^3.0.2"
  },
  "keywords": [
    "gatsby",
    "gatsby-starter"
  ],
  "license": "MIT",
  "main": "n/a",
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write \"src/**/*.js\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "prettier": "^1.10.2"
  }
}
```

---

## Grafo de dependencias

---

## is-object

![Imgur](https://i.imgur.com/CDSCsQv.png)

---

## is-object

```
module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};
```

---

## Peso de node_modules

![Imgur](https://i.imgur.com/iiV87qK.png)

---

## Y si lo hacemos a mano?

![Packages](https://media.giphy.com/media/FOUArYBVQCvmI8EHxp/giphy.gif)

`mkdir && make && mv && ln -s` -> `npm i`

---

## Historia de Gestion de Paquetes

![Packages](https://media.giphy.com/media/29IeWbvLletfVPxZqy/giphy.gif)

C -> Java -> Ruby -> JS

---

## Colision de Objetos

![Packages](https://i.imgur.com/qiXS8gJ.png)

Y si dos dependencias usan diferentes versiones?

---

## Peligro

```
frutero-app
  └─┬fruta@1.0.0
    └─┬manzana@1.0.0
      └──semilla@1.0.0
```

---

## Semver

Major.Minor.Patch

---

## Semver

Breaking.Feature.Fix

---

## Semver

1.2.3

---

## Semver

~1.2.3

---

## Semver

^1.2.3

---

## Decente

```
frutero-app
  └─┬fruta@1.0.0
    └─┬manzana@1.0.0
      └──semilla@^1.0.0
```

---

## Ciclo de vida

![Packages](https://cdn-images-1.medium.com/max/716/1*jRJVOQnIOzEvDjuGd0o2OA.png)

---

## NPM vs Yarn vs pnpm

---

## leftpad.js

```
module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);

  var i = -1;

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}
```

---

## audit

---

## Security vs Safety


---

![Security](https://media.giphy.com/media/11fot0YzpQMA0g/giphy.gif)

---

![Safety](https://media.giphy.com/media/nYSlA9xdfKuNa/giphy.gif)

---

## Caso eslint

![hackerman](https://media.giphy.com/media/26tPnAAJxXTvpLwJy/giphy.gif)

---

## EventStream hack
![bitcoin](https://media.giphy.com/media/rCzSdW8yU3cnm/giphy.gif)

---

## Gracias

* @hu_am__i
* Siganme en Youtube!
