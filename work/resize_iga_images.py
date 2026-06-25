from pathlib import Path

from PIL import Image, ImageOps

source_dir = Path(r"C:\Users\sayah\OneDrive\デスクトップ\伊賀")
output_dirs = [
    Path(r"public\images\iga"),
    Path(r"outputs\iga-drivein-static\assets\images\iga"),
]

images = {
    "hero-gaikan.jpg": "gaikan.jpg",
    "bus-arrival.jpg": "IMG_0536.JPG",
    "bus-parking.jpg": "IMG_0551.JPG",
    "parking-view.jpg": "IMG_0552.JPG",
    "exterior-buses.jpg": "DSC_0021.JPG",
    "teishoku.jpg": "DSC_0161.JPG",
    "oyakodon.jpg": "oyakodon.jpg",
    "omurice.jpg": "pixta_3749151_L.jpg",
    "souvenirs.jpg": "miyage.jpg",
    "antiques.jpg": "kakejiku.JPG",
}

for output_dir in output_dirs:
    output_dir.mkdir(parents=True, exist_ok=True)

for target_name, source_name in images.items():
    image = Image.open(source_dir / source_name)
    image = ImageOps.exif_transpose(image).convert("RGB")
    max_width = 2200 if target_name == "hero-gaikan.jpg" else 1800

    if image.width > max_width:
        resized_height = round(image.height * max_width / image.width)
        image = image.resize((max_width, resized_height), Image.Resampling.LANCZOS)

    for output_dir in output_dirs:
        image.save(
            output_dir / target_name,
            "JPEG",
            quality=82,
            optimize=True,
            progressive=True,
        )

print(f"created {len(images)} optimized images")
