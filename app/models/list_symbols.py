from .db import db

class ListSymbol(db.Model):
    __tablename__ = 'list_symbols'
    id = db.Column(db.Integer, primary_key=True)
    list_id = db.Column(db.Integer, db.foreignKey('lists.id'))