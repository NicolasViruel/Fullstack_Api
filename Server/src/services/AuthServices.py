# dataBAse
from src.dataBase.Db_Mysql import get_connection

# Models
from src.models.UserModel import User

# Pysql
import pymysql


class AuthServices():

    @classmethod
    def login_user(cls, user):
        try:
            print("Attempting to connect to database...")
            connection = get_connection()
            print("Connection successful.")
            authenticated_user = None
            with connection.cursor(pymysql.cursors.DictCursor) as cursor:  # Usamos DictCursor para obtener resultados como diccionarios
                # Llama al procedimiento almacenado
                print(f"Executing stored procedure for user: {user.username}")
                cursor.execute('CALL sp_verifyIdentity(%s, %s,%s)', (user.username, user.password, user.email))
                row = cursor.fetchone()
                print("Row fetched:", row)
                if row is not None:
                    authenticated_user = User(int(row['id']), row['username'], row['password'], row['email'])
                    print("User authenticated:", authenticated_user)
                else:
                    print("No user found with the given credentials.")
            # Asegúrate de cerrar la conexión fuera del bloque 'with'
            connection.close()
            return authenticated_user
        except Exception as ex:
            import traceback
            print("Error during login:", ex)
            print(traceback.format_exc())
            return None



    @classmethod
    def register_user(cls, user):
        try:
            # Conexión a la base de datos
            connection = get_connection()
            with connection.cursor() as cursor:
                cursor.execute('CALL sp_registerUser(%s, %s, %s)', (user.username, user.password, user.email))
                connection.commit() 
            connection.close()
            return True
        except Exception as ex:
            print("Error during registration:", ex)
            return False
    
    
    # @classmethod
    # def register_user(cls, user):
    #     try:
    #         # Conexion a la base de datos
    #         connection = get_connection()
    #         with connection.cursor() as cursor:
    #             cursor.execute('Call sp_registerUser(%s,%s,%s)', (user.username, user.password, user.email))
    #             connection.close()
    #             return True
    #     except Exception as ex:
    #         print("Error during registration:", ex)
    #         return False    
