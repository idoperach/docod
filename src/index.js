import {help, version} from commands

const [, , cmd, ...args] = process.argv;

switch (cmd) {
  case '--help':
  case '-h': {
    help()

    break;
  }
  case '--version': 
  case '-v':{
    version();

    break
  }
  default:
    help()
}