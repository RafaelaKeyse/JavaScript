from fastapi import APIRouter, HTTPException
from app.schemas.partner import PartnerCreate, Partner
from app.crud import partner as partner_crud

router = APIRouter()

@router.post("/partners", response_model=Partner)
async def create_partner(partner: PartnerCreate):
    db_partner = await partner_crud.get_partner_by_id(partner.id)
    if db_partner:
        raise HTTPException(status_code=400, detail="ID já existe.")
    
    db_partner_doc = await partner_crud.get_partner_by_document(partner.document)
    if db_partner_doc:
        raise HTTPException(status_code=400, detail="Documento já cadastrado.")
    
    return await partner_crud.create_partner(partner.dict())

@router.get("/partners/{partner_id}", response_model=Partner)
async def get_partner(partner_id: str):
    partner = await partner_crud.get_partner_by_id(partner_id)
    if not partner:
        raise HTTPException(status_code=404, detail="Parceiro não encontrado.")
    return partner

@router.get("/partners/nearest/")
async def get_nearest_partner(lat: float, lon: float):
    partner = await partner_crud.get_partner_near_point(lat, lon)
    if not partner:
        raise HTTPException(status_code=404, detail="Nenhum parceiro cobre essa área.")
    return partner
