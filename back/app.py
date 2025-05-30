from flask import Flask, request, jsonify
from flask_cors import CORS
import pyodbc

app = Flask(__name__)
CORS(app)

todos = []

@app.route('/')
def index():
    return jsonify({})

@app.route('/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)

@app.route('/todos', methods=['POST'])
def add_todo():
    data = request.get_json()
    todos.append(data['task'])
    return jsonify({}), 201

@app.route('/todos/<int:index>', methods=['DELETE'])
def delete_todo(index):
    if 0 <= index < len(todos):
        todos.pop(index)
        return jsonify({}), 204
    return jsonify({}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)