class Insulin < ApplicationRecord
  has_many :entries
  belongs_to :user

  validates :insulin_name, presence: true
  validates :insulin_duration_in_minutes, presence: true
  validates :insulin_duration_in_minutes, :numericality => { :greater_than_or_equal_to => 0 }
  # validates_numericality_of :insulin_duration_in_minutes, :on => :create



  def all_associated_entries
    entries = self.entries.sort_by do |e|
      e.entry_date_and_time
    end.reverse

    entries = entries.map do |e|
      EntrySerializer.new(e).attributes
    end

  end
end
