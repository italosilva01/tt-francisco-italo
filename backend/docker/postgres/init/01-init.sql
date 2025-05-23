CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS simulations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sequence_number SERIAL,
    property_value FLOAT NOT NULL,
    value_entry FLOAT NOT NULL,
    financed_amount FLOAT NOT NULL,
    value_percentage_entry FLOAT NOT NULL,
    contract_years INTEGER NOT NULL,
    monthly_amount_saved FLOAT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_simulations_created_at ON simulations(created_at);
CREATE INDEX IF NOT EXISTS idx_simulations_sequence_number ON simulations(sequence_number);

ALTER TABLE simulations OWNER TO postgres;
GRANT ALL PRIVILEGES ON TABLE simulations TO postgres; 