# Database
from src.dataBase.Db_Mysql import get_connection
# Models
from src.models.EmployerModel import Employer 


class EmployerService:

    @classmethod
    def get_employer(cls):
        try: 
            connection = get_connection()
            employers = []
            with connection.cursor() as cursor:
                cursor.execute('CALL sp_listEmployers()')
                resultset = cursor.fetchall()
                for row in resultset:
                    employer = Employer(int(row['id']), row['username'], row['email'])
                    employers.append(employer.to_json())
            connection.close()
            return employers
        except Exception as ex:
            print(ex)
            return []


    @classmethod
    def addEmployer(cls, user):
        try:
            # Conexión a la base de datos
            connection = get_connection()
            with connection.cursor() as cursor:
                cursor.execute('CALL sp_addEmployer(%s, %s)', (user.username, user.email))
                connection.commit() 
            connection.close()
            return True
        except Exception as ex:
            print("Error during registration of the Employer:", ex)
            return False          