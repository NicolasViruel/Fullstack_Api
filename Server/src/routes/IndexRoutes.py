# import traceback
# from flask import Blueprint, request, jsonify 
# #Logger
# from src.utils.Logger import Logger

# main = Blueprint('index_blueprint', __name__)

# @main.route('/')
# def index():
#     try:
#         Logger.add_to_log("info", "Index/")
#         n = 1
#         print(n/0)
#     except Exception as ex:
#         Logger.add_to_log("error", str(ex), 'message' "Internal Server Error")    
#         Logger.add_to_log("error", traceback.format_exc())

#         response = jsonify({'message': "Internal Server Error", 'success': False})
#         return response, 500    

import traceback
from flask import Blueprint, request, jsonify
# Logger
from src.utils.Logger import Logger

main = Blueprint('index_blueprint', __name__)
logger = Logger() #

@main.route('/')
def index():
    try:
        logger.add_to_log("info", "Index/")
        n = 1
        print(n/0)
    except Exception as ex:
        logger.add_to_log("error", str(ex))
        logger.add_to_log("error", traceback.format_exc())

        response = jsonify({'message': "Internal Server Error", 'success': False})
        return response, 500