from pathlib import Path

from PIL import Image, ImageOps

source_dir = Path(r"C:\Users\sayah\Downloads")
output_dirs = [
    Path(r"public\images\iga"),
    Path(r"outputs\iga-drivein-static\assets\images\iga"),
]

images = {
    "ai-journey-collage.jpg": "ChatGPT Image 2026年6月25日 22_31_33.png",
    "ai-layout-mood.jpg": "ChatGPT Image 2026年6月25日 23_12_41.png",
}

for output_dir in output_dirs:
    output_dir.mkdir(parents=True, exist_ok=True)

for target_name, source_name in images.items():
    image = Image.open(source_dir / source_name)
    image = ImageOps.exif_transpose(image).convert("RGB")
    max_width = 1800

    if image.width > max_width:
        resized_height = round(image.height * max_width / image.width)
        image = image.resize((max_width, resized_height), Image.Resampling.LANCZOS)

    for output_dir in output_dirs:
        image.save(
            output_dir / target_name,
            "JPEG",
            quality=78,
            optimize=True,
            progressive=True,
        )

print(f"created {len(images)} AI accent images")
