class Entry < ApplicationRecord
  belongs_to :user
  belongs_to :insulin

  def formatted_date
    self.entry_date_and_time.strftime("%m/%d/%Y")
  end

  def formatted_start_time
    self.entry_date_and_time.strftime("%I:%M %p")
  end
  #
  # def insulin_info
  #   InsulinSerializer.new(self.insulin).attributes
  # end

  def end_time
    start = self.entry_date_and_time
    duration_sec = self.insulin.insulin_duration_in_minutes * 60
    (start + duration_sec).to_time
  end

  def formatted_end_time
    self.end_time.strftime("%I:%M %p")
  end

  def now
    Time.now.getlocal.strftime("%I:%M %p")
  end

  def time_left
    now = Time.now.getlocal
    remaining = self.end_time - now
    if remaining > 0
      Time.at(remaining).utc.strftime('%H:%M')
    else
      "-"
    end
  end

  def status
    if self.time_left == "-"
      return "complete"
    else
      return "active"
    end
  end

end
