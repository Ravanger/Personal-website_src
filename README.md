# Ravanger.github.io (source)

Source code for my personal website (https://www.borisr.dev)

## Requirements

For development, you will need Node.js, 11ty, and a text editor.

### Node.js
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

### 11ty installation
  After installing node, this project will need 11ty as well. Run the following command.

      $ npm install -g @11ty/eleventy
    
More info here:
- [11ty - Github](https://github.com/11ty/eleventy)
- [11ty - Getting Started](https://www.11ty.io/docs/getting-started/)
---

## Install

    $ git clone https://github.com/Ravanger/Ravanger.github.io_src.git
    $ cd Ravanger.github.io_src.git
    $ npm install

## Running the project

    $ eleventy
    $ eleventy --serve
