from app.models import db, List

def seed_lists():
    Watchlist = List(user_id = 1, list_name = "Watchlist")
    # TechList = List( user_id = 1, list_name = "Techlist")
    # MemeList = List( user_id = 1, list_name = "Memelist")

    db.session.add(Watchlist)
    # db.session.add(TechList)
    # db.session.add(MemeList)

    db.session.commit()


def undo_lists():
    db.session.execute("TRUNCATE lists RESTART IDENTITY CASCADE;")
    db.session.commit()
