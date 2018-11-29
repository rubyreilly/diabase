class EntrySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :entry_date_and_time, :insulin_id,
   :time_left, :status, :note


end
