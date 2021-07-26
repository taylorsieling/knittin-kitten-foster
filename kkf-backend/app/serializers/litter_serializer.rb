class LitterSerializer < ApplicationSerializer
  attributes :id, :theme, :intake_date, :intake_time, :location_found, :intake_type, :belongs_to
end
