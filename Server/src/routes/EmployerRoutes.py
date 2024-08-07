from flask import Blueprint, request, jsonify 
from src.utils.Security import Security

# Services
from src.services.EmployerServices import EmployerService

# Models
from src.models.EmployerModel import Employer
# Security 
from src.utils.Security import Security

main = Blueprint('employer_blueprint', __name__)

@main.route('/', methods =['GET'])
def get_employer():
    has_access = Security.verify_token(request.headers)
    if has_access:
        try:
            Employer = EmployerService.get_employer()
            if(len(Employer) > 0):
                return jsonify({'employers': Employer, 'message': "SUCCESS", 'success': True })
            else:
                print(has_access)
                return jsonify({'message': "NOTFOUND", 'success': True})
        except Exception as ex:
            print(ex)
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401


@main.route('/', methods =['POST'])
def addEmployer():     
    try:
        data= request.json
        username = data['username']
        email = data['email']

        new_employer = Employer(0, username, email)
        success = EmployerService.addEmployer(new_employer)

        if success:
            return jsonify({'success': True, 'message': 'Employer addEmployered Successfully'}), 201
        else:
            return jsonify({'success': False, 'message': "Employer registration Failed"}), 500
    except Exception as ex:
        print("Error in registration endpoing:", ex)
        return jsonify({'success': False, 'message': 'Internal server eror.'}), 500    