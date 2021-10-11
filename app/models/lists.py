from .db import db

class List(db.Model):
    __tablename__ = "lists"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    list_name = db.Column(db.String(50), nullable=False)
    
    #relationship between the list_symbols and list databases
    list_symbols = db.relationship('ListSymbol', back_populates = 'list', cascade = 'all, delete')
    user = db.relationship('User', back_populates = 'lists')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'listName': self.list_name,
            'symbols': {symbol.to_dict()['symbol']: symbol.to_dict() for symbol in self.list_symbols}
        }
