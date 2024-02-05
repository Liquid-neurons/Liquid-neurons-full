from flask import Flask, request, jsonify
import base64
import os
from flask_cors import CORS
from ultralytics import YOLO
import cv2

app = Flask(__name__)
CORS(app)

# Define the directory where you want to save the uploaded images
upload_folder = os.path.join(current_directory, 'Pipe-backend', 'uploads')
os.makedirs(upload_folder, exist_ok=True)  # Ensure the directory exists

@app.route('/upload', methods=['POST'])
def upload_image():
    data = request.json
    image_base64_url = data.get('image')  # Get the base64 image URL from the request

    try:
        # Extract the base64 image data from the URL
        _, base64_image_data = image_base64_url.split(',')
        image_data = base64.b64decode(base64_image_data)
        
        # Define the file path to save the image
        image_path = os.path.join(upload_folder, 'uploaded_image.jpg')
        
        # Write the image data to the file
        with open(image_path, 'wb') as f:
            f.write(image_data)
        
        # Perform object detection and annotate the image
        model_path = os.path.join(current_directory, 'Pipe-backend', 'best.pt')
        model = YOLO(model_path)
        img = cv2.imread(image_path)
        results = model.predict(img)
        font = cv2.FONT_HERSHEY_SIMPLEX
        font_scale = 0.5
        count = 1

        for r in results:
            boxes = r.boxes
            for box in boxes:
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                text_x = (x1 + x2) // 2
                text_y = (y1 + y2) // 2
                cv2.putText(img, str(count), (text_x, text_y), font, font_scale, (255,255,255), 1, cv2.LINE_AA)
                count += 1
        
        # Save the annotated image
        annotated_image_path = os.path.join(upload_folder, 'annotated_image.jpg')
        cv2.imwrite(annotated_image_path, img)
        

        # Return the annotated image path to the frontend
        return jsonify({"success": True, "annotatedImagePath": annotated_image_path, "count":count}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
