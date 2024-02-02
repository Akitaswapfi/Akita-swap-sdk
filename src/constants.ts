import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 168587773,
  TESTNET = 338
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS = "0x6a3173618859C7cd40fAF6921b5E9eB6A76f1fD4" // FIXME env var factory address

// export const INIT_CODE_HASH = "0xb625aef5788a1fada153279073f4aefa8ce4d35388596d08ec3cdb1abe445c07" // FIXME env var init code hash

export const FACTORY_ADDRESSES = {
  [ChainId.MAINNET]: "0xE6990bAa91cC443eC4beCc364404B28F179f8B37",
  [ChainId.TESTNET]: "0x7cEd5C4494D00B503196F2Ef40240Ad39930f1bc"
}

export const INIT_CODE_HASHES = {
  [ChainId.MAINNET]: "0x6442a8f13c0d032c191e04f620810957afbc21cb14765e3e7928d8454a8089ab",
  [ChainId.TESTNET]: "0xfa868a2693adfae1ebe0bb2b0bfd0838b3eea4c053c4519e564f7f653ce3cfaa"
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
