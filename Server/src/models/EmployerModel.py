class Employer():

    def __init__(self, id, username, email) -> None:
        self.id = id
        self.username = username
        self.email = email

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }    