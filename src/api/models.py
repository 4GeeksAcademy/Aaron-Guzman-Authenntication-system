from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    birth_date = db.Column(db.String(50), unique=False, nullable=False) 

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "address": self.address,
            "birth_date": self.birth_date

            # do not serialize the password, its a security breach
        }