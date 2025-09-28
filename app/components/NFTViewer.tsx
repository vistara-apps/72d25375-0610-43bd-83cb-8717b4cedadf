'use client';

import { useState } from 'react';
import { Shield, ExternalLink, Copy, Share2, DollarSign, Eye } from 'lucide-react';

interface NFTViewerProps {
  variant?: 'default' | 'detailed';
  nft?: NFTData;
}

interface NFTData {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  tokenId: string;
  contractAddress: string;
  creator: string;
  createdAt: string;
  ipfsHash: string;
  isLicensed: boolean;
  licensePrice?: string;
  views: number;
  likes: number;
}

export function NFTViewer({ variant = 'default', nft }: NFTViewerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const mockNFT: NFTData = nft || {
    id: '1',
    name: 'Modern Product Showcase #001',
    description: 'A professionally crafted video showcasing modern product features with smooth animations and premium branding elements.',
    videoUrl: '/videos/sample.mp4',
    thumbnailUrl: '/thumbnails/sample.jpg',
    tokenId: '12345',
    contractAddress: '0x1234...5678',
    creator: '0xabcd...efgh',
    createdAt: '2024-01-15T10:30:00Z',
    ipfsHash: 'QmX7Y8Z9...',
    isLicensed: true,
    licensePrice: '0.1 ETH',
    views: 1247,
    likes: 89,
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      {/* Video Player */}
      <div className="glass-card p-6">
        <div className="aspect-video bg-surface rounded-lg overflow-hidden mb-4 relative">
          {!isPlaying ? (
            <div 
              className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center cursor-pointer hover:from-gray-600 hover:to-gray-700 transition-all duration-200"
              onClick={() => setIsPlaying(true)}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-6 h-6 text-bg ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-text-secondary">Click to play video</p>
              </div>
            </div>
          ) : (
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              onEnded={() => setIsPlaying(false)}
            >
              <source src={mockNFT.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          
          {/* NFT Badge */}
          <div className="absolute top-4 left-4">
            <div className="nft-badge flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span>IP Verified</span>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-text-primary mb-2">{mockNFT.name}</h1>
            <p className="text-text-secondary leading-relaxed">{mockNFT.description}</p>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            <button className="p-2 bg-surface rounded-lg hover:bg-opacity-80 transition-colors duration-200">
              <Share2 className="w-4 h-4 text-text-secondary" />
            </button>
            <button className="p-2 bg-surface rounded-lg hover:bg-opacity-80 transition-colors duration-200">
              <ExternalLink className="w-4 h-4 text-text-secondary" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6 text-sm text-text-secondary">
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{mockNFT.views.toLocaleString()} views</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>{mockNFT.likes} likes</span>
          </div>
          <div>
            <span>Created {formatDate(mockNFT.createdAt)}</span>
          </div>
        </div>
      </div>

      {/* NFT Details */}
      {variant === 'detailed' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Blockchain Info */}
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Blockchain Verification</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Token ID</label>
                <div className="flex items-center space-x-2">
                  <code className="bg-surface px-3 py-2 rounded text-sm font-mono text-text-primary flex-1">
                    #{mockNFT.tokenId}
                  </code>
                  <button 
                    onClick={() => copyToClipboard(mockNFT.tokenId)}
                    className="p-2 bg-surface rounded hover:bg-opacity-80 transition-colors duration-200"
                  >
                    <Copy className="w-4 h-4 text-text-secondary" />
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Contract Address</label>
                <div className="flex items-center space-x-2">
                  <code className="bg-surface px-3 py-2 rounded text-sm font-mono text-text-primary flex-1">
                    {mockNFT.contractAddress}
                  </code>
                  <button 
                    onClick={() => copyToClipboard(mockNFT.contractAddress)}
                    className="p-2 bg-surface rounded hover:bg-opacity-80 transition-colors duration-200"
                  >
                    <Copy className="w-4 h-4 text-text-secondary" />
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">IPFS Hash</label>
                <div className="flex items-center space-x-2">
                  <code className="bg-surface px-3 py-2 rounded text-sm font-mono text-text-primary flex-1">
                    {mockNFT.ipfsHash}
                  </code>
                  <button 
                    onClick={() => copyToClipboard(mockNFT.ipfsHash)}
                    className="p-2 bg-surface rounded hover:bg-opacity-80 transition-colors duration-200"
                  >
                    <Copy className="w-4 h-4 text-text-secondary" />
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Creator</label>
                <div className="flex items-center space-x-2">
                  <code className="bg-surface px-3 py-2 rounded text-sm font-mono text-text-primary flex-1">
                    {mockNFT.creator}
                  </code>
                  <button 
                    onClick={() => copyToClipboard(mockNFT.creator)}
                    className="p-2 bg-surface rounded hover:bg-opacity-80 transition-colors duration-200"
                  >
                    <Copy className="w-4 h-4 text-text-secondary" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Licensing Info */}
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-accent" />
              <span>Licensing</span>
            </h2>
            
            {mockNFT.isLicensed ? (
              <div className="space-y-4">
                <div className="bg-surface bg-opacity-50 p-4 rounded-lg border border-accent border-opacity-30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">License Price</span>
                    <span className="text-lg font-bold text-accent">{mockNFT.licensePrice}</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Commercial usage rights with attribution required
                  </p>
                </div>
                
                <button className="btn-primary w-full flex items-center justify-center space-x-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Purchase License</span>
                </button>
                
                <div className="text-xs text-text-secondary space-y-1">
                  <p>• Commercial usage allowed</p>
                  <p>• Attribution required</p>
                  <p>• No resale of original content</p>
                  <p>• Unlimited views and downloads</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-text-secondary mb-4">This NFT is not available for licensing</p>
                <button className="btn-secondary">Contact Creator</button>
              </div>
            )}
          </div>
        </div>
      )}

      {copied && (
        <div className="fixed bottom-4 right-4 bg-accent text-bg px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}
