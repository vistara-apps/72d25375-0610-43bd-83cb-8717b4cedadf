import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { untrustedData } = body;
    
    // Handle frame interactions
    const buttonIndex = untrustedData?.buttonIndex;
    
    let responseHtml = '';
    
    switch (buttonIndex) {
      case 1: // Generate Video
        responseHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame/generate" />
              <meta property="fc:frame:button:1" content="Start Creating" />
              <meta property="fc:frame:button:2" content="Browse Templates" />
              <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame" />
              <title>Creator Chain Studio - Generate</title>
            </head>
            <body>
              <h1>Generate Your Video</h1>
            </body>
          </html>
        `;
        break;
        
      case 2: // View Gallery
        responseHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame/gallery" />
              <meta property="fc:frame:button:1" content="View NFT" />
              <meta property="fc:frame:button:2" content="License Video" />
              <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame" />
              <title>Creator Chain Studio - Gallery</title>
            </head>
            <body>
              <h1>Your Video Gallery</h1>
            </body>
          </html>
        `;
        break;
        
      default:
        responseHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png" />
              <meta property="fc:frame:button:1" content="Generate Video" />
              <meta property="fc:frame:button:2" content="View Gallery" />
              <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame" />
              <title>Creator Chain Studio</title>
            </head>
            <body>
              <h1>Creator Chain Studio</h1>
              <p>Craft, Own, and Monetize Your Videos onchain.</p>
            </body>
          </html>
        `;
    }
    
    return new NextResponse(responseHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Frame API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png" />
        <meta property="fc:frame:button:1" content="Generate Video" />
        <meta property="fc:frame:button:2" content="View Gallery" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame" />
        <title>Creator Chain Studio</title>
      </head>
      <body>
        <h1>Creator Chain Studio</h1>
        <p>Craft, Own, and Monetize Your Videos onchain.</p>
      </body>
    </html>
  `;
  
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
