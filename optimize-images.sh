#!/bin/bash

# Image optimization script for hireme-personal-site
# Converts large JPG images to optimized WebP format

cd /home/ubuntu/hireme-personal-site/client/public/images

echo "Starting image optimization..."

# Optimize hero image (5.5MB -> target ~200KB)
if [ -f "hero-idea-to-product.jpg" ]; then
    echo "Optimizing hero-idea-to-product.jpg..."
    convert hero-idea-to-product.jpg -resize 1920x -quality 85 hero-idea-to-product-optimized.webp
    echo "Created: hero-idea-to-product-optimized.webp"
fi

# Optimize design-process.jpg (5.6MB)
if [ -f "design-process.jpg" ]; then
    echo "Optimizing design-process.jpg..."
    convert design-process.jpg -resize 800x -quality 85 design-process-optimized.webp
    echo "Created: design-process-optimized.webp"
fi

# Optimize cap-visualization.jpg (5.3MB)
if [ -f "cap-visualization.jpg" ]; then
    echo "Optimizing cap-visualization.jpg..."
    convert cap-visualization.jpg -resize 800x -quality 85 cap-visualization-optimized.webp
    echo "Created: cap-visualization-optimized.webp"
fi

# Optimize cap-production.jpg (5.9MB)
if [ -f "cap-production.jpg" ]; then
    echo "Optimizing cap-production.jpg..."
    convert cap-production.jpg -resize 800x -quality 85 cap-production-optimized.webp
    echo "Created: cap-production-optimized.webp"
fi

# Optimize cap-go-to-market.jpg (5.1MB)
if [ -f "cap-go-to-market.jpg" ]; then
    echo "Optimizing cap-go-to-market.jpg..."
    convert cap-go-to-market.jpg -resize 800x -quality 85 cap-go-to-market-optimized.webp
    echo "Created: cap-go-to-market-optimized.webp"
fi

# Optimize banqloop-kiosk.jpg (5.5MB)
if [ -f "banqloop-kiosk.jpg" ]; then
    echo "Optimizing banqloop-kiosk.jpg..."
    convert banqloop-kiosk.jpg -resize 800x -quality 85 banqloop-kiosk-optimized.webp
    echo "Created: banqloop-kiosk-optimized.webp"
fi

# Optimize product-portfolio.jpg (5.1MB)
if [ -f "product-portfolio.jpg" ]; then
    echo "Optimizing product-portfolio.jpg..."
    convert product-portfolio.jpg -resize 800x -quality 85 product-portfolio-optimized.webp
    echo "Created: product-portfolio-optimized.webp"
fi

echo ""
echo "Optimization complete! Comparing sizes:"
ls -lh *-optimized.webp 2>/dev/null || echo "No optimized files found"
