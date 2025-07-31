from sqlalchemy import Column, String, Table
from sqlalchemy.dialects.sqlite import JSON
from app.database import metadata

partners = Table(
    "partners",
    metadata,
    Column("id", String, primary_key=True),
    Column("tradingName", String, nullable=False),
    Column("ownerName", String, nullable=False),
    Column("document", String, unique=True, nullable=False),
    
    # Substituímos Geometry("MULTIPOLYGON") por JSON
    Column("coverageArea", JSON, nullable=False),
    
    # Substituímos Geometry("POINT") por JSON
    Column("address", JSON, nullable=False),
)
