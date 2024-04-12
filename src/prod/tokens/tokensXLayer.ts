import { TokenSymbol } from "../symbols/tokenXLayer";
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
        name: "OKB Token",
        symbol: TokenSymbol.OKBXLayer,
        icon: baseURL + 'okb.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0xe538905cf8410324e03a5a23c1c177a474d59b2b',  //WOKB
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped OKB",
        symbol: TokenSymbol.WOKBXLayer,
        icon: baseURL + 'okb.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0xe538905cf8410324e03a5a23c1c177a474d59b2b',  
                decimal: 18,
            },
        },
    },
]