class EntrySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :entry_date_and_time,
  :insulin_id, :status, :note,
  :current_blood_sugar, :num_units_insulin


end
