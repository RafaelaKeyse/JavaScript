from fastapi import FastAPI
from app.database import database, metadata, engine
from app.routers import partner
from app.models import partner as partner_model

app = FastAPI(title="API Zé Delivery")

# Cria as tabelas no banco
metadata.create_all(engine)

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

app.include_router(partner.router)

@app.get("/")
async def root():
    return {"message": "API Zé Delivery rodando!"}
