class InsulinSerializer < ActiveModel::Serializer
  attributes :id, :insulin_name, :insulin_short_or_long,
  :insulin_duration_in_minutes, :user_id, :all_associated_entries


end
