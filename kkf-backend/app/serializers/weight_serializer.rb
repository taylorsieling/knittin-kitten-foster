class WeightSerializer < ApplicationSerializer
  attributes :id, :date, :time, :value, :unit
  has_one :kitten
end
