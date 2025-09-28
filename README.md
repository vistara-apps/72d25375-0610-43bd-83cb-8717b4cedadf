# Creator Chain Studio

A Next.js Base Mini App for creating, owning, and monetizing videos on-chain.

## Features

- **AI-Powered Video Generation**: Create professional videos using AI with customizable templates
- **Blockchain IP Verification**: Secure your video IP with NFT minting on Base blockchain
- **Licensing Marketplace**: Monetize your content through transparent on-chain licensing
- **Customizable Branding**: Upload brand assets and maintain consistency across videos
- **Multi-Theme Support**: Switch between different blockchain themes (Base, CELO, Solana, Coinbase)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via OnchainKit)
- **Styling**: Tailwind CSS with custom design system
- **Authentication**: OnchainKit + MiniKit integration
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd creator-chain-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys and configuration.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key from Coinbase Developer Platform
- `NEXT_PUBLIC_BASE_URL`: Your application's base URL
- `PINATA_API_KEY`: For IPFS storage (optional)
- `RUNWAY_API_KEY`: For AI video generation (optional)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   ├── api/               # API routes
│   ├── theme-preview/     # Theme preview page
│   └── globals.css        # Global styles
├── lib/                   # Utilities and types
├── public/               # Static assets
└── README.md
```

## Key Components

- **AppShell**: Main layout with navigation and wallet connection
- **VideoEditor**: AI-powered video creation interface
- **TemplateBrowser**: Browse and select video templates
- **NFTViewer**: Display and interact with video NFTs
- **ThemeProvider**: Multi-theme support system

## Blockchain Integration

- **Chain**: Base (Ethereum L2)
- **Wallet**: OnchainKit integration
- **NFTs**: ERC-721 for video IP verification
- **Smart Contracts**: Licensing and royalty management

## Design System

The app uses a comprehensive design system with:
- CSS variables for theming
- Consistent spacing and typography
- Glass morphism effects
- Smooth animations and transitions
- Mobile-first responsive design

## Themes

- **Default**: Professional finance theme (dark navy + gold)
- **CELO**: Black background with yellow accents
- **Solana**: Dark purple with magenta accents
- **Base**: Dark blue with Base blue accents
- **Coinbase**: Navy with Coinbase blue accents

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Join our community Discord

---

Built with ❤️ for the Base ecosystem
