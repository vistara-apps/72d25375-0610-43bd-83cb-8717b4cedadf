'use client';

import { useEffect, useState } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { useAuthenticate } from '@coinbase/onchainkit/minikit';
import { AppShell } from './components/AppShell';
import { VideoEditor } from './components/VideoEditor';
import { TemplateBrowser } from './components/TemplateBrowser';
import { NFTViewer } from './components/NFTViewer';
import { CollapsiblePanel } from './components/CollapsiblePanel';
import { Video, Sparkles, TrendingUp, Shield, Users, DollarSign } from 'lucide-react';

export default function HomePage() {
  const { context, setFrameReady } = useMiniKit();
  const { user } = useAuthenticate();
  const [activeTab, setActiveTab] = useState<'generate' | 'browse' | 'gallery' | 'marketplace'>('generate');

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const displayName = context?.user?.displayName ?? 'Creator';

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Video Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">
            Welcome back, {displayName}!
          </h1>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Create professional videos in minutes, secure your IP on-chain, and monetize your content through our licensing marketplace.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="metric-card">
            <div className="flex items-center justify-between mb-2">
              <Video className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-text-primary">12</span>
            </div>
            <p className="text-sm text-text-secondary">Videos Created</p>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3 h-3 text-success" />
              <span className="text-xs text-success">+3 this week</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-2">
              <Shield className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-text-primary">8</span>
            </div>
            <p className="text-sm text-text-secondary">NFTs Minted</p>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3 h-3 text-success" />
              <span className="text-xs text-success">+2 this week</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-text-primary">0.45</span>
            </div>
            <p className="text-sm text-text-secondary">ETH Earned</p>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3 h-3 text-success" />
              <span className="text-xs text-success">+0.12 ETH</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-text-primary">1.2K</span>
            </div>
            <p className="text-sm text-text-secondary">Total Views</p>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3 h-3 text-success" />
              <span className="text-xs text-success">+247 views</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-gray-700 border-opacity-30">
          {[
            { id: 'generate', label: 'Generate Video', icon: <Sparkles className="w-4 h-4" /> },
            { id: 'browse', label: 'Browse Templates', icon: <Video className="w-4 h-4" /> },
            { id: 'gallery', label: 'My Gallery', icon: <Shield className="w-4 h-4" /> },
            { id: 'marketplace', label: 'Marketplace', icon: <DollarSign className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-accent text-bg border-b-2 border-accent'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface hover:bg-opacity-30'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'generate' && (
            <div className="space-y-8">
              <VideoEditor variant="advanced" />
              
              <CollapsiblePanel title="Recent Templates" defaultOpen>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="template-card aspect-video">
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center">
                        <span className="text-xs font-medium">Template {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsiblePanel>
            </div>
          )}

          {activeTab === 'browse' && <TemplateBrowser variant="grid" />}

          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-text-primary">My Video Gallery</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-text-secondary">8 NFTs minted</span>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-text-secondary">4 licensed</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="glass-card p-4">
                    <div className="aspect-video bg-surface rounded-lg mb-3 relative overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <Video className="w-8 h-8 text-text-secondary" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className="nft-badge text-xs">
                          <Shield className="w-3 h-3" />
                          <span>NFT</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-text-primary mb-1">Video Project {i}</h3>
                    <p className="text-sm text-text-secondary mb-3">Created 2 days ago</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-accent">0.05 ETH earned</span>
                      <span className="text-text-secondary">127 views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'marketplace' && (
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold text-text-primary">Licensing Marketplace</h2>
                <p className="text-text-secondary">Discover and license premium video content from creators worldwide</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="glass-card p-4">
                    <div className="aspect-video bg-surface rounded-lg mb-3 relative overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <Video className="w-8 h-8 text-text-secondary" />
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                          0.1 ETH
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-text-primary mb-1">Premium Video {i}</h3>
                    <p className="text-sm text-text-secondary mb-3">By Creator{i}</p>
                    <button className="btn-primary w-full text-sm">
                      License Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn-primary flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Generate New Video</span>
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Mint Latest Creation</span>
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>List for Licensing</span>
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
