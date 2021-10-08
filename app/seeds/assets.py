from app.models import db, Asset


def seed_assets():
    # for userId of 1
    asset1 = Asset(
        user_id=1,
        symbol='TSLA',
        shares=100,
        average=100,
    )

    asset2 = Asset(
        user_id=1,
        symbol='FB',
        shares=100,
        average=100,
    )

    asset3 = Asset(
        user_id=1,
        symbol='AAPL',
        shares=100,
        average=100,
    )

    db.session.add(asset1)
    db.session.add(asset2)
    db.session.add(asset3)
    db.session.commit()


def undo_assets():
    db.session.execute('TRUNCATE assets RESTART IDENTITY CASCADE;')
    db.session.commit()
