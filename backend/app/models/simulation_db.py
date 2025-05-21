from sqlalchemy import Column, Integer, Float, DateTime, String
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import UUID
import uuid
from ..database.database import Base

class SimulationDB(Base):
    __tablename__ = "simulations"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    property_value = Column(Float, nullable=False)
    value_entry = Column(Float, nullable=False)
    financed_amount = Column(Float, nullable=False)
    value_percentage_entry = Column(Float, nullable=False)
    contract_years = Column(Integer, nullable=False)
    monthly_amount_saved = Column(Float, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    def calculate_entry_value(self) -> float:
        return float(self.property_value * (self.value_percentage_entry / 100))

    def calculate_financed_amount(self) -> float:
        return float(self.property_value - self.calculate_entry_value())
