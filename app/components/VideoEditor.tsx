'use client';

import { useState } from 'react';
import { Play, Upload, Wand2, Download, Shield } from 'lucide-react';

interface VideoEditorProps {
  variant?: 'basic' | 'advanced';
}

export function VideoEditor({ variant = 'basic' }: VideoEditorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI video generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Editor Panel */}
      <div className="lg:col-span-2 space-y-6">
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Create Your Video</h2>
          
          {/* Prompt Input */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Video Description
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the video you want to create..."
                className="w-full h-32 px-4 py-3 bg-surface border border-gray-700 rounded-lg text-fg placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              />
            </div>
            
            {/* Template Selection */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Choose Template
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`template-card aspect-video ${
                      selectedTemplate === template.id ? 'ring-2 ring-accent' : ''
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center">
                      <span className="text-xs font-medium text-center px-2">{template.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Assets */}
            {variant === 'advanced' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Brand Logo
                  </label>
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-accent transition-colors duration-200">
                    <Upload className="w-6 h-6 text-text-secondary mx-auto mb-2" />
                    <p className="text-sm text-text-secondary">Upload your logo</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Brand Colors
                  </label>
                  <div className="flex space-x-2">
                    <input type="color" className="w-12 h-10 rounded border border-gray-700" defaultValue="#ffd700" />
                    <input type="color" className="w-12 h-10 rounded border border-gray-700" defaultValue="#0a0e1a" />
                    <input type="color" className="w-12 h-10 rounded border border-gray-700" defaultValue="#1e293b" />
                  </div>
                </div>
              </div>
            )}

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                  <span>Generating Video...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Generate Video</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="space-y-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Preview</h3>
          
          <div className="aspect-video bg-surface rounded-lg border border-gray-700 flex items-center justify-center mb-4">
            {isGenerating ? (
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <p className="text-sm text-text-secondary">Generating...</p>
              </div>
            ) : (
              <div className="text-center">
                <Play className="w-12 h-12 text-text-secondary mx-auto mb-2" />
                <p className="text-sm text-text-secondary">Video preview will appear here</p>
              </div>
            )}
          </div>

          {!isGenerating && (
            <div className="space-y-3">
              <button className="btn-secondary w-full flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
              <button className="btn-primary w-full flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Mint as NFT</span>
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Your Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-text-secondary">Videos Created</span>
              <span className="text-accent font-semibold">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">NFTs Minted</span>
              <span className="text-accent font-semibold">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Total Earnings</span>
              <span className="text-accent font-semibold">0.45 ETH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const templates = [
  { id: '1', name: 'Social Media Post' },
  { id: '2', name: 'Product Demo' },
  { id: '3', name: 'Explainer Video' },
  { id: '4', name: 'Brand Story' },
  { id: '5', name: 'Tutorial' },
  { id: '6', name: 'Testimonial' },
  { id: '7', name: 'Event Promo' },
  { id: '8', name: 'Custom' },
];
