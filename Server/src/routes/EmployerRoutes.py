from flask import Blueprint, request, jsonify 
from src.utils.Security import Security

# Services
from src.services.EmployerServices import EmployerService

# Models
from src.models.EmployerModel import Employer
# Security 
from src.utils.Security import Security

main = Blueprint('employer_blueprint', __name__)

@main.route('/')
def get_employer():
    # has_access = Security.verify_token(request.headers)

    # if has_access:
        try:
            Employer = EmployerService.get_employer()
            if(len(Employer) > 0):
                return jsonify({'employers': Employer, 'message': "SUCCESS", 'success': True })
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})
        except Exception as ex:
            print(ex)
            return jsonify({'message': "ERROR", 'success': False})
    # else:
    #     response = jsonify({'message': 'Unauthorized'})
    #     return response, 401                