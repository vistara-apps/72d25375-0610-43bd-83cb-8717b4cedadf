'use client';

import { ReactNode } from 'react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { Video, Sparkles, Shield, DollarSign } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'slim';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-gray-700 border-opacity-50 bg-surface bg-opacity-50 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-bg" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">Creator Chain Studio</h1>
                {variant === 'default' && (
                  <p className="text-sm text-text-secondary">Craft, Own, and Monetize Your Videos onchain</p>
                )}
              </div>
            </div>
            
            <Wallet>
              <ConnectWallet>
                <div className="flex items-center space-x-3 bg-surface px-4 py-2 rounded-lg border border-gray-700">
                  <Avatar className="w-6 h-6" />
                  <Name className="text-sm font-medium" />
                </div>
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </header>

      {/* Navigation */}
      {variant === 'default' && (
        <nav className="border-b border-gray-700 border-opacity-30 bg-surface bg-opacity-30">
          <div className="max-w-screen-xl mx-auto px-5">
            <div className="flex space-x-8 py-3">
              <NavItem icon={<Sparkles className="w-4 h-4" />} label="Generate" active />
              <NavItem icon={<Video className="w-4 h-4" />} label="My Videos" />
              <NavItem icon={<Shield className="w-4 h-4" />} label="IP Verified" />
              <NavItem icon={<DollarSign className="w-4 h-4" />} label="Marketplace" />
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-5 py-8">
        {children}
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      active 
        ? 'bg-accent text-bg' 
        : 'text-text-secondary hover:text-text-primary hover:bg-surface hover:bg-opacity-50'
    }`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}
