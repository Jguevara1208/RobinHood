from app.models import db, ListSymbol


# Adds a demo user, you can add other users here if you want
def seed_list_symbols():
    seed1 = ListSymbol(list_id=1, symbol='AAPL')
    seed2 = ListSymbol(list_id=1, symbol='GME')
    seed3 = ListSymbol(list_id=1, symbol='TSLA')
    seed4 = ListSymbol(list_id=1, symbol='FB')
    seed5 = ListSymbol(list_id=1, symbol='NFLX')

    db.session.add(seed1)
    db.session.add(seed2)
    db.session.add(seed3)
    db.session.add(seed4)
    db.session.add(seed5)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_list_symbols():
    db.session.execute('TRUNCATE list_symbols RESTART IDENTITY CASCADE;')
    db.session.commit()