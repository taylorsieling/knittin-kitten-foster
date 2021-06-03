class KittenSerializer < ActiveModel::Serializer
  attributes :id, :name, :sex, :age, :dob, :weight, :breed, :color, :pattern, :altered, :microchipped, :intake_date, :intake_time, :location_found, :intake_type, :status, :current_location, :description, :portrait_url
end
