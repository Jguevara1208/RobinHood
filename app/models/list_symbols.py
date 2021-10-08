from .db import db

class ListSymbol(db.Model):
    __tablename__ = 'list_symbols'
    id = db.Column(db.Integer, primary_key=True)
    list_id = db.Column(db.Integer, db.foreignKey('lists.id'), nullable=False)
    symbol = db.Column(db.String(50), nullable=False)

    # relationship with List model
    list = db.relationship('List', back_populates='list_symbols')

    def to_dict(self):
        return {
            'id' : self.id,
            'listId' : self.list_id,
            'symbol' : self.symbol
        }