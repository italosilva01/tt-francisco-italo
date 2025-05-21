from fastapi import APIRouter, HTTPException
from ..models.simulation import SimulationModel
from typing import Dict, Any
from decimal import Decimal

FIFTEEN_PERCENT = Decimal('15')
HUNDRED = Decimal('100')
TWELVE = Decimal('12')
router = APIRouter(prefix="", tags=["Simulation"])

@router.get("/test")
async def test() -> Dict[str, Any]:
    return {
        "success": True,
        "data": {
            "hello": "world"
        }
    }

@router.post("/simulacao")
async def simulate_financing(data: SimulationModel) -> Dict[str, Any]:
    """
    Calculate a financing simulation
    """
    try:  
        property_value = Decimal(str(data.property_value))
        value_percentage_entry = Decimal(str(data.value_percentage_entry))
        contract_years = Decimal(str(data.contract_years))

        value_entry = property_value * (value_percentage_entry / HUNDRED)
        financed_amount = property_value - value_entry
        save_duration_contract = property_value * (FIFTEEN_PERCENT / HUNDRED)
        monthly_amount_saved = save_duration_contract / (contract_years * TWELVE)

        return {
            "success": True,
            "data": {
                "property_value": float(property_value),
                "value_entry": float(value_entry),
                "financed_amount": float(financed_amount),
                "contract_years": float(contract_years),
                "save_duration_contract": float(save_duration_contract),
                "monthly_amount_to_be_saved": float(monthly_amount_saved),
            }
        }
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Error calculating simulation: {str(e)}"
        )

@router.post("/calculate")
async def calculate_simulation(simulation: SimulationModel) -> Dict[str, Any]:
    """
    Calcula uma simulação de financiamento
    """
    try:
        return {
            "success": True,
            "data": {
                "property_value": float(simulation.property_value),
                "entry_value": float(simulation.entry_value),
                "financed_amount": float(simulation.financed_amount),
                "contract_years": simulation.contract_years,
                "monthly_payment": _calculate_monthly_payment(simulation)
            }
        }
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Erro ao calcular simulação: {str(e)}"
        )

