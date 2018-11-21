class Entry < ApplicationRecord
  belongs_to :user
  belongs_to :insulin

  attr_reader :date, :starting_time, :duration_in_minutes, :status, :time_remaining_in_minutes,


  def date
    date = self.entry_date_and_time.strftime("%m/%d/%Y")
  end

  def starting_time
    starting_time = self.entry_date_and_time.strftime("%I:%M %p")
  end

  def duration_in_minutes
    self.insulin.insulin_duration_in_minutes
  end

  def end_time
    start_time = self.entry_date_and_time.to_time / 60
    start_time + self.duration_in_minutes
  end

  def time_remaining_in_minutes
    now = Time.now
    # now = now / 60
    # now - self.end_time
  end

  def status
    if self.time_remaining_in_minutes > 0
      return "active"
    else
      return "complete"
    end
  end

end
