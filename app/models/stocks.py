from .db import db

class Stock(db.Model):
    __tablename__ = "stocks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    symbol = db.Column(db.String(10), nullable=False, unique=True)


    def to_dict(self):
        return {
            "name": self.name,
            "symbol": self.symbol
        }