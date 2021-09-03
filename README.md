💻 Introducción a Aval Comunitario
==================

 Aval Comunitario es un smart contract escrito bajo el protocolo NEAR que permite:
 
 1. Crear un proyecto.
 2. Obtener una lista de los proyectos que se han creado.
 3. Avalar un proyecto.
 4. Cambiar el status de un proyecto.
 5. Eliminar un proyecto.
 

👨‍💻 Instalación en local
===========

Para correr este proyecto en local debes seguir los siguientes pasos:


Paso 1: Prerequisites
------------------------------

1. Make sure you've installed [Node.js] ≥ 12 (we recommend use [nvm])
2. Make sure you've installed yarn: `npm install -g yarn`
3. Install dependencies: `yarn install`
4. Create a test near account [NEAR test account]
5. Install the NEAR CLI globally: [near-cli] is a command line interface (CLI) for interacting with the NEAR blockchain

    yarn install --global near-cli

Step 2: Configure your NEAR CLI
-------------------------------

Configure your near-cli to authorize your test account recently created:

    near login
    
Step 3: Clonar Repositorio
-------------------------------    


Step 4: Build and make a smart contract development deploy  
--------------------------------

Build the communite smart contract code and deploy the local development server: `yarn buildevploy` (see `package.json` for a full list of `scripts` you can run with `yarn`). This script return to you a provisional smart contract deployed (save it to use later)


Congratulations, now you'll have a local development environment running on the NEAR TestNet! 🥳


Comando para CREAR un proyecto para ser avalado
-----------------------------------------------

```bash
near call <your deployed contract> createProject '{"title": "string","description":"string"}' 
```

Comando que LISTA todos los proyectos:
--------------------------------------------

```bash
near view <your deployed contract> getProjects
```

Comando para ELIMINAR un proyecto
--------------------------------------------

```bash
near view <your deployed contract> eliminateProject
``` 
near 
avalproject
changestatus



🤖 Test 
==================

Las pruebas son parte del desarrollo, luego, para ejecutar las pruebas en el contrato inteligente comunitario, debe ejecutar el siguiente comando:

    yarn test


Esto ejecutará los métodos de prueba en el `assembly/__tests__/example.spec.js` archivo


```bash
near call <your deployed contract> hello  
```


👩🏼‍🏫 Exploring and Explaining The Code 
====================================
This is a explanation of the smart contract file system

```bash
├── README.md                                       # this file
├── as-pect.config.js                               # configuration for as-pect (AssemblyScript unit testing)
├── asconfig.json                                   # configuration file for Assemblyscript compiler
├── assembly
│   ├── __tests__
│   │   ├── as-pect.d.ts                            # as-pect unit testing headers for type hints
│   │   └── main.spec.ts                            # unit test for the contract
│   ├── as_types.d.ts                               # AssemblyScript headers for type hint
│   ├── index.ts                                    # contains the smart contract code
│   ├── models.ts                                   # contains code for the models accesible to the smart contract
│   └── tsconfig.json                               # Typescript configuration file
├── neardev
│   ├── dev-account                                 #in this file the provisional deploy smart contract account is saved
│   └── dev-account.env                             #in this file the provisional deploy smart contract account is saved like a environment variable                             
├── out
│   └── main.wasm                                   # compiled smart contract code using to deploy
├── package-lock.json                               # project manifest lock version
├── package.json                                    # Node.js project manifest (scripts and dependencies)
└── yarn.lock                                       # project manifest lock version
```
1. The smart contract code lives in the `/assambly` folder.
2. To make a test deploy use the scripts in the `/package.json` file.



👌 Gracias por tomar interés en nuestro Proyecto
==============================================

Aquí dejamos una propuesta de diseño [UX/UI] para desarrollar la parte frontend del proyecto comunitario. 


  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [NEAR accounts]: https://docs.near.org/docs/concepts/account
  [NEAR Wallet]: https://wallet.testnet.near.org/
  [near-cli]: https://github.com/near/near-cli
  [NEAR test account]: https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account
  [nvm]: https://github.com/nvm-sh/nvm
  [UX/UI]: https://www.figma.com/proto/0dZLC0WI1eVsfjeKu3T8J8/Garant%C3%ADzame?node-id=2%3A8&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=2%3A8
