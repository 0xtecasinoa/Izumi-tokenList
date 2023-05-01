import { TokenSymbol } from "../symbols/tokenZksync";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: "Dogera Token",
        symbol: TokenSymbol.DOGERA,
        icon: baseURL + 'dogera.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xA59af353E423F54D47F2Ce5F85e3e265d95282Cd', 
                decimal: 18,
            },
        },
    },
]