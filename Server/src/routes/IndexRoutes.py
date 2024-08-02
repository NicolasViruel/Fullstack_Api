import traceback

#Logger
from src.utils.Logger import Logger

main = Blueprint('index_blueprint', __name__)

@main.route('/')
def index():
    try:
        Logger.add_to_log("info", "Index/")
        n = 1
        print(n/0)
    except Exception as ex:
        Logger.add_to_log("error", srt(ex))    
        Logger.add_to_log("error", traceback.format_exc())

        response = jsonify({'message': "Internal Server Error", 'success': False})
        return response, 500    