from app.database import database
from app.models.partner import partners
from sqlalchemy import select
from shapely.geometry import shape, Point


async def create_partner(partner_data):
    query = partners.insert().values(**partner_data)
    try:
        await database.execute(query)
        return partner_data
    except Exception as e:
        print("Erro ao criar parceiro:", e)
        raise


async def get_partner_by_id(partner_id: str):
    query = select(partners).where(partners.c.id == partner_id)
    result = await database.fetch_one(query)
    return result


async def get_partner_by_document(document: str):
    query = select(partners).where(partners.c.document == document)
    result = await database.fetch_one(query)
    return result


async def get_partner_near_point(latitude: float, longitude: float):
    # Criar um ponto com as coordenadas fornecidas
    point = Point(longitude, latitude)  # Ordem: longitude, latitude (GeoJSON padrão)

    # Buscar todos os parceiros no banco
    query = select(partners)
    results = await database.fetch_all(query)

    # Verificar se o ponto está dentro da área de cobertura de algum parceiro
    for partner in results:
        coverage = partner["coverageArea"]
        polygon = shape(coverage)  # converter JSON GeoJSON em objeto geométrico shapely
        if polygon.contains(point):
            return partner

    # Se nenhum parceiro cobrir a área, retorna None
    return None
