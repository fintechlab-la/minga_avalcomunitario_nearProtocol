💻 Introducción a Aval Comunitario
==================

 Aval Comunitario es un smart contract escrito bajo el protocolo NEAR que permite_



👨‍💻 Instalación en local
===========

To run this project locally you need to follow the next steps:

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

Step 3: Build and make a smart contract development deploy  
--------------------------------

Build the communite smart contract code and deploy the local development server: `yarn buildevploy` (see `package.json` for a full list of `scripts` you can run with `yarn`). This script return to you a provisional smart contract deployed (save it to use later)


Congratulations, now you'll have a local development environment running on the NEAR TestNet! 🥳

Command to create a project: 
--------------------------------------------

```bash
near call <your deployed contract> addNewComplaint '{"title": "string","description":"string","category":integer,"location":"string"}' --account-id <your test account>
```

Command to get all the projects:
--------------------------------------------

```bash
near view <your deployed contract> getComplaints
```

😎 Test 
==================

Testing is a part of the development, then to run the tests in the communite smart contract you need to run the follow command: 

    yarn test

this will execute the tests methods on the `assembly/__tests__/main.spect.js` file



👩🏼‍🏫 Exploring and Explaining The Code 
==================


======================
Here we leave a [UX/UI] design proposal to develop the frontend part of the project
