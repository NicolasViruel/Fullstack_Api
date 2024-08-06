from decouple import config
import pymysql

# def get_connection():
#     try: 
#         connection = pymysql.connect(
#             host=config('MYSQL_HOST'),
#             user=config('MYSQL_USER'),
#             password=config('MYSQL_PASSWORD'),
#             db=config('MYSQL_DB'),
#             port=int(config('MYSQL_PORT'))
#         )
#         print("Database connection successful 😄")
#         return connection
#     except Exception as ex:
#         print("Error connecting to database:", ex)
#         return None

def get_connection():
    try:
        print("Attempting to connect to database...")
        connection = pymysql.connect(
            host=config('MYSQL_HOST'),
            user=config('MYSQL_USER'),
            password=config('MYSQL_PASSWORD'),
            db=config('MYSQL_DB'),
            port=int(config('MYSQL_PORT')),
            charset='utf8mb4',
            cursorclass=pymysql.cursors.DictCursor
        )
        if connection is None:
            print("Failed to create connection.")
        else:
            print("Connection successful.")
        return connection
    except Exception as ex:
        print("Error connecting to database:", ex)
        return None