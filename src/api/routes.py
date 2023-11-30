"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask_bcrypt import Bcrypt
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)
api.config["JWT_SECRET_KEY"] = "valor-variaable"

jwt = JWTManager(api)

bcrypt = Bcrypt(api)

@api.route('/signup', methods=['POST'])
def create_user():
    try:
        email = request.json.get('email')
        name = request.json.get('name')
        address = request.json.get('address')
        birth_date = request.json.get('birth_date')
        password = request.json.get('password')


        if not email or not name or not birth_date or not address:
            return jsonify({'error': 'All fields are required'}), 400
        
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({'error': 'User already exist'}), 409
        
        password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(email=email, name=name, address=address, birth_date=birth_date, password= password_hash)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "user created successfully", "user_createdd": new_user}), 201


    except Exception as error:
        return  jsonify({'error': 'Error in user creation: ' + str(error)}), 500


@api.route('/login', methods=['POST'])
def log_in():
    try:
        email: request.json.get('email')
        password = request.json.get('password')


        if not email or not password:
            return jsonify({'error': 'Email and password are required.'}), 400
        
        login_user = User.query.filter_by(email=request.json['email']).one()

        password_from_db =  login_user.password
        true_o_false = bcrypt.check_password_hash(password_from_db, password)

        if true_o_false:
            user_id = login_user.id
            access_token = create_access_token(identity=user_id)
            return { 'access_token':access_token}, 200
        
        else:
            return{"Error": "Contraseña incorrrecta"}

    except Exception as error:
        return jsonify({"error": 'User email is not registered' + str(error)}), 500
