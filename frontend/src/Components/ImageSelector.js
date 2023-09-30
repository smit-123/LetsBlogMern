import React, { useState } from 'react';

const ImageSelector = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="image-container">
                <label htmlFor="image-upload" className="image-selector">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Selected" className="selected-image" />
                    ) : (
                        <div className="placeholder">Select image</div>
                    )}
                </label>
                <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleImageSelect}
                    style={{ display: 'none' }}
                />
            </div>
        </div>
    );
};

export default ImageSelector;
