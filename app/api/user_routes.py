from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, List, db, ListSymbol, Asset

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return [user.to_dict() for user in users]


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/buying-power/', methods=["PATCH"])
def update_buying_power(id):
    body = request.json
    user = User.query.get(id)
    user.buying_power = body
    db.session.commit()
    return 'ok'

@user_routes.route('/<int:id>/lists/', methods=['GET', 'POST'])
def lists(id):
    body = request.json
    if request.method == 'GET':
        lists = List.query.filter(List.user_id == id).all()
        return {list.to_dict()['id']: list.to_dict() for list in lists}
    elif request.method == 'POST':
        body = request.json
        new_list = List(user_id=id, list_name=body["list_name"])
        db.session.add(new_list)
        db.session.commit()
        return new_list.to_dict()

@user_routes.route('/<int:id>/assets/')
def get_all_assets(id):
    assets_from_db = Asset.query.filter(Asset.user_id == int(id)).all()
    assets = { asset.to_dict()['symbol']: asset.to_dict() for asset in assets_from_db }
    return assets
