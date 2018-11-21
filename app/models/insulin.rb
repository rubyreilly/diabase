class Insulin < ApplicationRecord
  has_many :entries
  belongs_to :user


  def formatted_duration
    duration_in_sec = self.insulin_duration_in_minutes * 60
    Time.at(duration_in_sec).utc.strftime('%H:%M')
  end

  def all_associated_entries
    # entries = Entry.where(insulin_id: self.id)
    entries = self.entries.map do |e|
      EntrySerializer.new(e).attributes
    end

  end
end
