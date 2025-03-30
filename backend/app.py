from flask import Flask,  jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"*"}})

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "message": "Hello this is api end point"
    }
    return jsonify(data)


@app.route('/api/get_recommendations', methods=['GET', 'POST'])
def get_recommendations():
    # Path to your CSV file
    file_path = 'skincare-dataset.csv'
    
    # Load the CSV data using pandas
    try:
        df = pd.read_csv(file_path)
    except FileNotFoundError:
        return jsonify({"error": "CSV file not found!"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    # Convert the dataframe to a dictionary (list of dicts)
    recommendations_data = df.to_dict(orient='records')
    
    # Return the data as JSON
    return jsonify(recommendations_data)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)



