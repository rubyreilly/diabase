class Entry < ApplicationRecord
  belongs_to :user
  belongs_to :insulin

  validates :user_id, presence: true
  validates :insulin_id, presence: true
  validates :entry_date_and_time, presence: true
  validate  :is_valid_datetime
  # validates :current_blood_sugar, :numericality => { :greater_than_or_equal_to => 0 }
  # validates :num_units_insulin, :numericality => { :greater_than_or_equal_to => 0 }


  def is_valid_datetime
    if self.entry_date_and_time== nil
      errors.add(:entry_date_and_time, "must be valid datetime")
    end
  end


  def status
    start = self.entry_date_and_time
    duration_sec = self.insulin.insulin_duration_in_minutes * 60
    end_time = (start + duration_sec).to_time
    now = Time.now.getlocal
    remaining = end_time - now
    if remaining <= 0
      return "complete"
    else
      return "active"
    end
  end

end
