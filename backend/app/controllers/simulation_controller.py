from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from ..database.database import get_db
from ..models.simulation_db import SimulationDB
from ..models.simulation import SimulationModel
from typing import Dict, Any, List
from decimal import Decimal

FIFTEEN_PERCENT = Decimal('15')
HUNDRED = Decimal('100')
TWELVE = Decimal('12')
router = APIRouter(prefix="", tags=["Simulation"])

@router.post("/simulacao")
async def simulate_financing(data: SimulationModel, db: Session = Depends(get_db)) -> Dict[str, Any]:
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

        db_simulation = SimulationDB(
            property_value=property_value,
            value_entry=value_entry,
            financed_amount=financed_amount,
            value_percentage_entry=value_percentage_entry,
            contract_years=contract_years,
            monthly_amount_saved=monthly_amount_saved
        )

        db.add(db_simulation)
        db.commit()
        db.refresh(db_simulation)

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
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail=f"Error calculating simulation: {str(e)}"
        )

@router.get("/historico")
async def get_history(db: Session = Depends(get_db)) -> Dict[str, Any]:
    """
    Get all simulations from the database
    """
    try:
        simulations = db.query(SimulationDB).all()
        return {
            "success": True,
            "data": [
            {
                "id": str(sim.id),
                "property_value": float(sim.property_value),
                "value_entry": float(sim.value_entry),
                "financed_amount": float(sim.financed_amount),
                "contract_years": float(sim.contract_years),
                "created_at": sim.created_at.isoformat()
            }
            for sim in simulations
            ]
            }   
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error getting history: {str(e)}"
        )


