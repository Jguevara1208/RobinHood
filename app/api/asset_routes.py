from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Asset

asset_routes = Blueprint('assets', __name__)


@asset_routes.route('/<int:id>/assets')
def test(id):
    assets_from_db = Asset.query.filter(Asset.user_id == int(id)).all()
    assets = {asset.to_dict()['symbol']: asset.to_dict()
              for asset in assets_from_db}
    return assets


@asset_routes.route('/<int:id>/assets', methods=['POST'])
def add_asset(id):
    body = reqest.json()
    asset = Asset(
        user_id=body['user_id'],
        symbol=body['symbol'],
        shares=body['shares'],
        average=body['average'],
    )
    db.session.add(asset)
    db.session.commit()
    return jsonify(asset.to_dict())


@asset_routes.route('/<int:id>/assets/<string:symbol>', methods=['DELETE'])
def delete_asset(id, symbol):
    asset = Asset.query.filter(Asset.user_id == int(id),
                               Asset.symbol == symbol).first()
    db.session.delete(asset)
    db.session.commit()
    return jsonify(asset.to_dict())


@asset_routes.route('/<int:id>/assets/<string:symbol>', methods=['PUT'])
def update_asset(id, symbol):
    asset = Asset.query.filter(Asset.user_id == int(id),
                               Asset.symbol == symbol).first()
    body = request.json()
    asset.shares = body['shares']
    asset.average = body['average']
    db.session.commit()
    return jsonify(asset.to_dict())

# create a patch route to update shares and average


@asset_routes.route('/<int:id>/assets/<asset_id>', methods=['PATCH'])
def update_asset(asset_id):
    asset = Asset.query.filter(Asset.id == asset_id).first()
    body = request.json()
    asset.shares = body['shares']
    asset.average = body['average']
    db.session.commit()
    return jsonify(asset.to_dict())
