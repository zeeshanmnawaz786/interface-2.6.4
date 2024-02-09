import { Interface } from '@ethersproject/abi'
import { ChainId } from '@uniswap/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x4dea9082a65e8317e2ae1c0c4d2f20985095b4ab',
  [ChainId.ROPSTEN]: '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351',
  [ChainId.RINKEBY]: '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36',
  [ChainId.GÖRLI]: '0x6Ce570d02D73d4c384b46135E87f8C592A8c86dA',
  [ChainId.KOVAN]: '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30',
  [ChainId.SEPOLIA]: '0xce5b119595920cfd1aa00a0107e29ce7dbdcd7e9'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
