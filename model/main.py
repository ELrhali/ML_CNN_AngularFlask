from flask import Flask, request, jsonify
from model.app import predict
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return {"message": "Hello World"}

@app.route('/predict', methods=['GET'])
def makepred():
    a = request.args.get('a')
    s = request.args.get('s')
    a = np.asarray(a).astype('float32')
    s = np.asarray(s).astype('float32')
    prediction = predict(a, s)
    return jsonify({"Age": prediction})

@app.route('/pred', methods=['POST'])
def makepred2():
    data = request.get_json()
    a = data['a']
    s = data['s']
    a = np.asarray(a).astype('float32')
    s = np.asarray(s).astype('float32')
    Age = predict(a, s)
    return jsonify({"Age": Age})

if __name__ == '__main__':
    app.run(debug=True)
