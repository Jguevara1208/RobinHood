from flask import Blueprint, jsonify, request
from app.models import List, db

list_routes = Blueprint('lists', __name__)

@list_routes.route('/<int:id>/', methods=['PATCH', 'DELETE'])
def lists(id):
    #need edit form
    if request.method == 'PATCH':
        current_list = List.query.filter(List.id == id)
        current_list.list_name = form.data['list_name'] #MAKE EDIT FORM
        db.session.commit()
        return current_list.to_dict()
    if request.method == 'DELETE':
        current_list = List.query.get(id)
        db.session.delete(current_list)
        db.session.commit()
        return 'ok'

