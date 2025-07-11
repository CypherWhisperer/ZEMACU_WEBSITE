#!/bin/bash

# Global variable for blur iterations
BLUR_ITERATIONS=20

# Global variable for blur radius (adjust as needed)
BLUR_RADIUS=5

# Function to blur an image multiple times
blur_image() {
    local input_file="$1"
    local output_file="$2"
    local temp_file="${output_file}.tmp"
    
    echo "Blurring $input_file -> $output_file (${BLUR_ITERATIONS} iterations)"
    
    # Copy original to temp file for first iteration
    cp "$input_file" "$temp_file"
    
    # Apply blur multiple times
    for ((i=1; i<=BLUR_ITERATIONS; i++)); do
        echo "  Iteration $i/$BLUR_ITERATIONS"
        convert "$temp_file" -blur 0x${BLUR_RADIUS} "${temp_file}.next"
        mv "${temp_file}.next" "$temp_file"
    done
    
    # Move final result to output file
    mv "$temp_file" "$output_file"
}

# Main script
echo "Starting image blur process..."
echo "Blur iterations: $BLUR_ITERATIONS"
echo "Blur radius: $BLUR_RADIUS"
echo "----------------------------------------"

# Counter for processed images
processed=0

# Process all .jpg files in current directory
for image in *.jpg; do
    # Check if file exists (handles case where no .jpg files exist)
    if [[ ! -f "$image" ]]; then
        echo "No .jpg files found in current directory"
        exit 1
    fi
    
    # Create blurred filename (add -blurred suffix)
    base_name="${image%.*}"
    extension="${image##*.}"
    output_file="${base_name}-blurred.${extension}"
    
    # Skip if output file already exists (optional safety check)
    if [[ -f "$output_file" ]]; then
        echo "Skipping $image (output file $output_file already exists)"
        continue
    fi
    
    # Blur the image
    blur_image "$image" "$output_file"
    
    ((processed++))
done

echo "----------------------------------------"
echo "Blur process completed!"
echo "Processed $processed images"
echo "Original files preserved, blurred versions saved with '-blurred' suffix"
