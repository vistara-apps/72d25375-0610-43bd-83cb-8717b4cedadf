'use client';

import { useTheme } from '../components/ThemeProvider';
import { AppShell } from '../components/AppShell';
import { VideoEditor } from '../components/VideoEditor';
import { Palette, Monitor } from 'lucide-react';

export default function ThemePreviewPage() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Creator Studio', description: 'Professional finance theme with gold accents' },
    { id: 'celo', name: 'CELO', description: 'Black background with yellow accents' },
    { id: 'solana', name: 'Solana', description: 'Dark purple with magenta accents' },
    { id: 'base', name: 'Base', description: 'Dark blue with Base blue accents' },
    { id: 'coinbase', name: 'Coinbase', description: 'Navy background with Coinbase blue' },
  ];

  return (
    <AppShell variant="slim">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <Palette className="w-4 h-4" />
            <span>Theme Preview</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gradient">
            Choose Your Theme
          </h1>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Customize the look and feel of Creator Chain Studio to match your style.
          </p>
        </div>

        {/* Theme Selector */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
            <Monitor className="w-5 h-5" />
            <span>Available Themes</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id as any)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  theme === themeOption.id
                    ? 'border-accent bg-accent bg-opacity-10'
                    : 'border-gray-700 border-opacity-50 hover:border-accent hover:border-opacity-50'
                }`}
              >
                <h3 className="font-semibold text-text-primary mb-1">{themeOption.name}</h3>
                <p className="text-sm text-text-secondary">{themeOption.description}</p>
                {theme === themeOption.id && (
                  <div className="mt-2 text-xs text-accent font-medium">✓ Active</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Preview Components */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-text-primary">Component Preview</h2>
          
          {/* Color Palette */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-bg rounded-lg border border-gray-700 mx-auto mb-2"></div>
                <span className="text-xs text-text-secondary">Background</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-surface rounded-lg border border-gray-700 mx-auto mb-2"></div>
                <span className="text-xs text-text-secondary">Surface</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-text-secondary">Accent</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-text-primary rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-text-secondary">Text Primary</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-text-secondary">Success</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-destructive rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-text-secondary">Destructive</span>
              </div>
            </div>
          </div>

          {/* Button Styles */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Button Styles</h3>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
              <button className="btn-primary disabled:opacity-50" disabled>Disabled Button</button>
            </div>
          </div>

          {/* Cards */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Card Styles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="metric-card">
                <h4 className="font-semibold text-text-primary mb-2">Metric Card</h4>
                <p className="text-text-secondary">This is a sample metric card with hover effects.</p>
              </div>
              <div className="template-card">
                <h4 className="font-semibold text-text-primary mb-2">Template Card</h4>
                <p className="text-text-secondary">Interactive template card with cursor pointer.</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="font-semibold text-text-primary mb-2">Glass Card</h4>
                <p className="text-text-secondary">Standard glass card with backdrop blur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
