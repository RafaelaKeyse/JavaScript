from databases import Database
from sqlalchemy import create_engine, MetaData

DATABASE_URL = "sqlite:///./partners.db"

database = Database(DATABASE_URL)  # async db connection
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False}, echo=True, future=True)
metadata = MetaData()
