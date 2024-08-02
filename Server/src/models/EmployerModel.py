class Employer():

    def __init__(self, id, name, email) -> None:
        self.id = id
        self.name = name
        self.email = email

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email
        }    