'use client';

import { useState } from 'react';
import { Grid, List, Play, Crown, Star } from 'lucide-react';

interface TemplateBrowserProps {
  variant?: 'grid' | 'list';
}

export function TemplateBrowser({ variant = 'grid' }: TemplateBrowserProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(variant);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Templates', count: 24 },
    { id: 'social', name: 'Social Media', count: 8 },
    { id: 'business', name: 'Business', count: 6 },
    { id: 'education', name: 'Education', count: 5 },
    { id: 'entertainment', name: 'Entertainment', count: 5 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-text-primary">Video Templates</h2>
          <p className="text-text-secondary">Choose from our curated collection of professional templates</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              viewMode === 'grid' ? 'bg-accent text-bg' : 'bg-surface text-text-secondary hover:text-text-primary'
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              viewMode === 'list' ? 'bg-accent text-bg' : 'bg-surface text-text-secondary hover:text-text-primary'
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-accent text-bg'
                : 'bg-surface text-text-secondary hover:text-text-primary hover:bg-opacity-80'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {templates.map((template) => (
          <TemplateCard 
            key={template.id} 
            template={template} 
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}

function TemplateCard({ 
  template, 
  viewMode 
}: { 
  template: Template; 
  viewMode: 'grid' | 'list';
}) {
  return (
    <div className={`template-card ${
      viewMode === 'list' ? 'flex items-center space-x-4' : 'block'
    }`}>
      {/* Thumbnail */}
      <div className={`relative ${
        viewMode === 'list' ? 'w-32 h-20 flex-shrink-0' : 'aspect-video mb-3'
      }`}>
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <Play className="w-8 h-8 text-text-secondary" />
          </div>
        </div>
        
        {/* Premium Badge */}
        {template.isPremium && (
          <div className="absolute top-2 right-2">
            <Crown className="w-4 h-4 text-accent" />
          </div>
        )}
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
          <Play className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className={viewMode === 'list' ? 'flex-1' : ''}>
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-text-primary text-sm">{template.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-accent fill-current" />
            <span className="text-xs text-text-secondary">{template.rating}</span>
          </div>
        </div>
        
        <p className="text-xs text-text-secondary mb-3 line-clamp-2">{template.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-accent font-semibold">
            {template.isPremium ? 'Premium' : 'Free'}
          </span>
          <button className="text-xs bg-accent text-bg px-3 py-1 rounded-full font-medium hover:bg-opacity-90 transition-colors duration-200">
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
}

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  isPremium: boolean;
  rating: number;
  thumbnail: string;
}

const templates: Template[] = [
  {
    id: '1',
    name: 'Modern Product Showcase',
    description: 'Perfect for highlighting product features with smooth animations',
    category: 'business',
    isPremium: true,
    rating: 4.8,
    thumbnail: '/templates/1.jpg',
  },
  {
    id: '2',
    name: 'Social Media Story',
    description: 'Engaging vertical format ideal for Instagram and TikTok',
    category: 'social',
    isPremium: false,
    rating: 4.6,
    thumbnail: '/templates/2.jpg',
  },
  {
    id: '3',
    name: 'Corporate Presentation',
    description: 'Professional template for business presentations and pitches',
    category: 'business',
    isPremium: true,
    rating: 4.9,
    thumbnail: '/templates/3.jpg',
  },
  {
    id: '4',
    name: 'Educational Explainer',
    description: 'Clear and informative design for tutorials and explanations',
    category: 'education',
    isPremium: false,
    rating: 4.7,
    thumbnail: '/templates/4.jpg',
  },
  {
    id: '5',
    name: 'Event Promotion',
    description: 'Eye-catching template for promoting events and announcements',
    category: 'entertainment',
    isPremium: false,
    rating: 4.5,
    thumbnail: '/templates/5.jpg',
  },
  {
    id: '6',
    name: 'Brand Story',
    description: 'Emotional storytelling template perfect for brand narratives',
    category: 'business',
    isPremium: true,
    rating: 4.8,
    thumbnail: '/templates/6.jpg',
  },
];
