#!/bin/bash

# Global variables
WEBP_QUALITY=85  # WebP quality (0-100, 85 is good balance)
KEEP_ORIGINALS=true  # Set to false to delete JPGs after conversion

echo "=========================================="
echo "JPEG to WebP Converter"
echo "=========================================="
echo "WebP Quality: $WEBP_QUALITY"
echo "Keep originals: $KEEP_ORIGINALS"
echo "=========================================="

# Check if WebP is supported
if ! convert -list format | grep -qi webp; then
    echo "ERROR: WebP format not supported by your ImageMagick installation"
    echo "Try: sudo apt install imagemagick libwebp-dev"
    exit 1
fi

# Counter for converted files
converted=0
total_saved=0

# Process all .jpg files in current directory
for file in *.jpg; do
    # Check if file exists
    if [[ ! -f "$file" ]]; then
        echo "No .jpg files found in current directory"
        exit 1
    fi
    
    # Create WebP filename
    webp_file="${file%.jpg}.webp"
    
    # Skip if WebP file already exists
    if [[ -f "$webp_file" ]]; then
        echo "Skipping $file (WebP already exists)"
        continue
    fi
    
    echo "Converting $file..."
    
    # Get original file size
    original_size=$(stat -c%s "$file")
    
    # Convert to WebP
    if convert "$file" -quality $WEBP_QUALITY "$webp_file"; then
        # Get new file size
        webp_size=$(stat -c%s "$webp_file")
        
        # Calculate savings
        saved=$((original_size - webp_size))
        percent_saved=$((saved * 100 / original_size))
        
        echo "  Success! Saved ${percent_saved}% ($(numfmt --to=iec $saved) bytes)"
        
        # Remove original if requested
        if [[ "$KEEP_ORIGINALS" == "false" ]]; then
            rm "$file"
            echo "  Removed original $file"
        fi
        
        ((converted++))
        total_saved=$((total_saved + saved))
    else
        echo "  Error converting $file"
    fi
done

echo "=========================================="
echo "Conversion completed!"
echo "Files converted: $converted"
echo "Total space saved: $(numfmt --to=iec $total_saved)"
echo "=========================================="

# LAZY DOCUMENTATION
#Key points about WebP:
#Advantages:

#Smaller file sizes (25-50% smaller than JPEG)
#Better compression with same visual quality
#Supports transparency (like PNG)
#Lossless and lossy compression options

#Quality settings:

#85 - Good balance (recommended for web)
#90-95 - High quality
#70-80 - Smaller files, slight quality loss

#Browser support:

#Modern browsers: ✅ (Chrome, Firefox, Safari, Edge)
#Very old browsers: ❌ (but you can provide JPEG fallbacks)

#2. Quick one-liner (quality 85):
# `for file in *.jpg; do convert "$file" -quality 85 "${file%.jpg}.webp"; done`

#3. Convert and remove originals:
#bash# Set KEEP_ORIGINALS=false in the script

#The script also shows you exactly how much space you're saving with each conversion - WebP typically saves significant bandwidth for web usage!
