class EntrySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :entry_date_and_time, :insulin_id,
   :time_left, :status, :note


  # :id, :user_id, :formatted_date,
  # :formatted_start_time, :formatted_end_time, :time_left, :status, :now



  # ,:insulin_info


end
