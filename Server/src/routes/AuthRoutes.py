from flask import Blueprint, request, jsonify 
from src.utils.Security import Security
# Services
from src.services.AuthServices import AuthServices
# Models
from src.models.UserModel import User

main = Blueprint('auth_blueprint', __name__)

@main.route('/', methods =['POST'])
def login():
    try:
        username = request.json['username']
        password = request.json['password']
        email = request.json['email']

        _user = User(0, username, password, email)
        authenticated_user = AuthServices.login_user(_user)

        if (authenticated_user != None):
            #generamos el token
            encoded_token = Security.generate_token(authenticated_user)
            return jsonify({'success': True, 'token': encoded_token})
        else:
            response = jsonify({'message': 'Unauthorized'})
            return response, 401

    except Exception as ex:
        print(ex)
        return jsonify({'message': "Error", 'success': False})  


@main.route('/register', methods =['POST'])
def register():     
    try:
        data= request.json
        username = data['username']
        password = data['password']
        email = data['email']

        new_user = User(0, username, password, email)
        success = AuthServices.register_user(new_user)

        if success:
            return jsonify({'success': True, 'message': 'User registered Successfully'}), 201
        else:
            return jsonify({'success': False, 'message': "User registration Failed"}), 500
    except Exception as ex:
        print("Error in registration endpoing:", ex)
        return jsonify({'success': False, 'message': 'Internal server eror.'}), 500             