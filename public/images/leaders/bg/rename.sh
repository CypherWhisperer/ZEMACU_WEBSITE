#!/bin/bash

echo "Renaming blurred files..."
echo "========================="

# Counter for renamed files
renamed=0

# Process all *-blurred.jpg files
for file in *-blurred.jpg; do
    # Check if file exists (handles case where no -blurred.jpg files exist)
    if [[ ! -f "$file" ]]; then
        echo "No *-blurred.jpg files found in current directory"
        exit 1
    fi
    
    # Extract the base name (remove -blurred.jpg suffix)
    base_name="${file%-blurred.jpg}"
    new_name="${base_name}.jpg"
    
    # Check if destination already exists
    #if [[ -f "$new_name" ]]; then
     #   echo "Warning: $new_name already exists, skipping $file"
      #  continue
    #fi
    
    # Rename the file
    mv "$file" "$new_name"
    echo "Renamed: $file -> $new_name"
    
    ((renamed++))
done

echo "========================="
echo "Renamed $renamed files"
echo "Done!"

# LAZY DOCUMENTATION
#Walkthrough:
#The key part is the parameter expansion:

#${file%-blurred.jpg} removes -blurred.jpg from the end of the filename
#So chair-blurred.jpg becomes chair
#Then we add .jpg back to get chair.jpg

#How it works:

#for file in *-blurred.jpg - loops through all files ending in -blurred.jpg
#${file%-blurred.jpg} - removes the -blurred.jpg suffix
#"${base_name}.jpg" - adds .jpg back to create the new name
#mv "$file" "$new_name" - renames the file
#The script includes safety checks to avoid overwriting existing files and handles the case where no -blurred.jpg files exist.
#If you just want the quick one-liner without a script file:
# `for file in *-blurred.jpg; do mv "$file" "${file%-blurred.jpg}.jpg"; done

