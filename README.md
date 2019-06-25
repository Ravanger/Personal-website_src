# Ravanger.github.io (source)

Source code for my personal website (https://www.borisr.dev)

---

## Requirements

For development, you will need Node.js, 11ty, and a text editor.

### Node.js
- #### Node installation on Windows

  Go to the [official Node.js website](https://nodejs.org/) and download the installer.

- #### Node installation on Ubuntu

  You can install nodejs and npm with apt. Run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Node installation on Arch

  You can install nodejs and npm with pacman. Run the following command:

      $ sudo pacman -S nodejs npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

### 11ty installation
  After installing node, this project will need 11ty as well. Run the following command to install eleventy globally.

      $ npm install -g @11ty/eleventy
    
More info here:
- [11ty - Github](https://github.com/11ty/eleventy)
- [11ty - Getting Started](https://www.11ty.io/docs/getting-started/)
---

## Install

    $ git clone https://github.com/Ravanger/Ravanger.github.io_src.git
    $ cd Ravanger.github.io_src
    $ npm install
    $ npm run build

## Running the project
Note: Project **must** be built before running.

    $ npm start
