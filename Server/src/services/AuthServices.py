

#Models
from src.models.UserModel import User

class AuthServices():

    @classmethod
    def login_user(cls, user):
        try:
            connection = get_connection()
            authenticated_user = None
            with connection.cursor() as cursor:
                #coneccion a la base de datos y verifica si esta autenticado
                cursor.execute('call sp_verifyIdentity(%s, %s)',( user.username, user.password))
                row = cursor.fetchone()
                if row != None:
                    authenticated_user = User(int(row[0], row[1], None, row[2]))
                    connection.close()
                    return authenticated_user
        except Exception as ex:
            print(ex)            