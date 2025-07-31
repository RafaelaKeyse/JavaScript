# 🚚 Zé Delivery - API de Parceiros

API REST desenvolvida com **FastAPI** e **SQLite**, responsável por cadastrar e consultar parceiros (padarias, mercearias, etc.) com localização e área de cobertura geográfica.

---

## ✅ Requisitos

- Python 3.11+
- PowerShell ou terminal compatível
- Git (opcional)

---

## 🚀 Como rodar o projeto

### 1. Clone este repositório (se aplicável)

```bash
git clone https://github.com/seu-usuario/ze-delivery.git
cd ze-delivery
```

### 2. Crie e ative um ambiente virtual

```bash
python -m venv venv
.env\Scripts\Activate.ps1  # No PowerShell do Windows
```

### 3. Instale as dependências

> Crie o arquivo `requirements.txt` com:

```
fastapi
uvicorn
sqlalchemy
pydantic
```

Depois rode:

```bash
pip install -r requirements.txt
```

### 4. Inicie a API

```bash
uvicorn app.main:app --reload
```

Acesse: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## 🔁 Testes via PowerShell

### 🔸 POST `/partners` - Cadastrar parceiro

```powershell
$headers = @{ "Content-Type" = "application/json" }
$body = @'
{
  "id": "11",
  "tradingName": "Nova Padaria",
  "ownerName": "Maria Silva",
  "document": "12345678901",
  "coverageArea": {
    "type": "MultiPolygon",
    "coordinates": [[[[-46.626, -23.534], [-46.626, -23.533], [-46.625, -23.533], [-46.625, -23.534], [-46.626, -23.534]]]]
  },
  "address": {
    "type": "Point",
    "coordinates": [-46.62529, -23.533773]
  }
}
'@

Invoke-RestMethod -Uri "http://127.0.0.1:8000/partners" -Method POST -Headers $headers -Body $body
```

### 🔸 GET `/partners/11` - Consultar parceiro por ID

```powershell
Invoke-RestMethod -Uri "http://127.0.0.1:8000/partners/11" -Method GET
```

---

## 📂 Estrutura do projeto

```
ze-delivery/
│
├── app/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   ├── database.py
│   └── __init__.py
│
├── requirements.txt
└── README.md
```

---

## ✨ Autor

Rafaela Keyse Silva Martins  
GitHub: [github.com/RafaelaKeyse](https://github.com/RafaelaKeyse)