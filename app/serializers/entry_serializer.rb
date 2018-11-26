class EntrySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :formatted_date,
  :formatted_start_time, :formatted_end_time, :time_left, :status, :now

  # :id, :user_id, :entry_date_and_time


  # ,:insulin_info


end
