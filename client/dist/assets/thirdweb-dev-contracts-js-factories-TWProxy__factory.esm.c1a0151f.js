import{aj as n,ak as o,a8 as i}from"./index.33f7a434.js";function s(e,b){if(typeof e!="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var c=a.call(e,b||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(b==="string"?String:Number)(e)}function u(e){var b=s(e,"string");return typeof b=="symbol"?b:String(b)}function r(e,b,a){return b=u(b),b in e?Object.defineProperty(e,b,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[b]=a,e}const t=[{inputs:[{internalType:"address",name:"_logic",type:"address"},{internalType:"bytes",name:"_data",type:"bytes"}],stateMutability:"payable",type:"constructor"},{stateMutability:"payable",type:"fallback"},{stateMutability:"payable",type:"receive"}],f="0x60806040526040516106ab3803806106ab83398101604081905261002291610261565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61032f565b6000805160206106648339815191521461006957610069610354565b8161008e60008051602061066483398151915260001b6100d060201b6100521760201c565b80546001600160a01b0319166001600160a01b03929092169190911790558051156100c9576100c782826100d360201b6100551760201c565b505b50506103b9565b90565b60606100f88383604051806060016040528060278152602001610684602791396100ff565b9392505050565b60606001600160a01b0384163b61016c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b031685604051610187919061036a565b600060405180830381855af49150503d80600081146101c2576040519150601f19603f3d011682016040523d82523d6000602084013e6101c7565b606091505b5090925090506101d88282866101e2565b9695505050505050565b606083156101f15750816100f8565b8251156102015782518084602001fd5b8160405162461bcd60e51b81526004016101639190610386565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561024c578181015183820152602001610234565b8381111561025b576000848401525b50505050565b6000806040838503121561027457600080fd5b82516001600160a01b038116811461028b57600080fd5b60208401519092506001600160401b03808211156102a857600080fd5b818501915085601f8301126102bc57600080fd5b8151818111156102ce576102ce61021b565b604051601f8201601f19908116603f011681019083821181831017156102f6576102f661021b565b8160405282815288602084870101111561030f57600080fd5b610320836020830160208801610231565b80955050505050509250929050565b60008282101561034f57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825161037c818460208701610231565b9190910192915050565b60208152600082518060208401526103a5816040850160208701610231565b601f01601f19169190910160400192915050565b61029c806103c86000396000f3fe60806040523661001357610011610017565b005b6100115b61005061004b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b610081565b565b90565b606061007a8383604051806060016040528060278152602001610240602791396100a5565b9392505050565b3660008037600080366000845af43d6000803e8080156100a0573d6000f35b3d6000fd5b60606001600160a01b0384163b6101125760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161012d91906101f0565b600060405180830381855af49150503d8060008114610168576040519150601f19603f3d011682016040523d82523d6000602084013e61016d565b606091505b509150915061017d828286610187565b9695505050505050565b6060831561019657508161007a565b8251156101a65782518084602001fd5b8160405162461bcd60e51b8152600401610109919061020c565b60005b838110156101db5781810151838201526020016101c3565b838111156101ea576000848401525b50505050565b600082516102028184602087016101c0565b9190910192915050565b602081526000825180602084015261022b8160408501602087016101c0565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212204937a0e09cafeb6e415715660a96a2b11857f3d8a0631bca133280d3480d69a564736f6c634300080c0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",l=e=>e.length>1;class d extends n{constructor(){for(var b=arguments.length,a=new Array(b),c=0;c<b;c++)a[c]=arguments[c];l(a)?super(...a):super(t,f,a[0])}deploy(b,a,c){return super.deploy(b,a,c||{})}getDeployTransaction(b,a,c){return super.getDeployTransaction(b,a,c||{})}attach(b){return super.attach(b)}connect(b){return super.connect(b)}static createInterface(){return new o(t)}static connect(b,a){return new i(b,t,a)}}r(d,"bytecode",f);r(d,"abi",t);export{d as TWProxy__factory};
