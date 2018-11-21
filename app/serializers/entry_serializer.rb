class EntrySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :formatted_date,
  :formatted_start_time, :formatted_end_time, :time_left, :status, :now
  # ,:insulin_info


end
