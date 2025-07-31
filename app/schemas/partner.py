from pydantic import BaseModel, Field
from typing import Dict, Any

class PartnerBase(BaseModel):
    tradingName: str
    ownerName: str
    document: str
    coverageArea: Dict[str, Any]
    address: Dict[str, Any]

class PartnerCreate(PartnerBase):
    id: str = Field(..., description="Identificador único do parceiro")

class Partner(PartnerCreate):
    model_config = {
        "from_attributes": True  # substitui orm_mode no Pydantic v2
    }
