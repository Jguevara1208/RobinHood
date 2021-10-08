from flask.cli import AppGroup
from .users import seed_users, undo_users
from .list_symbols import seed_list_symbols, undo_list_symbols
from .lists import seed_lists, undo_lists
from .assets import seed_assets, undo_assets

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_assets()
    seed_lists()
    seed_list_symbols()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_list_symbols()
    undo_assets()
    undo_lists()
    undo_users()
    # Add other undo functions here
