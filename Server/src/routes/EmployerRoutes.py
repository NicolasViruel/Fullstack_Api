
main = Blueprint('employer_blueprint', __name__)

@main.route('/')
def get_employer():
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            employers = EmployerService.get_employer()
            if(len(employer) > 0):
                return jsonify({'employers': employers, 'message': "SUCCESS", 'success': True })
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})
        except Exception as ex:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401                