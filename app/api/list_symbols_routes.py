from flask import Blueprint, jsonify, request
from app.models import List, db, ListSymbol

list_symbols_routes = Blueprint('listsymbols', __name__)

@list_symbols_routes.route('/<int:id>', methods=['DELETE'])
def delete_list_symbol(id):
    curr_list_symbol = ListSymbol.query.get(id)
    db.session.delete(curr_list_symbol)
    db.session.commit()
    return 'ok'
    