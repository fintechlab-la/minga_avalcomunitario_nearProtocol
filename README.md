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


Paso 1: Pre - Requisitos
------------------------------

1. Asegúrese de haber instalado [Node.js] ≥ 12 ((recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Crear un test near account [NEAR test account]
5. Instalar el NEAR CLI globally: [near-cli] es una interfaz de linea de comando (CLI) para interacturar con NEAR blockchain

    yarn install --global near-cli

Step 2: Configura tu NEAR CLI
-------------------------------

Configura tu near-cli para autorizar su cuenta de prueba creada recientemente:

    near login
    
Step 3: Clonar Repositorio
-------------------------------    

Este comando nos permite clonar el repositorio de nuestro proyecto MINGA

```bash
git clone https://github.com/fintechlab-la/minga_avalcomunitario_nearProtocol.git
```

Una vez que hayas descargado el repositorio, asegurate de ejecutar los comandos dentro del repositorio descargado. Puedes hacerlo con
```bash
cd minga_avalcomunitario_nearProtocol/
```

Step 4: Realiza el BUILD para implementación de desarrollo de contrato inteligente 
------------------------------------------------------------------------------------

Instale el gestor de dependencia de Node.js dentro del repositorio

```bash
npm install
```

Cree el código de contrato inteligente MINGA AVAL COMUNITARIO e implemente el servidor de desarrollo local: 
```bash
yarn deploy:dev
```
Consulte` package.json` para obtener una lista completa de `scripts` que puede ejecutar con` yarn`). Este script le devuelve un contrato inteligente provisional
implementado (guárdelo para
usarlo más tarde)


¡Felicitaciones, ahora tendrá un entorno de desarrollo local ejecutándose en NEAR TestNet!


✏️ Comando para CREAR un proyecto para ser avalado
-----------------------------------------------

Permite crear un proyecto que ha sido revisado para entrar a la red de proyectos colaborativos para ser avalados de manera distribuida.

Para Linux:
```bash
near call <your deployed contract> createProject '{"title":"string","description":"string"}' --account-id <username>.testnet
```
Para windows:
```bash
near call <your deployed contract> createProject "{\"title\": \"string\",\"description\":\"string\"}" --account-id <username>.testnet
```
✏️ Comando que LISTA todos los proyectos:
--------------------------------------------

Permite listar los proyectos que existen en nuestro contrato inteligente. Antes de ejecutar el comando brindado, modifica <your deployed contract> por el número de contrato generado. Por ejemplo: 'dev-1630622185346-59088620194720'. Además, modifica <username> por tu nombre de usuario en testnet. Por ejemplo: 'aval1'

Para Linux y Windows:
```bash
near view <your deployed contract> getProjects --account-id <username>.testnet
```

✏️ Comando para ELIMINAR un proyecto
--------------------------------------------

Permite eliminar un proyecto que ya no pertenece a la red y se da de baja.

Para Linux:
```bash
near call <your deployed contract> eliminateProject '{"id":1}' --account-id <username>.testnet
``` 
Para Windows:
```bash
near call <your deployed contract> eliminateProject "{\"id\":<id de proyecto>}" --account-id <username>.testnet
```
✏️ Comando para AVALAR un proyecto
--------------------------------------------

Permite dar la confianza comunitaria (avalar) a un proyecto mediante la distribución de near.

Para Linux:
```bash
near call <your deployed contract> avalProject '{"id":<id de proyecto>, "amount":<cantidad de near en números>}' --account-id <username>.testnet
```
Para Windows:
```bash
near call <your deployed contract> avalProject "{\"id\":<id de proyecto>, \"amount\":<cantidad de near en números>}" --account-id <username>.testnet
```

✏️ Comando para CAMBIAR EL ESTADO de un proyecto
------------------------------------------------

Permite cambiar el estado de un proyecto de avalado y que finalmente accedio a un préstamo debido al aval comunitario.

Para Linux:
```bash
near call <your deployed contract> changeStatus '{"id":1}' --account-id <username>.testnet
```
Para windows: 
```bash
near call <your deployed contract> changeStatus "{\"id\":<id de proyecto>}" --account-id <username>.testnet
```

🤖 Test 
==================

Las pruebas son parte del desarrollo, luego, para ejecutar las pruebas en el contrato inteligente comunitario, debe ejecutar el siguiente comando:

    yarn test


Esto ejecutará los métodos de prueba en el `assembly/__tests__/example.spec.js` archivo


```bash
near call <your deployed contract> hello --account-id <username>.testnet
```


👩🏼‍🏫 Exploring and Explaining The Code 
====================================
This is a explanation of the smart contract file system

```bash
├── README.md                                       # this file
├── as-pect.config.js                               # configuration for as-pect (AssemblyScript unit testing)
├── asconfig.json                                   # configuration file for Assemblyscript compiler
├── assembly
│   ├── __tests__
│   │   ├── as-pect.d.ts                            # as-pect unit testing headers for type hints
│   │   └── main.spec.ts                            # unit test for the contract
│   ├── as_types.d.ts                               # AssemblyScript headers for type hint
│   ├── index.ts                                    # contains the smart contract code
│   ├── models.ts                                   # contains code for the models accesible to the smart contract
│   └── tsconfig.json                               # Typescript configuration file
├── neardev
│   ├── dev-account                                 #in this file the provisional deploy smart contract account is saved
│   └── dev-account.env                             #in this file the provisional deploy smart contract account is saved like a environment variable                             
├── out
│   └── main.wasm                                   # compiled smart contract code using to deploy
├── package-lock.json                               # project manifest lock version
├── package.json                                    # Node.js project manifest (scripts and dependencies)
└── yarn.lock                                       # project manifest lock version
```
1. El código de contrato inteligente vive en la carpeta `/assambly` folder.
2. Para realizar una implementación de prueba, use los scripts en el `/package.json` file.



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
