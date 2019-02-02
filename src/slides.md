# Gestionando Paquetes

Como sentirse mas comodo en nuestras pesadillas

---

## Quien soy?

* Programador Freelancer
* He creado productos a nivel corporativo, a nivel de herramientas y a nivel consumidor
* Empresas de 6 personas hasta 1500
* Deliveroo, Finimize, Paw, Sandtable
* Temas preferidos: crypto y public policy

---

Habia un momento en mi vida en el que yo pensaba que la culpa de todos mis problemas lo tenia la tia susy.

Literalmente si tenia problemas pelando mi mandarina entraba a twitter y le mandaba un mensaje reclamandole que
haga algo por todos los limenios

Ahora que he crecido un poco y he encontrado la verdad.

Los paquetes son la raiz de mis problemas.

No solo en Javascript eh, donde puedo dejar un proyecto de lado por no mas de 6 meses y cuando trato de volver a ejecutarlo
nada funciona

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
    "react-helmet": "^5.2.0",
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

![Monkey](https://media.giphy.com/media/eRq5cCB58lBF6/giphy.gif)
## Erase una vez en 1992

---

Hagamos las cosas a mano, tareas:

* Encontrar las dependencias
* Colocarla en los lugares necesarios
* Encontrar sus dependencias
* Compilar esos binarios

---

Dependency hell

---

## Slides are written in Markdown!

Here's the source of the first slide:

    # Gatsby Deck

    Create presentations using Gatsby & React.

---

![Monkey](//i.imgur.com/PnbINJ6.gif)

🌟 Star it on [GitHub](//github.com/fabe/gatsby-deck),
or create your own with:

    gatsby new my-slides https://github.com/fabe/gatsby-starter-deck
