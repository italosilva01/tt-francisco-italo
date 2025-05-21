from pydantic import BaseModel, Field
from decimal import Decimal


class SimulationModel(BaseModel):
    property_value: float = Field(
        ..., 
        description="Property value in the local currency",
        gt=0,
        example=500000.00
    )
    value_percentage_entry: float = Field(
        ..., 
        description="Down payment percentage",
        ge=0,
        le=100,
        example=20.00
    )
    contract_years: int = Field(
        ..., 
        description="Contract duration in years",
        gt=0,
        le=35,
        example=30
    )

    @property
    def entry_value(self) -> Decimal:
        return (self.property_value * self.value_percentage_entry) / 100

    @property
    def financed_amount(self) -> Decimal:
        return self.property_value - self.entry_value

    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "property_value": 500000.00,
                "value_percentage_entry": 20.00,
                "contract_years": 30
            }
        } 