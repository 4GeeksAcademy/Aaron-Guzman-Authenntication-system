"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def create_user(token):
    try:
        email = request.json.get('email')
        name = request.json.get('name')
        birth_date = request.json.get('birth_date')
        password = request.json.get('password')

        if not email or not name or not birth_date or not password:
            return jsonify({'error': 'All fields are required'}), 400
        
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({'error': 'User already exist'}), 409
        
        
        

    except Exception as error:
        return  jsonify({'error': 'Error in user creation: ' + str(error)}), 500

