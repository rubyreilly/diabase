class User < ApplicationRecord
  has_many :insulins
  has_many :entries
  # has_secure_password
  validates :username, uniqueness: { case_sensitive: false }

  def insulins_info
    insulins = self.insulins.map do |i|
      InsulinSerializer.new(i).attributes
    end
    insulins
  end
end
