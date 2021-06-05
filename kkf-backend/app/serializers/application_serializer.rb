class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :housing, :children, :employment, :work_from_home, :hours_unattended, :experience, :kitten_type, :give_medication, :provide_food, :current_pets
end
