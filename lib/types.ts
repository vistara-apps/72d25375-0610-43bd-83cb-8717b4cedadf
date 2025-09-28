export interface User {
  userId: string;
  walletAddress: string;
  username?: string;
  createdAt: string;
  updatedAt: string;
}

export interface VideoProject {
  projectId: string;
  userId: string;
  projectName: string;
  templateId?: string;
  customizationOptions: Record<string, any>;
  status: 'draft' | 'generating' | 'ready' | 'published_onchain';
  onChainVideoNFTId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MediaAsset {
  assetId: string;
  type: 'image' | 'video' | 'audio' | 'font';
  url: string;
  tags: string[];
  isRoyaltyFree: boolean;
  uploadedByUserId?: string;
}

export interface Template {
  templateId: string;
  name: string;
  previewUrl: string;
  config: Record<string, any>;
  category: string;
  isPremium: boolean;
}

export interface License {
  licenseId: string;
  projectId: string;
  licensorUserId: string;
  licenseeWalletAddress: string;
  terms: string;
  price: string; // in wei/eth
  status: 'pending' | 'active' | 'revoked';
  txHash?: string;
  licensedAt?: string;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  animation_url: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
  creator: string;
  created_at: string;
  ipfs_hash: string;
}

export type Theme = 'default' | 'celo' | 'solana' | 'base' | 'coinbase';
