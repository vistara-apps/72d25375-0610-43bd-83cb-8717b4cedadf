export const APP_CONFIG = {
  name: 'Creator Chain Studio',
  tagline: 'Craft, Own, and Monetize Your Videos onchain.',
  version: '1.0.0',
  chain: 'base',
} as const;

export const DESIGN_TOKENS = {
  colors: {
    primary: 'hsl(240, 80%, 60%)',
    accent: 'hsl(180, 70%, 50%)',
    bg: 'hsl(220, 15%, 97%)',
    surface: 'hsl(220, 10%, 92%)',
    textPrimary: 'hsl(220, 15%, 10%)',
    textSecondary: 'hsl(220, 10%, 40%)',
    destructive: 'hsl(0, 70%, 50%)',
    success: 'hsl(140, 60%, 40%)',
  },
  typography: {
    display: 'text-5xl font-bold',
    heading1: 'text-3xl font-semibold',
    heading2: 'text-2xl font-semibold',
    body: 'text-base font-normal leading-7',
    caption: 'text-sm font-normal leading-5',
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  shadows: {
    card: '0px 4px 16px hsla(219, 15%, 7%, 0.08)',
    modal: '0px 16px 48px hsla(219, 15%, 7%, 0.16)',
  },
  motion: {
    duration: {
      fast: 100,
      base: 200,
      slow: 400,
    },
    easing: 'cubic-bezier(0.32, 0.00, 0.72, 0.56)',
  },
} as const;

export const VIDEO_TEMPLATES = [
  {
    id: 'social-media-post',
    name: 'Social Media Post',
    category: 'social',
    isPremium: false,
    description: 'Perfect for Instagram, TikTok, and other social platforms',
  },
  {
    id: 'product-demo',
    name: 'Product Demo',
    category: 'business',
    isPremium: true,
    description: 'Showcase your product features with professional animations',
  },
  {
    id: 'explainer-video',
    name: 'Explainer Video',
    category: 'education',
    isPremium: false,
    description: 'Clear and engaging explanations for complex topics',
  },
  {
    id: 'brand-story',
    name: 'Brand Story',
    category: 'business',
    isPremium: true,
    description: 'Tell your brand story with emotional impact',
  },
] as const;

export const LICENSE_TERMS = {
  commercial: {
    name: 'Commercial License',
    description: 'Full commercial usage rights with attribution',
    features: [
      'Commercial usage allowed',
      'Attribution required',
      'No resale of original content',
      'Unlimited views and downloads',
    ],
  },
  personal: {
    name: 'Personal License',
    description: 'Personal usage only, no commercial rights',
    features: [
      'Personal usage only',
      'No commercial usage',
      'Attribution appreciated',
      'Limited downloads',
    ],
  },
  exclusive: {
    name: 'Exclusive License',
    description: 'Exclusive rights with full ownership transfer',
    features: [
      'Exclusive commercial rights',
      'Full ownership transfer',
      'No attribution required',
      'Unlimited usage',
    ],
  },
} as const;

export const BLOCKCHAIN_CONFIG = {
  base: {
    chainId: 8453,
    name: 'Base',
    rpcUrl: 'https://mainnet.base.org',
    blockExplorer: 'https://basescan.org',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
} as const;
